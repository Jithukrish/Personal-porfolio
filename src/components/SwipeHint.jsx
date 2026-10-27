import { ChevronsRight } from 'lucide-react'

/** Shown only on phones (CSS), below horizontally scrolling card rows. */
export default function SwipeHint() {
  return <p className="swipe-hint" aria-hidden="true">Swipe <ChevronsRight size={16} /></p>
}
