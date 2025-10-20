import { profile } from '../data/content'

const Navbar = () => {
  

  return (
    <header className="navbar">
      <nav className="container">
        <a className="brand" href="#hero">{profile.firstName} {profile.lastName}</a>
        <ul>
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
