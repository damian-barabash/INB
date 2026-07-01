import { useApp, T } from '../lib/store.jsx'
import Reveal from './Reveal.jsx'

const STATEMENTS = [
  { k: 'home.belief', num: '01', label: 'Wiedza' },
  { k: 'home.group', num: '02', label: 'Grupa INB' },
  { k: 'home.offer', num: '03', label: 'Technologie' },
  { k: 'home.team', num: '04', label: 'Zespół' },
  { k: 'home.cooperation', num: '05', label: 'Współpraca' },
]

function Card({ s }) {
  return (
    <div className="stmt-card">
      <div className="stmt-card__top">
        <span className="stmt-card__num">{s.num}</span>
        <span className="stmt-card__label">{s.label}</span>
      </div>
      <T as="p" k={s.k} className="stmt-card__text" />
    </div>
  )
}

export default function Statements() {
  const { editing } = useApp()

  if (editing) {
    return (
      <div className="stmt-grid">
        {STATEMENTS.map((s) => <Card key={s.k} s={s} />)}
      </div>
    )
  }

  return (
    <div className="stmt-grid">
      {STATEMENTS.map((s, i) => (
        <Reveal key={s.k} delay={i * 70}><Card s={s} /></Reveal>
      ))}
    </div>
  )
}
