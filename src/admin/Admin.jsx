import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { me, login, logout } from './adminApi.js'
import Editor from './Editor.jsx'
import Submissions from './Submissions.jsx'
import Analytics from './Analytics.jsx'
import Admins from './Admins.jsx'
import './admin.css'

function Login({ onLogin }) {
  const [u, setU] = useState('')
  const [p, setP] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  async function submit(e) {
    e.preventDefault()
    setBusy(true); setErr('')
    try { const admin = await login(u.trim(), p); onLogin(admin) }
    catch { setErr('Nieprawidłowy login lub hasło.') }
    setBusy(false)
  }
  return (
    <div className="adm" style={{ alignItems: 'center', justifyContent: 'center' }}>
      <form className="adm-login adm-card" onSubmit={submit}>
        <div className="adm__brand" style={{ padding: '0 0 18px' }}>IN<b>B</b> · Panel</div>
        <label className="adm-label">Login</label>
        <input className="adm-input" value={u} onChange={(e) => setU(e.target.value)} autoFocus style={{ marginBottom: 14 }} />
        <label className="adm-label">Hasło</label>
        <input className="adm-input" type="password" value={p} onChange={(e) => setP(e.target.value)} style={{ marginBottom: 18 }} />
        {err && <div style={{ color: '#ff8d6b', fontSize: 13.5, marginBottom: 14 }}>{err}</div>}
        <button className="adm-btn" style={{ width: '100%' }} disabled={busy} type="submit">{busy ? 'Logowanie…' : 'Zaloguj'}</button>
        <Link to="/" style={{ display: 'block', textAlign: 'center', marginTop: 16, color: '#8593a8', fontSize: 13 }}>← Powrót na stronę</Link>
      </form>
    </div>
  )
}

const TABS = [
  { id: 'editor', label: 'Edytor strony', perm: 'can_edit_content', C: Editor },
  { id: 'submissions', label: 'Zgłoszenia', perm: 'can_view_submissions', C: Submissions },
  { id: 'analytics', label: 'Analityka', perm: 'can_view_analytics', C: Analytics },
  { id: 'admins', label: 'Administratorzy', perm: 'can_create_admins', C: Admins },
]

export default function Admin() {
  const [admin, setAdmin] = useState(null)
  const [checked, setChecked] = useState(false)
  const [tab, setTab] = useState('editor')

  useEffect(() => { me().then((a) => { setAdmin(a); setChecked(true) }) }, [])

  if (!checked) return <div className="adm" style={{ alignItems: 'center', justifyContent: 'center', color: '#8593a8' }}>Ładowanie…</div>
  if (!admin) return <Login onLogin={(a) => { setAdmin(a) }} />

  const allowed = TABS.filter((t) => admin[t.perm])
  const active = allowed.find((t) => t.id === tab) || allowed[0]
  if (!active) return <div className="adm" style={{ padding: 40 }}>Brak uprawnień. <button className="adm__logout" onClick={async () => { await logout(); setAdmin(null) }}>Wyloguj</button></div>
  const Active = active.C

  return (
    <div className="adm">
      <aside className="adm__side">
        <div className="adm__brand">IN<b>B</b> · Panel</div>
        <nav className="adm__nav">
          {allowed.map((t) => (
            <button key={t.id} className={active.id === t.id ? 'on' : ''} onClick={() => setTab(t.id)}>{t.label}</button>
          ))}
        </nav>
        <div className="adm__spacer" />
        <Link to="/" className="adm__nav" style={{ color: '#8593a8', fontSize: 13.5, padding: '8px 14px' }}>↗ Otwórz stronę</Link>
        <div className="adm__user">
          Zalogowano: <b style={{ color: '#cfd8e6' }}>{admin.display_name || admin.username}</b>
          <button className="adm__logout" onClick={async () => { await logout(); setAdmin(null) }}>Wyloguj się</button>
        </div>
      </aside>
      <div className="adm__main">
        <div className="adm__bar"><h1>{active.label}</h1></div>
        <div className="adm__content">
          <Active meId={admin.id} />
        </div>
      </div>
    </div>
  )
}
