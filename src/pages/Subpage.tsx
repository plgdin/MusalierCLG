import { useLocation, Link, Navigate } from 'react-router-dom'
import { pages } from '../contentIndex'

interface PageItem {
  id?: string | number;
  subPath: string;
  url: string;
  category: string;
  categoryBadge?: string;
  categoryTitle?: string;
  title: string;
  desc?: string;
  details?: Array<{ label: string; value: string }>;
  [key: string]: any;
}

const typedPages = pages as PageItem[];

export default function Subpage() {
  const { pathname } = useLocation()

  // Slashes cleanup to map pathname (e.g. "/about/about-us/") to subPath (e.g. "about/about-us")
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '')

  // Redirect maps matching build.js static redirects
  const redirects: Record<string, string> = {
    'about': '/about/about-us/',
    'academics': '/academics/departments/cse/',
    'accreditation-quality': '/accreditation-quality/naac/',
    'administration': '/administration/principal/',
    'admissions': '/admissions/btech/',
    'alumni': '/alumni/alumni-association/',
    'campus-life': '/campus-life/hostel/',
    'clubs-societies': '/clubs-societies/ieee/',
    'committees': '/committees/anti-ragging/',
    'examinations': '/examinations/exam-cell/',
    'infrastructure': '/infrastructure/smart-classrooms/',
    'news-events': '/news-events/latest-news/',
    'placements': '/placements/placement-statistics/',
    'research-innovation': '/research-innovation/research-cell/'
  }

  // If path matches a category redirect, redirect to first child
  if (redirects[cleanPath]) {
    return <Navigate to={redirects[cleanPath]} replace />
  }

  // Find matching page
  const currentPage = typedPages.find(p => p.subPath === cleanPath)

  if (!currentPage) {
    // Elegant 404 page if page is not found
    return (
      <div className="error-page" style={{ padding: '80px 20px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: '72px', display: 'block', marginBottom: '20px' }}>🔍</span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fff' }}>Page Not Found</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '500px', margin: '0 auto 30px' }}>The page you are looking for does not exist or has been moved to a new folder in our modular directory structure.</p>
        <Link to="/" className="btn-primary">Return to Campus Portal</Link>
      </div>
    )
  }

  // Fetch sibling pages in the same category for left sidebar navigation
  const siblingPages = typedPages.filter(p => p.category === currentPage.category)

  return (
    <div className="subpage-wrapper" style={{ minHeight: '80vh', padding: '120px 0 60px' }}>
      {/* Category Banner */}
      <div className="subpage-banner" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '30px', marginBottom: '40px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="badge" style={{ display: 'inline-flex', marginBottom: '15px' }}>
            <span className="badge-dot"></span>
            {currentPage.categoryBadge || currentPage.categoryTitle || 'Musalier Portal'}
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fff', lineHeight: '1.2' }}>{currentPage.title}</h1>
          {currentPage.desc && (
            <p style={{ fontSize: '1.1rem', opacity: 0.8, marginTop: '15px', maxWidth: '800px', lineHeight: '1.6' }}>{currentPage.desc}</p>
          )}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="subpage-layout-grid" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px' }}>
          
          {/* Left Sidebar Navigation */}
          <aside className="subpage-sidebar" style={{ alignSelf: 'start', position: 'sticky', top: '100px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '20px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', color: '#fff', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '10px' }}>
                {currentPage.categoryTitle || 'Sections'}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {siblingPages.map(sib => (
                  <li key={sib.id ?? sib.subPath}>
                    <Link 
                      to={sib.url}
                      style={{
                        display: 'block',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s',
                        color: sib.subPath === cleanPath ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                        background: sib.subPath === cleanPath ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                        fontWeight: sib.subPath === cleanPath ? '600' : '400',
                        borderLeft: sib.subPath === cleanPath ? '3px solid #ff7b00' : '3px solid transparent'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLElement;
                        if (sib.subPath !== cleanPath) {
                          target.style.color = '#fff'
                          target.style.background = 'rgba(255, 255, 255, 0.02)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLElement;
                        if (sib.subPath !== cleanPath) {
                          target.style.color = 'rgba(255, 255, 255, 0.7)'
                          target.style.background = 'transparent'
                        }
                      }}
                    >
                      {sib.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right Main Content */}
          <section className="subpage-main-content">
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '40px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#fff', marginBottom: '25px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '15px' }}>
                Official Campus Details
              </h2>
              
              {currentPage.details && currentPage.details.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {currentPage.details.map((detail, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '250px 1fr', 
                        gap: '20px', 
                        padding: '15px 0', 
                        borderBottom: idx < (currentPage.details?.length ?? 0) - 1 ? '1px solid rgba(255, 255, 255, 0.04)' : 'none' 
                      }}
                    >
                      <strong style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', fontWeight: '600' }}>{detail.label}</strong>
                      <span style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: '1.5', whiteSpace: 'pre-line' }}>{detail.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ opacity: 0.6, fontSize: '0.95rem' }}>No further details specified for this section. Please contact the administrative office for additional inquiries.</p>
              )}

              <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', gap: '15px' }}>
                <Link to="/#navigation-hub" className="btn-secondary">
                  ← Back to Directory
                </Link>
                <Link to="/#admissions-quick" className="btn-primary">
                  Admissions Enquiry
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
