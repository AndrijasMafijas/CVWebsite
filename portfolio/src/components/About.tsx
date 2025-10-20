import { profile, extras } from '../data/content'

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <h2>About</h2>
      <p>{profile.summary}</p>
      {extras?.length ? (
        <ul className="skills" style={{ marginTop: '0.75rem' }}>
          {extras.map((e) => (
            <li key={e} className="badge">{e}</li>
          ))}
        </ul>
      ) : null}
    </div>
  </section>
)

export default About
