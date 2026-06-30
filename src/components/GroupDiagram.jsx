import { useState } from 'react'
import { useApp, T } from '../lib/store.jsx'

// 4 satellite nodes around the GRUPA INB core. Positions in % of the stage.
const NODES = [
  { id: 'n1', name: 'group.n1.name', role: 'group.n1.role', x: 16, y: 20 },
  { id: 'n2', name: 'group.n2.name', role: 'group.n2.role', x: 84, y: 20 },
  { id: 'n3', name: 'group.n3.name', role: 'group.n3.role', x: 16, y: 80 },
  { id: 'n4', name: 'group.n4.name', role: 'group.n4.role', x: 84, y: 80 },
]
const CX = 50, CY = 50

export default function GroupDiagram() {
  const { text, editing } = useApp()
  const [active, setActive] = useState(null)

  // Editor: flat editable list so every key is reachable.
  if (editing) {
    return (
      <div className="gd-edit">
        <div className="gd-edit__center"><T as="span" k="group.center" /></div>
        {NODES.map((n) => (
          <div key={n.id} className="gd-edit__row">
            <T as="h4" k={n.name} />
            <T as="p" k={n.role} />
          </div>
        ))}
      </div>
    )
  }

  const act = NODES.find((n) => n.id === active)

  return (
    <div className="gd">
      <div className="gd__stage" onMouseLeave={() => setActive(null)}>
        <svg className="gd__links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          {NODES.map((n) => (
            <line key={n.id} x1={CX} y1={CY} x2={n.x} y2={n.y}
              className={`gd__link ${active === n.id ? 'on' : ''}`} />
          ))}
        </svg>

        <div className="gd__core" style={{ left: `${CX}%`, top: `${CY}%` }}>
          <T as="span" k="group.center" />
        </div>

        {NODES.map((n) => (
          <button key={n.id} type="button"
            className={`gd__node ${active === n.id ? 'on' : ''}`}
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            onMouseEnter={() => setActive(n.id)}
            onFocus={() => setActive(n.id)}
            onClick={() => setActive(active === n.id ? null : n.id)}>
            <span className="gd__dot" aria-hidden />
            <span className="gd__name">{text(n.name)}</span>
          </button>
        ))}
      </div>

      <div className={`gd__detail ${act ? 'on' : ''}`}>
        {act ? (
          <>
            <div className="gd__detail-name">{text(act.name)}</div>
            <p className="gd__detail-role">{text(act.role)}</p>
          </>
        ) : (
          <p className="gd__detail-role"><T as="span" k="group.sub" /></p>
        )}
      </div>
    </div>
  )
}
