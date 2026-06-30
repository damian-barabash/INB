import { useState } from 'react'
import { useApp, T } from '../lib/store.jsx'
import Reveal from './Reveal.jsx'

const ITEMS = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
]

export default function Faq() {
  const { text, editing } = useApp()
  const [open, setOpen] = useState(editing ? -2 : 0) // -2 = all open in editor

  return (
    <div className="faq">
      {ITEMS.map((it, i) => {
        const isOpen = editing || open === i
        return (
          <Reveal key={it.q} delay={i * 60}>
            <div className={`faq__item ${isOpen ? 'open' : ''}`}>
              <button className="faq__q" onClick={() => !editing && setOpen(open === i ? -1 : i)} aria-expanded={isOpen}>
                <T as="span" k={it.q} />
                <span className="faq__icon" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 9l6 6 6-6" /></svg>
                </span>
              </button>
              <div className="faq__a" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                <div style={{ overflow: 'hidden' }}><T as="p" k={it.a} /></div>
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
