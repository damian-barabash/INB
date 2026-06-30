import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp, T } from '../lib/store.jsx'
import MagneticButton from './MagneticButton.jsx'

// Industry → base recommended insurance lines (offer.insN keys, defined in content.js).
const INDUSTRIES = [
  { id: 'production',   k: 'calc.ind.production',   ins: [1, 2, 3, 4, 6, 15] },
  { id: 'transport',    k: 'calc.ind.transport',    ins: [5, 8, 9, 12, 6, 15] },
  { id: 'construction', k: 'calc.ind.construction', ins: [11, 1, 3, 6, 10, 15] },
  { id: 'services',     k: 'calc.ind.services',     ins: [1, 6, 10, 14, 15] },
  { id: 'public',       k: 'calc.ind.public',       ins: [1, 2, 6, 12, 15] },
  { id: 'finance',      k: 'calc.ind.finance',      ins: [2, 7, 13, 14, 15] },
]
const SIZES = ['calc.size1', 'calc.size2', 'calc.size3', 'calc.size4']
// Toggle → extra insurance lines unlocked.
const OPTIONS = [
  { id: 'fleet',     k: 'calc.opt.fleet',     ins: [12, 8] },
  { id: 'machinery', k: 'calc.opt.machinery', ins: [3, 4] },
  { id: 'transport', k: 'calc.opt.transport', ins: [5, 9] },
  { id: 'board',     k: 'calc.opt.board',     ins: [7, 10] },
]
// Bigger company → broader programme.
const SIZE_INS = { 2: [6], 3: [6, 7], 4: [6, 7, 13, 15] }

export default function RiskCalc() {
  const { text, editing } = useApp()
  const [industry, setIndustry] = useState('')
  const [size, setSize] = useState(0)
  const [opts, setOpts] = useState([])

  const toggleOpt = (id) => setOpts((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  // build recommendation set
  const set = new Set()
  const ind = INDUSTRIES.find((i) => i.id === industry)
  if (ind) ind.ins.forEach((n) => set.add(n))
  if (size && SIZE_INS[size]) SIZE_INS[size].forEach((n) => set.add(n))
  opts.forEach((id) => OPTIONS.find((o) => o.id === id)?.ins.forEach((n) => set.add(n)))
  const lines = [...set].sort((a, b) => a - b)
  const ready = !!ind && size > 0
  const showResult = editing || (ready && lines.length > 0)

  return (
    <div className="calc">
      <div className="calc__form">
        <fieldset className="calc__group">
          <legend><T as="span" k="calc.q.industry" /></legend>
          <div className="calc__chips">
            {INDUSTRIES.map((i) => (
              <button key={i.id} type="button"
                className={`calc__chip ${industry === i.id ? 'on' : ''}`}
                onClick={() => setIndustry(industry === i.id ? '' : i.id)}>
                <T as="span" k={i.k} />
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="calc__group">
          <legend><T as="span" k="calc.q.size" /></legend>
          <div className="calc__chips">
            {SIZES.map((k, i) => (
              <button key={k} type="button"
                className={`calc__chip ${size === i + 1 ? 'on' : ''}`}
                onClick={() => setSize(size === i + 1 ? 0 : i + 1)}>
                <T as="span" k={k} />
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="calc__group">
          <legend><T as="span" k="calc.q.assets" /></legend>
          <div className="calc__chips">
            {OPTIONS.map((o) => (
              <button key={o.id} type="button"
                className={`calc__chip ${opts.includes(o.id) ? 'on' : ''}`}
                onClick={() => toggleOpt(o.id)}>
                <span className="calc__check" aria-hidden>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <T as="span" k={o.k} />
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="calc__result">
        <div className="calc__result-head">
          <T as="span" k="calc.result.title" className="calc__result-title" />
          {showResult && <span className="calc__badge">{editing ? 15 : lines.length} · <T as="span" k="calc.result.count" /></span>}
        </div>

        {showResult ? (
          <ul className="calc__lines">
            {(editing ? Array.from({ length: 15 }, (_, i) => i + 1) : lines).map((n) => (
              <li key={n} className="calc__line">
                <span className="calc__dot" aria-hidden />
                <T as="span" k={`offer.ins${n}`} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="calc__hint"><T as="span" k="calc.result.empty" /></p>
        )}

        <div className="calc__cta">
          <MagneticButton as={Link} to="/kontakt" className="btn btn--accent" style={{ opacity: showResult ? 1 : 0.55, pointerEvents: showResult ? 'auto' : 'none' }}>
            {text('calc.cta')}
            <span className="btn__arrow" aria-hidden>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </span>
          </MagneticButton>
          <T as="p" k="calc.disclaimer" className="calc__disclaimer" />
        </div>
      </div>
    </div>
  )
}
