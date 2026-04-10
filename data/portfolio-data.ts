export const personalInfo = {
  name: 'Abhi Das',
  title: 'Lead QA Engineer',
  tagline:
    '18+ years building quality into software across sports streaming, retail analytics, construction safety, and fintech. I architect automation frameworks from scratch, build CI/CD pipelines, and lead QA teams that ship confidently.',
  linkedin: 'https://www.linkedin.com/in/abhidp/',
  github: 'https://github.com/abhidp',
  resumeUrl: '/Abhi_Das_Lead_QA_Engineer.pdf'
}

export const stats = [
  { label: 'Years Experience', value: '18+' },
  { label: 'Teams Led (up to)', value: '7' },
  { label: 'Annual Cost Saved', value: '$40K' },
  { label: 'Onboarding Time Cut', value: '95%' }
]

export const aboutParagraphs = [
  "I'm a Lead QA Automation Engineer and Platform Engineer who has spent nearly two decades ensuring that software doesn't just work - it works at scale, under pressure, and without surprises. From ensuring platform stability during the FIFA Women's World Cup 2023 to saving USD 40K annually through infrastructure optimisation, I've consistently delivered measurable business impact across billion-dollar enterprises and high-growth startups.",
  "My philosophy is simple: quality is not a phase - it's a culture. I champion shift-left testing, automation-first strategies, and cross-functional collaboration that catches defects before they become disasters. I've built test automation frameworks from scratch across Web, API, Mobile, and Performance - and I've led and mentored QA teams of up to 7 engineers to operate autonomously on complex projects.",
  "I'm also an AI enthusiast with hands-on experience in agentic coding tools, actively upskilling in AI/LLM testing frameworks including DeepEval and RAGAS. When I'm not breaking software professionally, you'll find me exploring the evolving landscape of quality engineering and sharing what I learn with the community."
]

export const skillCategories = [
  {
    title: 'Programming',
    skills: ['JavaScript', 'TypeScript', 'Node.js', 'Python', 'Shell Scripting']
  },
  {
    title: 'Frontend & E2E Testing',
    skills: ['Playwright', 'Cypress', 'WebDriverIO', 'Selenium', 'Appium']
  },
  {
    title: 'API & Contract Testing',
    skills: [
      'REST',
      'GraphQL',
      'gRPC',
      'Postman/Newman',
      'Schemathesis',
      'Pact'
    ]
  },
  {
    title: 'Performance & Accessibility',
    skills: ['K6', 'JMeter', 'Artillery', 'axe-core', 'WCAG 2.1']
  },
  {
    title: 'CI/CD & Cloud',
    skills: [
      'GitHub Actions',
      'Bitbucket Pipelines',
      'CircleCI',
      'Buildkite',
      'Docker',
      'Kubernetes (CKAD)',
      'Terraform',
      'AWS',
      'GCP'
    ]
  },
  {
    title: 'AI & LLM Testing',
    skills: [
      'DeepEval',
      'RAGAS',
      'LangChain',
      'ChromaDB',
      'Claude Code',
      'Ollama',
      'MCP Servers'
    ]
  }
]

export const caseStudies = [
  {
    title: "Ensuring Platform Stability for the FIFA Women's World Cup 2023",
    context: 'Optus Sport · Sports Streaming · Millions of Concurrent Viewers',
    challenge:
      'A major live sporting event in Australia demanded flawless streaming performance. The platform needed to handle peak concurrent viewership without degradation during high-stakes matches.',
    impact:
      'Zero critical incidents during tournament · Platform handled peak concurrent load · Bottlenecks identified and resolved pre-launch',
    tags: ['Performance', 'K6', 'Streaming', 'AWS']
  },
  {
    title: 'Cutting Developer Onboarding from 4 Hours to 10 Minutes',
    context: 'Zitcha · Retail AdTech SaaS · 4 Repositories',
    challenge:
      'New developers needed 3-4 hours and peer assistance to set up their local environment across 4 repositories. This wasted engineering time and created dependency on senior team members.',
    impact:
      '95% reduction in setup time · Zero peer assistance needed · Instant environment resets enabled',
    tags: ['Platform Engineering', 'Automation', 'DX']
  },
  {
    title: 'Saving $40K/Year by Eliminating a Paid Testing Subscription',
    context: 'SafetyCulture · Construction Safety SaaS · Team of 7',
    challenge:
      'The QA team relied on a paid Cypress Cloud subscription for parallel test execution. With 7 engineers running E2E tests, the annual cost was significant and the dependency created vendor lock-in.',
    impact:
      'USD 40K annual cost saving · Containerised parallel E2E in CI · Eliminated vendor dependency',
    tags: ['CI/CD', 'Docker', 'Cost Optimisation']
  }
]

export const experience = [
  {
    dateRange: 'Jan 2025 - Mar 2026',
    company: 'Zitcha',
    logo: '/logos/zitcha.jpeg',
    initials: 'Z',
    role: 'Senior QA & Platform Engineer',
    description:
      'Architected E2E test frameworks with Playwright directly into build pipelines, enforcing quality gates that block merges on failure. Engineered single-script developer environment setup across 4 repos, cutting onboarding from 4 hours to 10 minutes. Implemented contract testing with Schemathesis and remediated compliance tests in Vanta via Terraform.',
    technologies: [
      'Playwright',
      'TypeScript',
      'Terraform',
      'Schemathesis',
      'Datadog'
    ],
    current: false
  },
  {
    dateRange: 'Feb 2024 - Jan 2025',
    company: 'Quantium',
    logo: '/logos/quantium.jpeg',
    initials: 'Q',
    role: 'Lead QA Engineer',
    description:
      'Established QA culture and automated testing from zero across multiple engineering teams. Built automation frameworks from scratch using Cypress, Playwright, and custom solutions for REST and gRPC services. Created K6 performance testing frameworks for peak retail events (Black Friday, Christmas). Won the Quantium AI Expedition competition.',
    technologies: ['Cypress', 'Playwright', 'K6', 'gRPC', 'SonarQube'],
    current: false
  },
  {
    dateRange: 'Sep 2022 - Feb 2024',
    company: 'Optus Sport',
    logo: '/logos/optus-sport.jpeg',
    initials: 'OS',
    role: 'Lead Test Automation Engineer',
    description:
      "Developed all automation frameworks from scratch: 70% backend (Node.js, AWS Lambda/S3/DynamoDB, Serverless) and 30% frontend (Playwright). Conducted performance testing with K6 for FIFA Women's World Cup 2023. Built dedicated APIs for on-demand test data generation, saving significant time for manual testers and developers.",
    technologies: ['Playwright', 'Node.js', 'K6', 'AWS Lambda', 'Serverless'],
    current: false
  },
  {
    dateRange: 'Oct 2020 - Sep 2022',
    company: 'SafetyCulture',
    logo: '/logos/safetyculture.jpeg',
    initials: 'SC',
    role: 'Lead QA Engineer',
    description:
      'Led and managed a team of 7 QA Engineers in a construction safety SaaS environment. Containerised E2E tests for parallel CI execution, saving USD 40K/year. Integrated CI/CD with Slack for real-time test failure notifications. Established testing-in-production strategy with pre-deployment gates and hourly post-deployment health monitoring.',
    technologies: [
      'Cypress',
      'Docker',
      'CI/CD',
      'Slack Integration',
      'Datadog'
    ],
    current: false
  },
  {
    dateRange: 'Jul 2019 - Jun 2020',
    company: 'MYOB',
    logo: '/logos/myob.jpeg',
    initials: 'M',
    role: 'Senior QA Engineer',
    description:
      'Championed Test-Driven Development adoption across the organisation. Created and maintained E2E tests using Selenium WebDriverIO with TypeScript and API/GraphQL automation across web and mobile platforms.',
    technologies: [
      'WebDriverIO',
      'TypeScript',
      'Selenium',
      'GraphQL',
      'Postman'
    ],
    current: false
  },
  {
    dateRange: 'Jun 2017 - Jul 2019',
    company: 'Deltatre (acquired Massive)',
    logo: '/logos/deltatre.jpeg',
    initials: 'D',
    role: 'Lead QA Engineer',
    description:
      'Led a team of 4 QA Automation Engineers, building full-stack automation frameworks in Selenium WebDriverIO with TypeScript from scratch. Mentored junior engineers to contribute effectively to automation efforts.',
    technologies: ['Selenium', 'WebDriverIO', 'TypeScript'],
    current: false
  },
  {
    dateRange: 'Nov 2010 - May 2017',
    company: 'Oracle India',
    logo: '/logos/oracle.jpeg',
    initials: 'O',
    role: 'Senior Software QA Engineer',
    description:
      'Built deep QA foundations across enterprise software at scale over 6+ years. Developed expertise in testing complex enterprise systems, database validation, and quality processes that became the bedrock of a career in quality engineering.',
    technologies: [
      'Oracle',
      'SQL',
      'Enterprise Testing',
      'Manual & Automated QA'
    ],
    current: false
  },
  {
    dateRange: 'May 2007 - Oct 2010',
    company: 'ADP India',
    logo: '/logos/adp.jpeg',
    initials: 'ADP',
    role: 'Senior Member - Technical',
    description:
      'Started professional career in quality assurance at a global HR technology company. Gained foundational experience in software testing methodologies, defect lifecycle management, and cross-functional collaboration across engineering teams.',
    technologies: [
      'QA Fundamentals',
      'Testing Methodologies',
      'Defect Management'
    ],
    current: false
  }
]

export const articles = [
  {
    id: 1,
    date: '2024-12-15',
    title: 'Why Shift-Left Testing Is More Than a Buzzword',
    readTime: '8 min read',
    summary:
      'A practical guide to implementing shift-left testing in organizations that resist change, based on lessons from three real transformations.',
    tag: 'Strategy',
    url: '#'
  },
  {
    id: 2,
    date: '2024-09-22',
    title: "Playwright vs Cypress in 2024: A Lead QA's Honest Take",
    readTime: '12 min read',
    summary:
      "After running both in production for 2+ years, here's what I actually think about these two automation heavyweights.",
    tag: 'Tools',
    url: '#'
  },
  {
    id: 3,
    date: '2024-06-10',
    title: "The QA Lead's Guide to Performance Testing That Actually Matters",
    readTime: '10 min read',
    summary:
      "Most performance tests are theater. Here's how to build a performance testing strategy that catches real problems before your users do.",
    tag: 'Performance',
    url: '#'
  },
  {
    id: 4,
    date: '2024-03-05',
    title: 'Building Quality Culture: It Starts with the Standup',
    readTime: '6 min read',
    summary:
      "Quality isn't a department - it's a mindset. How small changes to your daily ceremonies can transform how your entire team thinks about bugs.",
    tag: 'Leadership',
    url: '#'
  }
]
