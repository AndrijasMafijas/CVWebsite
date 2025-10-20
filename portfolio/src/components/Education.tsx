import { education } from '../data/content'

const Education = () => (
  <section id="education" className="section">
    <div className="container">
      <h2>Education</h2>
      <ul className="timeline">
        {education.map((e) => (
          <li key={e.title + e.institution}>
            <h3>{e.title}</h3>
            <span>{e.institution}{e.period ? ` — ${e.period}` : ''}</span>
            {e.details && <p>{e.details}</p>}
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Education
