import { useState } from 'react'
import { profile } from '../data/content'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="container">
        <a className="brand" href="#hero">{profile.firstName} {profile.lastName}</a>
        <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <ul className={open ? 'open' : undefined} onClick={() => setOpen(false)}>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
