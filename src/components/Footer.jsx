import { siteConfig } from '../config/siteConfig'
import { heroBadges } from '../data/technologies'
import Logo from './Logo'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Footer() {
  const { github, linkedin, email } = siteConfig.contact
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#home"><Logo variant="light" /> <span>{siteConfig.name}</span></a>
          <p>{siteConfig.footerText}</p>
          {(github || linkedin || email) && (
            <div className="social-row">
              {github && <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>}
              {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>}
              {email && <a href={`mailto:${email}`}>{email}</a>}
            </div>
          )}
        </div>
        <nav aria-label="Footer">
          <h2 className="footer-title">Navigate</h2>
          <ul>{siteConfig.nav.map((n) => <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>)}</ul>
        </nav>
        <div>
          <h2 className="footer-title">Technology</h2>
          <ul>{heroBadges.map((b) => <li key={b}>{b}</li>)}</ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
