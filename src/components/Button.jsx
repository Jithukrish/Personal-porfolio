/** Renders <a> when `href` is given (in-page anchors, links) otherwise <button>. */
export default function Button({ href, variant = 'primary', size = 'md', children, className = '', ...rest }) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim()
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a className={cls} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    )
  }
  return <button className={cls} type="button" {...rest}>{children}</button>
}
