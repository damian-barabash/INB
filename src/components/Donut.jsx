import { useEffect, useRef, useState } from 'react'
import { useApp, T } from '../lib/store.jsx'

const DATA = [
  { key: 'chart.cat1', value: 6, color: '#f29200' },
  { key: 'chart.cat2', value: 5, color: '#03142e' },
  { key: 'chart.cat3', value: 1, color: '#ffb24d' },
  { key: 'chart.cat4', value: 1, color: '#2a3a52' },
  { key: 'chart.cat5', value: 2, color: '#c47700' },
]

// Client profile → indices of relevant insurance categories (into DATA).
const SECTORS = [
  { id: 'all',      k: 'sector.all',      cats: [0, 1, 2, 3, 4] },
  { id: 'public',   k: 'sector.public',   cats: [0, 1, 2] },
  { id: 'business', k: 'sector.business', cats: [0, 1, 2, 4] },
  { id: 'finance',  k: 'sector.finance',  cats: [1, 3, 4] },
]

const R = 100, SW = 30, C = 2 * Math.PI * R

export default function Donut() {
  const { text, editing } = useApp()
  const [prog, setProg] = useState(0)
  const [active, setActive] = useState(-1)
  const [sector, setSector] = useState('all')
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setProg(1); return }
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        const t0 = performance.now(), dur = 1000
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / dur)
          setProg(1 - Math.pow(1 - p, 3))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }), { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const sec = SECTORS.find((s) => s.id === sector) || SECTORS[0]
  const inSet = (i) => sec.cats.includes(i)
  // total + percentages computed only over the matching categories
  const total = DATA.reduce((s, d, i) => s + (inSet(i) ? d.value : 0), 0)

  let offset = 0
  const segs = DATA.map((d, i) => {
    const on = inSet(i)
    const frac = on ? d.value / total : 0
    const len = frac * C * prog
    const seg = { ...d, i, on, dash: len, gap: C - len, rot: (offset / C) * 360, frac }
    offset += frac * C
    return seg
  })

  const act = active >= 0 && inSet(active) ? DATA[active] : null
  const centerTop = act ? act.value : DATA.reduce((s, d, i) => s + (inSet(i) ? d.value : 0), 0)
  const centerBot = act ? `${Math.round((act.value / total) * 100)}%` : text('chart.unit')

  return (
    <div className="donut-wrap" ref={ref}>
      <div className="sector-tabs" role="tablist">
        {SECTORS.map((s) => (
          <button key={s.id} role="tab" aria-selected={sector === s.id}
            className={`sector-tab ${sector === s.id ? 'on' : ''}`}
            onClick={() => { setSector(s.id); setActive(-1) }}>
            <T as="span" k={s.k} />
          </button>
        ))}
      </div>
      <T as="p" k="sector.hint" className="sector-hint" />

      <div className="donut">
        <div className="donut__chart">
          <svg viewBox="0 0 260 260" width="260" height="260">
            <g transform="translate(130 130) rotate(-90)">
              <circle r={R} fill="none" stroke="var(--line)" strokeWidth={SW} opacity="0.5" />
              {segs.map((s) => (
                <circle key={s.i} r={R} fill="none" stroke={s.color} strokeWidth={active === s.i ? SW + 8 : SW}
                  strokeDasharray={`${s.dash} ${s.gap}`}
                  transform={`rotate(${s.rot})`}
                  style={{ transition: 'stroke-width .25s, stroke-dasharray .5s var(--ease)', cursor: 'pointer', opacity: active === -1 || active === s.i ? 1 : 0.35 }}
                  onMouseEnter={() => s.on && setActive(s.i)} onMouseLeave={() => setActive(-1)} />
              ))}
            </g>
            <text x="130" y="120" textAnchor="middle" fontSize="42" fontWeight="800" fill="var(--ink)">{centerTop}</text>
            <text x="130" y="148" textAnchor="middle" fontSize="13" fill="var(--muted)" style={{ textTransform: 'uppercase', letterSpacing: '.1em' }}>{centerBot}</text>
          </svg>
        </div>
        <ul className="donut__legend">
          {DATA.map((d, i) => {
            const on = inSet(i)
            return (
              <li key={d.key} className={`${active === i ? 'on' : ''} ${on ? '' : 'off'}`}
                onMouseEnter={() => on && setActive(i)} onMouseLeave={() => setActive(-1)}>
                <span className="donut__dot" style={{ background: on ? d.color : 'var(--line)' }} />
                <span className="donut__name">{text(d.key)}</span>
                <span className="donut__val">{d.value}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
