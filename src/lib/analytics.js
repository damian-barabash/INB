import { publicApi } from './config.js'

const VID = 'inb_vid'

function visitorId() {
  let v = localStorage.getItem(VID)
  if (!v) {
    v = (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2))
    localStorage.setItem(VID, v)
  }
  return v
}

let last = ''
export function track(path) {
  if (path === last) return
  last = path
  try {
    publicApi({ action: 'track', path, visitor_id: visitorId(), referrer: document.referrer || '' })
      .catch(() => {})
  } catch { /* ignore */ }
}
