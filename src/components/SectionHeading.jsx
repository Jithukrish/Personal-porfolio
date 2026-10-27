import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, id, align = 'center' }) {
  return (
    <Reveal as="header" className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className="lead">{description}</p>}
    </Reveal>
  )
}
