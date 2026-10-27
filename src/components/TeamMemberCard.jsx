import Avatar from './Avatar'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function TeamMemberCard({ member }) {
  const { name, role, specialization, bio, image, github, linkedin, experience } = member
  return (
    <article className="card team-card">
      <Avatar name={name} image={image} />
      <h3>{name}</h3>
      <p className="team-role">{role}</p>
      {experience && <p className="badge team-exp">{experience} of experience</p>}
      <p className="team-spec"><span>Specialization</span>{specialization}</p>
      <p className="team-bio">{bio}</p>
      {(github || linkedin) && (
        <div className="social-row">
          {github && <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${name} on GitHub`}><GithubIcon /></a>}
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`}><LinkedinIcon /></a>}
        </div>
      )}
    </article>
  )
}
