import { Link } from 'react-router-dom'
import { useApp, T, Img } from '../lib/store.jsx'
import Reveal from '../components/Reveal.jsx'
import Stat from '../components/Stat.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import Statements from '../components/Statements.jsx'

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

const INS = Array.from({ length: 15 }, (_, i) => `offer.ins${i + 1}`)

const Arrow = () => (
  <span className="btn__arrow" aria-hidden>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M7 17 17 7M9 7h8v8" /></svg>
  </span>
)

export default function Home() {
  const { text } = useApp()

  return (
    <>
      {/* HERO — full-bleed photo */}
      <section className="hero">
        <div className="hero__frame">
          <div className="hero__bg">
            <Img k="home.hero.bg" fallback={`${BASE}img/hero.webp`} alt="" />
          </div>
          <div className="wrap hero__wrap">
            <Reveal className="hero__content">
              <h1 className="display">
                <T as="span" k="home.hero.title1" style={{ display: 'block' }} />
                <T as="span" k="home.hero.title2" style={{ display: 'block', color: 'var(--accent)' }} />
              </h1>
              <T as="p" k="home.hero.lead" className="lead hero__lead" />
              <MagneticButton as={Link} to="/kontakt" className="btn btn--white">
                {text('home.hero.cta')}<Arrow />
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY + STATS 2×2 */}
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'center' }}>
            <div>
              <Reveal><div className="kicker" style={{ marginBottom: 20 }}>{text('home.why.kicker')}</div></Reveal>
              <Reveal delay={60}><h2 className="title" style={{ marginBottom: 20 }}><T as="span" k="home.why.title" /></h2></Reveal>
              <Reveal delay={120}><T as="p" k="home.team" className="body-text" /></Reveal>
            </div>
            <Reveal delay={140} className="stats stats--grid2">
              {STATS.map(([n, l]) => <Stat key={n} value={text(n)} label={text(l)} />)}
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATEMENTS — navy cards, one accent */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Statements />
        </div>
      </section>

      {/* SERVICE CARDS — catalog style */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal><div className="kicker" style={{ marginBottom: 28 }}>{text('home.services.kicker')}</div></Reveal>
          <div className="cards3">
            {CARDS.map((c, i) => (
              <Reveal key={c.n} delay={i * 90}>
                <article className="scard">
                  <div className="scard__img">
                    <span className="scard__num">{c.n}</span>
                    <Img k={c.img} fallback={c.fb} alt={text(c.t)} />
                  </div>
                  <T as="h3" k={c.t} className="scard__title" />
                  <T as="p" k={c.b} className="scard__body" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE LINES MARQUEE */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="ins-band">
              <div className="ins-band__head">
                <div className="kicker">{text('home.ins.kicker')}</div>
                <Link to="/oferta" className="ins-band__link">
                  {text('home.ins.cta')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M7 17 17 7M9 7h8v8" /></svg>
                </Link>
              </div>
              <div className="marquee">
                <div className="marquee__track">
                  {INS.map((k) => <span key={k} className="chip">{text(k)}</span>)}
                  {INS.map((k) => <span key={`${k}-b`} className="chip" aria-hidden>{text(k)}</span>)}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COOPERATION photo band */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ alignItems: 'center' }}>
            <Reveal>
              <div className="photo-frame"><Img k="home.coop.img" fallback={`${BASE}img/coop.webp`} alt={text('home.coop.kicker')} /></div>
            </Reveal>
            <Reveal delay={100}>
              <div className="kicker" style={{ marginBottom: 22 }}>{text('home.coop.kicker')}</div>
              <T as="p" k="home.cooperation" className="lead" style={{ marginBottom: 28 }} />
              <MagneticButton as={Link} to="/doswiadczenie" className="btn btn--ghost">
                {text('nav.experience')}<Arrow />
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AUDIT photo band */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ alignItems: 'center' }}>
            <Reveal delay={100}>
              <div className="kicker" style={{ marginBottom: 22 }}>{text('home.audit.kicker')}</div>
              <T as="h2" k="home.card1.title" className="title" style={{ marginBottom: 18 }} />
              <T as="p" k="home.card1.body" className="body-text" style={{ marginBottom: 28 }} />
              <MagneticButton as={Link} to="/oferta" className="btn btn--ghost">
                {text('nav.offer')}<Arrow />
              </MagneticButton>
            </Reveal>
            <Reveal>
              <div className="photo-frame"><Img k="home.audit.img" fallback={`${BASE}img/audit.webp`} alt={text('home.audit.kicker')} /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS — photo + numbered rows */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ marginBottom: 46 }}>
            <Reveal><h2 className="title"><T as="span" k="home.process.title" /></h2></Reveal>
            <Reveal delay={100}><T as="p" k="home.process.sub" className="body-text" style={{ alignSelf: 'center' }} /></Reveal>
          </div>
          <div className="process">
            <Reveal className="process__media">
              <div className="photo-frame"><Img k="home.process.img" fallback={`${BASE}img/experience.webp`} alt={text('home.process.title')} /></div>
            </Reveal>
            <div className="process__rows">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 90}>
                  <div className="prow">
                    <span className="prow__n">{s.n}</span>
                    <div>
                      <T as="h3" k={s.t} className="prow__t" />
                      <T as="p" k={s.b} className="prow__b" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-band">
              <T as="p" k="home.closing" style={{ fontFamily: 'var(--display)', fontSize: 'clamp(20px,2.6vw,30px)', fontWeight: 600, maxWidth: 760, lineHeight: 1.35 }} />
              <MagneticButton as={Link} to="/kontakt" className="btn btn--accent">
                {text('nav.contact')}<Arrow />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
