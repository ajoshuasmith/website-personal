const SKILL_GROUPS = [
  {
    title: 'Leadership & Delivery',
    items: ['Service desk direction', 'Project ownership', 'Mentorship & growth plans'],
  },
  {
    title: 'Process & Enablement',
    items: ['Playbook creation (2,500+ docs)', 'ITIL-aligned workflows', 'Partner onboarding'],
  },
  {
    title: 'Automation & Platforms',
    items: ['RMM / RPA design', 'Conditional access & SSO', 'Apple / endpoint management'],
  },
  {
    title: 'Security & Compliance',
    items: ['Incident readiness', 'Device compliance posture', 'Patch management for CVEs'],
  },
]

function Skills() {
  return (
    <article className="window-section">
      <p>Focused on blending people, process, and tooling so teams can operate with confidence.</p>
      <div className="skill-grid">
        {SKILL_GROUPS.map((group) => (
          <section key={group.title} className="skill-card">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  )
}

export default Skills

