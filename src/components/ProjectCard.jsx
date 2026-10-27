import { useState } from 'react'
import { ExternalLink, ImageOff } from 'lucide-react'
import ProjectPreview from './ProjectPreview'
import { GithubIcon } from './BrandIcons'

export default function ProjectCard({ project }) {
  const { name, category, description, technologies, features, isIllustrative, projectStatus, liveUrl, githubUrl, image, preview } = project
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <article className="card project-card">
      <div className="project-media">
        {image && !imgFailed ? (
          <img src={image} alt={`Screenshot of ${name}`} loading="lazy" onError={() => setImgFailed(true)} />
        ) : (
          <>
            <ProjectPreview kind={preview || 'erp'} />
            {image && imgFailed && <span className="img-fallback"><ImageOff size={14} aria-hidden="true" /> Screenshot unavailable</span>}
          </>
        )}
        <div className="project-badges">
          {isIllustrative && <span className="badge badge--warn">Illustrative Concept</span>}
          <span className="badge">{projectStatus}</span>
        </div>
      </div>
      <div className="project-body">
        <p className="project-category">{category}</p>
        <h3>{name}</h3>
        <p>{description}</p>
        <ul className="feature-list">{features.map((f) => <li key={f}>{f}</li>)}</ul>
        <ul className="tag-list" aria-label="Technologies used">{technologies.map((t) => <li key={t}>{t}</li>)}</ul>
        {(liveUrl || githubUrl) && (
          <div className="project-links">
            {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} aria-hidden="true" /> Live demo</a>}
            {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer"><GithubIcon size={16} /> Source</a>}
          </div>
        )}
      </div>
    </article>
  )
}
