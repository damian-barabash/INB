import { useApp, T } from '../lib/store.jsx'
import { PageHead } from '../components/Pieces.jsx'
import Reveal from '../components/Reveal.jsx'
import Stat from '../components/Stat.jsx'

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
            <div className="stats" style={{ marginTop: 70, borderTop: '1px solid var(--line)', paddingTop: 46 }}>
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
