import { authApi, adminApi as call } from '../lib/config.js'

const TKEY = 'inb_admin_token'

export const getToken = () => localStorage.getItem(TKEY)
export const setToken = (t) => localStorage.setItem(TKEY, t)
export const clearToken = () => localStorage.removeItem(TKEY)

export async function login(username, password) {
  const res = await authApi({ action: 'login', username, password })
  setToken(res.token)
  return res.admin
}

export async function me() {
  const token = getToken()
  if (!token) return null
  try {
    const res = await authApi({ action: 'me', token })
    return res.admin
  } catch { clearToken(); return null }
}

export async function logout() {
  const token = getToken()
  if (token) { try { await authApi({ action: 'logout', token }) } catch { /* ignore */ } }
  clearToken()
}

export const api = (body) => call(body, getToken())
