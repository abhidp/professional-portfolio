export const personalInfo = {
  name: 'John Das',
  title: 'Software Lead QA Engineer',
  tagline:
    '18+ years building quality into software across Fortune 500 companies and high-growth startups. I lead QA teams that ship confidently — fewer bugs, faster releases, happier users.',
  email: 'john.doe@example.com',
  linkedin: 'https://linkedin.com/in/johndoe',
  github: 'https://github.com/johndoe',
  resumeUrl: '#'
}

export const stats = [
  { label: 'Years Experience', value: '18+' },
  { label: 'Companies', value: '12' },
  { label: 'Defect Reduction', value: '60%' },
  { label: 'Users Impacted', value: '50M+' }
]

export const aboutParagraphs = [
  "I'm a Software Lead QA Engineer who has spent nearly two decades ensuring that software doesn't just work — it works beautifully. From billion-dollar enterprises to scrappy startups racing to product-market fit, I've built and led QA teams that transform how organizations think about quality.",
  "My philosophy is simple: quality is not a phase — it's a culture. I champion shift-left testing, automation-first strategies, and cross-functional collaboration that catches defects before they become disasters. I've built test automation frameworks from scratch, implemented CI/CD quality gates, and mentored dozens of engineers along the way.",
  "When I'm not breaking software professionally, you'll find me exploring new testing tools, contributing to QA communities, and writing about the evolving landscape of software quality engineering."
]

export const skillCategories = [
  {
    title: 'Testing Types',
    skills: [
      'Functional',
      'Performance',
      'Security',
      'Accessibility',
      'API',
      'Mobile',
      'E2E',
      'Regression'
    ]
  },
  {
    title: 'Automation Tools',
    skills: [
      'Selenium',
      'Cypress',
      'Playwright',
      'Appium',
      'REST Assured',
      'k6',
      'JMeter'
    ]
  },
  {
    title: 'CI/CD & DevOps',
    skills: [
      'Jenkins',
      'GitHub Actions',
      'Docker',
      'AWS',
      'Azure DevOps',
      'CircleCI'
    ]
  },
  {
    title: 'Test Management',
    skills: ['Jira', 'TestRail', 'Zephyr', 'qTest', 'Xray', 'Allure']
  },
  {
    title: 'Languages',
    skills: [
      'Python',
      'Java',
      'JavaScript',
      'TypeScript',
      'SQL',
      'Shell Scripting'
    ]
  },
  {
    title: 'Methodologies',
    skills: ['Agile', 'Scrum', 'Kanban', 'SAFe', 'TDD', 'BDD', 'Shift-Left']
  }
]

export const caseStudies = [
  {
    title: 'Building a Test Automation Framework from Zero to 80% Coverage',
    context: 'FinTech · Series C Startup · Team of 8',
    challenge:
      'The company had zero automated tests and was shipping with 3-day manual regression cycles that delayed every release.',
    impact:
      '80% automated coverage · Release cycle reduced from 2 weeks to 2 days',
    tags: ['Automation', 'Playwright', 'CI/CD']
  },
  {
    title: 'Preventing a Launch-Day Disaster Through Performance Testing',
    context: 'E-Commerce · Fortune 500 · 30M+ Users',
    challenge:
      'A major product relaunch was at risk — load testing revealed the checkout service would fail at 40% of expected Black Friday traffic.',
    impact: 'Zero downtime on launch day · Handled 2x projected traffic',
    tags: ['Performance', 'k6', 'AWS']
  },
  {
    title: 'Leading a QA Transformation: Manual to Automation-First',
    context: 'Healthcare SaaS · Enterprise · Team of 15',
    challenge:
      'A 15-person QA team was 100% manual, causing a 6-week regression backlog and frequent production incidents.',
    impact: '70% reduction in production defects · Team velocity doubled',
    tags: ['Leadership', 'Strategy', 'Selenium']
  }
]

export const experience = [
  {
    dateRange: '2021 — Present',
    company: 'TechCorp Global',
    role: 'Lead QA Engineer',
    description:
      'Leading a cross-functional QA team of 12 across 3 product lines. Architected the company-wide test automation strategy and built the CI/CD quality gates that reduced production incidents by 65%.',
    technologies: ['Playwright', 'TypeScript', 'GitHub Actions', 'AWS'],
    current: true
  },
  {
    dateRange: '2018 — 2021',
    company: 'ScaleUp Inc.',
    role: 'Senior QA Engineer',
    description:
      'Owned the QA strategy for a high-growth fintech platform processing $2B+ annually. Built the performance testing infrastructure and led the shift-left initiative that halved defect escape rate.',
    technologies: ['Cypress', 'k6', 'Jenkins', 'Python'],
    current: false
  },
  {
    dateRange: '2014 — 2018',
    company: 'Enterprise Solutions Ltd.',
    role: 'QA Engineer II',
    description:
      'Spearheaded automation adoption in a traditionally manual QA organization. Developed a custom Selenium framework that replaced 3 weeks of manual regression with overnight automated runs.',
    technologies: ['Selenium', 'Java', 'TestRail', 'Docker'],
    current: false
  },
  {
    dateRange: '2008 — 2014',
    company: 'StartupLab / Various',
    role: 'QA Engineer',
    description:
      'Cut teeth across multiple startups and mid-size companies. Built QA processes from scratch, learned what works at scale, and developed a deep understanding of how quality engineering accelerates product delivery.',
    technologies: ['Manual Testing', 'SQL', 'Jira', 'Agile'],
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
      "Quality isn't a department — it's a mindset. How small changes to your daily ceremonies can transform how your entire team thinks about bugs.",
    tag: 'Leadership',
    url: '#'
  }
]
