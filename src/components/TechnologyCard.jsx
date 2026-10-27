import Icon from './Icon'

export default function TechnologyCard({ tech }) {
  return (
    <article className="card tech-card">
      <span className="icon-chip"><Icon name={tech.icon} /></span>
      <h3>{tech.title}</h3>
      <ul className="check-list">
        {tech.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  )
}
