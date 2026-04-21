export type SkillCategory = {
  label: string
  icon: string
  skills: string[]
}

export type TimelineMilestone = {
  id: string
  date: string
  endDate?: string
  title: string
  organization: string
  type: 'education' | 'achievement' | 'certification' | 'work'
  description: string
  tags?: string[]
}

export type DevLogEntry = {
  id: string
  date: string
  status: 'feature' | 'fix' | 'refactor' | 'milestone' | 'planning'
  title: string
  description: string
  codeSnippet?: {
    language: string
    filename?: string
    code: string
  }
}

export type Project = {
  id: string
  slug: string
  title: string
  tagline: string
  summary: string
  description: string
  status: 'completed' | 'ongoing'
  featured: boolean
  year: string
  team: 'solo' | 'group'
  role: string
  githubUrl?: string
  liveUrl?: string
  techStack: string[]
  repoEvidence?: string[]
  highlights: string[]
  problem: string
  solution: string
  architecture: string[]
  contributions?: string[]
  technicalDetails: string[]
  challenges: string[]
  devLogs: DevLogEntry[]
}

export type Certificate = {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  imageUrl?: string
  category: 'technical' | 'management' | 'design' | 'other'
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    icon: 'Code2',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'Frontend',
    icon: 'Monitor',
    skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Plotly.js', 'Recharts'],
  },
  {
    label: 'Backend',
    icon: 'Server',
    skills: ['Node.js', 'Express', 'Flask', 'Spring Boot', 'REST APIs', 'JWT Authentication', 'Socket.IO', 'WebSockets'],
  },
  {
    label: 'Databases',
    icon: 'Database',
    skills: ['MongoDB', 'MySQL', 'SQLite', 'SQLAlchemy', 'Mongoose', 'JDBC', 'IndexedDB'],
  },
  {
    label: 'AI / ML',
    icon: 'Brain',
    skills: ['TensorFlow / Keras', 'LSTM Models', 'Data Preprocessing', 'Growth Prediction', 'Gemini AI Integration', 'Pandas'],
  },
  {
    label: 'Security',
    icon: 'Shield',
    skills: ['bcrypt', 'Helmet', 'Rate Limiting', 'Input Validation', 'JWT', 'Mongo Sanitize'],
  },
  {
    label: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA', 'Maven'],
  },
  {
    label: 'Creative & Design',
    icon: 'Cpu',
    skills: ['Adobe Lightroom', 'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Photography'],
  },
]

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'tm-0',
    date: '2020',
    title: 'Advanced Level Completion',
    organization: 'G.C.E. A/L',
    type: 'education',
    description:
      'Completed G.C.E. Advanced Level examinations, building a strong academic foundation and developing analytical thinking skills.',
    tags: ['A/L', 'Education'],
  },
  {
    id: 'tm-1',
    date: '2022',
    title: 'Turning Point: Choosing the Right Path',
    organization: 'Sabaragamuwa University',
    type: 'education',
    description:
      'Received an opportunity to pursue Medicine at Sabaragamuwa University. After careful reflection, I realized my passion lies in technology and made a bold decision to transition into the IT field.',
    tags: ['Decision Making', 'Career Shift'],
  },
  {
    id: 'tm-3',
    date: '2024',
    title: 'Barista Course Completed',
    organization: 'BUONO Coffee Academy',
    type: 'certification',
    description:
      'Completed a 40-hour professional Barista Skills Masterclass. Final Grade: A (Distinction) — 92/100. Covered coffee brewing, extraction, milk techniques, café management, and customer service.',
    tags: ['Barista', 'Grade A', 'Distinction'],
  },
  {
    id: 'tm-2b',
    date: '2022',
    title: 'Photography Club Committee Member',
    organization: 'Sabaragamuwa University',
    type: 'achievement',
    description:
      'Served as a Committee Member of the University Photography Club, contributing to event photography and documentation while developing strong editing and design skills using Adobe Lightroom, Photoshop, and Illustrator.',
    tags: ['Photography', 'Adobe', 'Design'],
  },
  {
    id: 'tm-4',
    date: '2025',
    title: 'BSc (Hons) Computer Science',
    organization: 'University of Westminster (IIT)',
    type: 'education',
    description:
      'Currently pursuing a degree in Computer Science, focusing on full-stack development, AI/ML, and building real-world software systems.',
    tags: ['Computer Science', 'Full-Stack', 'AI/ML'],
  },
]

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'bambinoo',
    title: 'Bambinoo',
    tagline: 'AI-powered digital child health and development record system',
    summary: 'A second-year group project that digitizes child health records and introduces AI-assisted analytics, prediction, and risk alerting.',
    description:
      'Bambinoo is a healthcare-focused digital CHDR platform built as a second-year group project. The system centralizes growth records, developmental milestones, vaccinations, and clinician notes, while also supporting AI-driven health analytics and predictive growth monitoring.',
    status: 'completed',
    featured: true,
    year: '2026',
    team: 'group',
    role: 'ML engineering, analytics frontend, admin health monitoring, and health risk notifications',
    techStack: ['React', 'Vite', 'Flask', 'Python', 'SQLAlchemy', 'SQLite', 'Socket.IO', 'Plotly.js', 'Recharts', 'Gemini AI'],
    highlights: [
      'Digitized child health, vaccination, milestone, and appointment workflows',
      'Integrated AI-assisted health analytics and model-based growth prediction',
      'Added real-time health risk notifications for abnormal patterns',
      'Built dashboard-level system health visibility for admins and staff',
      'Structured around role-based workflows for parents, clinicians, and administrators',
    ],
    repoEvidence: [
      'Flask backend with SQLAlchemy models for users, children, growth records, vaccinations, milestones, appointments, and health notes',
      'Socket.IO configured in the backend for live notifications',
      'Frontend uses Plotly, Recharts, Axios, React Router, and socket.io-client',
      'ML module and predictor loading are wired from the backend app startup path',
    ],
    problem:
      'Paper-based child health records are hard to maintain, difficult to share, and weak for trend analysis. Clinicians and parents need faster access to structured growth data and earlier warnings for potential risks.',
    solution:
      'The project replaces fragmented paper records with a digital platform that combines structured health data entry, visual analytics, model-based growth prediction, and alerting to support earlier intervention and better continuity of care.',
    architecture: [
      'React frontend for role-based user interfaces and analytics views',
      'Flask REST backend for business logic, authentication, and record management',
      'SQLAlchemy ORM over SQLite/deployment database for persistent clinical data',
      'Socket.IO for pushing live alerts and system events',
      'ML pipeline for preprocessing, model training, and predictive growth analysis',
    ],
    contributions: [
      'Preprocessed health and milestone datasets to make them suitable for machine learning workflows',
      'Built and trained the ML prediction model used for growth-related analysis',
      'Implemented the frontend growth prediction chart experience so users could interpret model output visually',
      'Worked on the AI health analytics area that transforms raw measurements into more meaningful clinical insight',
      'Built the admin system health section to surface backend and operational visibility',
      'Implemented health risk notification logic for identifying and surfacing concerning patterns',
    ],
    technicalDetails: [
      'The backend defines a fairly rich domain model. Instead of keeping only one measurement table, it separates children, growth records, appointments, vaccinations, milestones, health records, and health notes. That design keeps each workflow explicit and reduces ambiguity when querying or extending records later.',
      'Your ML-related work fits naturally into this domain model because growth measurements are time-series data. Preprocessing is critical here: measurements need to be cleaned, ordered, normalized, and aligned by age so that the prediction model sees consistent sequential inputs rather than noisy raw entries.',
      'The project uses Flask because it sits close to the Python ML stack. That makes it easier to load a predictor at server startup, run inference alongside API logic, and expose analytics endpoints without forcing the model through a separate service too early.',
      'On the frontend, charting is not just cosmetic. Plotly and Recharts allow the system to map model output and historical measurements into growth curves that are understandable to a clinician or parent. This is an important engineering decision because prediction is only useful if it becomes interpretable at the UI layer.',
      'The real-time notification layer matters because healthcare systems often need to react to new measurements quickly. With Socket.IO in both frontend and backend dependencies, the application can push live warning events instead of waiting for users to manually refresh dashboards.',
      'The admin system health area adds operational maturity to the project. Instead of treating the application as only a CRUD system, it introduces observability thinking: whether APIs are responsive, whether modules are available, and whether the system is healthy enough for real users.',
      'The AI health analytics section is valuable because it goes beyond storing values. It interprets a child’s pattern over time, which is closer to a decision-support system than a basic record system.',
    ],
    challenges: [
      'Mapping health data into a model-friendly sequential format without losing clinical meaning',
      'Making predictive results understandable through charts rather than raw model output only',
      'Balancing academic-project scope with a system that still feels realistic and role-aware',
      'Integrating live notifications and analytics into a healthcare workflow without making the interface overwhelming',
    ],
    devLogs: [
      {
        id: 'dl-1',
        date: '2025-02-01',
        status: 'planning',
        title: 'Structured data foundation for ML and analytics',
        description:
          'Defined a workflow where child measurements, health notes, and developmental records could be stored in a structured way first, making later analytics and model training possible.',
      },
      {
        id: 'dl-2',
        date: '2025-03-05',
        status: 'feature',
        title: 'Growth prediction charts and analytics views',
        description:
          'Turned model-oriented outputs into chart-based visual feedback so the system could communicate change over time instead of displaying only raw health values.',
      },
    ],
  },
  {
    id: 'proj-2',
    slug: 'petty-cash-system',
    title: 'Petty Cash Management System',
    tagline: 'Multi-user expense tracking with secure role-based workflows',
    summary: 'A full-stack finance workflow system for admins, employees, and accountants with security-focused backend design.',
    description:
      'This project manages departmental petty cash allocation, expense submission, and reporting in a controlled multi-user environment. It focuses on role separation, secure authentication, and reliable API behavior.',
    status: 'completed',
    featured: true,
    year: '2026',
    team: 'solo',
    role: 'Full-stack developer',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs'],
    highlights: [
      'Multi-role workflow for admins, employees, and accountants',
      'JWT-based authentication with protected APIs',
      'Security middleware including Helmet, rate limiting, and mongo sanitization',
      'MongoDB-backed transaction and department data management',
      'Health endpoint and production-aware backend startup checks',
    ],
    repoEvidence: [
      'Backend validates required environment variables before booting',
      'Express middleware stack includes Helmet, express-rate-limit, express-mongo-sanitize, CORS, and JSON body limits',
      'MongoDB connection includes retry behavior and graceful shutdown handling',
      'Frontend uses React, Axios, date-fns, ExcelJS, file-saver, and React Router',
    ],
    problem:
      'Manual petty cash tracking is error-prone, hard to audit, and difficult to manage when different roles need different levels of access and responsibility.',
    solution:
      'The system introduces a role-based full-stack workflow where expense data is captured centrally, secured at the API layer, and presented through a dashboard-oriented React interface.',
    architecture: [
      'React frontend for dashboards, forms, and report-oriented interactions',
      'Express API server for authentication, departments, users, and transactions',
      'MongoDB with Mongoose for document storage and flexible financial records',
      'JWT and bcrypt for account security and session trust',
    ],
    technicalDetails: [
      'One of the strongest technical points in this project is the backend startup validation. The server checks for required environment variables before doing anything else. That prevents a partially configured deployment from failing later in more confusing ways.',
      'The API layer is built with several security controls working together. Helmet hardens headers, mongo-sanitize protects against operator injection patterns, and express-rate-limit reduces abuse risk on API endpoints. These are practical production-minded additions that many student projects skip.',
      'The MongoDB connection logic is also better than a basic sample project because it includes retry behavior, connection tuning, and graceful shutdown handling. That shows awareness that real systems need startup resilience and clean teardown, not just a happy path.',
      'The frontend package indicates support for exports and richer reporting with ExcelJS and file-saver. That means the app is not only about form submission; it also addresses a real operations need: getting financial data out into report-friendly formats.',
      'A role-based system is a domain modeling problem as much as a UI problem. The project likely needs protected routes, role-aware rendering, and API authorization checks to keep each actor within the correct responsibilities.',
    ],
    challenges: [
      'Designing permissions so each role sees only the actions it should perform',
      'Making financial transaction flows traceable and consistent',
      'Securing a CRUD-heavy API against common misuse patterns',
    ],
    devLogs: [
      {
        id: 'dl-3',
        date: '2025-01-10',
        status: 'refactor',
        title: 'Hardened backend middleware stack',
        description:
          'Added and organized middleware for headers, request limiting, sanitization, and structured API error handling to make the finance backend more production-ready.',
      },
    ],
  },
  {
    id: 'proj-3',
    slug: 'pos-ticketing',
    title: 'POS Ticketing System',
    tagline: 'Real-time ticketing workflow for fast-moving sales environments',
    summary: 'A project focused on ticket issuing workflows, synchronized sales behavior, and an interface suited for quick transactional use.',
    description:
      'The POS Ticketing System is designed for environments where tickets need to be issued quickly and accurately. It emphasizes transaction flow, usability, and operational visibility during sales.',
    status: 'completed',
    featured: true,
    year: '2026',
    team: 'solo',
    role: 'Full-stack developer',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    highlights: [
      'Fast UI flow for transaction-driven ticket sales',
      'Operational thinking around availability, issuance, and tracking',
      'Suitable foundation for dashboard and reporting features',
      'Designed as a practical product workflow rather than a static demo',
    ],
    problem:
      'Ticket sales systems need to process transactions quickly while keeping issued records accurate and easy to track.',
    solution:
      'The project organizes sales interactions into a responsive workflow with central ticket handling and data persistence, supporting both issuance speed and traceability.',
    architecture: [
      'Frontend sales interface for rapid cashier interaction',
      'Backend API for ticket issuance and state handling',
      'Database layer for ticket records and transaction history',
      'Real-time communication layer where synchronized updates are needed',
    ],
    technicalDetails: [
      'The most important technical quality in a POS-style project is reducing friction in the transaction path. That means the UI must keep critical actions close, avoid unnecessary state confusion, and present confirmation clearly under pressure.',
      'At the backend, ticketing projects benefit from a single source of truth for ticket availability and issued state. That keeps records auditable and reduces the risk of conflicting updates when multiple actions happen close together.',
      'Real-time communication support such as Socket.IO is a good fit when dashboards, counters, or multiple clients need synchronized changes without refresh-heavy workflows.',
      'The engineering value of a POS project is often in workflow design and data consistency rather than algorithmic complexity. This still matters a lot because reliable product behavior is what users feel directly.',
    ],
    challenges: [
      'Keeping sales interactions quick without sacrificing record accuracy',
      'Designing transaction flows that feel smooth in real usage',
      'Supporting reporting or synchronization concerns as the system grows',
    ],
    devLogs: [],
  },
  {
    id: 'proj-4',
    slug: 'tour-booking',
    title: 'Tour Booking Website',
    tagline: 'Responsive booking experience with customer-facing communication flows',
    summary: 'A booking-focused web experience built around inquiry capture, user trust, and smooth travel browsing.',
    description:
      'This project presents tour packages through a responsive website and supports booking-style interactions, customer communication, and user-friendly content presentation.',
    status: 'completed',
    featured: false,
    year: '2024',
    team: 'solo',
    role: 'Frontend-focused full-stack developer',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'EmailJS'],
    highlights: [
      'Responsive layout for browsing travel offerings',
      'Booking and inquiry-oriented user flows',
      'Communication support for confirmations and follow-ups',
      'Good example of product presentation and customer-facing UX',
    ],
    problem:
      'Travel customers need a website that communicates offerings clearly and makes booking-related actions feel straightforward and trustworthy.',
    solution:
      'The site combines responsive design, package presentation, and booking communication features to create a smoother inquiry-to-confirmation experience.',
    architecture: [
      'Responsive frontend for package discovery and inquiry actions',
      'Backend or service integration for storing and processing booking-related data',
      'Email-based communication flow for confirmations or follow-up contact',
    ],
    technicalDetails: [
      'A booking website is a good test of frontend communication design because users need clarity at every step: where they can go, what it includes, and what action they should take next.',
      'Integrating services such as EmailJS adds practical product value because it shortens the gap between user action and business response.',
      'Projects like this often look simple on the surface, but they require clean form handling, responsive design discipline, and careful prioritization of information hierarchy.',
    ],
    challenges: [
      'Turning static travel content into a conversion-friendly layout',
      'Making booking actions feel easy on both desktop and mobile',
      'Keeping the experience clear without overwhelming users with too much detail',
    ],
    devLogs: [],
  },
  {
    id: 'proj-5',
    slug: 'snake-game',
    title: 'Snake Game',
    tagline: 'Classic gameplay recreated with Java and desktop UI fundamentals',
    summary: 'A Java-based Snake Game that demonstrates event-driven programming, rendering, and game loop thinking.',
    description:
      'This project recreates the classic Snake Game experience using Java. It focuses on keyboard-driven interaction, game-state updates, collision rules, and simple but effective desktop rendering.',
    status: 'completed',
    featured: false,
    year: '2024',
    team: 'solo',
    role: 'Java developer',
    techStack: ['React', 'Vite', 'Java', 'Spring Boot', 'REST API', 'Maven'],
    highlights: [
      'Keyboard-controlled gameplay using Java desktop UI',
      'Game loop logic for movement and updates',
      'Collision detection against walls and self',
      'Simple but solid example of event-driven desktop programming',
    ],
    repoEvidence: ['README explicitly documents Java Swing and AWT implementation and a GameFrame-based run flow'],
    problem:
      'Even a simple game needs consistent state updates, user input handling, and rule enforcement to feel correct and responsive.',
    solution:
      'The project implements a classic grid-based game structure with an update loop, keyboard input listeners, apple spawning, growth behavior, and game-over conditions.',
    architecture: [
      'Java Swing frame and panel structure for rendering',
      'AWT event handling for keyboard input',
      'In-memory game state for snake body, direction, score, and food position',
    ],
    technicalDetails: [
      'Game projects are useful because they force you to think in state transitions. On every tick, the snake position changes, collisions are checked, and the next screen render depends on the updated state.',
      'Using Swing and AWT gives direct exposure to event-driven desktop programming. Instead of relying on a heavy engine, the project likely manages repaint cycles, key events, and game-over logic more manually.',
      'Collision detection is the core rule system. The snake has to detect boundaries, self-intersection, and food contact in a consistent order so the game feels correct.',
      'Although simple, this project demonstrates timing, state management, and user-input integration—skills that carry over into broader UI and application development.',
    ],
    challenges: [
      'Keeping movement and rendering synchronized',
      'Implementing collision logic cleanly',
      'Maintaining readable code in a state-driven loop',
    ],
    devLogs: [],
  },
  {
    id: 'proj-6',
    slug: 'student-result-system',
    title: 'Student Result Management System',
    tagline: 'Java desktop application for student records and academic results',
    summary: 'A CRUD-oriented academic records system built with Java, Swing forms, JDBC, and MySQL.',
    description:
      'This desktop application manages student records and examination results through a Java Swing interface connected to a MySQL database. It follows a layered structure using model, DAO, service, DB, and UI packages.',
    status: 'completed',
    featured: false,
    year: '2024',
    team: 'solo',
    role: 'Java desktop developer',
    techStack: ['Java', 'Java Swing', 'JDBC', 'MySQL'],
    highlights: [
      'Layered package structure with model, DAO, service, DB, and UI separation',
      'PreparedStatement-based CRUD operations for students and results',
      'Swing forms for adding students, adding results, dashboard access, and viewing results',
      'Clear educational example of desktop app architecture connected to a relational database',
    ],
    repoEvidence: [
      'Dedicated DBConnection class for JDBC connectivity',
      'StudentDAO and ResultDAO manage SQL operations with PreparedStatement',
      'Separate UI forms include AddStudentForm, AddResultForm, ViewResultsForm, and Dashboard',
    ],
    problem:
      'Academic records need to be stored reliably, updated easily, and retrieved in a way that helps staff manage both student identities and marks efficiently.',
    solution:
      'The system combines a relational database backend with a desktop user interface and a DAO-based data access layer, making CRUD operations more organized and maintainable.',
    architecture: [
      'Swing UI layer for forms and navigation',
      'Service and DAO layers for business flow and persistence logic',
      'JDBC connection layer for MySQL communication',
      'Relational schema for students and result records',
    ],
    technicalDetails: [
      'This project has a nice layered structure for a learning-stage Java application. Instead of placing SQL directly inside UI forms, it separates data access into DAO classes such as StudentDAO and ResultDAO. That makes the code easier to maintain and reason about.',
      'PreparedStatement usage is important because it keeps SQL parameters structured and safer than raw string concatenation. It also makes CRUD methods easier to reuse and extend.',
      'The DBConnection class centralizes connection setup, which is a small but useful design decision. If connection details change, they can be updated in one place rather than across the whole project.',
      'The package layout shows awareness of application layering: model classes represent the data shape, DAOs handle persistence, services can coordinate logic, and UI classes focus on interaction. That is a strong architectural habit for future Java work.',
      'Because the system is relational, it is naturally suited to normalized student and result tables where records can be queried, updated, and filtered with predictable structure.',
    ],
    challenges: [
      'Keeping Swing forms and database code organized as the app grows',
      'Mapping relational records cleanly into Java objects',
      'Designing a desktop workflow that stays simple for administrative users',
    ],
    devLogs: [],
  },
]

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Foundations of Project Management',
    issuer: 'Google / Coursera',
    date: 'Mar 2026',
    credentialUrl: 'https://coursera.org/verify/UU4TDXZAAKIP',
    imageUrl: '/certificates/foundations-of-project-management.png',
    category: 'management',
  },
  {
    id: 'cert-6',
    title: 'Project Initiation: Starting a Successful Project',
    issuer: 'Google / Coursera',
    date: 'Apr 2026',
    credentialUrl: 'https://coursera.org/verify/EJOKDQS79W9R',
    imageUrl: '/certificates/project-initiation.png',
    category: 'management',
  },
  {
    id: 'cert-2',
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: 'Feb 2026',
    imageUrl: '/certificates/python-for-beginners.png',
    category: 'technical',
  },
  {
    id: 'cert-7',
    title: 'Python Essential Training',
    issuer: 'LinkedIn Learning',
    date: 'Apr 2025',
    imageUrl: '/certificates/python-essential-training.png',
    category: 'technical',
  },
  {
    id: 'cert-8',
    title: 'Python for Non-Programmers',
    issuer: 'LinkedIn Learning',
    date: 'May 2025',
    imageUrl: '/certificates/python-for-non-programmers.png',
    category: 'technical',
  },
  {
    id: 'cert-9',
    title: 'Python Data Structures: Trees',
    issuer: 'LinkedIn Learning',
    date: 'Apr 2025',
    imageUrl: '/certificates/python-data-structures-trees.png',
    category: 'technical',
  },
  {
    id: 'cert-3',
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa',
    date: '2025',
    imageUrl: '/certificates/web-design-for-beginners.png',
    category: 'design',
  },
  {
    id: 'cert-4',
    title: 'Barista Skills Masterclass',
    issuer: 'BUONO Coffee Academy',
    date: 'May 2024',
    imageUrl: '/certificates/barista-buono.jpg',
    category: 'other',
  },
  {
    id: 'cert-5',
    title: 'IEEEXtreme 19.0 Programming Competition',
    issuer: 'IEEE',
    date: 'Oct 2025',
    imageUrl: '/certificates/ieee-extreme-19.png',
    category: 'other',
  },
]

export const personalInfo = {
  name: 'Dilum Samarathunga',
  title: 'Full-Stack Developer',
  subtitle: 'AI & product-minded builder',
  tagline: 'Building practical digital products with full-stack engineering, analytics thinking, and a strong eye for real-world usability.',
  bio: 'Computer Science undergraduate at the University of Westminster. I build full-stack applications, experiment with AI-assisted systems, and enjoy turning messy real-world problems into clean, useful software. Outside tech, I have completed a barista course and actively practice photography.',
  location: 'Sri Lanka',
  email: 'vishmikas9@gmail.com',
  phone: '(+94) 71 359 8786',
  linkedin: 'https://www.linkedin.com/in/dilum-samarathunga/',
  github: 'https://github.com/vishmikas',
  cvPath: '/Dilum_Samarathunga.pdf',
}
