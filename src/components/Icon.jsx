import {
  Boxes, Building2, Code2, Terminal, Database, Webhook, Settings2, Workflow, ChartColumn, Plug,
  LayoutDashboard, Table2, FileCode, Braces, ShieldCheck, CalendarClock, Target, Layers, Puzzle,
  Smartphone, MessagesSquare, RefreshCw, Box,
} from 'lucide-react'

const icons = {
  Boxes, Building2, Code2, Terminal, Database, Webhook, Settings2, Workflow, ChartColumn, Plug,
  LayoutDashboard, Table2, FileCode, Braces, ShieldCheck, CalendarClock, Target, Layers, Puzzle,
  Smartphone, MessagesSquare, RefreshCw,
}

/** Resolves an icon by name so data files stay plain strings. */
export default function Icon({ name, size = 22, ...rest }) {
  const Cmp = icons[name] || Box
  return <Cmp size={size} aria-hidden="true" {...rest} />
}
