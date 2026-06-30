import { useEffect, useState } from 'react'
import { api } from './adminApi.js'

const PERMS = [
  { k: 'can_edit_content', l: 'Edycja treści' },
  { k: 'can_view_submissions', l: 'Zgłoszenia' },
  { k: 'can_view_analytics', l: 'Analityka' },
  { k: 'can_create_admins', l: 'Zarządzanie adminami' },
]

const empty = { username: '', password: '', display_name: '', can_edit_content: true, can_view_submissions: true, can_view_analytics: true, can_create_admins: false }

export default function Admins({ meId }) {
  const [items, setItems] = useState([])
  const [form, setForm] = useState(empty)
  const [busy, setBusy] = useState(false)

  const load = async () => { try { const r = await api({ action: 'admins.list' }); setItems(r.items || []) } catch (e) { alert(e.message) } }
  useEffect(() => { load() }, [])

  async function create(e) {
    e.preventDefault()
    if (!form.username || form.password.length < 6) { alert('Login i hasło (min. 6 znaków) wymagane.'); return }
    setBusy(true)
    try { await api({ action: 'admins.create', ...form }); setForm(empty); await load() }
    catch (err) { alert(err.message) }
    setBusy(false)
  }
  async function togglePerm(a, k) {
    const val = !a[k]
    setItems((p) => p.map((x) => x.id === a.id ? { ...x, [k]: val } : x))
    await api({ action: 'admins.update', id: a.id, [k]: val })
  }
  async function del(a) {
    if (!confirm(`Usunąć administratora „${a.username}"?`)) return
    try { await api({ action: 'admins.delete', id: a.id }); await load() } catch (e) { alert(e.message) }
  }
  async function resetPass(a) {
    const password = prompt(`Nowe hasło dla „${a.username}" (min. 6 znaków):`)
    if (!password) return
    if (password.length < 6) { alert('Za krótkie.'); return }
    try { await api({ action: 'admins.update', id: a.id, password }); alert('Hasło zmienione.') } catch (e) { alert(e.message) }
  }

  return (
    <div className="adm-grid" style={{ gridTemplateColumns: '1fr', gap: 24 }}>
      <div className="adm-card">
        <h3 style={{ fontSize: 15, marginBottom: 16 }}>Dodaj administratora</h3>
        <form onSubmit={create} style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', alignItems: 'end' }}>
          <div><label className="adm-label">Login</label><input className="adm-input" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} /></div>
          <div><label className="adm-label">Hasło</label><input className="adm-input" type="text" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></div>
          <div><label className="adm-label">Nazwa</label><input className="adm-input" value={form.display_name} onChange={(e) => setForm({ ...form, display_name: e.target.value })} /></div>
          <button className="adm-btn" disabled={busy} type="submit">{busy ? '…' : 'Dodaj'}</button>
        </form>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 14 }}>
          {PERMS.map((p) => (
            <label key={p.k} style={{ display: 'flex', gap: 7, alignItems: 'center', fontSize: 13.5, color: '#cfd8e6' }}>
              <input type="checkbox" checked={form[p.k]} onChange={(e) => setForm({ ...form, [p.k]: e.target.checked })} />{p.l}
            </label>
          ))}
        </div>
        <p style={{ color: '#8593a8', fontSize: 12.5, marginTop: 10 }}>„Zarządzanie adminami" pozwala temu administratorowi tworzyć kolejnych administratorów.</p>
      </div>

      <div className="adm-card" style={{ overflowX: 'auto' }}>
        <table className="adm-table">
          <thead><tr><th>Administrator</th>{PERMS.map((p) => <th key={p.k} style={{ textAlign: 'center' }}>{p.l}</th>)}<th></th></tr></thead>
          <tbody>
            {items.map((a) => (
              <tr key={a.id}>
                <td>
                  <div style={{ fontWeight: 700, color: '#fff' }}>{a.display_name || a.username}</div>
                  <div style={{ color: '#8593a8', fontSize: 12.5 }}>@{a.username}{a.id === meId ? ' · to Ty' : ''}</div>
                </td>
                {PERMS.map((p) => (
                  <td key={p.k} style={{ textAlign: 'center' }}>
                    <input type="checkbox" checked={!!a[p.k]} disabled={a.id === meId && p.k === 'can_create_admins'} onChange={() => togglePerm(a, p.k)} />
                  </td>
                ))}
                <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                  <button className="adm-btn adm-btn--ghost" style={{ padding: '7px 12px', marginRight: 6 }} onClick={() => resetPass(a)}>Hasło</button>
                  {a.id !== meId && <button className="adm-btn adm-btn--danger" style={{ padding: '7px 12px' }} onClick={() => del(a)}>Usuń</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
