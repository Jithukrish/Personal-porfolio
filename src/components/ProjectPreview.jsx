/** Generated, data-free preview art used when a project has no screenshot. Purely decorative. */
export default function ProjectPreview({ kind }) {
  const bars = [38, 62, 48, 80, 56, 70]
  return (
    <div className={`preview preview--${kind}`} aria-hidden="true">
      {kind === 'erp' && (
        <div className="pv-table">
          <div className="pv-head"><i /><i /><i /></div>
          {[0, 1, 2, 3].map((r) => (
            <div className="pv-row" key={r}><b /><span /><em /></div>
          ))}
        </div>
      )}
      {kind === 'dashboard' && (
        <div className="pv-dash">
          <div className="pv-cards"><i /><i /><i /></div>
          <div className="pv-bars">{bars.map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div>
        </div>
      )}
      {kind === 'integration' && (
        <svg viewBox="0 0 240 120" className="pv-svg">
          <path d="M50 60H100M140 60H190M120 40V20M120 80V100" />
          <rect x="20" y="42" width="40" height="36" rx="8" />
          <rect x="100" y="42" width="40" height="36" rx="8" className="hub" />
          <rect x="180" y="42" width="40" height="36" rx="8" />
          <circle cx="120" cy="14" r="8" /><circle cx="120" cy="106" r="8" />
        </svg>
      )}
      {kind === 'workflow' && (
        <svg viewBox="0 0 240 120" className="pv-svg">
          <path d="M52 60H88M152 60H188M120 78V92" />
          <circle cx="36" cy="60" r="16" /><rect x="88" y="42" width="64" height="36" rx="10" className="hub" />
          <circle cx="204" cy="60" r="16" /><rect x="96" y="92" width="48" height="18" rx="6" />
        </svg>
      )}
    </div>
  )
}
