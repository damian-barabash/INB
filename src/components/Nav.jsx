import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useApp } from '../lib/store.jsx'

const LOGO = `${import.meta.env.BASE_URL}logo.png`

export const LINKS = [
  { to: '/o-nas', k: 'nav.about' },
  { to: '/wladze', k: 'nav.management' },
  { to: '/doswiadczenie', k: 'nav.experience' },
  { to: '/oferta', k: 'nav.offer' },
  { to: '/zamowienia-publiczne', k: 'nav.tenders' },
  { to: '/kontakt', k: 'nav.contact' },
]

export default function Nav() {
  const { lang, setLang, text } = useApp()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setOpen(false) }, [loc.pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])

  return (
    <>
      <header className={`nav ${solid || open ? 'nav--solid' : ''}`}>
        <div className="wrap nav__inner">
          <NavLink to="/" className="brand" aria-label="INBI"><img src={LOGO} alt="INBI Insurance" /></NavLink>
          <nav className="nav__links">
            {LINKS.map((l) => l.ext
              ? <a key={l.k} href={l.ext} target="_blank" rel="noreferrer">{text(l.k)}</a>
              : <NavLink key={l.k} to={l.to} className={({ isActive }) => isActive ? 'active' : ''}>{text(l.k)}</NavLink>
            )}
          </nav>
          <div className="nav__right">
            <div className="langsw" role="group" aria-label="Language">
              <button className={lang === 'pl' ? 'on' : ''} onClick={() => setLang('pl')}>PL</button>
              <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
            </div>
            <button className={`burger ${open ? 'open' : ''}`} aria-label="Menu" onClick={() => setOpen((o) => !o)}>
              <span /><span />
            </button>
          </div>
        </div>
      </header>
      <div className={`drawer ${open ? 'open' : ''}`}>
        {LINKS.map((l) => l.ext
          ? <a key={l.k} href={l.ext} target="_blank" rel="noreferrer">{text(l.k)}</a>
          : <NavLink key={l.k} to={l.to} className={({ isActive }) => isActive ? 'active' : ''}>{text(l.k)}</NavLink>
        )}
      </div>
    </>
  )
}
