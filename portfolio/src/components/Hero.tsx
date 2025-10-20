import { profile as me, links } from '../data/content'

const base = import.meta.env.BASE_URL || '/'
const avatar = links.github ? `${links.github}.png` : `${base}vite.svg`

const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <div className="container hero-inner">
        <img
          className="avatar"
          src={avatar}
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = `${base}vite.svg` }}
          alt={`Profile — ${me.firstName} ${me.lastName}`}
        />
          <div className="hero-text">
            <h1>Hello, I'm {me.firstName} {me.lastName}</h1>
            <p>{me.headline}</p>
          <div className="hero-ctas">
            <a className="btn primary" href="#projects">See projects</a>
            <a className="btn" href="#contact">Contact me</a>
            {links.github && <a className="btn outline" href={links.github} target="_blank" rel="noreferrer">GitHub</a>}
            {links.linkedin && <a className="btn outline" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
            <a className="btn outline" href={`${base}cv.pdf`} download>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
