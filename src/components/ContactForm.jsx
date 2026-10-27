import { useRef, useState } from 'react'
import { CircleAlert, CircleCheck, LoaderCircle, Send } from 'lucide-react'
import { projectTypes } from '../data/content'
import { siteConfig } from '../config/siteConfig'
import { submitInquiry } from '../services/contactService'

const initial = { name: '', email: '', company: '', projectType: '', budget: '', message: '', website: '' }
const MIN_FILL_MS = 3000 // submissions faster than this are treated as bots

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (!v.projectType) e.projectType = 'Please choose a project type.'
  if (v.message.trim().length < 10) e.message = 'Please describe your project in at least 10 characters.'
  return e
}

function Field({ id, label, optional, error, children }) {
  return (
    <div className={`field ${error ? 'field--error' : ''}`}>
      <label htmlFor={id}>{label}{optional && <span className="optional"> (optional)</span>}</label>
      {children}
      {error && <p className="field-error" id={`${id}-error`} role="alert">{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [state, setState] = useState({ status: 'idle', reason: '' }) // idle | loading | success | error
  const openedAt = useRef(Date.now())

  const bind = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: (e) => setValues((p) => ({ ...p, [name]: e.target.value })),
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  async function onSubmit(e) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }
    // Spam protection: honeypot + minimum fill time. Real deployments should also rate-limit server-side.
    if (values.website || Date.now() - openedAt.current < MIN_FILL_MS) {
      setState({ status: 'error', reason: 'spam' })
      return
    }
    setState({ status: 'loading', reason: '' })
    const { website, ...payload } = values
    const result = await submitInquiry(payload)
    if (result.ok) {
      setValues(initial)
      openedAt.current = Date.now()
      setState({ status: 'success', reason: '' })
    } else {
      setState({ status: 'error', reason: result.reason })
    }
  }

  const loading = state.status === 'loading'
  const email = siteConfig.contact.email

  return (
    <form className="card contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <Field id="name" label="Full Name" error={errors.name}>
          <input type="text" autoComplete="name" required {...bind('name')} />
        </Field>
        <Field id="email" label="Work Email" error={errors.email}>
          <input type="email" autoComplete="email" required {...bind('email')} />
        </Field>
        <Field id="company" label="Company Name" optional>
          <input type="text" autoComplete="organization" {...bind('company')} />
        </Field>
        <Field id="projectType" label="Project Type" error={errors.projectType}>
          <select required {...bind('projectType')}>
            <option value="">Select a project type</option>
            {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <Field id="budget" label="Estimated Budget" optional>
          <input type="text" placeholder="e.g. a range or 'not sure yet'" {...bind('budget')} />
        </Field>
      </div>
      <Field id="message" label="Message" error={errors.message}>
        <textarea rows="5" required {...bind('message')} />
      </Field>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website}
          onChange={(e) => setValues((p) => ({ ...p, website: e.target.value }))} />
      </div>

      <button className="btn btn--primary btn--lg" type="submit" disabled={loading}>
        {loading ? <><LoaderCircle className="spin" size={18} aria-hidden="true" /> Sending…</> : <>Send Message <Send size={16} aria-hidden="true" /></>}
      </button>

      <div className="form-status" role="status" aria-live="polite">
        {state.status === 'success' && (
          <p className="notice notice--ok"><CircleCheck size={18} aria-hidden="true" /> Thanks – your message was received. We'll get back to you soon.</p>
        )}
        {state.status === 'error' && state.reason === 'no-backend' && (
          <p className="notice notice--warn">
            <CircleAlert size={18} aria-hidden="true" />
            <span>
              <strong>Your message was not sent.</strong>{' '}
              {import.meta.env.DEV && 'Development notice: no backend is connected (set VITE_ERPNEXT_BASE_URL and VITE_ERPNEXT_CONTACT_METHOD – see README). '}
              {email
                ? <>Please email us at <a href={`mailto:${email}`}>{email}</a> instead.</>
                : 'The contact form is not connected yet. Please check back soon.'}
            </span>
          </p>
        )}
        {state.status === 'error' && state.reason === 'spam' && (
          <p className="notice notice--warn"><CircleAlert size={18} aria-hidden="true" /> That was submitted too quickly. Please review your message and try again.</p>
        )}
        {state.status === 'error' && ['network', 'server'].includes(state.reason) && (
          <p className="notice notice--err"><CircleAlert size={18} aria-hidden="true" /> Something went wrong sending your message. Please try again{email && <> or email <a href={`mailto:${email}`}>{email}</a></>}.</p>
        )}
      </div>
    </form>
  )
}
