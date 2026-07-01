import { useApp, T, Img } from '../lib/store.jsx'
import { PageHead } from '../components/Pieces.jsx'
import Reveal from '../components/Reveal.jsx'
import Stat from '../components/Stat.jsx'
import Donut from '../components/Donut.jsx'

const BASE = import.meta.env.BASE_URL

export default function Doswiadczenie() {
  const { text } = useApp()
  return (
    <>
      <PageHead titleKey="exp.title" />
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="split exp-intro" style={{ alignItems: 'center' }}>
            <div>
              <Reveal><T as="p" k="exp.p1" className="lead" style={{ marginBottom: 26 }} /></Reveal>
              <Reveal delay={80}><T as="p" k="exp.p2" className="body-text" /></Reveal>
            </div>
            <Reveal delay={120}>
              <div className="exp-media">
                <span className="exp-media__block" aria-hidden />
                <div className="photo-frame exp-media__photo">
                  <Img k="exp.img" fallback={`${BASE}img/experience.webp`} alt={text('exp.title')} />
                </div>
                <div className="exp-media__badge">
                  <span className="exp-media__badge-num">{text('home.stat1.num')}</span>
                  <span className="exp-media__badge-label">{text('home.stat1.label')}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Interactive donut — moved up, right after intro */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ marginBottom: 40, alignItems: 'center' }}>
            <Reveal><T as="h2" k="chart.title" className="title" /></Reveal>
            <Reveal delay={80}><T as="p" k="chart.sub" className="body-text" /></Reveal>
          </div>
          <Reveal><Donut /></Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="stats" style={{ borderTop: '1px solid var(--line)', paddingTop: 54 }}>
              <Stat value={text('home.stat1.num')} label={text('home.stat1.label')} />
              <Stat value={text('home.stat2.num')} label={text('home.stat2.label')} />
              <Stat value={text('home.stat3.num')} label={text('home.stat3.label')} />
              <Stat value={text('home.stat4.num')} label={text('home.stat4.label')} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
