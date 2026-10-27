import Icon from './Icon'

export default function ServiceCard({ service }) {
  return (
    <article className="card service-card">
      <span className="icon-chip"><Icon name={service.icon} /></span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  )
}
