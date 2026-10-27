import { Coins, Package, ShoppingCart, ShoppingBag, Filter, Users, Cog, ListChecks, Boxes } from 'lucide-react'
import { erpModules } from '../data/content'

const icons = { Coins, Package, ShoppingCart, ShoppingBag, Filter, Users, Cog, ListChecks }

/**
 * ERPNext modules arranged on a slowly rotating ring around a hub.
 * Items counter-rotate so they stay upright; hover/focus pauses the ring and reveals a description.
 * On small screens CSS flattens the ring into a grid.
 */
export default function ErpOrbit() {
  return (
    <div className="orbit" role="group" aria-label="ERPNext modules">
      <span className="orbit-ring orbit-ring--1" aria-hidden="true" />
      <span className="orbit-ring orbit-ring--2" aria-hidden="true" />
      <div className="orbit-hub" aria-hidden="true">
        <span className="ripple" /><span className="ripple ripple--2" />
        <Boxes size={26} />
        <b>ERPNext</b>
      </div>
      <ul className="orbit-track">
        {erpModules.map((m, i) => {
          const Cmp = icons[m.icon]
          return (
            <li key={m.id} className="orbit-item" style={{ '--a': `${(360 / erpModules.length) * i}deg` }} tabIndex={0}>
              <div className="orbit-inner">
                <span className={`orbit-ico motion-${m.motion}`}><Cmp size={26} aria-hidden="true" /></span>
                <strong>{m.title}</strong>
                <span className="orbit-tip">{m.text}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
