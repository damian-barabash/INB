import { useState } from 'react'
import { useApp, T } from '../lib/store.jsx'

const STEPS = ['tp.s1', 'tp.s2', 'tp.s3', 'tp.s4', 'tp.s5']

export default function TenderProcess() {
  const { editing } = useApp()
  const [active, setActive] = useState(0)

  // Editor: every step title + body editable, expanded.
  if (editing) {
    return (
      <div className="tpr tpr--edit">
        {STEPS.map((s, i) => (
          <div key={s} className="tpr__edit-row">
            <span className="tpr__num">{i + 1}</span>
            <div>
              <T as="h3" k={`${s}.title`} className="tpr__title" />
              <T as="p" k={`${s}.body`} className="tpr__text" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="tpr">
      <div className="tpr__track">
        <span className="tpr__rail"><span className="tpr__fill" style={{ width: `${(active / (STEPS.length - 1)) * 100}%` }} /></span>
        {STEPS.map((s, i) => (
          <button key={s} type="button"
            className={`tpr__node ${i === active ? 'on' : ''} ${i < active ? 'done' : ''}`}
            onClick={() => setActive(i)} aria-current={i === active}>
            <span className="tpr__num">{i < active ? '✓' : i + 1}</span>
            <T as="span" k={`${s}.title`} className="tpr__cap" />
          </button>
        ))}
      </div>

      <div className="tpr__detail" key={active}>
        <div className="tpr__detail-n">{String(active + 1).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}</div>
        <T as="h3" k={`${STEPS[active]}.title`} className="tpr__detail-title" />
        <T as="p" k={`${STEPS[active]}.body`} className="tpr__detail-text" />
      </div>
    </div>
  )
}
