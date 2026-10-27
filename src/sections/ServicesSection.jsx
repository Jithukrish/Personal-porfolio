import { services } from '../data/services'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function ServicesSection() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading id="services-title" eyebrow="Services" title="Solutions We Build" />
        <div className="grid grid--3">
          {services.map((s, i) => <Reveal key={s.id} delay={i * 60}><ServiceCard service={s} /></Reveal>)}
        </div>
        <Reveal className="cta-band">
          <h3>Have a Business Process to Improve?</h3>
          <Button href="#contact">Discuss Your Requirements</Button>
        </Reveal>
      </div>
    </section>
  )
}
