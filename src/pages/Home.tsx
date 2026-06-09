import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface HomeProps {
  onOpenSearch: () => void;
}

interface SitemapLink {
  label: string;
  to?: string;
  id?: string;
  isSubheader?: boolean;
  className?: string;
}

interface SitemapGroup {
  category: string;
  header: string;
  icon: React.ReactNode;
  links: SitemapLink[];
}

export default function Home({ onOpenSearch }: HomeProps) {
  const [filterQuery, setFilterQuery] = useState('')
  const [enquirySubmitted, setEnquirySubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: ''
  })
  const navigate = useNavigate()

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnquirySubmitted(true)
  }

  // Sitemap link data structure to support live filtering easily in React
  const sitemapData: SitemapGroup[] = [
    {
      category: 'about-us',
      header: '1. About Us',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      links: [
        { label: '1.1 Why Us', isSubheader: true },
        { label: 'Vision & Mission', to: '/about/vision/', id: 'vision' },
        { label: 'Values', to: '/about/vision/#values', id: 'values' },
        { label: 'Why Choose Us', to: '/about/about-us/#why-choose-us', id: 'why-choose-us' },
        { label: 'Key Highlights', to: '/about/milestones/#highlights', id: 'highlights' },
        { label: '1.2 About the Institution', isSubheader: true },
        { label: 'History', to: '/about/milestones/#history', id: 'history' },
        { label: 'Approvals & Affiliations', to: '/about/accreditation/#approvals', id: 'approvals' },
        { label: 'Accreditations', to: '/about/accreditation/', id: 'accreditation' },
        { label: 'Rankings & Recognitions', to: '/about/accreditation/#rankings', id: 'rankings' },
        { label: 'Awards & Achievements', to: '/about/milestones/#awards', id: 'awards' },
        { label: '1.3 Leadership', isSubheader: true },
        { label: 'Board of Governors', to: '/administration/governing-council/', id: 'bog' },
        { label: 'Principal', to: '/about/principal/', id: 'principal' },
        { label: 'Vice Principal', to: '/administration/vice-principal/', id: 'vice-principal' },
        { label: 'Dean Academics', to: '/administration/dean/', id: 'dean-academics' },
        { label: 'Administrative Officers', to: '/administration/office/', id: 'admin-officers' },
        { label: '1.4 Governance', isSubheader: true },
        { label: 'Organizational Structure', to: '/administration/office/#org-structure', id: 'org-structure' },
        { label: 'Committees', to: '/committees/anti-ragging/', id: 'committees' },
        { label: 'Policies', to: '/research-innovation/research-policies/', id: 'policies' },
        { label: 'Strategic Plan', to: '/administration/governing-council/#strategic-plan', id: 'strategic-plan' },
        { label: '1.5 Mandatory Disclosures', isSubheader: true },
        { label: 'AICTE Disclosure', to: '/accreditation-quality/aishe/#aicte', id: 'aicte' },
        { label: 'NAAC Disclosure', to: '/accreditation-quality/naac/', id: 'naac' },
        { label: 'NIRF', to: '/accreditation-quality/nirf/', id: 'nirf' },
        { label: 'ARIIA', to: '/accreditation-quality/iqac/#ariia', id: 'ariia' }
      ]
    },
    {
      category: 'academics',
      header: '2. Academics',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      links: [
        { label: '2.1 Programs Offered', isSubheader: true },
        { label: 'B.Tech', to: '/admissions/btech/', id: 'btech' },
        { label: 'M.Tech', to: '/admissions/mtech/', id: 'mtech' },
        { label: 'MBA', to: '/admissions/mba/', id: 'mba' },
        { label: 'MCA', to: '/admissions/mca/', id: 'mca' },
        { label: 'Ph.D.', to: '/academics/departments/hss/#phd', id: 'phd' },
        { label: '2.2 Departments', isSubheader: true },
        { label: 'Computer Science & Eng', to: '/academics/departments/cse/', id: 'cse', className: 'font-semibold' },
        { label: 'CSE (Artificial Intelligence)', to: '/academics/departments/cse-aiml/', id: 'cse-aiml', className: 'font-semibold' },
        { label: 'Artificial Intelligence & Data Science', to: '/academics/departments/ai-ds/', id: 'ai-ds', className: 'font-semibold' },
        { label: 'CSE (Cyber Security)', to: '/academics/departments/cyber-security/', id: 'cyber-security', className: 'font-semibold' },
        { label: 'Electronics & Comm Eng', to: '/academics/departments/ece/', id: 'ece', className: 'font-semibold' },
        { label: 'Electronics (VLSI Design & Tech)', to: '/academics/departments/vlsi-design/', id: 'vlsi-design', className: 'font-semibold' },
        { label: 'Electrical & Electronics Eng', to: '/academics/departments/eee/', id: 'eee', className: 'font-semibold' },
        { label: 'Mechanical Engineering', to: '/academics/departments/me/', id: 'me', className: 'font-semibold' },
        { label: 'Civil Engineering', to: '/academics/departments/ce/', id: 'ce', className: 'font-semibold' },
        { label: 'Applied Sciences', to: '/academics/departments/hss/', id: 'applied-sciences' },
        { label: 'Humanities & Management', to: '/academics/departments/mba/', id: 'humanities-mgmt' },
        { label: '2.3 Academic Resources', isSubheader: true },
        { label: 'Academic Calendar', to: '/academics/academic-calendar/', id: 'academic-calendar' },
        { label: 'Examination Cell', to: '/examinations/exam-cell/', id: 'exam-cell' },
        { label: 'Regulations & Curriculum', to: '/academics/regulations/', id: 'regulations' },
        { label: 'Time Tables', to: '/examinations/timetable/', id: 'timetable' },
        { label: 'Results', to: '/examinations/results/', id: 'results' },
        { label: 'Student Handbook', to: '/academics/regulations/#handbook', id: 'handbook' },
        { label: '2.4 Admissions', isSubheader: true },
        { label: 'Undergraduate Admissions', to: '/admissions/btech/#ug', id: 'ug-admissions' },
        { label: 'Postgraduate Admissions', to: '/admissions/mca/#pg', id: 'pg-admissions' },
        { label: 'Ph.D. Admissions', to: '/admissions/eligibility/#phd', id: 'phd-admissions' },
        { label: 'Lateral Entry', to: '/admissions/procedure/#lateral', id: 'lateral-entry' },
        { label: 'Fee Structure', to: '/admissions/fee-structure/', id: 'fee-structure' },
        { label: 'Scholarships', to: '/admissions/eligibility/#scholarships', id: 'scholarships' },
        { label: 'How to Apply', to: '/admissions/procedure/', id: 'how-to-apply' }
      ]
    },
    {
      category: 'placements',
      header: '3. Placements',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      links: [
        { label: '3.1 Placement Overview', isSubheader: true },
        { label: 'Placement Statistics', to: '/placements/placement-statistics/', id: 'placement-stats' },
        { label: 'Placement Records', to: '/placements/placement-statistics/#records', id: 'placement-records' },
        { label: 'Highest Packages', to: '/placements/placement-statistics/#highest', id: 'highest-packages' },
        { label: 'Average Packages', to: '/placements/placement-statistics/#average', id: 'avg-packages' },
        { label: '3.2 Training & Development', isSubheader: true },
        { label: 'Training Interventions', to: '/placements/training-placement-cell/#interventions', id: 'interventions' },
        { label: 'Skill Development Programs', to: '/placements/training-placement-cell/#programs', id: 'skill-dev' },
        { label: 'Workshops', to: '/placements/training-placement-cell/#workshops', id: 'placement-workshops' },
        { label: 'Certification Programs', to: '/placements/training-placement-cell/#certifications', id: 'certifications' },
        { label: 'Mock Interviews', to: '/placements/training-placement-cell/#mock', id: 'mock-interviews' },
        { label: '3.3 Career Development', isSubheader: true },
        { label: 'Individual Development Plan', to: '/placements/career-guidance/#idp', id: 'idp' },
        { label: 'Career Development Cell (CDC)', to: '/placements/career-guidance/', id: 'cdc' },
        { label: 'Career Counseling', to: '/placements/career-guidance/#counseling', id: 'counseling' },
        { label: 'Aptitude Training', to: '/placements/career-guidance/#aptitude', id: 'aptitude' },
        { label: '3.4 Placement Gallery', isSubheader: true },
        { label: 'Recruiters', to: '/placements/recruiters/', id: 'recruiters' },
        { label: 'Placement Events', to: '/placements/placement-gallery/#events', id: 'placement-events' },
        { label: 'Student Testimonials', to: '/placements/placement-gallery/#testimonials', id: 'testimonials' },
        { label: '3.5 Industry Connect', isSubheader: true },
        { label: 'MoUs & Collaborations', to: '/academics/collaborations/', id: 'mous' },
        { label: 'Internships', to: '/placements/internship-programs/', id: 'internships' },
        { label: 'Industry Visits', to: '/campus-life/industrial-visits/', id: 'industry-visits' },
        { label: 'Corporate Talks', to: '/placements/training-placement-cell/#talks', id: 'corp-talks' }
      ]
    },
    {
      category: 'research',
      header: '4. Research',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      links: [
        { label: '4.1 Research Ecosystem', isSubheader: true },
        { label: 'Overview', to: '/research-innovation/research-cell/', id: 'research-overview' },
        { label: 'Research Vision', to: '/research-innovation/research-cell/#vision', id: 'research-vision' },
        { label: 'Research Policy', to: '/research-innovation/research-policies/', id: 'research-policy' },
        { label: 'Centres of Excellence', to: '/research-innovation/innovation-hub/#centers', id: 'centers-excellence' },
        { label: '4.2 Research Support', isSubheader: true },
        { label: 'Funded Projects', to: '/research-innovation/funded-projects/', id: 'funded-projects' },
        { label: 'Research Grants', to: '/research-innovation/funded-projects/#grants', id: 'research-grants' },
        { label: 'KTU Approved Guides', to: '/research-innovation/publications/#guides', id: 'ktu-guides' },
        { label: 'Consultancy', to: '/research-innovation/consultancy/', id: 'consultancy' },
        { label: '4.3 Research Showcase', isSubheader: true },
        { label: 'R&D Gallery', to: '/research-innovation/innovation-hub/#gallery', id: 'rd-gallery' },
        { label: 'Publications', to: '/research-innovation/publications/', id: 'publications' },
        { label: 'Patents', to: '/research-innovation/patents/', id: 'patents' },
        { label: 'Research Awards', to: '/research-innovation/publications/#awards', id: 'research-awards' },
        { label: 'Conferences', to: '/research-innovation/publications/#conferences', id: 'conferences' },
        { label: '4.4 Innovation & IPR', isSubheader: true },
        { label: 'Innovation & Incubation', to: '/research-innovation/innovation-hub/', id: 'innovation-incubation' },
        { label: 'IPR Cell', to: '/research-innovation/patents/#ipr', id: 'ipr-cell' },
        { label: 'Start-up Support', to: '/research-innovation/iedc/#startup', id: 'startup-support' }
      ]
    },
    {
      category: 'life-at-us',
      header: '5. Life @ Us',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      links: [
        { label: '5.1 Life @ Us', isSubheader: true },
        { label: 'Student Clubs', to: '/campus-life/cultural-activities/#clubs', id: 'student-clubs' },
        { label: 'Events & Fests', to: '/campus-life/cultural-activities/#events', id: 'events-fests' },
        { label: 'Cultural Activities', to: '/campus-life/cultural-activities/', id: 'cultural-activities' },
        { label: 'Community Outreach', to: '/campus-life/student-welfare/#outreach', id: 'community-outreach' },
        { label: '5.2 Sports', isSubheader: true },
        { label: 'Sports Facilities', to: '/campus-life/sports-games/#facilities', id: 'sports-facilities' },
        { label: 'Sports Achievements', to: '/campus-life/sports-games/#achievements', id: 'sports-achievements' },
        { label: 'Teams & Events', to: '/campus-life/sports-games/', id: 'teams-events' },
        { label: '5.3 IEDC', isSubheader: true },
        { label: 'About IEDC', to: '/clubs-societies/iedc/', id: 'about-iedc' },
        { label: 'Start-up Ecosystem', to: '/clubs-societies/iedc/#ecosystem', id: 'startup-ecosystem' },
        { label: 'Innovation Programs', to: '/clubs-societies/iedc/#programs', id: 'innovation-programs' },
        { label: 'Success Stories', to: '/clubs-societies/iedc/#success', id: 'success-stories' },
        { label: '5.4 NSS', isSubheader: true },
        { label: 'About NSS', to: '/campus-life/nss/', id: 'about-nss' },
        { label: 'Activities', to: '/campus-life/nss/#activities', id: 'nss-activities' },
        { label: 'Social Initiatives', to: '/campus-life/nss/#initiatives', id: 'social-initiatives' },
        { label: 'Gallery', to: '/campus-life/nss/#gallery', id: 'nss-gallery' }
      ]
    },
    {
      category: 'campus',
      header: '6. Campus',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      links: [
        { label: '6.1 Campus Overview', to: '/campus-life/hostel/#campus-overview', id: 'campus-overview', className: 'font-semibold' },
        { label: '6.2 Infrastructure', isSubheader: true },
        { label: 'Library', to: '/infrastructure/central-library/', id: 'lib' },
        { label: 'Laboratories', to: '/infrastructure/department-laboratories/', id: 'laboratories' },
        { label: 'Hostels', to: '/campus-life/hostel/', id: 'hostels' },
        { label: 'IT Facilities', to: '/infrastructure/computer-labs/', id: 'it-facilities' },
        { label: 'Transport', to: '/campus-life/transportation/', id: 'transport' },
        { label: '6.3 Facilities', isSubheader: true },
        { label: 'Auditorium', to: '/infrastructure/auditorium/', id: 'auditorium' },
        { label: 'Seminar Halls', to: '/infrastructure/seminar-hall/', id: 'seminar-halls' },
        { label: 'Medical Facility', to: '/campus-life/student-welfare/#medical', id: 'medical-facility' },
        { label: 'Cafeteria', to: '/infrastructure/cafeteria/', id: 'cafeteria' },
        { label: 'Bank & ATM', to: '/infrastructure/wifi-campus/#facilities', id: 'bank-atm' },
        { label: '6.4 Virtual Tour', to: '/campus-life/gallery/#virtual-tour', id: 'virtual-tour', className: 'font-semibold' }
      ]
    },
    {
      category: 'resources',
      header: '7. Resources',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      links: [
        { label: '7.1 Downloads', isSubheader: true },
        { label: 'Forms', to: '/academics/academic-calendar/#downloads', id: 'forms' },
        { label: 'Brochures', to: '/admissions/procedure/#brochures', id: 'brochures' },
        { label: 'Syllabus', to: '/academics/regulations/#syllabus', id: 'syllabus' },
        { label: 'Regulations', to: '/academics/regulations/', id: 'downloads-regulations' },
        { label: '7.2 Digital Resources', isSubheader: true },
        { label: 'E-Library', to: '/academics/library/#elibrary', id: 'elibrary' },
        { label: 'NPTEL / Online Courses', to: '/academics/library/#nptel', id: 'nptel' },
        { label: 'Institute ERP', to: '/infrastructure/wifi-campus/#erp', id: 'institute-erp' },
        { label: '7.3 Student Portal', isSubheader: true },
        { label: 'Login', to: '/infrastructure/wifi-campus/#login', id: 'portal-login' },
        { label: 'Help Desk', to: '/campus-life/student-welfare/#helpdesk', id: 'portal-helpdesk' }
      ]
    },
    {
      category: 'news-events-main',
      header: '8. News & Events',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      links: [
        { label: '8.1 News', to: '/news-events/latest-news/', id: 'news-link', className: 'font-semibold' },
        { label: '8.2 Events', isSubheader: true },
        { label: 'Upcoming Events', to: '/news-events/events-calendar/#upcoming', id: 'upcoming-events' },
        { label: 'Past Events', to: '/news-events/events-calendar/#past', id: 'past-events' },
        { label: '8.3 Announcements', to: '/news-events/announcements/', id: 'announcements', className: 'font-semibold' },
        { label: '8.4 Newsletter', to: '/campus-life/newsletter/', id: 'newsletter', className: 'font-semibold' }
      ]
    },
    {
      category: 'contact-us-main',
      header: '9. Contact Us',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      links: [
        { label: '9.1 Contact Information', to: '/contact-us/', id: 'contact-info', className: 'font-semibold' },
        { label: '9.2 Map & Directions', to: '/contact-us/#map', id: 'map-directions', className: 'font-semibold' },
        { label: '9.3 Enquiry Form', to: '/contact-us/#enquiry', id: 'enquiry-form', className: 'font-semibold' },
        { label: '9.4 Feedback', to: '/contact-us/#feedback', id: 'feedback', className: 'font-semibold' }
      ]
    },
    {
      category: 'others',
      header: '10. Others',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      ),
      links: [
        { label: '10.1 Gallery', to: '/campus-life/gallery/', id: 'gallery', className: 'font-semibold' },
        { label: '10.2 Alumni', isSubheader: true },
        { label: 'Alumni Directory', to: '/alumni/alumni-association/#directory', id: 'alumni-directory' },
        { label: 'Alumni Stories', to: '/alumni/success-stories/', id: 'alumni-stories' },
        { label: 'Alumni Events', to: '/alumni/alumni-meet/', id: 'alumni-events' },
        { label: '10.3 Careers', isSubheader: true },
        { label: 'Job Openings', to: '/careers/', id: 'job-openings' },
        { label: 'Apply Now', to: '/careers/#apply', id: 'apply-now' },
        { label: '10.4 RTI', to: '/accreditation-quality/iqac/#rti', id: 'rti', className: 'font-semibold' },
        { label: '10.5 Grievance Redressal', to: '/committees/student-grievance/', id: 'grievance-redressal', className: 'font-semibold' }
      ]
    }
  ]

  // Filter logic for sitemap with subheader grouping
  const query = filterQuery.toLowerCase().trim()
  const filteredSitemap = sitemapData.map(group => {
    if (!query) return group

    // Step 1: Identify matching leaf links
    const matchedLinkIds = new Set<string>()
    group.links.forEach(link => {
      if (!link.isSubheader) {
        if (
          link.label.toLowerCase().includes(query) ||
          (link.id && link.id.toLowerCase().includes(query))
        ) {
          if (link.id) matchedLinkIds.add(link.id)
        }
      }
    })

    // Step 2: Build filtered list, including corresponding subheaders if any of their children matched
    const matchingLinks: SitemapLink[] = []
    for (let i = 0; i < group.links.length; i++) {
      const link = group.links[i]
      if (link.isSubheader) {
        let hasMatchedChild = false
        for (let j = i + 1; j < group.links.length; j++) {
          const nextLink = group.links[j]
          if (nextLink.isSubheader) break
          if (nextLink.id && matchedLinkIds.has(nextLink.id)) {
            hasMatchedChild = true
            break
          }
        }
        if (hasMatchedChild) {
          matchingLinks.push(link)
        }
      } else {
        if (link.id && matchedLinkIds.has(link.id)) {
          matchingLinks.push(link)
        }
      }
    }

    return {
      ...group,
      links: matchingLinks
    }
  }).filter(group => group.links.length > 0)

  const handleInstituteClick = (target: string) => {
    const urlMapping: Record<string, string> = {
      'college-of-engineering': '/academics/departments/cse/',
      'college-of-architecture': '/about/milestones/',
      'college-of-commerce-science': '/about/milestones/',
      'public-school': '/about/milestones/'
    }
    if (urlMapping[target]) {
      navigate(urlMapping[target])
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-info">
            <div className="badge">
              <span className="badge-dot"></span>
              NAAC A+ Accredited Institution
            </div>
            <h1>Empowering Minds, Shaping the Future</h1>
            <p className="hero-desc">Discover a world of academic excellence, cutting-edge research, and top-tier industrial placements at Musalier Group of Institutions.</p>
            
            <div className="hero-search-wrapper">
              <div className="hero-search-bar" onClick={onOpenSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="placeholder-text">Find your department, club, placement stats, or hostel cell...</span>
                <span className="search-badge">Explore</span>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">98%</span>
                <span className="stat-label">Placements</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">15+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">5000+</span>
                <span className="stat-label">Global Alumni</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-card">
              <img 
                src="/assets/hero_banner.png" 
                alt="Musalier Campus Building" 
                className="hero-img" 
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} 
              />
              <div className="visual-badge">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <p className="vb-title">Pathanamthitta Campus</p>
                  <p className="vb-subtitle">Kerala, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Institutes Section */}
      <section id="institutes" className="institutes-section">
        <div className="section-header">
          <span className="section-tag">Academic Wings</span>
          <h2>Visit Our Institute Portals</h2>
          <p>We host diverse professional and high-level educational colleges committed to quality training.</p>
        </div>

        <div className="institutes-grid">
          {/* Card 1: Engineering */}
          <div className="institute-card" onClick={() => handleInstituteClick('college-of-engineering')}>
            <div className="inst-glow-effect"></div>
            <div className="card-icon-wrapper gears-bg">
              <svg xmlns="http://www.w3.org/2000/svg" className="inst-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3>College of Engineering</h3>
            <p>AICTE Approved & NBA Accredited B.Tech & M.Tech Programs in CSE, ECE, ME, EEE, CE, and AI&ML.</p>
            <span className="learn-more">Explore Wing →</span>
          </div>

          {/* Card 2: Architecture */}
          <div className="institute-card" onClick={() => handleInstituteClick('college-of-architecture')}>
            <div className="inst-glow-effect"></div>
            <div className="card-icon-wrapper building-bg">
              <svg xmlns="http://www.w3.org/2000/svg" className="inst-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3>College of Architecture</h3>
            <p>COA Approved B.Arch Programs focus on green architecture, visual design, and structural detailing.</p>
            <span className="learn-more">Explore Wing →</span>
          </div>

          {/* Card 3: Commerce & Science */}
          <div className="institute-card" onClick={() => handleInstituteClick('college-of-commerce-science')}>
            <div className="inst-glow-effect"></div>
            <div className="card-icon-wrapper science-bg">
              <svg xmlns="http://www.w3.org/2000/svg" className="inst-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3>College of Commerce & Science</h3>
            <p>Offering premium degree courses in BCA, BBA, B.Sc Computer Science, B.Com, and post-graduate studies.</p>
            <span className="learn-more">Explore Wing →</span>
          </div>

          {/* Card 4: Public School */}
          <div className="institute-card" onClick={() => handleInstituteClick('public-school')}>
            <div className="inst-glow-effect"></div>
            <div className="card-icon-wrapper school-bg">
              <svg xmlns="http://www.w3.org/2000/svg" className="inst-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3>Musalier Public School</h3>
            <p>Co-educational senior secondary institution offering CBSE syllabus with modern smart-campus facilities.</p>
            <span className="learn-more">Explore Wing →</span>
          </div>
        </div>
      </section>

      {/* Campus Navigation Hub */}
      <section id="navigation-hub" className="hub-section">
        <div className="section-header">
          <span className="section-tag">Interactive Directory</span>
          <h2>Campus Navigation Hub</h2>
          <p>Click on any specific department, cell, committee, or facility below to view official details and contacts.</p>
        </div>

        <div className="directory-search-container">
          <input 
            type="text" 
            placeholder="Filter specific links... (e.g. anti-ragging, placement, CSE, canteen)"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
          />
        </div>

        <div className="hub-grid">
          {filteredSitemap.map(group => (
            <div key={group.category} className="hub-column" data-category={group.category}>
              <div className="hub-column-header">
                {group.icon}
                <h3>{group.header}</h3>
              </div>
              <ul className="hub-links">
                {group.links.map((link, idx) => (
                  <li key={link.isSubheader ? `sub-${idx}` : link.id}>
                    {link.isSubheader ? (
                      <h4 className="hub-subheader">{link.label}</h4>
                    ) : (
                      <Link 
                        to={link.to || '#'} 
                        className={`portal-link ${link.className || ''}`}
                        data-id={link.id}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Historical Legacy */}
      <section id="about-highlight" className="about-highlight-section">
        <div className="about-highlight-container">
          <div className="about-highlight-content">
            <span className="section-tag">Historical Legacy</span>
            <h2>Trust and Institutional Commitment</h2>
            <p>Established under the aegis of Musalier Educational Trust, our college has served as a beacon of academic rigor and moral standards in Kerala. Our institutions leverage modern educational systems to ensure students receive hands-on training and career mentorship.</p>
            <div className="points-grid">
              <div className="point-item">
                <span className="point-bullet">✓</span>
                <div>
                  <h4>State-of-the-Art Laboratories</h4>
                  <p>Outfitted with cutting-edge equipment matching current industrial norms.</p>
                </div>
              </div>
              <div className="point-item">
                <span className="point-bullet">✓</span>
                <div>
                  <h4>Expert Faculty Mentorship</h4>
                  <p>PhD led faculties focusing on core technical knowledge and career direction.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-highlight-stats">
            <div className="glow-box">
              <h3>Outstanding Placement Rates</h3>
              <p className="big-percent">95%+</p>
              <p>Recruited by global technology firms, consultancies, and engineering majors annually.</p>
              <hr className="box-divider" />
              <div className="box-sub">
                <div>
                  <strong>12+ LPA</strong>
                  <span>Highest Package</span>
                </div>
                <div>
                  <strong>4.8 LPA</strong>
                  <span>Average Package</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section id="news-events" className="news-section">
        <div className="section-header">
          <span className="section-tag">Campus Pulse</span>
          <h2>News & Events</h2>
          <p>Stay up to date with fests, workshops, academic notices, and placement achievements.</p>
        </div>
        <div className="news-grid">
          <article className="news-card">
            <div className="news-date">June 08, 2026</div>
            <h3>B.Tech Admissions for 2026 Batch Announced</h3>
            <p>Applications are invited for Merit and Management quota seats for B.Tech programs. Entrance coaching details and registrations are open.</p>
            <Link to="/admissions/btech/" className="portal-link read-more-link">Read Circular →</Link>
          </article>
          <article className="news-card">
            <div className="news-date">May 29, 2026</div>
            <h3>IEEE Coding Hackfest "ByteCraft 2026" Concludes</h3>
            <p>Over 150 students from various colleges participated in the 24-hour coding sprint. The first prize was secured by CSE 3rd year AI&ML team.</p>
            <Link to="/clubs-societies/coding-club/" className="portal-link read-more-link">Read Story →</Link>
          </article>
          <article className="news-card">
            <div className="news-date">May 15, 2026</div>
            <h3>Musalier IEDC Bags KSCSTE Grant for Smart Agrotech Project</h3>
            <p>The innovative smart agriculture irrigation and crop monitoring prototype built by ME & EEE students won a development grant.</p>
            <Link to="/clubs-societies/iedc/" className="portal-link read-more-link">Read Details →</Link>
          </article>
        </div>
      </section>

      {/* Admissions Enquiry */}
      <section id="admissions-quick" className="enquiry-section">
        <div className="enquiry-card">
          <div className="enquiry-info">
            <h2>Ready to Join Musalier?</h2>
            <p>Fill out this quick enquiry form and our academic counsellors will contact you within 24 hours with details on courses, eligibility, and scholarship programs.</p>
            <div className="contact-details">
              <div className="c-item">
                <span className="c-icon">📞</span>
                <div>
                  <span>Call Admissions Helpdesk</span>
                  <strong>+91 468 2300 200, +91 94473 34500</strong>
                </div>
              </div>
              <div className="c-item">
                <span className="c-icon">✉</span>
                <div>
                  <span>Email Address</span>
                  <strong>admissions@musalier.ac.in</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="enquiry-form-wrapper">
            {enquirySubmitted ? (
              <div className="success-message" style={{ padding: '40px 20px', textAlign: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                <span style={{ fontSize: '48px' }}>✓</span>
                <h3 style={{ marginTop: '15px', color: '#fff' }}>Enquiry Submitted Successfully!</h3>
                <p style={{ marginTop: '10px', opacity: 0.8 }}>Thank you, <strong>{formData.name}</strong>. Our admissions team will reach out to you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> shortly.</p>
                <button className="btn-secondary" style={{ marginTop: '20px' }} onClick={() => setEnquirySubmitted(false)}>Submit another enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit}>
                <div className="form-group">
                  <label htmlFor="eq_name">Full Name</label>
                  <input 
                    type="text" 
                    id="eq_name" 
                    required 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="eq_phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="eq_phone" 
                      required 
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eq_email">Email Address</label>
                    <input 
                      type="email" 
                      id="eq_email" 
                      required 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="eq_course">Course of Interest</label>
                  <select 
                    id="eq_course" 
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  >
                    <option value="" disabled>Select Course...</option>
                    <option value="btech-cse">B.Tech - Computer Science & Engineering</option>
                    <option value="btech-aiml">B.Tech - CSE (AI & ML)</option>
                    <option value="btech-aids">B.Tech - Artificial Intelligence & Data Science</option>
                    <option value="btech-cyber">B.Tech - CSE (Cyber Security)</option>
                    <option value="btech-ece">B.Tech - Electronics & Comm. Engineering</option>
                    <option value="btech-vlsi">B.Tech - Electronics (VLSI Design & Tech)</option>
                    <option value="btech-eee">B.Tech - Electrical & Elect. Engineering</option>
                    <option value="btech-me">B.Tech - Mechanical Engineering</option>
                    <option value="btech-ce">B.Tech - Civil Engineering</option>
                    <option value="barch">B.Arch - Architecture</option>
                    <option value="mca">MCA - Computer Applications</option>
                    <option value="mba">MBA - Business Administration</option>
                  </select>
                </div>
                <button type="submit" className="btn-submit">Submit Admission Enquiry</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
