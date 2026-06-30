import { useEffect, useRef, useState } from 'react'

// Animates the numeric part of a label like "20+", "1999", "100%", "24/7".
export default function Stat({ value, label }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(value)
  const done = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const m = String(value).match(/^(\D*)(\d+)(.*)$/)
    if (!m || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(value); return }
    const [, pre, numStr, post] = m
    const target = parseInt(numStr, 10)
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true
          const dur = 1100, t0 = performance.now()
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / dur)
            const eased = 1 - Math.pow(1 - p, 3)
            setShown(`${pre}${Math.round(target * eased)}${post}`)
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      })
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [value])
  return (
    <div ref={ref}>
      <div className="stat__num">{shown}</div>
      <div className="stat__label">{label}</div>
    </div>
  )
}
