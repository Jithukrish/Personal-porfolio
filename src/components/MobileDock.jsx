import { House, Layers, LayoutGrid, Users, MessageCircle } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'

const items = [
  { id: 'home', label: 'Home', Icon: House },
  { id: 'services', label: 'Services', Icon: Layers },
  { id: 'projects', label: 'Projects', Icon: LayoutGrid },
  { id: 'team', label: 'Team', Icon: Users },
  { id: 'contact', label: 'Contact', Icon: MessageCircle },
]
const ids = items.map((i) => i.id)

/** App-style floating tab bar, shown on tablets/phones only (CSS). Mirrors the main nav's anchors. */
export default function MobileDock() {
  const active = useActiveSection(ids)
  return (
    <nav className="dock" aria-label="Quick navigation">
      <ul>
        {items.map(({ id, label, Icon }) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
              <Icon size={20} aria-hidden="true" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
