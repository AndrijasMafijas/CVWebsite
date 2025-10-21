import { useState } from 'react'

const formspreeEndpoint = (import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined) || 'https://formspree.io/f/xjkadvwd'

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Endpoint ensured via env or default; proceed with direct POST
    const form = e.currentTarget
    const data = new FormData(form)
    // Honeypot
    if ((data.get('website') as string)?.trim()) {
      setStatus('success')
      form.reset()
      return
    }
    // Minimal validation
    const message = (data.get('message') as string) || ''
    if (message.trim().length < 10) {
      setStatus('error')
      setError('Please enter a message of at least 10 characters.')
      return
    }
    setStatus('sending')
    setError(null)
    try {
      const res = await fetch(formspreeEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      const json = await res.json().catch(() => ({}))
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setError(json?.errors?.[0]?.message || 'Failed to send message. Please try again later.')
      }
    } catch {
      setStatus('error')
      setError('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="row">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <textarea name="message" placeholder="Message" rows={5} required />
          {/* Email subject for Formspree */}
          <input type="hidden" name="_subject" value="Portfolio contact" />
          {/* Honeypot field */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px', height: 0, width: 0 }} aria-hidden="true" />
          <button className="btn primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </form>
        {status === 'success' && <p className="muted" role="status">Thanks! Your message has been sent.</p>}
        {status === 'error' && <p className="muted" role="alert">{error}</p>}
        
        
      </div>
    </section>
  )
}

export default Contact
