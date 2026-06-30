import { useState } from 'react'
import { useApp, T } from '../lib/store.jsx'
import { PageHead, CompanyInfo } from '../components/Pieces.jsx'
import Reveal from '../components/Reveal.jsx'
import { publicApi } from '../lib/config.js'

export default function Kontakt() {
  const { text, lang } = useApp()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [state, setState] = useState('idle') // idle | sending | ok | err
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) return
    setState('sending')
    try {
      await publicApi({ action: 'submit', ...form, lang })
      setState('ok')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch { setState('err') }
  }

  return (
    <>
      <PageHead titleKey="kontakt.title" />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <Reveal><h2 className="title" style={{ marginBottom: 40 }}><T as="span" k="kontakt.cta" /></h2></Reveal>
          <div className="contact-grid">
            <Reveal>
              <CompanyInfo />
              <div className="map" style={{ marginTop: 30 }}>
                <iframe
                  title="INBI mapa"
                  loading="lazy"
                  src="https://www.google.com/maps?q=ul.%20%C5%9Amia%C5%82a%2026%2C%2001-524%20Warszawa&output=embed"
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <form className="form" onSubmit={submit}>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{text('kontakt.formtitle')}</h3>
                <div className="field">
                  <label>{text('form.name')} *</label>
                  <input value={form.name} onChange={set('name')} required />
                </div>
                <div className="field">
                  <label>{text('form.email')}</label>
                  <input type="email" value={form.email} onChange={set('email')} />
                </div>
                <div className="field">
                  <label>{text('form.phone')}</label>
                  <input value={form.phone} onChange={set('phone')} />
                </div>
                <div className="field">
                  <label>{text('form.message')} *</label>
                  <textarea value={form.message} onChange={set('message')} required />
                </div>
                {state === 'ok' && <div className="form__msg ok">{text('form.ok')}</div>}
                {state === 'err' && <div className="form__msg err">{text('form.err')}</div>}
                <button className="btn btn--accent" type="submit" disabled={state === 'sending'} style={{ justifyContent: 'center' }}>
                  {state === 'sending' ? text('form.sending') : text('form.submit')}
                </button>
                <p style={{ fontSize: 12, color: 'var(--muted)' }}>{text('form.consent')}</p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
