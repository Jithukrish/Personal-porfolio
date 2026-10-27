import { heroBadges } from '../data/technologies'
import Button from '../components/Button'
import HeroVisual from '../components/HeroVisual'

/** Splits text into masked words so each can slide up in sequence. */
function Words({ text, start = 0, className = '' }) {
  return text.split(' ').map((w, i) => (
    <span key={`${w}-${i}`}>
      <span className="w"><span className={`w-in ${className}`} style={{ '--i': start + i }}>{w}</span></span>{' '}
    </span>
  ))
}

export default function HeroSection() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--pill">ERPNEXT DEVELOPMENT TEAM</p>
          <h1 id="hero-title">
            <Words text="Building Smarter Business Systems." />
            <Words text="Automating What Matters." start={4} className="text-gradient" />
          </h1>
          <p className="lead">
            We design, customize, and develop business solutions using ERPNext, React, and modern web
            technologies — helping businesses simplify operations and work smarter.
          </p>
          <div className="hero-actions">
            <Button href="#projects" size="lg">Explore Our Work</Button>
            <Button href="#contact" variant="secondary" size="lg">Let's Discuss Your Project</Button>
          </div>
          <ul className="badge-row" aria-label="Core technologies">
            {heroBadges.map((b) => <li key={b} className="badge">{b}</li>)}
          </ul>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}
