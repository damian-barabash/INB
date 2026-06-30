import { useState, useEffect, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { useApp, T, Img } from '../lib/store.jsx'
import Reveal from '../components/Reveal.jsx'
import Stat from '../components/Stat.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import RiskCalc from '../components/RiskCalc.jsx'
import SafeCanvas from '../components/SafeCanvas.jsx'
import Statements from '../components/Statements.jsx'

const Hero3D = lazy(() => import('../components/Hero3D.jsx'))
const BASE = import.meta.env.BASE_URL

const CARDS = [
  { n: '01', t: 'home.card1.title', b: 'home.card1.body', img: 'home.card1.img', fb: `${BASE}img/card-audit.webp` },
  { n: '02', t: 'home.card2.title', b: 'home.card2.body', img: 'home.card2.img', fb: `${BASE}img/card-claims.webp` },
  { n: '03', t: 'home.card3.title', b: 'home.card3.body', img: 'home.card3.img', fb: `${BASE}img/card-negotiation.webp` },
]

const STEPS = [
  { n: '01', t: 'home.step1.title', b: 'home.step1.body' },
  { n: '02', t: 'home.step2.title', b: 'home.step2.body' },
  { n: '03', t: 'home.step3.title', b: 'home.step3.body' },
]

const STATS = [
  ['home.stat1.num', 'home.stat1.label'],
  ['home.stat2.num', 'home.stat2.label'],
  ['home.stat3.num', 'home.stat3.label'],
  ['home.stat4.num', 'home.stat4.label'],
]

export default function Home() {
  const { text, editing } = useApp()
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(hover: none), (max-width: 940px)')
    const upd = () => setMobile(mq.matches)
    upd(); mq.addEventListener('change', upd)
    return () => mq.removeEventListener('change', upd)
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero">
        {!editing && (
          <div className="hero__canvas">
            <SafeCanvas><Suspense fallback={null}><Hero3D mobile={mobile} /></Suspense></SafeCanvas>
          </div>
        )}
        <div className="wrap hero__grid">
          <div>
            <Reveal><div className="kicker">{text('home.hero.kicker')}</div></Reveal>
            <Reveal delay={80}>
              <h1 className="display" style={{ marginTop: 20 }}>
                <T as="span" k="home.hero.title1" style={{ display: 'block', color: 'var(--ink)' }} />
                <T as="span" k="home.hero.title2" style={{ display: 'block', color: 'var(--accent)' }} />
              </h1>
            </Reveal>
            <Reveal delay={160}><T as="p" k="home.hero.lead" className="lead hero__lead" /></Reveal>
            <Reveal delay={220}>
              <MagneticButton as={Link} to="/kontakt" className="btn btn--accent">
                {text('home.hero.cta')}
                <span className="btn__arrow" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M7 17 17 7M9 7h8v8" /></svg>
                </span>
              </MagneticButton>
              <div className="hero__socials">
                <a href="mailto:biuro@inbi.pl" aria-label="E-mail" data-hot>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                </a>
                <a href="tel:+48223271655" aria-label="Telefon" className="hero__phone" data-hot>+48 22 327 16 55</a>
              </div>
            </Reveal>
          </div>
          <div className="hero__right" aria-hidden />
        </div>
      </section>

      {/* STATS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="stats">
            {STATS.map(([n, l]) => <Stat key={n} value={text(n)} label={text(l)} />)}
          </Reveal>
        </div>
      </section>

      {/* WHY / STATEMENTS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ marginBottom: 50 }}>
            <Reveal><h2 className="title"><T as="span" k="home.why.title" /></h2></Reveal>
            <Reveal delay={100}><T as="p" k="home.team" className="body-text" style={{ alignSelf: 'center' }} /></Reveal>
          </div>
          <Statements />
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal><div className="kicker" style={{ marginBottom: 28 }}>Nasze usługi</div></Reveal>
          <div className="cards3">
            {CARDS.map((c, i) => (
              <Reveal key={c.n} delay={i * 90}>
                <article className="scard">
                  <div className="scard__img"><Img k={c.img} fallback={c.fb} alt={text(c.t)} /></div>
                  <div className="scard__num">{c.n}</div>
                  <T as="h3" k={c.t} className="scard__title" />
                  <T as="p" k={c.b} className="scard__body" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RISK CALCULATOR */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ marginBottom: 46 }}>
            <Reveal><h2 className="title"><T as="span" k="calc.title" /></h2></Reveal>
            <Reveal delay={100}><T as="p" k="calc.sub" className="body-text" style={{ alignSelf: 'center' }} /></Reveal>
          </div>
          <Reveal><RiskCalc /></Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ marginBottom: 46 }}>
            <Reveal><h2 className="title"><T as="span" k="home.process.title" /></h2></Reveal>
            <Reveal delay={100}><T as="p" k="home.process.sub" className="body-text" style={{ alignSelf: 'center' }} /></Reveal>
          </div>
          <div className="process">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="pstep">
                  <div className="pstep__n">STEP {s.n}</div>
                  <T as="h3" k={s.t} className="pstep__t" />
                  <T as="p" k={s.b} className="pstep__b" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div style={{ background: 'var(--navy)', color: '#fff', borderRadius: 'var(--radius)', padding: 'clamp(40px,6vw,72px)', display: 'flex', flexWrap: 'wrap', gap: 30, alignItems: 'center', justifyContent: 'space-between' }}>
              <T as="p" k="home.closing" style={{ fontSize: 'clamp(20px,2.6vw,30px)', fontWeight: 600, maxWidth: 760, lineHeight: 1.35 }} />
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
