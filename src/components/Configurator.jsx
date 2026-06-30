import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp, T } from '../lib/store.jsx'

const INS = Array.from({ length: 15 }, (_, i) => i + 1)

export default function Configurator() {
  const { text, editing } = useApp()
  const navigate = useNavigate()
  const [sel, setSel] = useState([])

  const toggle = (n) => setSel((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]))
  const chosen = [...sel].sort((a, b) => a - b)

  function request() {
    if (!chosen.length) return
    const lines = chosen.map((n) => text(`offer.ins${n}`))
    navigate('/kontakt', { state: { topic: 'wiz.topic2', lines } })
  }

  return (
    <div className="cfg">
      <div className="cfg__grid">
        {INS.map((n) => {
          const on = sel.includes(n)
          return (
            <button key={n} type="button" className={`cfg__opt ${on ? 'on' : ''}`} onClick={() => toggle(n)}>
              <span className="cfg__box" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2"><path d="M5 13l4 4L19 7" /></svg>
              </span>
              <T as="span" k={`offer.ins${n}`} className="cfg__label" />
            </button>
          )
        })}
      </div>

      <aside className="cfg__panel">
        <div className="cfg__panel-head">
          <T as="span" k="cfg.selected" className="cfg__panel-title" />
          <span className="cfg__counter">{chosen.length}</span>
        </div>
        {chosen.length ? (
          <ul className="cfg__chosen">
            {chosen.map((n) => (
              <li key={n}><span className="calc__dot" aria-hidden />{text(`offer.ins${n}`)}</li>
            ))}
          </ul>
        ) : (
          <p className="cfg__empty"><T as="span" k="cfg.empty" /></p>
        )}
        <button className="btn btn--accent cfg__cta" type="button" onClick={request}
          disabled={!editing && !chosen.length}
          style={{ justifyContent: 'center', opacity: editing || chosen.length ? 1 : 0.5 }}>
          {text('cfg.cta')}
          <span className="btn__arrow" aria-hidden>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M7 17 17 7M9 7h8v8" /></svg>
          </span>
        </button>
      </aside>
    </div>
  )
}
