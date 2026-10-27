import { Mail } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'

export default function ContactSection() {
  const { email, github, linkedin } = siteConfig.contact
  return (
    <section id="contact" className="section section--alt" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div>
          <SectionHeading id="contact-title" eyebrow="Contact" title="Let's Build Something Useful" align="left"
            description="Have an ERP customization, business automation requirement, or application idea? Tell us what you want to build." />
          {(email || github || linkedin) && (
            <ul className="contact-links">
              {email && <li><a href={`mailto:${email}`}><Mail size={18} aria-hidden="true" /> {email}</a></li>}
              {github && <li><a href={github} target="_blank" rel="noopener noreferrer"><GithubIcon /> GitHub</a></li>}
              {linkedin && <li><a href={linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /> LinkedIn</a></li>}
            </ul>
          )}
        </div>
        <Reveal><ContactForm /></Reveal>
      </div>
    </section>
  )
}
