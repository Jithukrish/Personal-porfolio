import { docFlow } from '../data/content'

/** Animated order-to-cash chain. Order is carried by numbers and arrows; the glow is decorative. */
export default function DocFlow() {
  return (
    <ol className="docflow" aria-label="Typical ERPNext order-to-cash document flow">
      {docFlow.map((d, i) => (
        <li key={d} className="docflow-step" style={{ '--i': i }}>
          <span className="docflow-num" aria-hidden="true">{i + 1}</span>
          <span className="docflow-name">{d}</span>
        </li>
      ))}
    </ol>
  )
}
