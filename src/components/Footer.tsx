import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="nav-logo">
            <div className="logo-icon">M</div>
            <div className="logo-text">
              <span className="logo-main">MUSALIER</span>
              <span className="logo-sub">GROUP OF INSTITUTIONS</span>
            </div>
          </Link>
          <p className="brand-tagline">Providing quality value-based professional education to transform students into leaders of tomorrow.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">LI</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>
        
        <div className="footer-links-grid">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about/about-us/">About Us</Link></li>
              <li><Link to="/about/vision/">Vision & Mission</Link></li>
              <li><Link to="/about/principal/">Principal's Desk</Link></li>
              <li><Link to="/about/milestones/">Milestones</Link></li>
              <li><Link to="/careers/">Careers @ Musalier</Link></li>
            </ul>
          </div>
          <div>
            <h4>Admissions</h4>
            <ul>
              <li><Link to="/admissions/btech/">B.Tech</Link></li>
              <li><Link to="/admissions/mtech/">M.Tech</Link></li>
              <li><Link to="/admissions/mca/">MCA Program</Link></li>
              <li><Link to="/admissions/mba/">MBA Program</Link></li>
              <li><Link to="/admissions/fee-structure/">Fee Structure</Link></li>
            </ul>
          </div>
          <div>
            <h4>Campus Portal</h4>
            <ul>
              <li><Link to="/placements/placement-statistics/">Placements</Link></li>
              <li><Link to="/committees/anti-ragging/">Anti-Ragging Cell</Link></li>
              <li><Link to="/campus-life/nss/">NSS Unit</Link></li>
              <li><Link to="/academics/library/">Library</Link></li>
              <li><Link to="/contact-us/">Contact Campus</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Musalier Group of Institutions. All rights reserved. Approved by AICTE, affiliated to APJ Abdul Kalam Technological University & University of Kerala.</p>
      </div>
    </footer>
  )
}
