import { useMemo, useState } from 'react'
import { useProjects } from '../hooks/useProjects'
import SwipeHint from '../components/SwipeHint'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'

export default function ProjectsSection() {
  const { projects, status } = useProjects()
  const [filter, setFilter] = useState('All')
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [projects])
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
  const hasIllustrative = projects.some((p) => p.isIllustrative)

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" eyebrow="Projects" title="Selected Projects & Practical Work"
          description="A look at the types of business applications, ERP customizations, and integrations we work on." />

        {hasIllustrative && (
          <p className="disclaimer">
            Projects marked “Illustrative Concept” are example concepts, not verified client work or production deployments.
          </p>
        )}

        {status === 'ready' && projects.length > 0 && (
          <div className="filters" role="group" aria-label="Filter projects by category">
            {categories.map((c) => (
              <button key={c} type="button" className={`chip ${filter === c ? 'is-active' : ''}`} aria-pressed={filter === c}
                onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
        )}

        {status === 'loading' && <p className="empty" role="status">Loading projects…</p>}
        {status === 'error' && <p className="empty" role="alert">Projects could not be loaded right now.</p>}
        {status === 'ready' && projects.length === 0 && (
          <p className="empty">Projects will appear here soon.</p>
        )}

        <div className="grid grid--carousel grid--2">
          {visible.map((p, i) => <Reveal key={p.id} delay={(i % 2) * 80}><ProjectCard project={p} /></Reveal>)}
        </div>
        <SwipeHint />
      </div>
    </section>
  )
}
