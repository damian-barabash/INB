import { Link } from 'react-router-dom'
import { useApp } from '../lib/store.jsx'
import { LINKS } from './Nav.jsx'

const LOGO = `${import.meta.env.BASE_URL}logo.png`

export default function Footer() {
  const { text } = useApp()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <Link to="/" className="brand"><img src={LOGO} alt="INBI" /></Link>
            <p className="footer__tag">{text('footer.tagline')}</p>
          </div>
          <div>
            <h4>{text('nav.offer')}</h4>
            <div className="footer__links">
              {LINKS.filter((l) => !l.ext).map((l) => (
                <Link key={l.k} to={l.to}>{text(l.k)}</Link>
              ))}
              <Link to="/polityka-prywatnosci">{text('privacy.title')}</Link>
            </div>
          </div>
          <div>
            <h4>{text('nav.contact')}</h4>
            <div className="footer__links">
              <span>{text('company.name')}</span>
              <span>{text('company.street')}</span>
              <span>{text('company.city')}</span>
              <a href="tel:+48223271655">tel: {text('company.tel')}</a>
              <a href="mailto:biuro@inbi.pl">{text('company.email')}</a>
              <span style={{ marginTop: 8 }}>{text('company.nip')}</span>
              <span>{text('company.regon')}</span>
              <span>{text('company.krs')}</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} {text('company.name')}. {text('footer.rights')}</span>
          <span>INB Insurance</span>
        </div>
      </div>
    </footer>
  )
}
