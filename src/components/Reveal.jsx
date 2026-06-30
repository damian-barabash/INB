import { useEffect, useRef } from 'react'

export default function Reveal({ children, as = 'div', delay = 0, className = '', style }) {
  const Tag = as
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { el.classList.add('in'); return }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el) }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ ...style, transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
