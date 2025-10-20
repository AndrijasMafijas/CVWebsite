import { experience } from '../data/content'

const Experience = () => (
  <section id="experience" className="section">
    <div className="container">
      <h2>Experience</h2>
      <ul className="timeline">
        {experience.map((x) => (
          <li key={x.title + (x.period || '')}>
            <h3>{x.title}</h3>
            {x.period && <span>{x.period}</span>}
            {x.description && <p>{x.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Experience
