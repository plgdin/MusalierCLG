import { useState } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  onOpenSearch: () => void;
}

export default function Header({ onOpenSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">M</div>
          <div className="logo-text">
            <span className="logo-main">MUSALIER</span>
            <span className="logo-sub">GROUP OF INSTITUTIONS</span>
          </div>
        </Link>
        
        <nav className="nav-links">
          <Link to="/#institutes">Our Institutes</Link>
          <Link to="/#navigation-hub">Campus Directory</Link>
          <Link to="/#about-highlight">About</Link>
          <Link to="/#news-events">Updates</Link>
        </nav>

        <div className="nav-actions">
          <button 
            className="search-trigger" 
            onClick={onOpenSearch} 
            title="Search Portal (Ctrl+K)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search...</span>
            <span className="search-kbd">⌘K</span>
          </button>
          
          <Link to="/#admissions-quick" className="btn-primary">Admissions 2026</Link>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown-nav" style={{ display: 'flex' }}>
          <Link to="/#institutes" onClick={() => setMobileMenuOpen(false)}>Our Institutes</Link>
          <Link to="/#navigation-hub" onClick={() => setMobileMenuOpen(false)}>Campus Directory</Link>
          <Link to="/#about-highlight" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/#news-events" onClick={() => setMobileMenuOpen(false)}>Updates</Link>
          <Link to="/#admissions-quick" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>Admissions 2026</Link>
        </div>
      )}
    </header>
  )
}
