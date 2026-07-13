import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import { DEFAULTS } from './content.js'
import { loadPublished, adminApi } from './config.js'

const Ctx = createContext(null)
export const useApp = () => useContext(Ctx)

const LANG_KEY = 'inb_lang'
const CACHE_KEY = 'inb_published_v1'

// Published content is cached so a repeat visit paints the CMS images immediately.
// Without it the code fallback shows first and the real photo swaps in a moment later.
function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const c = JSON.parse(raw)
    return c && c.content && c.images ? c : null
  } catch { return null }
}

export function AppProvider({ children }) {
  const cache = useRef(readCache()).current
  const [lang, setLangState] = useState(() => localStorage.getItem(LANG_KEY) || 'pl')
  const [dbContent, setDbContent] = useState(cache?.content || {})
  const [dbImages, setDbImages] = useState(cache?.images || {})
  const [loaded, setLoaded] = useState(!!cache)

  // edit mode (admin)
  const [editing, setEditing] = useState(false)
  const [token, setToken] = useState(null)
  const [draft, setDraft] = useState({})       // { key: { pl, en } }
  const [draftImg, setDraftImg] = useState({})  // { key: url }
  const [wipe, setWipe] = useState(null)        // null | 'in' | 'out' — lang switch animation
  const dirty = Object.keys(draft).length > 0 || Object.keys(draftImg).length > 0

  const setLang = useCallback((l) => {
    if (l === lang) return
    const commit = () => {
      setLangState(l)
      localStorage.setItem(LANG_KEY, l)
      document.documentElement.lang = l
    }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { commit(); return }
    setWipe('in')
    setTimeout(() => { commit(); setWipe('out') }, 650)
    setTimeout(() => setWipe(null), 1450)
  }, [lang])

  const reload = useCallback(async () => {
    const { content, images } = await loadPublished()
    setDbContent(content)
    setDbImages(images)
    setLoaded(true)
  }, [])

  useEffect(() => { reload() }, [reload])
  useEffect(() => {
    if (!loaded) return
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ content: dbContent, images: dbImages })) } catch { /* quota */ }
  }, [loaded, dbContent, dbImages])
  useEffect(() => { document.documentElement.lang = lang }, [lang])

  const text = useCallback((key, l = lang) => {
    const d = draft[key]
    if (d && d[l] != null) return d[l]
    const o = dbContent[key]
    if (o && o[l] != null && o[l] !== '') return o[l]
    const def = DEFAULTS[key]
    if (!def) return ''
    return def[l] != null && def[l] !== '' ? def[l] : (def.pl || '')
  }, [draft, dbContent, lang])

  const img = useCallback((key) => {
    if (draftImg[key] !== undefined) return draftImg[key]
    return dbImages[key] || null
  }, [draftImg, dbImages])

  const setText = useCallback((key, l, value) => {
    setDraft((p) => ({ ...p, [key]: { ...(p[key] || {}), [l]: value } }))
  }, [])

  // editing controls
  const enableEditing = useCallback((tok) => { setToken(tok); setEditing(true) }, [])
  const disableEditing = useCallback(() => { setEditing(false); setDraft({}); setDraftImg({}) }, [])

  const save = useCallback(async () => {
    const items = Object.entries(draft).map(([key, v]) => ({
      key,
      pl: v.pl != null ? v.pl : (dbContent[key]?.pl ?? DEFAULTS[key]?.pl ?? null),
      en: v.en != null ? v.en : (dbContent[key]?.en ?? DEFAULTS[key]?.en ?? null),
    }))
    if (items.length) await adminApi({ action: 'content.save', items }, token)
    setDraft({})
    setDraftImg({})
    await reload()
  }, [draft, dbContent, token, reload])

  const replaceImg = useCallback(async (key, webpBase64) => {
    const res = await adminApi({ action: 'image.upload', key, dataBase64: webpBase64, ext: 'webp' }, token)
    setDbImages((p) => ({ ...p, [key]: res.url }))
    setDraftImg((p) => { const n = { ...p }; delete n[key]; return n })
    return res.url
  }, [token])

  const resetImg = useCallback(async (key) => {
    await adminApi({ action: 'image.reset', key }, token)
    setDbImages((p) => { const n = { ...p }; delete n[key]; return n })
  }, [token])

  const value = {
    lang, setLang, loaded, wipe,
    text, img,
    editing, token, dirty, draft, draftImg,
    setText, enableEditing, disableEditing, save, replaceImg, resetImg, reload,
  }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

// ---- helpers ----
export function useT() {
  const { text } = useApp()
  return text
}

// Editable text node. as = tag. In edit mode it's contenteditable.
export function T({ k, as = 'span', className, style, children }) {
  const { text, editing, setText, lang } = useApp()
  const Tag = as
  const value = text(k)
  const ref = useRef(null)
  if (editing) {
    return (
      <Tag
        ref={ref}
        key={`${k}:${lang}`}
        data-edit={k}
        className={(className || '') + ' editable'}
        style={style}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => setText(k, lang, e.currentTarget.innerText)}
      >
        {value}
      </Tag>
    )
  }
  return <Tag data-edit={k} className={className} style={style}>{value}{children}</Tag>
}

// Convert an image File to WebP base64 (no data: prefix), resized to maxW.
export function fileToWebpBase64(file, maxW = 1600, quality = 0.85) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const im = new Image()
      im.onload = () => {
        const scale = Math.min(1, maxW / im.width)
        const w = Math.round(im.width * scale)
        const h = Math.round(im.height * scale)
        const c = document.createElement('canvas')
        c.width = w; c.height = h
        const g = c.getContext('2d')
        g.drawImage(im, 0, 0, w, h)
        const url = c.toDataURL('image/webp', quality)
        resolve(url.split(',')[1])
      }
      im.onerror = reject
      im.src = reader.result
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

// Editable image with edit-mode overlay.
export function Img({ k, fallback, alt, className, style }) {
  const { img, loaded, editing, replaceImg, resetImg } = useApp()
  const [busy, setBusy] = useState(false)
  const src = img(k) || fallback
  // until the published images are known, an override may exist for this key —
  // holding the paint back avoids flashing the code fallback and swapping it out
  const ready = loaded || editing
  const imgStyle = { ...style, opacity: ready ? 1 : 0, transition: 'opacity .35s ease' }
  async function onFile(e) {
    const f = e.target.files?.[0]
    if (!f) return
    setBusy(true)
    try {
      const b64 = await fileToWebpBase64(f)
      await replaceImg(k, b64)
    } catch (err) { alert('Błąd uploadu: ' + err.message) }
    setBusy(false)
    e.target.value = ''
  }
  if (!editing) {
    return <img src={ready ? src : undefined} alt={alt || ''} className={className} style={imgStyle} loading="lazy" />
  }
  return (
    <span className="img-edit" style={{ display: 'block', position: 'relative' }}>
      <img src={src} alt={alt || ''} className={className} style={imgStyle} />
      <span className="img-edit__bar">
        <label className="img-edit__btn">{busy ? '…' : 'Zmień'}
          <input type="file" accept="image/*" onChange={onFile} hidden />
        </label>
        {img(k) && <button className="img-edit__btn" onClick={() => resetImg(k)}>Reset</button>}
      </span>
    </span>
  )
}
