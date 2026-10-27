import SectionHeading from '../components/SectionHeading'
import ErpOrbit from '../components/ErpOrbit'
import DocFlow from '../components/DocFlow'
import Reveal from '../components/Reveal'

export default function ErpModulesSection() {
  return (
    <section id="erp-modules" className="section" aria-labelledby="erp-title">
      <div className="container">
        <SectionHeading id="erp-title" eyebrow="ERPNext" title="Explore the ERPNext Landscape"
          description="A quick map of core ERPNext modules and how documents flow between them." />
        <Reveal><ErpOrbit /></Reveal>
        <Reveal>
          <h3 className="subheading">A typical order-to-cash document flow</h3>
          <DocFlow />
        </Reveal>
      </div>
    </section>
  )
}
