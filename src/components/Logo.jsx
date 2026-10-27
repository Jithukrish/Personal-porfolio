import logoDark from '../assets/images/logo.png'
import logoLight from '../assets/images/logo-light.png'
import { siteConfig } from '../config/siteConfig'

/** Brand mark image. `variant="light"` is for dark (espresso) surfaces. */
export default function Logo({ size = 50, variant = 'dark' }) {
  return (
    <img className="logo-img" src={variant === 'light' ? logoLight : logoDark} height={size} alt={`${siteConfig.name} logo`}
      style={{ height: size, width: 'auto' }} />
  )
}
