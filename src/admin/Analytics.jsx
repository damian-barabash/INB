import { useEffect, useState } from 'react'
import { api } from './adminApi.js'

const PATHS = {
  '/': 'Główna', '/o-nas': 'O nas', '/wladze': 'Władze', '/doswiadczenie': 'Doświadczenie',
  '/oferta': 'Oferta', '/kontakt': 'Kontakt', '/polityka-prywatnosci': 'Polityka',
}

export default function Analytics() {
  const [days, setDays] = useState(30)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let on = true
    setLoading(true)
    api({ action: 'analytics.summary', days })
      .then((d) => { if (on) { setData(d); setLoading(false) } })
      .catch((e) => { alert(e.message); setLoading(false) })
    return () => { on = false }
  }, [days])

  const maxPath = data ? Math.max(1, ...data.byPath.map((p) => p[1])) : 1
  const maxDay = data ? Math.max(1, ...data.byDay.map((p) => p[1])) : 1

  return (
    <div>
      <div className="ed-pick" style={{ marginBottom: 20 }}>
        {[7, 30, 90, 365].map((d) => (
          <button key={d} className={days === d ? 'on' : ''} onClick={() => setDays(d)}>{d} dni</button>
        ))}
      </div>

      {loading || !data ? <p style={{ color: '#8593a8' }}>Ładowanie…</p> : (
        <>
          <div className="adm-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', marginBottom: 24 }}>
            <div className="adm-stat"><div className="adm-stat__n">{data.total}</div><div className="adm-stat__l">Odsłony</div></div>
            <div className="adm-stat"><div className="adm-stat__n">{data.unique}</div><div className="adm-stat__l">Unikalni odwiedzający</div></div>
            <div className="adm-stat"><div className="adm-stat__n">{(data.total / Math.max(1, data.days)).toFixed(1)}</div><div className="adm-stat__l">Średnio / dzień</div></div>
          </div>

          <div className="adm-card" style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 15, marginBottom: 16 }}>Najpopularniejsze strony</h3>
            <div className="adm-bars">
              {data.byPath.length === 0 && <span style={{ color: '#8593a8' }}>Brak danych.</span>}
              {data.byPath.map(([path, n]) => (
                <div className="adm-bars__row" key={path}>
                  <span style={{ color: '#cfd8e6' }}>{PATHS[path] || path}</span>
                  <span className="adm-bars__track"><span className="adm-bars__fill" style={{ width: `${(n / maxPath) * 100}%` }} /></span>
                  <span style={{ textAlign: 'right', color: '#fff', fontWeight: 700 }}>{n}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="adm-card">
            <h3 style={{ fontSize: 15, marginBottom: 16 }}>Odsłony dziennie</h3>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 130 }}>
              {data.byDay.map(([day, n]) => (
                <div key={day} title={`${day}: ${n}`} style={{ flex: 1, minWidth: 3, background: 'var(--accent)', borderRadius: '3px 3px 0 0', height: `${(n / maxDay) * 100}%`, opacity: 0.85 }} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
