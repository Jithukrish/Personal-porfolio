import { useEffect } from 'react'

/**
 * Pointer-driven polish, installed once for the whole page via event delegation:
 *  - `.card` spotlight: sets --mx/--my so CSS can paint a cursor-following glow
 *  - `.btn--lg` / `.nav-cta` magnetic pull
 *  - `.hero-visual` parallax: sets --px/--py in the range -1..1
 * Skipped entirely for touch-only devices and prefers-reduced-motion.
 */
export function useMotionEffects() {
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduced) return

    let magnet = null
    const onMove = (e) => {
      const card = e.target.closest?.('.card')
      if (card) {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${e.clientX - r.left}px`)
        card.style.setProperty('--my', `${e.clientY - r.top}px`)
      }

      const btn = e.target.closest?.('.btn--lg, .nav-cta')
      if (btn) {
        const r = btn.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        btn.style.translate = `${dx * 0.18}px ${dy * 0.28}px`
        magnet = btn
      } else if (magnet) {
        magnet.style.translate = ''
        magnet = null
      }

      const hv = e.target.closest?.('.hero')
      const visual = document.querySelector('.hero-visual')
      if (hv && visual) {
        const r = hv.getBoundingClientRect()
        visual.style.setProperty('--px', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3))
        visual.style.setProperty('--py', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3))
      }
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}
