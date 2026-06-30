import { Fragment, useEffect, useRef, useState } from 'react'
import { useApp, T } from '../lib/store.jsx'

const STATEMENTS = [
  { k: 'home.belief', label: '01 / wiedza' },
  { k: 'home.group', label: '02 / grupa INB' },
  { k: 'home.offer', label: '03 / technologie' },
  { k: 'home.team', label: '04 / zespół' },
  { k: 'home.cooperation', label: '05 / współpraca' },
]

function Row({ item, index }) {
  const { text } = useApp()
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(true); return }
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { setShown(true); io.unobserve(el) }
    }), { threshold: 0.35, rootMargin: '0px 0px -10% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const words = text(item.k).split(/\s+/).filter(Boolean)
  return (
    <div ref={ref} className={`statement ${shown ? 'in' : ''}`}>
      <div className="statement__k">{item.label}</div>
      <p className="statement__t">
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="stm-word" style={{ transitionDelay: `${index * 50 + i * 28}ms` }}>{w}</span>
            {i < words.length - 1 ? ' ' : ''}
          </Fragment>
        ))}
      </p>
    </div>
  )
}

export default function Statements() {
  const { editing } = useApp()

  // Editor: plain editable T nodes (no animation wrapping, fully visible).
  if (editing) {
    return (
      <div className="statements">
        {STATEMENTS.map((s) => (
          <div className="statement" key={s.k}>
            <div className="statement__k">{s.label}</div>
            <T as="p" k={s.k} className="statement__t" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="statements statements--anim">
      {STATEMENTS.map((s, i) => <Row key={s.k} item={s} index={i} />)}
    </div>
  )
}
