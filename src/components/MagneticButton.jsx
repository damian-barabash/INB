import { useRef } from 'react'

export default function MagneticButton({ children, className = '', strength = 0.35, as = 'a', ...rest }) {
  const ref = useRef(null)
  const Tag = as
  function onMove(e) {
    const el = ref.current
    if (!el || !window.matchMedia('(hover: hover)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }
  function reset() { if (ref.current) ref.current.style.transform = '' }
  return (
    <Tag ref={ref} className={className} onMouseMove={onMove} onMouseLeave={reset} {...rest}>
      {children}
    </Tag>
  )
}
