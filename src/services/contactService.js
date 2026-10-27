import { siteConfig } from '../config/siteConfig'

/**
 * Submits a contact inquiry.
 * - With no ERPNext backend configured, resolves { ok: false, reason: 'no-backend' }
 *   so the UI can say honestly that nothing was sent.
 * - With VITE_ERPNEXT_BASE_URL and VITE_ERPNEXT_CONTACT_METHOD set, POSTs JSON to
 *   `${baseUrl}/api/method/${method}`. The server method must be whitelisted for guests
 *   and should rate-limit. No secrets are sent from the browser.
 */
export async function submitInquiry(payload) {
  const { baseUrl, contactMethod } = siteConfig.backend
  if (!baseUrl || !contactMethod) return { ok: false, reason: 'no-backend' }

  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, '')}/api/method/${contactMethod}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) return { ok: false, reason: 'server', status: res.status }
    return { ok: true }
  } catch {
    return { ok: false, reason: 'network' }
  }
}
