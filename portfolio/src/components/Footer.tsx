import { profile, contact } from '../data/content'

const Footer = () => (
  <footer className="footer">
    <div className="container">
  <p>© {new Date().getFullYear()} {profile.firstName} {profile.lastName} — {contact.city}, {contact.country}</p>
    </div>
  </footer>
)

export default Footer
