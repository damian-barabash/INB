import { useEffect, useRef, useState } from 'react'
import { useApp } from '../lib/store.jsx'

const DATA = [
  { key: 'chart.cat1', value: 6, color: '#f29200' },
  { key: 'chart.cat2', value: 5, color: '#03142e' },
  { key: 'chart.cat3', value: 1, color: '#ffb24d' },
  { key: 'chart.cat4', value: 1, color: '#2a3a52' },
  { key: 'chart.cat5', value: 2, color: '#c47700' },
]

const R = 100, SW = 30, C = 2 * Math.PI * R
const total = DATA.reduce((s, d) => s + d.value, 0)

export default function Donut() {
  const { text } = useApp()
  const [prog, setProg] = useState(0)
  const [active, setActive] = useState(-1)
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

  let offset = 0
  const segs = DATA.map((d, i) => {
    const frac = d.value / total
    const len = frac * C * prog
    const seg = { ...d, i, dash: len, gap: C - len, rot: (offset / C) * 360, frac }
    offset += frac * C
    return seg
  })

  const act = active >= 0 ? DATA[active] : null
  const centerTop = act ? act.value : total
  const centerBot = act ? `${Math.round((act.value / total) * 100)}%` : text('chart.unit')

  return (
    <div className="donut" ref={ref}>
      <div className="donut__chart">
        <svg viewBox="0 0 260 260" width="260" height="260">
          <g transform="translate(130 130) rotate(-90)">
            <circle r={R} fill="none" stroke="var(--line)" strokeWidth={SW} opacity="0.5" />
            {segs.map((s) => (
              <circle key={s.i} r={R} fill="none" stroke={s.color} strokeWidth={active === s.i ? SW + 8 : SW}
                strokeDasharray={`${s.dash} ${s.gap}`}
                transform={`rotate(${s.rot})`}
                style={{ transition: 'stroke-width .25s', cursor: 'pointer', opacity: active === -1 || active === s.i ? 1 : 0.35 }}
                onMouseEnter={() => setActive(s.i)} onMouseLeave={() => setActive(-1)} />
            ))}
          </g>
          <text x="130" y="120" textAnchor="middle" fontSize="42" fontWeight="800" fill="var(--ink)">{centerTop}</text>
          <text x="130" y="148" textAnchor="middle" fontSize="13" fill="var(--muted)" style={{ textTransform: 'uppercase', letterSpacing: '.1em' }}>{centerBot}</text>
        </svg>
      </div>
      <ul className="donut__legend">
        {DATA.map((d, i) => (
          <li key={d.key} className={active === i ? 'on' : ''}
            onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(-1)}>
            <span className="donut__dot" style={{ background: d.color }} />
            <span className="donut__name">{text(d.key)}</span>
            <span className="donut__val">{d.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
