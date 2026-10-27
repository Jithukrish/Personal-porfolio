import { erpnextCapabilities, workflowSteps } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import WorkflowTimeline from '../components/WorkflowTimeline'

export default function ErpnextExpertiseSection() {
  return (
    <section id="erpnext" className="section section--alt" aria-labelledby="erpnext-title">
      <div className="container">
        <SectionHeading id="erpnext-title" eyebrow="Core specialization" title="Deep Focus on ERPNext"
          description="From customizing ERPNext workflows to developing dedicated custom applications, we focus on practical solutions that fit real business operations." />
        <ul className="grid grid--3 capability-grid">
          {erpnextCapabilities.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 40} className="capability">
              <span className="icon-chip icon-chip--sm"><Icon name={c.icon} size={18} /></span>
              <span>{c.title}</span>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <h3 className="subheading">How a solution takes shape</h3>
          <WorkflowTimeline steps={workflowSteps} label="Solution workflow" variant="flow" />
        </Reveal>
      </div>
    </section>
  )
}
