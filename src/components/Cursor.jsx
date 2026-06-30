import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    let rx = 0, ry = 0, mx = 0, my = 0, raf = 0
    const move = (e) => {
      mx = e.clientX; my = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
    }
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    const over = (e) => {
      const hot = e.target.closest('a, button, .chip, .scard, input, textarea, [data-hot]')
      ring.current?.classList.toggle('hot', !!hot)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    loop()
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); cancelAnimationFrame(raf) }
  }, [])
  return (<>
    <div className="cursor-ring" ref={ring} />
    <div className="cursor-dot" ref={dot} />
  </>)
}
