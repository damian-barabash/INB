import { useApp, T } from '../lib/store.jsx'
import Reveal from './Reveal.jsx'

const ITEMS = ['tl.i1', 'tl.i2', 'tl.i3', 'tl.i4']

export default function Timeline() {
  return (
    <ol className="tl">
      {ITEMS.map((it, i) => (
        <Reveal key={it} as="li" delay={i * 90} className="tl__item">
          <div className="tl__marker" aria-hidden><span className="tl__dot" /></div>
          <div className="tl__body">
            <T as="div" k={`${it}.year`} className="tl__year" />
            <T as="h3" k={`${it}.title`} className="tl__title" />
            <T as="p" k={`${it}.body`} className="tl__text" />
          </div>
        </Reveal>
      ))}
    </ol>
  )
}
