import { useEffect, useState } from 'react'
import { useApp } from '../lib/store.jsx'
import { getToken } from './adminApi.js'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Wladze from '../pages/Wladze.jsx'
import Doswiadczenie from '../pages/Doswiadczenie.jsx'
import Oferta from '../pages/Oferta.jsx'
import Kontakt from '../pages/Kontakt.jsx'
import Privacy from '../pages/Privacy.jsx'
import NotFound from '../pages/NotFound.jsx'

const PAGES = [
  { id: 'home', label: 'Główna', C: Home },
  { id: 'about', label: 'O nas', C: About },
  { id: 'wladze', label: 'Władze', C: Wladze },
  { id: 'exp', label: 'Doświadczenie', C: Doswiadczenie },
  { id: 'oferta', label: 'Oferta', C: Oferta },
  { id: 'kontakt', label: 'Kontakt', C: Kontakt },
  { id: 'privacy', label: 'Polityka prywatności', C: Privacy },
  { id: '404', label: '404', C: NotFound },
]

export default function Editor() {
  const { lang, setLang, enableEditing, disableEditing, save, dirty, draft, draftImg } = useApp()
  const [page, setPage] = useState('home')
  const [saving, setSaving] = useState(false)
  const Current = PAGES.find((p) => p.id === page).C

  useEffect(() => {
    enableEditing(getToken())
    return () => disableEditing()
  }, [enableEditing, disableEditing])

  const count = Object.keys(draft).length + Object.keys(draftImg).length

  async function doSave() {
    setSaving(true)
    try { await save() } catch (e) { alert('Błąd zapisu: ' + e.message) }
    setSaving(false)
  }

  return (
    <div>
      <div className="ed-pick" style={{ padding: '4px 0 18px' }}>
        {PAGES.map((p) => (
          <button key={p.id} className={page === p.id ? 'on' : ''} onClick={() => setPage(p.id)}>{p.label}</button>
        ))}
      </div>
      <p style={{ color: '#8593a8', fontSize: 13.5, marginBottom: 14 }}>
        Kliknij dowolny tekst, aby go edytować. Najedź na zdjęcie, aby je zmienić (auto-konwersja do WebP). Edytujesz wersję: <b style={{ color: '#fff' }}>{lang.toUpperCase()}</b>.
      </p>

      <div className="ed-stage" style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)' }}>
        <Current />
      </div>

      <div className="ed-bar">
        <div className="ed-bar__lang">
          <button className={lang === 'pl' ? 'on' : ''} onClick={() => setLang('pl')}>PL</button>
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
        <div style={{ color: '#8593a8', fontSize: 13.5 }}>
          {count > 0 ? `Niezapisane zmiany: ${count}` : 'Brak zmian'}
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="adm-btn adm-btn--ghost" disabled={!dirty} onClick={() => disableEditing() || enableEditing(getToken())}>Odrzuć</button>
          <button className="adm-btn" disabled={!dirty || saving} onClick={doSave}>{saving ? 'Zapisywanie…' : 'Zapisz i publikuj'}</button>
        </div>
      </div>
    </div>
  )
}
