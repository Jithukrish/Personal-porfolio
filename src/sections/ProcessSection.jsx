import { processSteps } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import WorkflowTimeline from '../components/WorkflowTimeline'
import Reveal from '../components/Reveal'

export default function ProcessSection() {
  return (
    <section id="process" className="section section--alt" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading id="process-title" eyebrow="Our approach" title="From Business Requirements to Working Software" />
        <Reveal><WorkflowTimeline steps={processSteps} label="Development process" variant="process" /></Reveal>
      </div>
    </section>
  )
}
