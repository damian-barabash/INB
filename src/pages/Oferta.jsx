import { useApp, T } from '../lib/store.jsx'
import { PageHead } from '../components/Pieces.jsx'
import Reveal from '../components/Reveal.jsx'
import Faq from '../components/Faq.jsx'
import Configurator from '../components/Configurator.jsx'

const INS = Array.from({ length: 15 }, (_, i) => `offer.ins${i + 1}`)

export default function Oferta() {
  const { text } = useApp()
  let n = 0
  const num = () => String(++n).padStart(2, '0')

  return (
    <>
      <PageHead titleKey="offer.title" />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">

          {/* Configurator — moved up, leads the offer page */}
          <div style={{ marginBottom: 80 }}>
            <Reveal>
              <T as="h2" k="cfg.title" className="title" style={{ marginBottom: 12 }} />
              <T as="p" k="cfg.sub" className="body-text" style={{ marginBottom: 30 }} />
            </Reveal>
            <Reveal><Configurator /></Reveal>
          </div>

          {['offer.s1', 'offer.s2', 'offer.s3', 'offer.s4'].map((s) => (
            <Reveal key={s}>
              <div className="offer-item">
                <div className="offer-item__n">{num()}</div>
                <div>
                  <T as="h2" k={`${s}.title`} className="offer-item__t" />
                  <T as="p" k={`${s}.body`} className="body-text" />
                </div>
              </div>
            </Reveal>
          ))}

          {/* s5 with lists */}
          <Reveal>
            <div className="offer-item">
              <div className="offer-item__n">{num()}</div>
              <div>
                <T as="h2" k="offer.s5.title" className="offer-item__t" />
                <T as="p" k="offer.s5.intro" className="body-text" />
                <ul>
                  {['offer.s5.li1', 'offer.s5.li2', 'offer.s5.li3', 'offer.s5.li4', 'offer.s5.li5'].map((k) => (
                    <T as="li" key={k} k={k} />
                  ))}
                </ul>
                <T as="p" k="offer.s5.intro2" className="body-text" style={{ marginTop: 18 }} />
                <ul>
                  {['offer.s5.li6', 'offer.s5.li7'].map((k) => <T as="li" key={k} k={k} />)}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* s6 */}
          <Reveal>
            <div className="offer-item">
              <div className="offer-item__n">{num()}</div>
              <div>
                <T as="h2" k="offer.s6.title" className="offer-item__t" />
                <T as="p" k="offer.s6.body" className="body-text" />
              </div>
            </div>
          </Reveal>

          {/* s7 trainings */}
          <Reveal>
            <div className="offer-item">
              <div className="offer-item__n">{num()}</div>
              <div>
                <T as="h2" k="offer.s7.title" className="offer-item__t" />
                <ul>
                  {['offer.s7.li1', 'offer.s7.li2', 'offer.s7.li3'].map((k) => <T as="li" key={k} k={k} />)}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* s8 insurance chips */}
          <Reveal>
            <div className="offer-item" style={{ borderBottom: '1px solid var(--line)' }}>
              <div className="offer-item__n">{num()}</div>
              <div>
                <T as="h2" k="offer.s8.title" className="offer-item__t" />
                <div className="chips">
                  {INS.map((k) => <T as="span" key={k} k={k} className="chip" />)}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <T as="p" k="offer.closing" style={{ fontSize: 'clamp(20px,2.6vw,28px)', fontWeight: 600, color: 'var(--ink)', marginTop: 60, maxWidth: 820, lineHeight: 1.4 }} />
          </Reveal>

          <div style={{ marginTop: 90 }}>
            <Reveal><T as="h2" k="faq.title" className="title" style={{ marginBottom: 30 }} /></Reveal>
            <Faq />
          </div>
        </div>
      </section>
    </>
  )
}
