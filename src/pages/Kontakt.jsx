import { useApp, T } from '../lib/store.jsx'
import { PageHead, CompanyInfo } from '../components/Pieces.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Kontakt() {
  const { text } = useApp()
  return (
    <>
      <PageHead titleKey="kontakt.title" />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <Reveal><h2 className="title" style={{ marginBottom: 22 }}><T as="span" k="kontakt.cta" /></h2></Reveal>
          <Reveal delay={80}><T as="p" k="kontakt.intro" className="lead" style={{ maxWidth: 720, marginBottom: 48 }} /></Reveal>

          <div className="contact-grid">
            <Reveal>
              <CompanyInfo />
              <div className="info-row">
                <div className="info-row__k">{text('kontakt.hours.k')}</div>
                <div className="info-row__v">{text('kontakt.hours.v')}</div>
              </div>
              <div className="map" style={{ marginTop: 30 }}>
                <iframe
                  title="INBI mapa"
                  loading="lazy"
                  src="https://www.google.com/maps?q=ul.%20%C5%9Amia%C5%82a%2026%2C%2001-524%20Warszawa&output=embed"
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="contact-card">
                <T as="h3" k="kontakt.cta" className="contact-card__title" />
                <a href="tel:+48223271655" className="btn btn--accent contact-card__btn">
                  {text('kontakt.call')} · {text('company.tel')}
                </a>
                <a href="mailto:biuro@inbi.pl" className="btn btn--ghost contact-card__btn">
                  {text('kontakt.write')}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
