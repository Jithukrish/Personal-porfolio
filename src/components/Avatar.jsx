import { useState } from 'react'

const initialsOf = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join('')

/** Photo with graceful fallback to an initials avatar (no image, or load failure). */
export default function Avatar({ name, image }) {
  const [failed, setFailed] = useState(false)
  if (image && !failed) {
    return <img className="avatar" src={image} alt={`Portrait of ${name}`} loading="lazy" onError={() => setFailed(true)} />
  }
  return <div className="avatar avatar--initials" role="img" aria-label={`${name} avatar`}>{initialsOf(name)}</div>
}
