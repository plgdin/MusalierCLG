export interface PageItem {
  category: string;
  categoryTitle?: string;
  categoryBadge?: string;
  id?: string | number;
  title: string;
  desc?: string;
  details?: Array<{ label: string; value: string }>;
  subPath: string;
  url: string;
  [key: string]: any;
}

export const pagesData: PageItem[] = [
  {
    "category": "about",
    "categoryTitle": "About Musalier Group",
    "categoryBadge": "Historical Legacy",
    "id": "about-us",
    "title": "About Us",
    "desc": "Musalier Group of Institutions was established with the vision of rendering high-quality professional education in Kerala. Guided by values of integrity and progressive growth, the trust coordinates multiple higher education colleges. Our campus is set on the scenic Musaliar Hills in Pathanamthitta.",
    "details": [
      {
        "label": "Established Year",
        "value": "2002"
      },
      {
        "label": "Founding Body",
        "value": "Musalier Education Trust"
      },
      {
        "label": "Location",
        "value": "Musaliar Hills, Pathanamthitta, Kerala"
      }
    ],
    "subPath": "about/about-us",
    "url": "/about/about-us/"
  },
  {
    "category": "about",
    "categoryTitle": "About Musalier Group",
    "categoryBadge": "Historical Legacy",
    "id": "accreditation",
    "title": "Accreditation & Credentials",
    "desc": "Musalier Group of Institutions is accredited by NAAC with A+ grade and affiliated to APJ Abdul Kalam Technological University (KTU).",
    "details": [
      {
        "label": "NAAC Status",
        "value": "A+ Grade (3.28 CGPA)"
      },
      {
        "label": "Affiliated University",
        "value": "APJ Abdul Kalam Technological University & University of Kerala"
      },
      {
        "label": "Approval Agency",
        "value": "AICTE Approved, Council of Architecture (COA)"
      }
    ],
    "subPath": "about/accreditation",
    "url": "/about/accreditation/"
  },
  {
    "category": "about",
    "categoryTitle": "About Musalier Group",
    "categoryBadge": "Historical Legacy",
    "id": "chairman",
    "title": "Chairman's Message",
    "desc": "\"Our objective is to deliver technical knowledge that is industry-ready and ethically grounded. We invite you to build a progressive career under our guidance and join the thousands of alumni shaping global technology.\" - Chairman, Musalier Trust.",
    "details": [
      {
        "label": "Office Address",
        "value": "Trust HQ, Musalier Group Office"
      },
      {
        "label": "Contact Channel",
        "value": "via Trust Secretary Office"
      }
    ],
    "subPath": "about/chairman",
    "url": "/about/chairman/"
  },
  {
    "category": "about",
    "categoryTitle": "About Musalier Group",
    "categoryBadge": "Historical Legacy",
    "id": "founder",
    "title": "Founder Profile",
    "desc": "Late. Haji A. Thangal Kunju Musaliar was a visionary industrialist, educationist, and philanthropist. His pioneering work in cashew industries and academic establishments revolutionized the educational panorama of southern Kerala, bringing technical education to the masses.",
    "details": [
      {
        "label": "Legacy",
        "value": "Pioneer in Technical Education in Kerala"
      },
      {
        "label": "Inspirational Motto",
        "value": "Education for Social Upliftment"
      }
    ],
    "subPath": "about/founder",
    "url": "/about/founder/"
  },
  {
    "category": "about",
    "categoryTitle": "About Musalier Group",
    "categoryBadge": "Historical Legacy",
    "id": "management",
    "title": "Management Board",
    "desc": "The trust is managed by board members comprising veteran educators, industrialists, and administrative experts committed to college infrastructural expansion, research funding, and corporate placement partnerships.",
    "details": [
      {
        "label": "Trust Secretary",
        "value": "Shri. M. Sharafudeen"
      },
      {
        "label": "Governance Model",
        "value": "Executive Council Oversight"
      }
    ],
    "subPath": "about/management",
    "url": "/about/management/"
  },
  {
    "category": "about",
    "categoryTitle": "About Musalier Group",
    "categoryBadge": "Historical Legacy",
    "id": "milestones",
    "title": "Milestones",
    "desc": "A timeline of our institutional achievements over the last two decades:",
    "details": [
      {
        "label": "Overall Quality Rating",
        "value": "NAAC Accredited Portal"
      }
    ],
    "customHtml": "<div class=\"table-wrapper\">\n    <table class=\"data-table\">\n        <thead>\n            <tr>\n                <th>Year</th>\n                <th>Milestone Achievement</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr><td>2002</td><td>Launch of College of Engineering (B.Tech streams)</td></tr>\n            <tr><td>2007</td><td>Introduction of MBA and MCA postgraduate courses</td></tr>\n            <tr><td>2011</td><td>NIRF ranking submission & new M.Tech streams</td></tr>\n            <tr><td>2015</td><td>Launch of College of Architecture & Design (B.Arch)</td></tr>\n            <tr><td>2020</td><td>NAAC A+ Accreditation and NBA cycle approvals</td></tr>\n        </tbody>\n    </table>\n</div>",
    "subPath": "about/milestones",
    "url": "/about/milestones/"
  },
  {
    "category": "about",
    "categoryTitle": "About Musalier Group",
    "categoryBadge": "Historical Legacy",
    "id": "principal",
    "title": "Principal's Desk",
    "desc": "Welcome to Musalier College. Under our outcomes-based education structure, we emphasize technical fluency, research publications, and soft skills to make students globally employable. We encourage creativity, active lab training, and participation in state and national hackathons.",
    "details": [
      {
        "label": "Head of Institution",
        "value": "Dr. Abdul Rasheed (Principal)"
      },
      {
        "label": "Direct Contact",
        "value": "principal@musalier.ac.in"
      }
    ],
    "subPath": "about/principal",
    "url": "/about/principal/"
  },
  {
    "category": "about",
    "categoryTitle": "About Musalier Group",
    "categoryBadge": "Historical Legacy",
    "id": "vision",
    "title": "Vision & Mission",
    "desc": "To evolve as a center of academic excellence and international standards in engineering, sciences, and management, creating competent professionals with moral integrity. Our mission centers on providing premium resources, research facilities, and ethical alignment to students from all walks of life.",
    "details": [
      {
        "label": "Core Values",
        "value": "Innovation, Discipline, Integrity, Excellence"
      },
      {
        "label": "Primary Objective",
        "value": "Value-based outcome-focused education"
      }
    ],
    "subPath": "about/vision",
    "url": "/about/vision/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "academic-calendar",
    "title": "Academic Calendar",
    "desc": "Lists start dates of semesters, internal test timelines, lab evaluation dates, university final exam cycles, fests, and official holidays.",
    "details": [
      {
        "label": "Current PDF Version",
        "value": "Academic Calendar 2026-27"
      }
    ],
    "subPath": "academics/academic-calendar",
    "url": "/academics/academic-calendar/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "collaborations",
    "title": "Global Collaborations",
    "desc": "Musalier Group has signed MoUs with leading organizations to conduct internships, faculty exchanges, and project mentorship. Partner companies include UST Global, ICT Academy, and RedHat.",
    "details": [
      {
        "label": "Active MoUs",
        "value": "15+ Corporate Collaborations"
      }
    ],
    "subPath": "academics/collaborations",
    "url": "/academics/collaborations/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "ce",
    "title": "Civil Engineering",
    "desc": "Provides quality knowledge in structural designing, environmental impact analysis, concrete technology, surveying, and transportation planning.",
    "details": [
      {
        "label": "Intake capacity",
        "value": "60 Seats"
      },
      {
        "label": "Head of Department",
        "value": "Dr. Deepa Nair"
      },
      {
        "label": "Core Labs",
        "value": "Geotechnical Lab, Concrete Testing Lab, Survey Lab"
      }
    ],
    "subPath": "academics/departments/ce",
    "url": "/academics/departments/ce/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "cse-aiml",
    "title": "CSE (AI & ML)",
    "desc": "A specialized engineering program focusing on advanced mathematical algorithms, neural networks, Deep Learning, and Computer Vision.",
    "details": [
      {
        "label": "Intake capacity",
        "value": "60 Seats"
      },
      {
        "label": "Head of Department",
        "value": "Dr. Anjali Raj"
      },
      {
        "label": "Research Focus",
        "value": "Computer Vision & Medical Diagnostic AI Models"
      }
    ],
    "subPath": "academics/departments/cse-aiml",
    "url": "/academics/departments/cse-aiml/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "cse",
    "title": "Computer Science & Engineering",
    "desc": "Offers B.Tech and M.Tech programs with focus on cloud computing, cybersecurity, software engineering, and web systems.",
    "details": [
      {
        "label": "Intake capacity",
        "value": "120 Seats (B.Tech)"
      },
      {
        "label": "Head of Department",
        "value": "Dr. Suresh Kumar"
      },
      {
        "label": "Core Labs",
        "value": "Data Structures Lab, OS Lab, NetLab"
      }
    ],
    "subPath": "academics/departments/cse",
    "url": "/academics/departments/cse/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "ece",
    "title": "Electronics & Communication",
    "desc": "Focuses on semiconductor chip design, VLSI architectures, microprocessors, wireless communications, and satellite signal processing.",
    "details": [
      {
        "label": "Intake capacity",
        "value": "60 Seats"
      },
      {
        "label": "Head of Department",
        "value": "Prof. John Mathews"
      },
      {
        "label": "Core Labs",
        "value": "VLSI & Embedded Lab, Communication Engineering Lab"
      }
    ],
    "subPath": "academics/departments/ece",
    "url": "/academics/departments/ece/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "eee",
    "title": "Electrical & Electronics",
    "desc": "Teaches power electronics, electrical machinery, grid controls, solar installations, and electric vehicle architectures.",
    "details": [
      {
        "label": "Intake capacity",
        "value": "30 Seats"
      },
      {
        "label": "Head of Department",
        "value": "Dr. Vinod P."
      },
      {
        "label": "Core Labs",
        "value": "Electrical Machines Lab, Power Electronics Lab"
      }
    ],
    "subPath": "academics/departments/eee",
    "url": "/academics/departments/eee/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "hss",
    "title": "Humanities & Sciences",
    "desc": "Supports all engineering disciplines by providing vital lectures on technical communication, professional ethics, life skills, and economics.",
    "details": [
      {
        "label": "Key Asset",
        "value": "Advanced Interactive Language Lab"
      },
      {
        "label": "HOD",
        "value": "Prof. Sarah George"
      }
    ],
    "subPath": "academics/departments/hss",
    "url": "/academics/departments/hss/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "mba",
    "title": "MBA Department",
    "desc": "Our MBA program offers specializations in Finance, Marketing, Human Resource Management, and Systems/Operations. It emphasizes case studies, business strategy games, and regular corporate internships.",
    "details": [
      {
        "label": "Intake capacity",
        "value": "60 Seats"
      },
      {
        "label": "Specializations",
        "value": "Finance, Marketing, HR, Operations"
      },
      {
        "label": "Director",
        "value": "Dr. G. Ramesh"
      }
    ],
    "subPath": "academics/departments/mba",
    "url": "/academics/departments/mba/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "mca",
    "title": "MCA Department",
    "desc": "A two-year professional post-graduate program specializing in software architecture, database management systems, fullstack development, and system administration.",
    "details": [
      {
        "label": "Intake capacity",
        "value": "60 Seats"
      },
      {
        "label": "Course Duration",
        "value": "2 Years (4 Semesters)"
      },
      {
        "label": "HOD",
        "value": "Prof. Mathew K."
      }
    ],
    "subPath": "academics/departments/mca",
    "url": "/academics/departments/mca/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "me",
    "title": "Mechanical Engineering",
    "desc": "Dedicated to thermal engineering, mechanical modeling (CAD/CAM), robotics, fluid dynamics, and manufacturing science.",
    "details": [
      {
        "label": "Intake capacity",
        "value": "60 Seats"
      },
      {
        "label": "Head of Department",
        "value": "Dr. Rajesh M."
      },
      {
        "label": "Core Labs",
        "value": "CNC & CAD Center, Heat Engines Lab, Machine Shop"
      }
    ],
    "subPath": "academics/departments/me",
    "url": "/academics/departments/me/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "mtech-cse",
    "title": "M.Tech (Computer Science)",
    "desc": "Focuses on research-level studies, cybersecurity architectures, distributed cloud setups, and compiler engineering.",
    "details": [
      {
        "label": "Intake capacity",
        "value": "18 Seats"
      }
    ],
    "subPath": "academics/departments/mtech-cse",
    "url": "/academics/departments/mtech-cse/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "mtech-vlsi",
    "title": "M.Tech (VLSI & Embedded)",
    "desc": "Focuses on microchip design, FPGA programming, SoC configurations, and real-time operating systems.",
    "details": [
      {
        "label": "Intake capacity",
        "value": "18 Seats"
      }
    ],
    "subPath": "academics/departments/mtech-vlsi",
    "url": "/academics/departments/mtech-vlsi/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "labs",
    "title": "Laboratory Directory",
    "desc": "We host specialized laboratories for all engineering branches. Fully compliant with university standards and equipped with safety components.",
    "details": [
      {
        "label": "Key Labs",
        "value": "FabLab, Cloud Computing Center, Mechanical Workshop, IoT Research Bay"
      }
    ],
    "subPath": "academics/labs",
    "url": "/academics/labs/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "library",
    "title": "Central Library",
    "desc": "Fully automated using Koha software. Holds over 50,000 reference volumes, 120 national and international print journals, and digital portals for IEEE, Springer, and ScienceDirect.",
    "details": [
      {
        "label": "Operating Hours",
        "value": "8:00 AM to 6:00 PM (Monday to Saturday)"
      },
      {
        "label": "Digital Access",
        "value": "30+ High-speed nodes for digital journals"
      }
    ],
    "subPath": "academics/library",
    "url": "/academics/library/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "regulations",
    "title": "Academic Regulations",
    "desc": "Official KTU curriculum framework, course structures, grading systems, internal assessment criteria, and pass requirements.",
    "details": [
      {
        "label": "Affiliating University",
        "value": "APJ Abdul Kalam Technological University (KTU)"
      },
      {
        "label": "Attendance Rule",
        "value": "Minimum 75% attendance mandatory per course"
      },
      {
        "label": "Grading System",
        "value": "10-Point CGPA system with regular internal auditing"
      }
    ],
    "subPath": "academics/regulations",
    "url": "/academics/regulations/"
  },
  {
    "category": "accreditation-quality",
    "categoryTitle": "Accreditation & Quality",
    "categoryBadge": "Accreditations",
    "id": "aishe",
    "title": "AISHE Submissions",
    "desc": "All India Survey on Higher Education reports submitted by Musalier to Ministry of Education, India.",
    "details": [
      {
        "label": "Nodal Officer",
        "value": "Dr. Suresh Kumar"
      },
      {
        "label": "Current Report Year",
        "value": "AISHE 2025-26 Report Uploaded"
      }
    ],
    "subPath": "accreditation-quality/aishe",
    "url": "/accreditation-quality/aishe/"
  },
  {
    "category": "accreditation-quality",
    "categoryTitle": "Accreditation & Quality",
    "categoryBadge": "Accreditations",
    "id": "iqac",
    "title": "IQAC Assurance Unit",
    "desc": "Monitors overall academic delivery quality, conducts institutional feedback audits, coordinates peer reviews, and designs faculty development sessions.",
    "details": [
      {
        "label": "IQAC Coordinator",
        "value": "Dr. K. S. Anil Kumar"
      }
    ],
    "subPath": "accreditation-quality/iqac",
    "url": "/accreditation-quality/iqac/"
  },
  {
    "category": "accreditation-quality",
    "categoryTitle": "Accreditation & Quality",
    "categoryBadge": "Accreditations",
    "id": "naac",
    "title": "NAAC Accreditation",
    "desc": "National Assessment and Accreditation Council has awarded Musalier College an A+ grade, reflecting our high quality parameters across syllabus, infrastructure, and teaching methodology.",
    "details": [
      {
        "label": "NAAC Grade",
        "value": "A+ Grade (Cycle 1)"
      },
      {
        "label": "Valid Till",
        "value": "2029"
      }
    ],
    "subPath": "accreditation-quality/naac",
    "url": "/accreditation-quality/naac/"
  },
  {
    "category": "accreditation-quality",
    "categoryTitle": "Accreditation & Quality",
    "categoryBadge": "Accreditations",
    "id": "nba",
    "title": "NBA Streams",
    "desc": "The National Board of Accreditation (NBA) has accredited B.Tech streams (Computer Science, Mechanical, Electronics, Civil) based on outcome education models.",
    "details": [
      {
        "label": "Accreditation Level",
        "value": "Tier II Programs Approved"
      }
    ],
    "subPath": "accreditation-quality/nba",
    "url": "/accreditation-quality/nba/"
  },
  {
    "category": "accreditation-quality",
    "categoryTitle": "Accreditation & Quality",
    "categoryBadge": "Accreditations",
    "id": "nirf",
    "title": "NIRF Submission Data",
    "desc": "National Institutional Ranking Framework data submissions containing reports on intake, student ratios, placements, faculty, and financial resources.",
    "details": [
      {
        "label": "Annual Publication",
        "value": "Submitted Reports 2026"
      }
    ],
    "subPath": "accreditation-quality/nirf",
    "url": "/accreditation-quality/nirf/"
  },
  {
    "category": "administration",
    "categoryTitle": "Campus Administration",
    "categoryBadge": "Governance",
    "id": "academic-council",
    "title": "Academic Council",
    "desc": "Coordinates teaching plans, syllabus completion audit, internal evaluations, and implements university exam schedules. It acts as the central hub monitoring outcomes-based education.",
    "details": [
      {
        "label": "Frequency of Meeting",
        "value": "Once every month"
      }
    ],
    "subPath": "administration/academic-council",
    "url": "/administration/academic-council/"
  },
  {
    "category": "administration",
    "categoryTitle": "Campus Administration",
    "categoryBadge": "Governance",
    "id": "dean",
    "title": "Dean Academics",
    "desc": "Dr. Jacob V. oversees research progress, PG projects, and KTU academic audits across all engineering branches.",
    "details": [
      {
        "label": "Dean Name",
        "value": "Dr. Jacob V."
      },
      {
        "label": "Specialization",
        "value": "Thermal Sciences & Research, 20+ Years experience"
      },
      {
        "label": "Contact",
        "value": "dean@musalier.ac.in"
      }
    ],
    "subPath": "administration/dean",
    "url": "/administration/dean/"
  },
  {
    "category": "administration",
    "categoryTitle": "Campus Administration",
    "categoryBadge": "Governance",
    "id": "governing-council",
    "title": "Governing Council",
    "desc": "The highest decision-making body of the college, aligning plans with AICTE norms, university rules, and industry benchmarks. It comprises trust members, educationists, and university nominees.",
    "details": [
      {
        "label": "Convener",
        "value": "Dr. K. A. Zakaria (Dean, Academics)"
      }
    ],
    "subPath": "administration/governing-council",
    "url": "/administration/governing-council/"
  },
  {
    "category": "administration",
    "categoryTitle": "Campus Administration",
    "categoryBadge": "Governance",
    "id": "hods",
    "title": "Heads of Departments",
    "desc": "Direct contact info for Department Heads. HOD offices are located in Block A and are open during standard working hours.",
    "details": [
      {
        "label": "Coordination",
        "value": "All HoD offices reside in Block A"
      }
    ],
    "customHtml": "<div class=\"table-wrapper\">\n    <table class=\"data-table\">\n        <thead>\n            <tr>\n                <th>Department</th>\n                <th>Head of Department</th>\n                <th>Official Email</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr><td>Computer Science (CSE)</td><td>Dr. Suresh Kumar</td><td>hodcse@musalier.ac.in</td></tr>\n            <tr><td>CSE (AI & ML)</td><td>Dr. Anjali Raj</td><td>hodaiml@musalier.ac.in</td></tr>\n            <tr><td>Electronics & Comm (ECE)</td><td>Prof. John Mathews</td><td>hodece@musalier.ac.in</td></tr>\n            <tr><td>Electrical & Elect (EEE)</td><td>Dr. Vinod P.</td><td>hodeee@musalier.ac.in</td></tr>\n            <tr><td>Mechanical (ME)</td><td>Dr. Rajesh M.</td><td>hodme@musalier.ac.in</td></tr>\n            <tr><td>Civil Engineering (CE)</td><td>Dr. Deepa Nair</td><td>hodce@musalier.ac.in</td></tr>\n            <tr><td>MBA Department</td><td>Dr. G. Ramesh</td><td>hodmba@musalier.ac.in</td></tr>\n            <tr><td>MCA Department</td><td>Prof. Mathew K.</td><td>hodmca@musalier.ac.in</td></tr>\n        </tbody>\n    </table>\n</div>",
    "subPath": "administration/hods",
    "url": "/administration/hods/"
  },
  {
    "category": "administration",
    "categoryTitle": "Campus Administration",
    "categoryBadge": "Governance",
    "id": "office",
    "title": "Administration Office",
    "desc": "Handles student fee collections, university registrations, certificate clearances, and government scholarship applications. Serves as the primary operational contact point for parents and visitors.",
    "details": [
      {
        "label": "Office Timings",
        "value": "9:00 AM to 5:00 PM (Monday to Saturday)"
      },
      {
        "label": "Phone",
        "value": "+91-468-2300222"
      },
      {
        "label": "Location",
        "value": "Main Admin Block, Ground Floor"
      }
    ],
    "subPath": "administration/office",
    "url": "/administration/office/"
  },
  {
    "category": "administration",
    "categoryTitle": "Campus Administration",
    "categoryBadge": "Governance",
    "id": "principal",
    "title": "Principal Profile",
    "desc": "Welcome to the administration sector under leadership of our principal. Dr. Abdul Rahman leads the academic operations of Musalier Group.",
    "details": [
      {
        "label": "Principal Name",
        "value": "Dr. Abdul Rahman"
      },
      {
        "label": "Academic Standing",
        "value": "PhD in Computer Architecture & 22+ Years experience"
      },
      {
        "label": "Email Desk",
        "value": "principal@musalier.ac.in"
      }
    ],
    "subPath": "administration/principal",
    "url": "/administration/principal/"
  },
  {
    "category": "administration",
    "categoryTitle": "Campus Administration",
    "categoryBadge": "Governance",
    "id": "student-council",
    "title": "Student Council",
    "desc": "The democratically elected student body representing and coordinating college fests, union assemblies, sports events, and grievances.",
    "details": [
      {
        "label": "Union Chairman",
        "value": "Arjun S. (S7 CSE)"
      },
      {
        "label": "Staff Advisor",
        "value": "Dr. Anjali Raj"
      },
      {
        "label": "General Secretary",
        "value": "Anjana Krishnan (S7 CE)"
      }
    ],
    "subPath": "administration/student-council",
    "url": "/administration/student-council/"
  },
  {
    "category": "administration",
    "categoryTitle": "Campus Administration",
    "categoryBadge": "Governance",
    "id": "vice-principal",
    "title": "Vice Principal Profile",
    "desc": "Prof. Mary Joseph coordinates the undergraduate programs, examinations cell, and student discipline monitoring.",
    "details": [
      {
        "label": "Vice Principal Name",
        "value": "Prof. Mary Joseph"
      },
      {
        "label": "Core Area",
        "value": "Electronics & VLSI, 18+ Years teaching"
      },
      {
        "label": "Email Desk",
        "value": "viceprincipal@musalier.ac.in"
      }
    ],
    "subPath": "administration/vice-principal",
    "url": "/administration/vice-principal/"
  },
  {
    "category": "admissions",
    "categoryTitle": "Admissions 2026",
    "categoryBadge": "Join Us",
    "id": "btech-admission",
    "title": "B.Tech Admissions",
    "desc": "Now accepting applications for the B.Tech program under Merit (KEAM allocation) and Management Quotas. Scholarships are available based on merit scoring in KEAM and 12th standard PCMs.",
    "details": [
      {
        "label": "Inquiry Hotlines",
        "value": "+91 94473 34500"
      },
      {
        "label": "Required entrance",
        "value": "KEAM (Kerala Engineering Entrance Examination)"
      },
      {
        "label": "Online portal",
        "value": "admissions.musalier.ac.in"
      }
    ],
    "subPath": "admissions/btech",
    "url": "/admissions/btech/"
  },
  {
    "category": "admissions",
    "categoryTitle": "Admissions 2026",
    "categoryBadge": "Join Us",
    "id": "eligibility",
    "title": "Eligibility Criteria",
    "desc": "Comprehensive check on eligibility for various programs offered at our campus.",
    "details": [
      {
        "label": "NATA qualification",
        "value": "Required for B.Arch Admissions"
      }
    ],
    "customHtml": "<div class=\"table-wrapper\">\n    <table class=\"data-table\">\n        <thead>\n            <tr>\n                <th>Program</th>\n                <th>Entrance Required</th>\n                <th>Min Academic Percentage</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr><td>B.Tech</td><td>KEAM</td><td>45% in PCM (12th Class)</td></tr>\n            <tr><td>B.Arch</td><td>NATA / JEE Paper 2</td><td>50% in PCM and Aggregate</td></tr>\n            <tr><td>MBA</td><td>CAT / CMAT / KMAT</td><td>50% in any Graduation Degree</td></tr>\n            <tr><td>MCA</td><td>Kerala MCA Entrance</td><td>Graduation with Maths at 12th/Grad level</td></tr>\n            <tr><td>M.Tech</td><td>GATE (preferred)</td><td>60% in B.Tech in relevant stream</td></tr>\n        </tbody>\n    </table>\n</div>",
    "subPath": "admissions/eligibility",
    "url": "/admissions/eligibility/"
  },
  {
    "category": "admissions",
    "categoryTitle": "Admissions 2026",
    "categoryBadge": "Join Us",
    "id": "fee-structure",
    "title": "Fee Structure",
    "desc": "Overview of fees across categories (approximate annually):",
    "details": [
      {
        "label": "Security Deposit",
        "value": "₹10,000 (Refundable)"
      }
    ],
    "customHtml": "<div class=\"table-wrapper\">\n    <table class=\"data-table\">\n        <thead>\n            <tr>\n                <th>Program</th>\n                <th>Government Merit Seat (Annual)</th>\n                <th>Management Quota (Annual)</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr><td>B.Tech</td><td>₹40,000 - ₹50,000</td><td>₹75,000 - ₹95,000</td></tr>\n            <tr><td>B.Arch</td><td>₹55,000 - ₹65,000</td><td>₹1,10,000 - ₹1,30,000</td></tr>\n            <tr><td>MBA</td><td>₹45,000 - ₹55,000</td><td>₹90,000 - ₹1,10,000</td></tr>\n            <tr><td>MCA</td><td>₹40,000 - ₹45,000</td><td>₹70,000 - ₹85,000</td></tr>\n        </tbody>\n    </table>\n</div>",
    "subPath": "admissions/fee-structure",
    "url": "/admissions/fee-structure/"
  },
  {
    "category": "admissions",
    "categoryTitle": "Admissions 2026",
    "categoryBadge": "Join Us",
    "id": "mba-admission",
    "title": "MBA Admissions",
    "desc": "Admission is based on scores in CAT, MAT, or CMAT entrance exams, followed by a Group Discussion (GD) and Personal Interview (PI) conducted on campus.",
    "details": [
      {
        "label": "Minimum eligibility",
        "value": "Graduation with 50% marks"
      }
    ],
    "subPath": "admissions/mba",
    "url": "/admissions/mba/"
  },
  {
    "category": "admissions",
    "categoryTitle": "Admissions 2026",
    "categoryBadge": "Join Us",
    "id": "mca-admission",
    "title": "MCA Admissions",
    "desc": "Admission criteria for MCA. Candidates must hold a valid degree (BCA, B.Sc Computer Science, B.Sc, B.Com, or equivalent) with Mathematics at 10+2 level or graduation level, and score in the State Entrance Exam.",
    "details": [
      {
        "label": "Entrance test",
        "value": "Kerala MCA Entrance Exam Score"
      }
    ],
    "subPath": "admissions/mca",
    "url": "/admissions/mca/"
  },
  {
    "category": "admissions",
    "categoryTitle": "Admissions 2026",
    "categoryBadge": "Join Us",
    "id": "mgmt-quota",
    "title": "Management Quota Details",
    "desc": "Direct admissions under management seats. Interested students can contact the central college administrative board or fill out the enquiry form. Selection is based on academic merit and entrance score ranking.",
    "details": [
      {
        "label": "Helpline",
        "value": "+91 468 2300200"
      },
      {
        "label": "Office Desk",
        "value": "Admissions Coordinator (Admin Block)"
      }
    ],
    "subPath": "admissions/mgmt-quota",
    "url": "/admissions/mgmt-quota/"
  },
  {
    "category": "admissions",
    "categoryTitle": "Admissions 2026",
    "categoryBadge": "Join Us",
    "id": "mtech-admission",
    "title": "M.Tech Admissions",
    "desc": "Applications for postgraduate engineering programs. GATE qualified candidates are preferred and eligible for stipend structures. Non-GATE students can apply based on B.Tech aggregate percentages.",
    "details": [
      {
        "label": "Prerequisite",
        "value": "B.Tech in relevant branch with 60% aggregate"
      }
    ],
    "subPath": "admissions/mtech",
    "url": "/admissions/mtech/"
  },
  {
    "category": "admissions",
    "categoryTitle": "Admissions 2026",
    "categoryBadge": "Join Us",
    "id": "procedure",
    "title": "Admission Procedure",
    "desc": "Detailed application workflow for Merit, Management, and NRI quota seats at Musalier Group of Institutions.",
    "details": [
      {
        "label": "How to Apply",
        "value": "Submit online portal application or visit admission desk"
      },
      {
        "label": "KEAM Code",
        "value": "MCK (Musalier College of Engineering)"
      },
      {
        "label": "Verification Desk",
        "value": "Admissions Office, Main Building Room 102"
      }
    ],
    "customHtml": "\n            <div class=\"table-wrapper\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr>\n                            <th>Step No</th>\n                            <th>Action Details</th>\n                            <th>Required Documents</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr><td>Step 1</td><td>Submit Online Registration Form</td><td>Copy of Marksheets, Photos</td></tr>\n                        <tr><td>Step 2</td><td>KEAM Rank / Score Submission</td><td>KEAM Admit Card & Score Card</td></tr>\n                        <tr><td>Step 3</td><td>Allotment & Fee Payment</td><td>TC, Migration Certificate, Physical Fitness Certificate</td></tr>\n                    </tbody>\n                </table>\n            </div>\n        ",
    "subPath": "admissions/procedure",
    "url": "/admissions/procedure/"
  },
  {
    "category": "alumni",
    "categoryTitle": "Alumni Wing",
    "categoryBadge": "Global Alumni",
    "id": "alumni-association",
    "title": "Alumni Association",
    "desc": "Keeps graduates connected to their alma mater. Coordinates annual reunion meets and runs mentorship drives for current students during semester placement preparatories.",
    "details": [
      {
        "label": "Active Members",
        "value": "4000+ Registered Alumni"
      },
      {
        "label": "Annual Reunion Date",
        "value": "December 26th every year"
      }
    ],
    "subPath": "alumni/alumni-association",
    "url": "/alumni/alumni-association/"
  },
  {
    "category": "alumni",
    "categoryTitle": "Alumni Wing",
    "categoryBadge": "Global Alumni",
    "id": "alumni-meet",
    "title": "Annual Alumni Meets",
    "desc": "Our annual reunion events organized at campus, Bangalore, and Gulf chapters to reconnect and share recollections.",
    "details": [
      {
        "label": "Next Reunion Date",
        "value": "December 26, 2026"
      }
    ],
    "subPath": "alumni/alumni-meet",
    "url": "/alumni/alumni-meet/"
  },
  {
    "category": "alumni",
    "categoryTitle": "Alumni Wing",
    "categoryBadge": "Global Alumni",
    "id": "alumni-registration",
    "title": "Alumni Registration",
    "desc": "Join the official Musalier Alumni Network. Stay connected, mentor students, and share your industry achievements.",
    "details": [
      {
        "label": "Registration Desk",
        "value": "Online portal or mail to alumni@musalier.ac.in"
      }
    ],
    "subPath": "alumni/alumni-registration",
    "url": "/alumni/alumni-registration/"
  },
  {
    "category": "alumni",
    "categoryTitle": "Alumni Wing",
    "categoryBadge": "Global Alumni",
    "id": "success-stories",
    "title": "Alumni Success Stories",
    "desc": "Meet our global leaders, top engineers, startup founders, and research scholars working at Google, TCS, UST, and NASA.",
    "details": [
      {
        "label": "Alumni Base",
        "value": "5000+ Active alumni globally"
      }
    ],
    "subPath": "alumni/success-stories",
    "url": "/alumni/success-stories/"
  },
  {
    "category": "campus-life",
    "categoryTitle": "Campus Life",
    "categoryBadge": "Student Culture",
    "id": "cultural-activities",
    "title": "Cultural Activities & Arts Club",
    "desc": "Host of the annual arts fest \"Musalia\", dance teams, rock band setups, drama clubs, and coordinates participation in University youth festivals.",
    "details": [
      {
        "label": "Arts Secretary",
        "value": "Student Council Nominee"
      }
    ],
    "subPath": "campus-life/cultural-activities",
    "url": "/campus-life/cultural-activities/"
  },
  {
    "category": "campus-life",
    "categoryTitle": "Campus Life",
    "categoryBadge": "Student Culture",
    "id": "gallery",
    "title": "Campus Life Gallery",
    "desc": "Explore the vibrant campus atmosphere, fests, labs, hostels, and celebrations.",
    "details": [
      {
        "label": "Media Archive",
        "value": "1000+ photos of campus activities"
      }
    ],
    "subPath": "campus-life/gallery",
    "url": "/campus-life/gallery/"
  },
  {
    "category": "campus-life",
    "categoryTitle": "Campus Life",
    "categoryBadge": "Student Culture",
    "id": "hostel",
    "title": "Campus Hostels",
    "desc": "Separate residential wings for boys and girls inside the campus. Features security, study halls, mess supplying hygienic food, and recreational facilities.",
    "details": [
      {
        "label": "Wardens",
        "value": "Prof. N. Radhakrishnan (Boys), Ms. Mariamma (Girls)"
      },
      {
        "label": "Capacity",
        "value": "300 Boys / 250 Girls"
      }
    ],
    "subPath": "campus-life/hostel",
    "url": "/campus-life/hostel/"
  },
  {
    "category": "campus-life",
    "categoryTitle": "Campus Life",
    "categoryBadge": "Student Culture",
    "id": "industrial-visits",
    "title": "Industrial Visits",
    "desc": "Organizes study tours and industrial visits for students to gain exposure to real-world industrial settings.",
    "details": [
      {
        "label": "Frequency",
        "value": "At least 1 corporate visit per semester"
      }
    ],
    "subPath": "campus-life/industrial-visits",
    "url": "/campus-life/industrial-visits/"
  },
  {
    "category": "campus-life",
    "categoryTitle": "Campus Life",
    "categoryBadge": "Student Culture",
    "id": "ncc",
    "title": "NCC Army Wing",
    "desc": "Provides structured training for cadets, preparing them for B and C certificates. Enforces leadership skills and social responsibility.",
    "details": [
      {
        "label": "Officer in Charge",
        "value": "Lt. Dr. Sunil Kumar"
      }
    ],
    "subPath": "campus-life/ncc",
    "url": "/campus-life/ncc/"
  },
  {
    "category": "campus-life",
    "categoryTitle": "Campus Life",
    "categoryBadge": "Student Culture",
    "id": "newsletter",
    "title": "Campus Newsletter",
    "desc": "\"Musalier Chronicle\" is published bi-annually, highlighting academic projects, cultural fests, and sports wins.",
    "details": [
      {
        "label": "Editor-in-Chief",
        "value": "Prof. Sarah George (Humanities)"
      }
    ],
    "subPath": "campus-life/newsletter",
    "url": "/campus-life/newsletter/"
  },
  {
    "category": "campus-life",
    "categoryTitle": "Campus Life",
    "categoryBadge": "Student Culture",
    "id": "nss",
    "title": "National Service Scheme (NSS)",
    "desc": "Active NSS units (Unit No. 232). Undertakes community service initiatives, blood donation drives, environmental campaigns, and annual village camp programs.",
    "details": [
      {
        "label": "Program Officers",
        "value": "Prof. Anoop P."
      }
    ],
    "subPath": "campus-life/nss",
    "url": "/campus-life/nss/"
  },
  {
    "category": "campus-life",
    "categoryTitle": "Campus Life",
    "categoryBadge": "Student Culture",
    "id": "seminars-workshops",
    "title": "Seminars & Workshops",
    "desc": "Regular technical events, guest lectures, expert talks, and hands-on coding bootcamps.",
    "details": [
      {
        "label": "Event Coordinators",
        "value": "HODs & Association Student Secretaries"
      }
    ],
    "subPath": "campus-life/seminars-workshops",
    "url": "/campus-life/seminars-workshops/"
  },
  {
    "category": "campus-life",
    "categoryTitle": "Campus Life",
    "categoryBadge": "Student Culture",
    "id": "sports-games",
    "title": "Sports & Athletics",
    "desc": "Equipped with a standard football pitch, cement basketball courts, indoor badminton areas, table tennis, and a fully functional multi-station fitness gym.",
    "details": [
      {
        "label": "Physical Education Director",
        "value": "Mr. Saju George"
      }
    ],
    "subPath": "campus-life/sports-games",
    "url": "/campus-life/sports-games/"
  },
  {
    "category": "campus-life",
    "categoryTitle": "Campus Life",
    "categoryBadge": "Student Culture",
    "id": "student-welfare",
    "title": "Student Welfare & Support",
    "desc": "Offers medical rooms, psychological counselors, scholarships desk, and career support structures.",
    "details": [
      {
        "label": "Resident Counselor",
        "value": "Dr. Mini S."
      },
      {
        "label": "Medical Facility",
        "value": "Active tie-up with Muthoot Hospital"
      }
    ],
    "subPath": "campus-life/student-welfare",
    "url": "/campus-life/student-welfare/"
  },
  {
    "category": "campus-life",
    "categoryTitle": "Campus Life",
    "categoryBadge": "Student Culture",
    "id": "transportation",
    "title": "College Bus Routes",
    "desc": "Our college owns a fleet of 25 buses covering all major regions in Pathanamthitta, Adoor, Pandalam, Kollam, and Chengannur.",
    "details": [
      {
        "label": "Transport Manager",
        "value": "Mr. Somarajan (+91 94475 22000)"
      }
    ],
    "customHtml": "<div class=\"table-wrapper\">\n    <table class=\"data-table\">\n        <thead>\n            <tr>\n                <th>Route No</th>\n                <th>From Location</th>\n                <th>Key Stopover Points</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr><td>Route 1</td><td>Kollam</td><td>Kottarakara, Enathu, Adoor</td></tr>\n            <tr><td>Route 3</td><td>Chengannur</td><td>Mulakuzha, Pandalam, Adoor</td></tr>\n            <tr><td>Route 5</td><td>Pathanamthitta</td><td>Kozhencherry, Kumbanad</td></tr>\n            <tr><td>Route 8</td><td>Adoor Town</td><td>Central Junction, Moonalam</td></tr>\n        </tbody>\n    </table>\n</div>",
    "subPath": "campus-life/transportation",
    "url": "/campus-life/transportation/"
  },
  {
    "category": "careers",
    "categoryTitle": "Careers @ Musalier",
    "categoryBadge": "Opportunities",
    "id": "careers",
    "title": "Open Positions",
    "desc": "Explore active job descriptions below. Candidates with PhDs or prior industrial experience are highly preferred.",
    "details": [
      {
        "label": "How to Apply",
        "value": "Email resume to recruitment@musalier.ac.in"
      }
    ],
    "customHtml": "<div class=\"table-wrapper\">\n    <table class=\"data-table\">\n        <thead>\n            <tr>\n                <th>Role Name</th>\n                <th>Department</th>\n                <th>Min Qualifications</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr><td>Assistant Professor</td><td>CSE (AI/ML Specialization)</td><td>M.Tech / PhD in Computer Science</td></tr>\n            <tr><td>Associate Professor</td><td>Civil Engineering</td><td>PhD with 5+ Years Teaching</td></tr>\n            <tr><td>Placement Officer</td><td>Training & Placement (CGPU)</td><td>MBA/HR with corporate network connections</td></tr>\n            <tr><td>Lab Assistant</td><td>Mechanical Labs</td><td>Diploma in Mechanical Engineering</td></tr>\n        </tbody>\n    </table>\n</div>",
    "subPath": "careers/index",
    "url": "/careers/index/"
  },
  {
    "category": "clubs-societies",
    "categoryTitle": "Clubs & Societies",
    "categoryBadge": "Student Activities",
    "id": "coding-club",
    "title": "Coding Club (ByteCraft)",
    "desc": "A student-driven programming community holding weekly coding sprints, logic games, and hackathons.",
    "details": [
      {
        "label": "Staff Advisor",
        "value": "Dr. Suresh Kumar (CSE)"
      },
      {
        "label": "Student Lead",
        "value": "Arjun S. (S7 CSE)"
      }
    ],
    "subPath": "clubs-societies/coding-club",
    "url": "/clubs-societies/coding-club/"
  },
  {
    "category": "clubs-societies",
    "categoryTitle": "Clubs & Societies",
    "categoryBadge": "Student Activities",
    "id": "csi",
    "title": "Computer Society of India (CSI)",
    "desc": "Fosters information sharing, workshops, conferences, and technical competitions in computer systems.",
    "details": [
      {
        "label": "Staff Advisor",
        "value": "Dr. Suresh Kumar (CSE)"
      },
      {
        "label": "Student Lead",
        "value": "Arjun S. (S7 CSE)"
      }
    ],
    "subPath": "clubs-societies/csi",
    "url": "/clubs-societies/csi/"
  },
  {
    "category": "clubs-societies",
    "categoryTitle": "Clubs & Societies",
    "categoryBadge": "Student Activities",
    "id": "entrepreneurship-club",
    "title": "Entrepreneurship Development Club",
    "desc": "Promotes startup ventures, business strategy workshops, and industrial interactions.",
    "details": [
      {
        "label": "Staff Advisor",
        "value": "Dr. Suresh Kumar (CSE)"
      },
      {
        "label": "Student Lead",
        "value": "Arjun S. (S7 CSE)"
      }
    ],
    "subPath": "clubs-societies/entrepreneurship-club",
    "url": "/clubs-societies/entrepreneurship-club/"
  },
  {
    "category": "clubs-societies",
    "categoryTitle": "Clubs & Societies",
    "categoryBadge": "Student Activities",
    "id": "iedc",
    "title": "IEDC Innovation Cell",
    "desc": "Encourages student entrepreneurs, provides seed funding support, and coordinates idea hackathons.",
    "details": [
      {
        "label": "Staff Advisor",
        "value": "Dr. Suresh Kumar (CSE)"
      },
      {
        "label": "Student Lead",
        "value": "Arjun S. (S7 CSE)"
      }
    ],
    "subPath": "clubs-societies/iedc",
    "url": "/clubs-societies/iedc/"
  },
  {
    "category": "clubs-societies",
    "categoryTitle": "Clubs & Societies",
    "categoryBadge": "Student Activities",
    "id": "ieee",
    "title": "IEEE Student Branch",
    "desc": "Active student chapter organizing international workshops, networking programs, and research seminars.",
    "details": [
      {
        "label": "Staff Advisor",
        "value": "Dr. Suresh Kumar (CSE)"
      },
      {
        "label": "Student Lead",
        "value": "Arjun S. (S7 CSE)"
      }
    ],
    "subPath": "clubs-societies/ieee",
    "url": "/clubs-societies/ieee/"
  },
  {
    "category": "clubs-societies",
    "categoryTitle": "Clubs & Societies",
    "categoryBadge": "Student Activities",
    "id": "iste",
    "title": "Indian Society for Technical Education (ISTE)",
    "desc": "Dedicated to teachers and students of technical institutions to align teaching methodologies and career development.",
    "details": [
      {
        "label": "Staff Advisor",
        "value": "Dr. Suresh Kumar (CSE)"
      },
      {
        "label": "Student Lead",
        "value": "Arjun S. (S7 CSE)"
      }
    ],
    "subPath": "clubs-societies/iste",
    "url": "/clubs-societies/iste/"
  },
  {
    "category": "committees",
    "categoryTitle": "Campus Cells & Committees",
    "categoryBadge": "Student Support",
    "id": "anti-ragging",
    "title": "Anti-Ragging Committee",
    "desc": "Musalier Group enforces a strict zero-tolerance policy against ragging. Any student found engaging in activities that cause mental or physical discomfort to freshers faces immediate suspension. The squad conducts frequent rounds in corridors, cafeteria, and hostels.",
    "details": [
      {
        "label": "National Helpline",
        "value": "1800-180-5522"
      },
      {
        "label": "College Convener",
        "value": "Prof. Jacob Thomas (+91 94473 00111)"
      },
      {
        "label": "Incident reporting",
        "value": "antiraggingcell@musalier.ac.in"
      }
    ],
    "subPath": "committees/anti-ragging",
    "url": "/committees/anti-ragging/"
  },
  {
    "category": "committees",
    "categoryTitle": "Campus Cells & Committees",
    "categoryBadge": "Student Support",
    "id": "discipline-committee",
    "title": "Discipline Committee",
    "desc": "Ensures strict adherence to code of conduct, campus ethics, anti-ragging policies, and monitors classroom hours.",
    "details": [
      {
        "label": "Convener",
        "value": "Prof. Mary Joseph (Vice Principal)"
      },
      {
        "label": "Action Desk",
        "value": "Main Office Block"
      }
    ],
    "subPath": "committees/discipline-committee",
    "url": "/committees/discipline-committee/"
  },
  {
    "category": "committees",
    "categoryTitle": "Campus Cells & Committees",
    "categoryBadge": "Student Support",
    "id": "ethics-committee",
    "title": "Ethics Committee",
    "desc": "Enforces professional values, ethical conduct, and conducts awareness campaigns on cyber safety, academic integrity, and social values.",
    "details": [
      {
        "label": "Committee Lead",
        "value": "Dr. Suresh Kumar (CSE)"
      }
    ],
    "subPath": "committees/ethics-committee",
    "url": "/committees/ethics-committee/"
  },
  {
    "category": "committees",
    "categoryTitle": "Campus Cells & Committees",
    "categoryBadge": "Student Support",
    "id": "internal-complaints",
    "title": "Internal Complaints (ICC)",
    "desc": "Constitutes gender sensitisation protocols and addresses complaints related to gender discrimination and harassment. Ensures a safe work and academic environment for all students and female staff.",
    "details": [
      {
        "label": "Presiding Officer",
        "value": "Prof. Shiny Varghese"
      }
    ],
    "subPath": "committees/internal-complaints",
    "url": "/committees/internal-complaints/"
  },
  {
    "category": "committees",
    "categoryTitle": "Campus Cells & Committees",
    "categoryBadge": "Student Support",
    "id": "minority-cell",
    "title": "Minority Cell",
    "desc": "Empowers minority community students, promotes integration, and manages central minority scholarship programs.",
    "details": [
      {
        "label": "Nodal Officer",
        "value": "Prof. Mathew K. (MCA)"
      },
      {
        "label": "Scholarships",
        "value": "MOMA, Post-Matric Minority Scholarships"
      }
    ],
    "subPath": "committees/minority-cell",
    "url": "/committees/minority-cell/"
  },
  {
    "category": "committees",
    "categoryTitle": "Campus Cells & Committees",
    "categoryBadge": "Student Support",
    "id": "pta",
    "title": "Parent-Teacher Association",
    "desc": "An active body monitoring student progress. Hosts regular interactive meetings to discuss academic tracking, test performances, and university attendance norms.",
    "details": [
      {
        "label": "Executive President",
        "value": "Principal (Ex-officio)"
      }
    ],
    "subPath": "committees/pta",
    "url": "/committees/pta/"
  },
  {
    "category": "committees",
    "categoryTitle": "Campus Cells & Committees",
    "categoryBadge": "Student Support",
    "id": "sc-st-cell",
    "title": "SC/ST Welfare Cell",
    "desc": "Assists students from SC/ST communities in obtaining post-matric scholarships, fee concessions, and provides free tutoring and career counseling services.",
    "details": [
      {
        "label": "Liaison Officer",
        "value": "Prof. Chandrasekharan"
      }
    ],
    "subPath": "committees/sc-st-cell",
    "url": "/committees/sc-st-cell/"
  },
  {
    "category": "committees",
    "categoryTitle": "Campus Cells & Committees",
    "categoryBadge": "Student Support",
    "id": "student-grievance",
    "title": "Student Grievance Cell",
    "desc": "A safe committee allowing students to voice grievances regarding facilities, exams, faculties, or student fests. Grievances can be submitted online or placed in physical suggestion boxes. The cell meets every alternative week.",
    "details": [
      {
        "label": "Cell Chairperson",
        "value": "Dr. Reetha S."
      },
      {
        "label": "Reporting Box",
        "value": "Available in all academic blocks"
      }
    ],
    "subPath": "committees/student-grievance",
    "url": "/committees/student-grievance/"
  },
  {
    "category": "committees",
    "categoryTitle": "Campus Cells & Committees",
    "categoryBadge": "Student Support",
    "id": "womens-cell",
    "title": "Women's Welfare Cell",
    "desc": "Conducts motivational workshops, self-defense sessions, health checks, and leadership training to promote women empowerment among student bodies.",
    "details": [
      {
        "label": "Secretary",
        "value": "Dr. Lekshmi Priya"
      }
    ],
    "subPath": "committees/womens-cell",
    "url": "/committees/womens-cell/"
  },
  {
    "category": "contact-us",
    "categoryTitle": "Contact Us",
    "categoryBadge": "General Queries",
    "id": "contact-us",
    "title": "Contact Campus Office",
    "desc": "We are located at Pathanamthitta, Kerala. Feel free to visit the admin desk or contact using the helplines listed below.",
    "details": [
      {
        "label": "Campus Address",
        "value": "Musaliar Hills, Pathanamthitta, Kerala - 689653"
      },
      {
        "label": "General Email",
        "value": "info@musalier.ac.in"
      },
      {
        "label": "Admissions Office",
        "value": "+91 94473 34500"
      },
      {
        "label": "Administrative Phone",
        "value": "+91 468 2300200, 2300222"
      }
    ],
    "customHtml": "<div style=\"margin-top: 30px; border-radius: 16px; overflow: hidden; border: 1px solid var(--glass-border); height: 280px; position: relative; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.4)\">\n    <div style=\"position: absolute; text-align: center; padding: 24px; z-index: 2;\">\n        <h4 style=\"color:var(--white);margin-bottom:6px;\">Musaliar Hills Campus Map</h4>\n        <p style=\"color:var(--muted-text);font-size:0.9rem;margin-bottom:12px;\">Pathanamthitta, Kerala, India - 689653</p>\n        <a href=\"https://maps.google.com\" target=\"_blank\" class=\"btn-primary\" style=\"padding: 8px 16px; font-size: 0.85rem;\">Get Driving Directions</a>\n    </div>\n</div>",
    "subPath": "contact-us/index",
    "url": "/contact-us/index/"
  },
  {
    "category": "examinations",
    "categoryTitle": "Examinations Portal",
    "categoryBadge": "Assessments",
    "id": "exam-cell",
    "title": "Examination Cell",
    "desc": "Coordinates University final examinations, logs internal grades, coordinates invigilation duties, and operates under strict guidelines from the university.",
    "details": [
      {
        "label": "Controller of Exams",
        "value": "Prof. George Varghese"
      },
      {
        "label": "Location",
        "value": "Admin Block, Ground Floor"
      }
    ],
    "subPath": "examinations/exam-cell",
    "url": "/examinations/exam-cell/"
  },
  {
    "category": "examinations",
    "categoryTitle": "Examinations Portal",
    "categoryBadge": "Assessments",
    "id": "notifications",
    "title": "Exam Notifications",
    "desc": "Find notifications regarding exam form submissions, registration fee deadlines, revaluation applications, and supplementary exam schedules.",
    "details": [
      {
        "label": "Helpline desk",
        "value": "examcell@musalier.ac.in"
      }
    ],
    "subPath": "examinations/notifications",
    "url": "/examinations/notifications/"
  },
  {
    "category": "examinations",
    "categoryTitle": "Examinations Portal",
    "categoryBadge": "Assessments",
    "id": "results",
    "title": "University Results",
    "desc": "Link to University portals to check final grades. Students can log in to their KTU portal or check offline boards on campus for roll-number lists. Official gradesheets are distributed via HODs after university declaration.",
    "details": [
      {
        "label": "Portal link",
        "value": "ktu.edu.in Student Portal"
      },
      {
        "label": "Evaluation Audit",
        "value": "Handled by College Academic Auditor"
      }
    ],
    "subPath": "examinations/results",
    "url": "/examinations/results/"
  },
  {
    "category": "examinations",
    "categoryTitle": "Examinations Portal",
    "categoryBadge": "Assessments",
    "id": "timetable",
    "title": "Exam Timetables",
    "desc": "Timely publications of KTU university final exams and internal assessment exam timetables. Timetables are updated instantly when received from the University.",
    "details": [
      {
        "label": "Last Updated",
        "value": "June 05, 2026"
      }
    ],
    "customHtml": "<div class=\"table-wrapper\">\n    <table class=\"data-table\">\n        <thead>\n            <tr>\n                <th>Sem & Scheme</th>\n                <th>Exam Stream</th>\n                <th>Commencement Date</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr><td>S8 B.Tech (2019 Scheme)</td><td>KTU Regular/Supply</td><td>June 18, 2026</td></tr>\n            <tr><td>S6 B.Tech (2019 Scheme)</td><td>KTU Regular/Supply</td><td>June 22, 2026</td></tr>\n            <tr><td>S4 MCA (2020 Scheme)</td><td>KTU Regular</td><td>July 02, 2026</td></tr>\n            <tr><td>S2 MBA (2020 Scheme)</td><td>KTU Regular</td><td>July 08, 2026</td></tr>\n        </tbody>\n    </table>\n</div>",
    "subPath": "examinations/timetable",
    "url": "/examinations/timetable/"
  },
  {
    "category": "infrastructure",
    "categoryTitle": "Campus Infrastructure",
    "categoryBadge": "Smart Campus",
    "id": "auditorium",
    "title": "Main Auditorium",
    "desc": "An impressive air-conditioned indoor hall accommodating 1200+ guests. Equipped with high-fidelity acoustics and stage projection structures.",
    "details": [
      {
        "label": "Location",
        "value": "Beside Block B"
      }
    ],
    "subPath": "infrastructure/auditorium",
    "url": "/infrastructure/auditorium/"
  },
  {
    "category": "infrastructure",
    "categoryTitle": "Campus Infrastructure",
    "categoryBadge": "Smart Campus",
    "id": "cafeteria",
    "title": "Campus Cafeteria",
    "desc": "Offers healthy, hygienic meals, evening snacks, and refreshing drinks at subsidised prices for students and staff.",
    "details": [
      {
        "label": "Food License",
        "value": "FSSAI Registered Campus Kitchen"
      }
    ],
    "subPath": "infrastructure/cafeteria",
    "url": "/infrastructure/cafeteria/"
  },
  {
    "category": "infrastructure",
    "categoryTitle": "Campus Infrastructure",
    "categoryBadge": "Smart Campus",
    "id": "central-library",
    "title": "Central Library Complex",
    "desc": "A two-story building holding journals, reference encyclopedias, thesis records, and e-learning catalogs with spacious reading rooms.",
    "details": [
      {
        "label": "Digital Portal Access",
        "value": "Koha Automated Database"
      }
    ],
    "subPath": "infrastructure/central-library",
    "url": "/infrastructure/central-library/"
  },
  {
    "category": "infrastructure",
    "categoryTitle": "Campus Infrastructure",
    "categoryBadge": "Smart Campus",
    "id": "computer-labs",
    "title": "Central Computer Lab",
    "desc": "Maintains 500+ computing workstations running Linux, Windows server structures, and standard development tools.",
    "details": [
      {
        "label": "Internet Speed",
        "value": "1 Gbps Fiber Connection"
      }
    ],
    "subPath": "infrastructure/computer-labs",
    "url": "/infrastructure/computer-labs/"
  },
  {
    "category": "infrastructure",
    "categoryTitle": "Campus Infrastructure",
    "categoryBadge": "Smart Campus",
    "id": "department-laboratories",
    "title": "Department Laboratories",
    "desc": "Advanced research laboratories for CSE, Civil, Mechanical, EEE, and ECE departments, compliant with university and AICTE guidelines.",
    "details": [
      {
        "label": "Specialized Labs",
        "value": "VLSI lab, Survey Lab, CNC Workshop, Power Electronics lab"
      }
    ],
    "subPath": "infrastructure/department-laboratories",
    "url": "/infrastructure/department-laboratories/"
  },
  {
    "category": "infrastructure",
    "categoryTitle": "Campus Infrastructure",
    "categoryBadge": "Smart Campus",
    "id": "seminar-hall",
    "title": "Seminar Halls",
    "desc": "Each department has its own air-conditioned seminar hall equipped with premium acoustics, interactive screens, and project setups.",
    "details": [
      {
        "label": "Hall Capacity",
        "value": "150 seats per seminar room"
      }
    ],
    "subPath": "infrastructure/seminar-hall",
    "url": "/infrastructure/seminar-hall/"
  },
  {
    "category": "infrastructure",
    "categoryTitle": "Campus Infrastructure",
    "categoryBadge": "Smart Campus",
    "id": "smart-classrooms",
    "title": "Smart Lecture Rooms",
    "desc": "All department classrooms are equipped with ceiling projectors, audio amplification, and interactive whiteboard screens for digital lecture delivery.",
    "details": [
      {
        "label": "Smart Rooms Total",
        "value": "36 Modern Classrooms"
      }
    ],
    "subPath": "infrastructure/smart-classrooms",
    "url": "/infrastructure/smart-classrooms/"
  },
  {
    "category": "infrastructure",
    "categoryTitle": "Campus Infrastructure",
    "categoryBadge": "Smart Campus",
    "id": "wifi-campus",
    "title": "Wi-Fi & Networks",
    "desc": "High-speed wireless connectivity covers all campus blocks, residential hostels, library complex, and laboratories.",
    "details": [
      {
        "label": "Core Backbone",
        "value": "Enterprise CISCO router networks"
      }
    ],
    "subPath": "infrastructure/wifi-campus",
    "url": "/infrastructure/wifi-campus/"
  },
  {
    "category": "news-events",
    "categoryTitle": "News & Events",
    "categoryBadge": "Campus Updates",
    "id": "achievements",
    "title": "Student & Faculty Achievements",
    "desc": "Outstanding results, research publication grants, sports cups, and hackathon wins.",
    "details": [
      {
        "label": "Media Contact",
        "value": "press@musalier.ac.in"
      }
    ],
    "subPath": "news-events/achievements",
    "url": "/news-events/achievements/"
  },
  {
    "category": "news-events",
    "categoryTitle": "News & Events",
    "categoryBadge": "Campus Updates",
    "id": "announcements",
    "title": "Official Announcements",
    "desc": "University guidelines, exam schedules, circulars, and academic notifications.",
    "details": [
      {
        "label": "Media Contact",
        "value": "press@musalier.ac.in"
      }
    ],
    "subPath": "news-events/announcements",
    "url": "/news-events/announcements/"
  },
  {
    "category": "news-events",
    "categoryTitle": "News & Events",
    "categoryBadge": "Campus Updates",
    "id": "events-calendar",
    "title": "Events Calendar",
    "desc": "Schedule of upcoming fests, technical conferences, fests, and audits.",
    "details": [
      {
        "label": "Media Contact",
        "value": "press@musalier.ac.in"
      }
    ],
    "subPath": "news-events/events-calendar",
    "url": "/news-events/events-calendar/"
  },
  {
    "category": "news-events",
    "categoryTitle": "News & Events",
    "categoryBadge": "Campus Updates",
    "id": "latest-news",
    "title": "Latest Campus News",
    "desc": "Explore the latest headlines, research breakthroughs, and news from Musalier Hills.",
    "details": [
      {
        "label": "Media Contact",
        "value": "press@musalier.ac.in"
      }
    ],
    "subPath": "news-events/latest-news",
    "url": "/news-events/latest-news/"
  },
  {
    "category": "news-events",
    "categoryTitle": "News & Events",
    "categoryBadge": "Campus Updates",
    "id": "media-gallery",
    "title": "Campus Media Gallery",
    "desc": "Photo collections and video reports of annual cultural fests, graduation days, and sports meets.",
    "details": [
      {
        "label": "Media Contact",
        "value": "press@musalier.ac.in"
      }
    ],
    "subPath": "news-events/media-gallery",
    "url": "/news-events/media-gallery/"
  },
  {
    "category": "placements",
    "categoryTitle": "Placement Portal",
    "categoryBadge": "Careers & CGPU",
    "id": "career-guidance",
    "title": "Career Guidance Cell",
    "desc": "Conducts seminars on GATE exam preparation, civil service tracks (IAS/IPS), studying abroad options, and GRE/TOEFL coaching classes.",
    "details": [
      {
        "label": "Collaborations",
        "value": "Triumphant Institute of Management Education"
      }
    ],
    "subPath": "placements/career-guidance",
    "url": "/placements/career-guidance/"
  },
  {
    "category": "placements",
    "categoryTitle": "Placement Portal",
    "categoryBadge": "Careers & CGPU",
    "id": "internship-programs",
    "title": "Internship Programs",
    "desc": "Facilitates mandatory internships. Students carry out short-term training in Keltron, KSEB, ISRO, and software tech parks to obtain real-world engineering exposure.",
    "details": [
      {
        "label": "KTU Internship Credits",
        "value": "Required for degree completion"
      }
    ],
    "subPath": "placements/internship-programs",
    "url": "/placements/internship-programs/"
  },
  {
    "category": "placements",
    "categoryTitle": "Placement Portal",
    "categoryBadge": "Careers & CGPU",
    "id": "placement-gallery",
    "title": "Placement Gallery",
    "desc": "Snapshots of our campus recruitment drives, placed student assemblies, recruiter meets, and corporate MoUs.",
    "details": [
      {
        "label": "Corporate Events",
        "value": "15+ Recruitment drives annually"
      }
    ],
    "customHtml": "\n            <div class=\"details-box\" style=\"margin-top: 20px; background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); padding: 24px; border-radius: 12px; text-align: center;\">\n                <h4 style=\"color:var(--white);margin-bottom:8px;\">Placed Students Hub</h4>\n                <p style=\"color:var(--muted-text);margin-size:0.9rem;margin-bottom:15px;\">Check out our visual timeline of student accomplishments and recruitment drives.</p>\n                <div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:12px;margin-top:15px;\">\n                    <div style=\"background:rgba(0,0,0,0.3);padding:15px;border-radius:8px;border:1px dashed var(--glass-border)\">\n                        <div style=\"font-size:1.5rem;margin-bottom:6px;\">🎓</div>\n                        <strong style=\"color:var(--text-light);font-size:0.85rem;\">UST Recruitment 2025</strong>\n                    </div>\n                    <div style=\"background:rgba(0,0,0,0.3);padding:15px;border-radius:8px;border:1px dashed var(--glass-border)\">\n                        <div style=\"font-size:1.5rem;margin-bottom:6px;\">🎓</div>\n                        <strong style=\"color:var(--text-light);font-size:0.85rem;\">TCS CodeVita Placed</strong>\n                    </div>\n                    <div style=\"background:rgba(0,0,0,0.3);padding:15px;border-radius:8px;border:1px dashed var(--glass-border)\">\n                        <div style=\"font-size:1.5rem;margin-bottom:6px;\">🎓</div>\n                        <strong style=\"color:var(--text-light);font-size:0.85rem;\">Infosys Day 1 Allotment</strong>\n                    </div>\n                </div>\n            </div>\n        ",
    "subPath": "placements/placement-gallery",
    "url": "/placements/placement-gallery/"
  },
  {
    "category": "placements",
    "categoryTitle": "Placement Portal",
    "categoryBadge": "Careers & CGPU",
    "id": "placement-statistics",
    "title": "Placement Statistics",
    "desc": "Excellent placement index with over 90% placement rates in B.Tech CSE and ECE. Multiple students secured dual offers in national tech fests.",
    "details": [
      {
        "label": "Highest Annual Package",
        "value": "₹12.5 Lakhs Per Annum"
      },
      {
        "label": "Average CTC",
        "value": "₹4.8 Lakhs Per Annum"
      },
      {
        "label": "Total Students Placed",
        "value": "280+ Students in 2025 Cycle"
      }
    ],
    "subPath": "placements/placement-statistics",
    "url": "/placements/placement-statistics/"
  },
  {
    "category": "placements",
    "categoryTitle": "Placement Portal",
    "categoryBadge": "Careers & CGPU",
    "id": "recruiters",
    "title": "Our Top Recruiters",
    "desc": "Top IT firms and core engineering companies visit our campus annually for drive allocations.",
    "details": [
      {
        "label": "Placement Officer",
        "value": "Mr. Rajeev Nair"
      }
    ],
    "customHtml": "<div class=\"table-wrapper\">\n    <table class=\"data-table\">\n        <thead>\n            <tr>\n                <th>Recruitment Partner</th>\n                <th>Industry Type</th>\n                <th>Primary Hiring Branches</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr><td>TCS</td><td>IT Services</td><td>CSE, ECE, EEE, MCA</td></tr>\n            <tr><td>Infosys</td><td>Software consulting</td><td>CSE, ECE, MCA</td></tr>\n            <tr><td>Wipro</td><td>Tech Consulting</td><td>CSE, ECE, ME, EEE</td></tr>\n            <tr><td>UST Global</td><td>Enterprise solutions</td><td>CSE, MCA, ECE</td></tr>\n            <tr><td>Allianz</td><td>Financial Tech Services</td><td>MBA, B.Com, MCA</td></tr>\n            <tr><td>VVDN Technologies</td><td>Core Hardware / IoT</td><td>ECE, EEE</td></tr>\n        </tbody>\n    </table>\n</div>",
    "subPath": "placements/recruiters",
    "url": "/placements/recruiters/"
  },
  {
    "category": "placements",
    "categoryTitle": "Placement Portal",
    "categoryBadge": "Careers & CGPU",
    "id": "training-placement-cell",
    "title": "Training & Placement Cell",
    "desc": "The Career Guidance & Placement Unit (CGPU) coordinates placement drives. Starts training in aptitude, logical reasoning, programming skills, and soft communication from the first semester onwards.",
    "details": [
      {
        "label": "Office Location",
        "value": "Main Block, First Floor"
      }
    ],
    "subPath": "placements/training-placement-cell",
    "url": "/placements/training-placement-cell/"
  },
  {
    "category": "research-innovation",
    "categoryTitle": "Research & Innovation",
    "categoryBadge": "R&D Wings",
    "id": "consultancy",
    "title": "Industrial Consultancy",
    "desc": "Our civil and mechanical engineering departments run professional consulting for government departments and local bodies.",
    "details": [
      {
        "label": "Key Domains",
        "value": "Soil Testing, Concrete Strength Auditing, Machinery calibration"
      },
      {
        "label": "Testing Center",
        "value": "Civil Structural Lab, CNC Workshop"
      }
    ],
    "subPath": "research-innovation/consultancy",
    "url": "/research-innovation/consultancy/"
  },
  {
    "category": "research-innovation",
    "categoryTitle": "Research & Innovation",
    "categoryBadge": "R&D Wings",
    "id": "funded-projects",
    "title": "Funded Research Projects",
    "desc": "Musalier departments regularly win grants from state and central agencies like KSCSTE, AICTE, CERD, and KTU.",
    "details": [
      {
        "label": "Total active funding",
        "value": "25 Lakhs+ State Grants"
      },
      {
        "label": "Primary Sponsor",
        "value": "KSCSTE, KTU CERD, DST"
      }
    ],
    "subPath": "research-innovation/funded-projects",
    "url": "/research-innovation/funded-projects/"
  },
  {
    "category": "research-innovation",
    "categoryTitle": "Research & Innovation",
    "categoryBadge": "R&D Wings",
    "id": "iedc",
    "title": "IEDC Startup Hub",
    "desc": "The Innovation and Entrepreneurship Development Centre (IEDC) acts as an incubator. Supported by Kerala Startup Mission, we provide desk space, Wi-Fi, and seed money for student business ventures.",
    "details": [
      {
        "label": "Nodal Officer",
        "value": "Prof. Harikrishnan"
      },
      {
        "label": "Active Startups On Campus",
        "value": "5 Student Companies"
      }
    ],
    "subPath": "research-innovation/iedc",
    "url": "/research-innovation/iedc/"
  },
  {
    "category": "research-innovation",
    "categoryTitle": "Research & Innovation",
    "categoryBadge": "R&D Wings",
    "id": "innovation-hub",
    "title": "Innovation & Maker Hub",
    "desc": "A prototyping workspace with 3D printers, CNC routers, electronics test bench systems, and sensors for IoT experiments.",
    "details": [
      {
        "label": "Lab Coordinator",
        "value": "Mr. Shibu K."
      }
    ],
    "subPath": "research-innovation/innovation-hub",
    "url": "/research-innovation/innovation-hub/"
  },
  {
    "category": "research-innovation",
    "categoryTitle": "Research & Innovation",
    "categoryBadge": "R&D Wings",
    "id": "patents",
    "title": "Patents & Copyrights",
    "desc": "Guides teams through intellectual property procedures. The college sponsors patent filing costs for validated design prototypes created by students.",
    "details": [
      {
        "label": "Patents Filed",
        "value": "8 Patents (2023-2026)"
      }
    ],
    "subPath": "research-innovation/patents",
    "url": "/research-innovation/patents/"
  },
  {
    "category": "research-innovation",
    "categoryTitle": "Research & Innovation",
    "categoryBadge": "R&D Wings",
    "id": "publications",
    "title": "Faculty Publications",
    "desc": "Maintains records of academic papers published in peer-reviewed journals (SCI/Scopus index) and presentations at IEEE conferences.",
    "details": [
      {
        "label": "Total Papers (2025)",
        "value": "85+ Research Publications"
      }
    ],
    "subPath": "research-innovation/publications",
    "url": "/research-innovation/publications/"
  },
  {
    "category": "research-innovation",
    "categoryTitle": "Research & Innovation",
    "categoryBadge": "R&D Wings",
    "id": "research-cell",
    "title": "Research & Development",
    "desc": "Promotes research proposals, aids faculty in securing grants from KSCSTE, AICTE, and CERD, and sponsors participation in international conferences.",
    "details": [
      {
        "label": "Dean, R&D",
        "value": "Dr. Thomas Mathew"
      }
    ],
    "subPath": "research-innovation/research-cell",
    "url": "/research-innovation/research-cell/"
  },
  {
    "category": "research-innovation",
    "categoryTitle": "Research & Innovation",
    "categoryBadge": "R&D Wings",
    "id": "research-policies",
    "title": "Research & Ethics Policies",
    "desc": "Maintains professional academic honesty, anti-plagiarism guides, research encouragement incentives, and publications policies.",
    "details": [
      {
        "label": "Policy Lead",
        "value": "Dean R&D (Dr. Jacob V.)"
      },
      {
        "label": "Incentive Scheme",
        "value": "Financial grants for UGC-CARE / Scopus index publications"
      }
    ],
    "subPath": "research-innovation/research-policies",
    "url": "/research-innovation/research-policies/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "cyber-security",
    "title": "Computer Science & Eng (Cyber Security)",
    "desc": "Focuses on network security, digital forensics, ethical hacking, secure coding, cryptography, and cloud security compliance.",
    "details": [
      {
        "label": "Intake capacity",
        "value": "60 Seats"
      },
      {
        "label": "Head of Department",
        "value": "Dr. Manoj Kumar K."
      },
      {
        "label": "Core Labs",
        "value": "Cyber Security & Forensics Lab, Cryptography Research Lab"
      }
    ],
    "subPath": "academics/departments/cyber-security",
    "url": "/academics/departments/cyber-security/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "ai-ds",
    "title": "Artificial Intelligence & Data Science",
    "desc": "Delivers advanced education in machine learning algorithms, big data analytics, statistical modeling, data visualization, and deep learning platforms.",
    "details": [
      {
        "label": "Intake capacity",
        "value": "60 Seats"
      },
      {
        "label": "Head of Department",
        "value": "Dr. Preethi M."
      },
      {
        "label": "Core Labs",
        "value": "Big Data Lab, GPU Deep Learning Center"
      }
    ],
    "subPath": "academics/departments/ai-ds",
    "url": "/academics/departments/ai-ds/"
  },
  {
    "category": "academics",
    "categoryTitle": "Academics & Portals",
    "categoryBadge": "Academic Wings",
    "id": "vlsi-design",
    "title": "Electronics Engineering (VLSI Design & Technology)",
    "desc": "Dedicated to chip design architectures, semiconductor fabrication processes, hardware description languages (Verilog/VHDL), and FPGA prototyping.",
    "details": [
      {
        "label": "Intake capacity",
        "value": "30 Seats"
      },
      {
        "label": "Head of Department",
        "value": "Prof. John Mathews (ECE Coordination)"
      },
      {
        "label": "Core Labs",
        "value": "Cadence EDA Tool Lab, FPGA Embedded Systems Lab"
      }
    ],
    "subPath": "academics/departments/vlsi-design",
    "url": "/academics/departments/vlsi-design/"
  }
];
