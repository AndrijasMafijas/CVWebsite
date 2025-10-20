import { profile, contact, links } from '../data/content'

const Footer = () => (
  <footer className="footer">
    <div className="container">
  <p>© {new Date().getFullYear()} {profile.firstName} {profile.lastName} — {contact.city}, {contact.country}</p>
  <p className="muted">Find me on
    {links.github && <> <a className="link" href={links.github} target="_blank" rel="noreferrer">GitHub</a></>}
    {links.linkedin && <> • <a className="link" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></>}
  </p>
    </div>
  </footer>
)

export default Footer
