import { useApp, T, Img } from '../lib/store.jsx'
import { PageHead } from '../components/Pieces.jsx'
import Reveal from '../components/Reveal.jsx'
import Timeline from '../components/Timeline.jsx'

const BASE = import.meta.env.BASE_URL

export default function Wladze() {
  const { text } = useApp()
  return (
    <>
      <PageHead titleKey="wladze.title" />
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="split wladze-hero">
            <Reveal>
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', background: 'var(--navy)', aspectRatio: '3/4' }}>
                <Img k="wladze.img" fallback={`${BASE}img/portrait.webp`} alt={text('wladze.name')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <div className="kicker" style={{ marginBottom: 14 }}>{text('wladze.role')}</div>
                <T as="h2" k="wladze.name" className="title" style={{ marginBottom: 24 }} />
              </Reveal>
              <Reveal delay={80}><T as="p" k="wladze.bio1" className="body-text" style={{ fontWeight: 500, color: 'var(--ink)' }} /></Reveal>
              <Reveal delay={140}><T as="p" k="wladze.bio2" className="body-text" /></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Career timeline */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ marginBottom: 50, alignItems: 'center' }}>
            <Reveal><T as="h2" k="tl.title" className="title" /></Reveal>
            <Reveal delay={80}><T as="p" k="tl.sub" className="body-text" /></Reveal>
          </div>
          <Timeline />
        </div>
      </section>
    </>
  )
}
