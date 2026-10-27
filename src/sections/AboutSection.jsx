import { siteConfig } from '../config/siteConfig'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function AboutSection() {
  return (
    <section id="about" className="section section--tight" aria-labelledby="about-title">
      <div className="container">
        <Reveal className="about-card card">
          <SectionHeading id="about-title" eyebrow="About us" title={siteConfig.tagline} align="left" />
          <p className="about-text">{siteConfig.description}</p>
        </Reveal>
      </div>
    </section>
  )
}
