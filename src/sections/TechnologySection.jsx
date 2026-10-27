import { technologies } from '../data/technologies'
import SwipeHint from '../components/SwipeHint'
import SectionHeading from '../components/SectionHeading'
import TechnologyCard from '../components/TechnologyCard'
import Reveal from '../components/Reveal'

export default function TechnologySection() {
  return (
    <section id="technologies" className="section" aria-labelledby="tech-title">
      <div className="container">
        <SectionHeading id="tech-title" eyebrow="Technologies" title="Our Technology Stack"
          description="Practical development skills for building, customizing, and connecting business applications." />
        <div className="grid grid--carousel grid--3">
          {technologies.map((t, i) => <Reveal key={t.id} delay={i * 60}><TechnologyCard tech={t} /></Reveal>)}
        </div>
        <SwipeHint />
      </div>
    </section>
  )
}
