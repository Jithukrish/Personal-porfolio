/**
 * Ordered, numbered steps. Order is conveyed by the number + <ol> semantics + arrows,
 * never by colour alone. Horizontal on desktop, vertical on mobile (CSS).
 */
export default function WorkflowTimeline({ steps, label, variant = 'flow' }) {
  return (
    <ol className={`timeline timeline--${variant}`} aria-label={label}>
      {steps.map((step, i) => {
        const title = typeof step === 'string' ? step : step.title
        const text = typeof step === 'string' ? null : step.text
        return (
          <li key={title} className="timeline-item">
            <span className="timeline-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <div className="timeline-body">
              <h3>{title}</h3>
              {text && <p>{text}</p>}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
