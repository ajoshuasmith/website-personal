const PROJECTS = [
  {
    name: 'Cloud Workplace Migration',
    detail:
      'Guided multiple organizations from legacy Active Directory footprints to cloud-first environments with secure score targets above 750 and remote work readiness.',
  },
  {
    name: 'Hypervisor Modernization',
    detail: 'Directed cross-platform migrations between VMware, Hyper-V, and open-source stacks with minimal downtime.',
  },
  {
    name: 'Process & Automation Program',
    detail:
      'Created a documentation-backed process library (~2.5k artifacts) and automation backlog that reduced manual engineer effort across service desks.',
  },
]

function Projects() {
  return (
    <article className="window-section">
      <p>Recent focus areas that showcase how I combine leadership, documentation, and technical depth.</p>
      <ul className="project-list">
        {PROJECTS.map((project) => (
          <li key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.detail}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Projects

