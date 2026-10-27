import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { useActiveSection } from '../hooks/useActiveSection'
import Logo from './Logo'
import Button from './Button'

const ids = siteConfig.nav.map((n) => n.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.classList.add('no-scroll')
    return () => { document.removeEventListener('keydown', onKey); document.body.classList.remove('no-scroll') }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a className="brand" href="#home" onClick={close} aria-label={`${siteConfig.name} – home`}>
          <Logo /> <span>{siteConfig.name}</span>
        </a>
        <nav id="primary-nav" className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            {siteConfig.nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={close} aria-current={active === n.id ? 'true' : undefined}>{n.label}</a>
              </li>
            ))}
          </ul>
          <Button href="#contact" className="nav-cta-mobile" onClick={close}>Let's Talk</Button>
        </nav>
        <Button href="#contact" size="sm" className="nav-cta">Let's Talk</Button>
        <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
          aria-controls="primary-nav" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
