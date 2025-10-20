import { skillGroups } from '../data/content'

const topSkills = (() => {
  const all = skillGroups.flatMap((g) => g.items)
  return all.sort((a, b) => b.level - a.level).slice(0, 6)
})()

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <h2>Skills</h2>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 style={{ marginTop: 0 }}>Featured skills</h3>
        <ul className="skill-list">
          {topSkills.map((it) => (
            <li key={it.name} className="skill-item">
              <div className="skill-header">
                <span>{it.name}</span>
                <span className="muted">{it.level}%</span>
              </div>
              <div className="bar">
                <div className="bar-fill" style={{ width: `${it.level}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
  <h3 style={{ margin: '0.25rem 0 0.5rem' }}>All Skills</h3>
  <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="card">
            <h3 style={{ marginTop: 0 }}>{group.category}</h3>
            <ul className="skill-list">
              {group.items.map((it) => (
                <li key={it.name} className="skill-item">
                  <div className="skill-header">
                    <span>{it.name}</span>
                    <span className="muted">{it.level}%</span>
                  </div>
                  <div className="bar">
                    <div className="bar-fill" style={{ width: `${it.level}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
