import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useApp, T } from '../lib/store.jsx'
import { PageHead, CompanyInfo } from '../components/Pieces.jsx'
import Reveal from '../components/Reveal.jsx'
import { publicApi } from '../lib/config.js'

const STEPS = ['wiz.step1', 'wiz.step2', 'wiz.step3']
const TOPICS = ['wiz.topic1', 'wiz.topic2', 'wiz.topic3', 'wiz.topic4', 'wiz.topic5']

export default function Kontakt() {
  const { text, lang, editing } = useApp()
  const location = useLocation()
  const [step, setStep] = useState(0)
  const [topic, setTopic] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [state, setState] = useState('idle') // idle | sending | ok | err
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // Prefill from Configurator / RiskCalc handoff.
  useEffect(() => {
    const st = location.state
    if (!st) return
    if (st.topic) setTopic(st.topic)
    if (Array.isArray(st.lines) && st.lines.length) {
      const head = lang === 'pl' ? 'Interesują mnie ubezpieczenia:' : 'I am interested in the insurance lines:'
      setForm((f) => ({ ...f, message: `${head}\n- ${st.lines.join('\n- ')}` }))
      setStep(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const canNext = step === 0 ? !!topic : step === 1 ? form.name.trim().length > 0 : true
  const show = (i) => editing || step === i

  async function submit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) { setStep(form.name.trim() ? 2 : 1); return }
    setState('sending')
    const topicLabel = topic ? text(topic, 'pl') : ''
    const message = topicLabel ? `[${topicLabel}]\n${form.message}` : form.message
    try {
      await publicApi({ action: 'submit', ...form, message, lang })
      setState('ok')
      setForm({ name: '', email: '', phone: '', message: '' })
      setTopic(''); setStep(0)
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
              <form className="form wiz" onSubmit={submit}>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{text('kontakt.formtitle')}</h3>

                {/* progress */}
                <div className="wiz__steps">
                  {STEPS.map((s, i) => (
                    <button key={s} type="button" className={`wiz__step ${i === step ? 'on' : ''} ${i < step ? 'done' : ''}`}
                      onClick={() => (i < step || canNext) && setStep(i)}>
                      <span className="wiz__num">{i < step ? '✓' : i + 1}</span>
                      <T as="span" k={s} className="wiz__label" />
                    </button>
                  ))}
                  <span className="wiz__rail"><span className="wiz__fill" style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }} /></span>
                </div>

                {/* step 1 — topic */}
                {show(0) && (
                  <div className="wiz__panel">
                    <T as="label" k="wiz.topic.label" className="wiz__q" />
                    <div className="wiz__topics">
                      {TOPICS.map((t) => (
                        <button key={t} type="button" className={`wiz__topic ${topic === t ? 'on' : ''}`} onClick={() => setTopic(t)}>
                          <T as="span" k={t} />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* step 2 — contact data */}
                {show(1) && (
                  <div className="wiz__panel">
                    <div className="field">
                      <label>{text('form.name')} *</label>
                      <input value={form.name} onChange={set('name')} />
                    </div>
                    <div className="field">
                      <label>{text('form.email')}</label>
                      <input type="email" value={form.email} onChange={set('email')} />
                    </div>
                    <div className="field">
                      <label>{text('form.phone')}</label>
                      <input value={form.phone} onChange={set('phone')} />
                    </div>
                  </div>
                )}

                {/* step 3 — message */}
                {show(2) && (
                  <div className="wiz__panel">
                    <div className="field">
                      <label>{text('form.message')} *</label>
                      <textarea value={form.message} onChange={set('message')} />
                    </div>
                  </div>
                )}

                {state === 'ok' && <div className="form__msg ok">{text('form.ok')}</div>}
                {state === 'err' && <div className="form__msg err">{text('form.err')}</div>}

                {/* controls */}
                {!editing && (
                  <div className="wiz__nav">
                    {step > 0 && <button type="button" className="btn btn--ghost" onClick={() => setStep(step - 1)}>{text('wiz.back')}</button>}
                    {step < STEPS.length - 1 ? (
                      <button type="button" className="btn btn--accent" disabled={!canNext} onClick={() => canNext && setStep(step + 1)} style={{ marginLeft: 'auto', justifyContent: 'center' }}>
                        {text('wiz.next')}
                      </button>
                    ) : (
                      <button className="btn btn--accent" type="submit" disabled={state === 'sending'} style={{ marginLeft: 'auto', justifyContent: 'center' }}>
                        {state === 'sending' ? text('form.sending') : text('form.submit')}
                      </button>
                    )}
                  </div>
                )}

                {editing && (
                  <div className="wiz__nav">
                    <T as="span" k="wiz.back" className="btn btn--ghost" />
                    <T as="span" k="wiz.next" className="btn btn--accent" style={{ marginLeft: 'auto' }} />
                  </div>
                )}

                <p style={{ fontSize: 12, color: 'var(--muted)' }}>{text('form.consent')}</p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
