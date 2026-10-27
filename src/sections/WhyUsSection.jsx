import { principles } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'

export default function WhyUsSection() {
  return (
    <section id="why-us" className="section" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading id="why-title" eyebrow="Why work with us" title="Practical Development. Business-Focused Thinking." />
        <ul className="grid grid--4 principles">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 50} className="card principle">
              <span className="icon-chip icon-chip--sm"><Icon name={p.icon} size={18} /></span>
              <span>{p.title}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
