import { useApp, T } from '../lib/store.jsx'
import { PageHead } from '../components/Pieces.jsx'
import Reveal from '../components/Reveal.jsx'
import Stat from '../components/Stat.jsx'
import Donut from '../components/Donut.jsx'

export default function Doswiadczenie() {
  const { text } = useApp()
  return (
    <>
      <PageHead titleKey="exp.title" />
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div style={{ maxWidth: 880 }}>
            <Reveal><T as="p" k="exp.p1" className="lead" style={{ marginBottom: 26 }} /></Reveal>
            <Reveal delay={80}><T as="p" k="exp.p2" className="body-text" /></Reveal>
          </div>

          <Reveal>
            <div className="stats" style={{ marginTop: 80, borderTop: '1px solid var(--line)', paddingTop: 54 }}>
              <Stat value={text('home.stat1.num')} label={text('home.stat1.label')} />
              <Stat value={text('home.stat2.num')} label={text('home.stat2.label')} />
              <Stat value={text('home.stat3.num')} label={text('home.stat3.label')} />
              <Stat value={text('home.stat4.num')} label={text('home.stat4.label')} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive donut */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ marginBottom: 50, alignItems: 'center' }}>
            <Reveal><T as="h2" k="chart.title" className="title" /></Reveal>
            <Reveal delay={80}><T as="p" k="chart.sub" className="body-text" /></Reveal>
          </div>
          <Reveal><Donut /></Reveal>
        </div>
      </section>
    </>
  )
}
