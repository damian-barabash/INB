import { Link } from 'react-router-dom'
import { useApp, T } from '../lib/store.jsx'
import { PageHead } from '../components/Pieces.jsx'
import Reveal from '../components/Reveal.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import TenderProcess from '../components/TenderProcess.jsx'

const CARDS = [
  { n: '01', t: 'zam.c1.title', b: 'zam.c1.body' },
  { n: '02', t: 'zam.c2.title', b: 'zam.c2.body' },
  { n: '03', t: 'zam.c3.title', b: 'zam.c3.body' },
  { n: '04', t: 'zam.c4.title', b: 'zam.c4.body' },
]

export default function Zamowienia() {
  const { text } = useApp()
  return (
    <>
      <PageHead titleKey="zam.title" />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <Reveal><T as="p" k="zam.lead" className="lead" style={{ maxWidth: 820, marginBottom: 40 }} /></Reveal>
          <div className="split" style={{ marginBottom: 60 }}>
            <Reveal><T as="p" k="zam.p1" className="body-text" /></Reveal>
            <Reveal delay={80}><T as="p" k="zam.p2" className="body-text" /></Reveal>
          </div>

          {/* Interactive tender process */}
          <div className="split" style={{ marginBottom: 40, alignItems: 'center' }}>
            <Reveal><T as="h2" k="tp.title" className="title" /></Reveal>
            <Reveal delay={80}><T as="p" k="tp.sub" className="body-text" /></Reveal>
          </div>
          <Reveal style={{ marginBottom: 70 }}><TenderProcess /></Reveal>

          <div className="cards-auto">
            {CARDS.map((c, i) => (
              <Reveal key={c.n} delay={i * 80}>
                <div className="pstep">
                  <div className="pstep__n">{c.n}</div>
                  <T as="h3" k={c.t} className="pstep__t" />
                  <T as="p" k={c.b} className="pstep__b" />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ background: 'var(--navy)', color: '#fff', borderRadius: 'var(--radius)', padding: 'clamp(34px,5vw,60px)', display: 'flex', flexWrap: 'wrap', gap: 26, alignItems: 'center', justifyContent: 'space-between', marginTop: 60 }}>
              <T as="p" k="zam.closing" style={{ fontSize: 'clamp(18px,2.3vw,26px)', fontWeight: 600, maxWidth: 720, lineHeight: 1.4 }} />
              <MagneticButton as={Link} to="/kontakt" className="btn btn--accent">
                {text('home.hero.cta')}
                <span className="btn__arrow" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M7 17 17 7M9 7h8v8" /></svg>
                </span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
