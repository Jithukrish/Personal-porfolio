import { useReveal } from '../hooks/useReveal'

/** Fade-up on scroll; `delay` in ms for staggering. Disabled by reduced-motion CSS. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} style={{ '--delay': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
