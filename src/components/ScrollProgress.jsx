import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight
        const p = h > 0 ? window.scrollY / h : 0
        if (ref.current) ref.current.style.width = `${p * 100}%`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className="scrollbar" ref={ref} />
}
