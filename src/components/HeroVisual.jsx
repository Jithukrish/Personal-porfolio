import { Workflow, Database, Plug, Boxes } from 'lucide-react'

/** Decorative CSS illustration. Contains no real data or metrics. */
export default function HeroVisual() {
  return (
    <figure className="hero-visual" aria-label="Illustration of a business dashboard, workflow and integrations">
      <svg className="hv-lines" viewBox="0 0 520 440" preserveAspectRatio="none" aria-hidden="true">
        <path d="M120 80 C 170 80, 190 150, 250 170" />
        <path d="M410 90 C 380 130, 340 150, 300 170" />
        <path d="M130 360 C 180 340, 210 290, 250 260" />
        <path d="M420 350 C 380 330, 340 290, 300 260" />
      </svg>

      <div className="hv-layer hv-layer--panel"><div className="hv-panel hv-dash">
        <div className="hv-bar"><i /><i /><i /><span>Operations overview</span></div>
        <div className="hv-kpis"><div /><div /><div /></div>
        <div className="hv-chart">{[40, 65, 50, 78, 58, 85, 70].map((h, i) => <span key={i} style={{ height: `${h}%`, '--i': i }} />)}</div>
        <div className="hv-rows"><div /><div /><div /></div>
      </div></div>

      <div className="hv-layer hv-layer--n1"><div className="hv-node hv-n1"><Boxes size={16} aria-hidden="true" /> Custom Form</div></div>
      <div className="hv-layer hv-layer--n2"><div className="hv-node hv-n2"><Workflow size={16} aria-hidden="true" /> Workflow</div></div>
      <div className="hv-layer hv-layer--n3"><div className="hv-node hv-n3"><Database size={16} aria-hidden="true" /> MariaDB</div></div>
      <div className="hv-layer hv-layer--n4"><div className="hv-node hv-n4"><Plug size={16} aria-hidden="true" /> REST API</div></div>

      <div className="hv-layer hv-layer--code"><pre className="hv-code" aria-hidden="true"><code>{`class SalesOrder(Document):
    def validate(self):
        self.check_credit()
        self.notify_team()`}</code></pre></div>

      <figcaption className="hv-caption">Illustrative graphic – not real data</figcaption>
    </figure>
  )
}
