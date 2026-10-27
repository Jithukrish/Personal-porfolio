import { team } from '../data/team'
import SwipeHint from '../components/SwipeHint'
import SectionHeading from '../components/SectionHeading'
import TeamMemberCard from '../components/TeamMemberCard'
import Reveal from '../components/Reveal'

export default function TeamSection() {
  return (
    <section id="team" className="section" aria-labelledby="team-title">
      <div className="container">
        <SectionHeading id="team-title" eyebrow="Team" title="Three Minds. One Development Team."
          description="We collaborate to build practical, maintainable, and business-focused software solutions." />
        <div className="grid grid--carousel grid--3">
          {team.map((m, i) => <Reveal key={m.id} delay={i * 80}><TeamMemberCard member={m} /></Reveal>)}
        </div>
        <SwipeHint />
      </div>
    </section>
  )
}
