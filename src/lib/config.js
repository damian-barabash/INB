export const SUPABASE_URL = 'https://xqcoebgbvwbflqedhmza.supabase.co'
export const SUPABASE_ANON =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxY29lYmdidndiZmxxZWRobXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4MTEyODcsImV4cCI6MjA5ODM4NzI4N30.cC3L2PK4PlQ9UbHPzRnfhFgfX8dxHZEan-pq5C2Z8Ns'

const FN = `${SUPABASE_URL}/functions/v1`

async function call(fn, body, token) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${SUPABASE_ANON}`,
  }
  if (token) headers['x-admin-token'] = token
  const r = await fetch(`${FN}/${fn}`, { method: 'POST', headers, body: JSON.stringify(body) })
  let data = null
  try { data = await r.json() } catch { /* ignore */ }
  if (!r.ok) throw new Error((data && data.error) || `HTTP ${r.status}`)
  return data
}

export const publicApi = (body) => call('public-api', body)
export const authApi = (body) => call('admin-auth', body)
export const adminApi = (body, token) => call('admin-api', body, token)

// Load published content + images directly from REST (public read via RLS).
export async function loadPublished() {
  const headers = { apikey: SUPABASE_ANON, Authorization: `Bearer ${SUPABASE_ANON}` }
  const [c, i] = await Promise.all([
    fetch(`${SUPABASE_URL}/rest/v1/content?select=key,pl,en`, { headers }).then((r) => r.json()).catch(() => []),
    fetch(`${SUPABASE_URL}/rest/v1/images?select=key,url`, { headers }).then((r) => r.json()).catch(() => []),
  ])
  const content = {}
  if (Array.isArray(c)) for (const row of c) content[row.key] = { pl: row.pl, en: row.en }
  const images = {}
  if (Array.isArray(i)) for (const row of i) images[row.key] = row.url
  return { content, images }
}
