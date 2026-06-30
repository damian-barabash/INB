import { useEffect, useState } from 'react'
import { api } from './adminApi.js'

const STATUS = [
  { v: 'new', l: 'Nowe', c: 'pill-new' },
  { v: 'in_progress', l: 'W toku', c: 'pill-progress' },
  { v: 'done', l: 'Zamknięte', c: 'pill-done' },
]

export default function Submissions() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  const load = async () => {
    setLoading(true)
    try { const r = await api({ action: 'submissions.list' }); setItems(r.items || []) }
    catch (e) { alert(e.message) }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function setStatus(id, status) {
    setItems((p) => p.map((i) => i.id === id ? { ...i, status } : i))
    await api({ action: 'submissions.update', id, status })
  }
  async function saveNotes(id, notes) { await api({ action: 'submissions.update', id, notes }) }
  async function del(id) {
    if (!confirm('Usunąć zgłoszenie?')) return
    setItems((p) => p.filter((i) => i.id !== id))
    await api({ action: 'submissions.delete', id })
  }

  const shown = filter === 'all' ? items : items.filter((i) => i.status === filter)
  const fmt = (d) => new Date(d).toLocaleString('pl-PL', { dateStyle: 'short', timeStyle: 'short' })

  return (
    <div>
      <div className="ed-pick" style={{ marginBottom: 18 }}>
        <button className={filter === 'all' ? 'on' : ''} onClick={() => setFilter('all')}>Wszystkie ({items.length})</button>
        {STATUS.map((s) => (
          <button key={s.v} className={filter === s.v ? 'on' : ''} onClick={() => setFilter(s.v)}>
            {s.l} ({items.filter((i) => i.status === s.v).length})
          </button>
        ))}
        <button className="adm-btn adm-btn--ghost" style={{ marginLeft: 'auto' }} onClick={load}>Odśwież</button>
      </div>

      {loading ? <p style={{ color: '#8593a8' }}>Ładowanie…</p> : shown.length === 0 ? (
        <div className="adm-card" style={{ color: '#8593a8' }}>Brak zgłoszeń.</div>
      ) : (
        <div className="adm-grid">
          {shown.map((s) => (
            <div className="adm-card" key={s.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>{s.name} <span style={{ color: '#6b7686', fontWeight: 400, fontSize: 13 }}>· {fmt(s.created_at)} · {s.lang?.toUpperCase()}</span></div>
                  <div style={{ color: '#aab6c9', fontSize: 14, marginTop: 4 }}>
                    {s.email && <a href={`mailto:${s.email}`} style={{ color: 'var(--accent)' }}>{s.email}</a>}
                    {s.phone && <span> · {s.phone}</span>}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <select className="adm-input" style={{ width: 'auto' }} value={s.status} onChange={(e) => setStatus(s.id, e.target.value)}>
                    {STATUS.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
                  </select>
                  <button className="adm-btn adm-btn--danger" onClick={() => del(s.id)}>Usuń</button>
                </div>
              </div>
              <p style={{ marginTop: 12, whiteSpace: 'pre-wrap', color: '#dbe3ef' }}>{s.message}</p>
              <textarea className="adm-input" style={{ marginTop: 12, minHeight: 56 }} placeholder="Notatka wewnętrzna…"
                defaultValue={s.notes || ''} onBlur={(e) => saveNotes(s.id, e.target.value)} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
