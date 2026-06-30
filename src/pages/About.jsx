import { useApp, T, Img } from '../lib/store.jsx'
import { PageHead } from '../components/Pieces.jsx'
import Reveal from '../components/Reveal.jsx'
import GroupDiagram from '../components/GroupDiagram.jsx'

const BASE = import.meta.env.BASE_URL
const LIST = ['about.li1', 'about.li2', 'about.li3', 'about.li4', 'about.li5', 'about.li6']

export default function About() {
  const { text } = useApp()
  return (
    <>
      <PageHead titleKey="about.title" />
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="split">
            <div>
              <Reveal><T as="p" k="about.p1" className="body-text" /></Reveal>
              <Reveal delay={80}><T as="p" k="about.p2" className="body-text" /></Reveal>
            </div>
            <Reveal delay={120}>
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', minHeight: 320 }}>
                <Img k="about.img" fallback={`${BASE}img/about.webp`} alt={text('about.title')} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 320 }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GRUPA INB diagram — moved up, right after intro */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ marginBottom: 40, alignItems: 'center' }}>
            <Reveal><T as="h2" k="group.title" className="title" /></Reveal>
            <Reveal delay={80}><T as="p" k="group.sub" className="body-text" /></Reveal>
          </div>
          <Reveal><GroupDiagram /></Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <h2 className="title" style={{ margin: '0 0 30px' }}><T as="span" k="about.list.title" /></h2>
          </Reveal>
          <div className="chips" style={{ gap: 14 }}>
            {LIST.map((k, i) => (
              <Reveal key={k} delay={i * 50}>
                <div className="chip" style={{ fontSize: 16, padding: '14px 22px', display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span>
                  <T as="span" k={k} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
