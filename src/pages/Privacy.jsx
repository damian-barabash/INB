import { T } from '../lib/store.jsx'
import { PageHead } from '../components/Pieces.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Privacy() {
  return (
    <>
      <PageHead titleKey="privacy.title" />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal><T as="p" k="privacy.body" className="body-text" /></Reveal>
        </div>
      </section>
    </>
  )
}
