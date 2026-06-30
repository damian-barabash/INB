import { useApp, T } from '../lib/store.jsx'
import Reveal from './Reveal.jsx'

export function PageHead({ titleKey, crumbKey }) {
  const { text } = useApp()
  return (
    <header className="page-head">
      <div className="wrap">
        <Reveal>
          <div className="breadcrumb">INBI — {text(crumbKey || titleKey)}</div>
          <T as="h1" k={titleKey} className="display" />
        </Reveal>
      </div>
    </header>
  )
}

export function CompanyInfo() {
  const { text } = useApp()
  const rows = [
    { k: 'adres', v: [text('company.name'), text('company.street'), text('company.city')] },
    { k: 'tel', v: [text('company.tel')], href: 'tel:+48223271655' },
    { k: 'e-mail', v: [text('company.email')], href: 'mailto:biuro@inbi.pl' },
    { k: 'www', v: [text('company.www')], href: 'https://inbi.pl' },
    { k: 'rejestr', v: [text('company.nip'), text('company.regon'), text('company.krs')] },
  ]
  return (
    <div>
      {rows.map((r) => (
        <div className="info-row" key={r.k}>
          <div className="info-row__k">{r.k}</div>
          <div className="info-row__v">
            {r.v.map((line, i) => (
              <div key={i}>
                {r.href && i === 0 ? <a href={r.href}>{line}</a> : line}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
