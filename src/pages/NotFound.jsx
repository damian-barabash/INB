import { Link } from 'react-router-dom'
import { useApp, T } from '../lib/store.jsx'
import Reveal from '../components/Reveal.jsx'
import MagneticButton from '../components/MagneticButton.jsx'

const LINKS = [
  { to: '/o-nas', k: 'nav.about' },
  { to: '/oferta', k: 'nav.offer' },
  { to: '/kontakt', k: 'nav.contact' },
]

export default function NotFound() {
  const { text } = useApp()
  return (
    <section className="nf">
      <div className="nf__dots" aria-hidden />
      <div className="wrap nf__inner">
        <Reveal>
          <div className="kicker" style={{ justifyContent: 'center', marginBottom: 26 }}>
            <T as="span" k="404.kicker" />
          </div>

          <div className="nf__num" aria-hidden>
            <span className="nf__d">4</span>
            <span className="nf__o">
              {/* orange shield-ring as the middle "0" */}
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <circle cx="50" cy="50" r="42" fill="none" stroke="var(--accent)" strokeWidth="9" />
                <path d="M50 26 l18 8 v14 c0 13 -8 22 -18 26 c-10 -4 -18 -13 -18 -26 V34 z"
                  fill="none" stroke="var(--navy)" strokeWidth="4.5" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="nf__d">4</span>
          </div>

          <T as="h1" k="404.title" className="title nf__title" />
          <T as="p" k="404.body" className="lead nf__body" />

          <div className="nf__cta">
            <MagneticButton as={Link} to="/" className="btn btn--accent">
              {text('404.cta')}
              <span className="btn__arrow" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M7 17 17 7M9 7h8v8" /></svg>
              </span>
            </MagneticButton>
          </div>

          <div className="nf__links">
            <T as="span" k="404.links" className="nf__links-label" />
            {LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="nf__link">{text(l.k)}</Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
