import { marqueeItems } from '../data/content'

/** Endless tech ticker. The duplicate set is hidden from assistive tech; motion stops on hover / reduced-motion. */
export default function TechMarquee() {
  return (
    <section className="marquee" aria-label="Technologies we work with">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-set" aria-hidden={copy === 1 ? 'true' : undefined}>
            {marqueeItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        ))}
      </div>
    </section>
  )
}
