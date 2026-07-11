export const profile = {
  name: 'Mostafa Sohrabi',
  role: 'Development Manager',
  subrole: 'Senior Full-Stack & Dynamics 365 Developer',
  location: 'Tehran, Iran',
  email: 'm.sohrabius@gmail.com',
  phone: '09332923390',
  linkedin: 'linkedin.com/in/sohrabius',
  linkedinUrl: 'https://linkedin.com/in/sohrabius',
  yearsExperience: '7+',
  tagline:
    'Architecting enterprise CRM solutions and exploring how AI-assisted workflows can accelerate software delivery.',
  summary:
    'Development Manager and Senior Full-Stack Developer with 7+ years of experience in the .NET ecosystem and enterprise software delivery. I specialize in architecting and customizing Microsoft Dynamics 365 CRM — plugin development, workflow automation, and system integrations connecting CRM to external ERP and financial platforms via APIs and Windows Services. My full-stack background spans legacy ASP.NET WebForms/MVC to modern .NET Core APIs, backed by strong SQL Server, EF Core/Dapper, and JavaScript/jQuery experience. I currently lead a development team while researching how AI coding agents and LLM-driven workflows can accelerate delivery.',
};

export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'beyond', label: 'Beyond Code' },
  { id: 'contact', label: 'Contact' },
];

export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Dynamics 365 / CRM',
    icon: 'Workflow',
    skills: [
      'Custom plugin development',
      'Workflow customization',
      'N:N relationship sync',
      'Dynamics 365 CE portals',
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: [
      'C#',
      '.NET Core',
      '.NET Framework (4.5–4.8)',
      'ASP.NET MVC',
      'ASP.NET WebForms',
      'Web API',
      'Windows Services',
    ],
  },
  {
    title: 'Data & Integration',
    icon: 'Database',
    skills: [
      'SQL Server',
      'Entity Framework Core',
      'Dapper',
      'RESTful APIs',
      'SOAP/WSDL integrations',
      'System integration & data sync',
    ],
  },
  {
    title: 'Frontend',
    icon: 'LayoutTemplate',
    skills: ['JavaScript', 'jQuery', 'Kendo UI', 'Bootstrap', 'HTML5/CSS', 'Vue.js (working knowledge)'],
  },
  {
    title: 'Tooling & Practices',
    icon: 'GitBranch',
    skills: ['Git', 'Serilog', 'Code review & refactoring', 'Agile team leadership'],
  },
  {
    title: 'Emerging Tech',
    icon: 'Sparkles',
    skills: [
      'AI coding agents (Claude Code)',
      'Prompt engineering',
      'LLM-assisted workflows',
      'Python (familiar)',
    ],
  },
];

export type Experience = {
  company: string;
  location: string;
  roles: { title: string; period: string; bullets: string[] }[];
};

export const experiences: Experience[] = [
  {
    company: 'Samanehaye Modiriat',
    location: 'Tehran, Iran',
    roles: [
      {
        title: 'Development Manager',
        period: 'Jan 2025 – Present',
        bullets: [
          'Lead and mentor the software development team, overseeing delivery across enterprise CRM and internal software products.',
          'Architect customized Dynamics 365 CRM solutions, including high-performance plugins and custom extensions for complex business logic.',
          'Own system integration pipelines, ensuring secure, real-time data synchronization between CRM and external corporate/financial systems.',
        ],
      },
      {
        title: '.NET Developer & CRM Developer',
        period: 'Apr 2021 – Apr 2025',
        bullets: [
          'Built Web APIs, custom workflows, and background Windows Services to automate business logic and external system integrations.',
          'Customized and maintained Dynamics 365 CRM portals and integrated corporate websites.',
          'Refactored and optimized SQL Server queries and backend data-access code, improving reliability across sales and finance modules.',
        ],
      },
    ],
  },
  {
    company: 'PTMalborz',
    location: 'Tehran, Iran',
    roles: [
      {
        title: 'Software Programmer (Freelance / Project-Based)',
        period: 'Aug 2018 – Present',
        bullets: [
          'Designed and delivered full-stack web applications, including financial management platforms, e-commerce sites, corporate portals, and interactive digital magazines.',
          'Modernized legacy ASP.NET WebForms and MVC applications to current web standards.',
          'Built responsive, interactive UIs using JavaScript, jQuery, and Bootstrap.',
        ],
      },
    ],
  },
];

export type Education = { degree: string; institution: string };

export const education: Education[] = [
  {
    degree: "Bachelor's Degree, Electrical, Electronics and Communications Engineering",
    institution: 'Raja University (RU)',
  },
  {
    degree: "Associate's Degree, Electrical, Electronics and Communications Engineering",
    institution: 'Azad University (IAU)',
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
  linkLabel?: string;
  status: 'Live' | 'Case Study' | 'Demo' | 'Internal';
};

export const projects: Project[] = [
  {
    name: 'Dynamics 365 CRM Customization Suite',
    category: 'Enterprise CRM',
    description:
      'Architected a suite of high-performance Dynamics 365 plugins and custom extensions powering complex business logic for sales and finance modules.',
    highlights: [
      'Custom plugin development for N:N relationship sync',
      'Real-time data sync between CRM and external financial systems',
      'Custom workflows automating multi-step business processes',
    ],
    tech: ['C#', 'Dynamics 365', 'Web API', 'SQL Server'],
    status: 'Internal',
  },
  {
    name: 'CRM ↔ ERP Integration Pipeline',
    category: 'System Integration',
    description:
      'Owned the integration pipeline ensuring secure, real-time synchronization between Dynamics 365 CRM and external corporate and financial platforms.',
    highlights: [
      'Windows Services for background data sync',
      'REST + SOAP/WSDL integration with legacy ERPs',
      'Reliability hardening across sales & finance modules',
    ],
    tech: ['.NET Core', 'Windows Services', 'REST', 'SOAP/WSDL'],
    status: 'Internal',
  },
  {
    name: 'Financial Management Platform',
    category: 'Full-Stack Web App',
    description:
      'Designed and delivered a full-stack financial management web application for a freelance client, from data model to responsive UI.',
    highlights: [
      'End-to-end full-stack delivery',
      'Refactored SQL Server data-access layer',
      'Responsive, interactive UI with jQuery + Bootstrap',
    ],
    tech: ['ASP.NET MVC', 'SQL Server', 'jQuery', 'Bootstrap'],
    status: 'Case Study',
    link: 'https://linkedin.com/in/sohrabius',
    linkLabel: 'View on LinkedIn',
  },
  {
    name: 'E-Commerce & Corporate Portals',
    category: 'Web Development',
    description:
      'Built and modernized multiple e-commerce sites and corporate portals, migrating legacy ASP.NET WebForms to current web standards.',
    highlights: [
      'Legacy WebForms → modern MVC modernization',
      'Responsive, interactive frontends',
      'Integrated corporate websites with CRM portals',
    ],
    tech: ['ASP.NET', 'JavaScript', 'Kendo UI', 'Bootstrap'],
    status: 'Case Study',
    link: 'https://linkedin.com/in/sohrabius',
    linkLabel: 'View on LinkedIn',
  },
  {
    name: 'Interactive Digital Magazine',
    category: 'Web Development',
    description:
      'Delivered an interactive digital magazine platform with rich media experiences and a modernized backend.',
    highlights: [
      'Interactive, media-rich UI',
      'Full-stack delivery for freelance client',
      'Modernized legacy application',
    ],
    tech: ['ASP.NET MVC', 'JavaScript', 'Bootstrap'],
    status: 'Case Study',
    link: 'https://linkedin.com/in/sohrabius',
    linkLabel: 'View on LinkedIn',
  },
  {
    name: 'AI Coding Agent R&D',
    category: 'R&D / Emerging Tech',
    description:
      'Prototyped and deployed multiple demo applications to explore new architectures and business models, with active research into AI agents and LLM-driven pipelines.',
    highlights: [
      'LLM-assisted development workflows',
      'CLI-based coding tool exploration (Claude Code)',
      'Prompt engineering for repetitive task automation',
    ],
    tech: ['Claude Code', 'LLM workflows', 'Python', 'Prompt Engineering'],
    status: 'Demo',
  },
];

export type OtherWork = {
  title: string;
  description: string;
  icon: string;
};

export const otherWork: OtherWork[] = [
  {
    title: 'Team Leadership & Mentorship',
    description:
      'Lead and mentor a software development team, overseeing delivery across enterprise CRM and internal software products with Agile practices.',
    icon: 'Users',
  },
  {
    title: 'R&D & Prototyping',
    description:
      'Prototyped and deployed multiple demo applications to explore new architectures and business models before committing to production.',
    icon: 'FlaskConical',
  },
  {
    title: 'AI-Assisted Delivery Research',
    description:
      'Actively researching AI agents, CLI-based coding tools, and LLM-driven pipelines (e.g., Claude Code) to automate repetitive development tasks.',
    icon: 'Bot',
  },
  {
    title: 'Legacy Modernization',
    description:
      'Modernized legacy ASP.NET WebForms and MVC applications to current web standards, improving maintainability and UX.',
    icon: 'RefreshCw',
  },
];

export type Entertainment = {
  title: string;
  description: string;
  icon: string;
};

export const entertainment: Entertainment[] = [
  {
    title: 'Tech Writing & Exploration',
    description:
      'I enjoy breaking down complex enterprise concepts into clear notes and exploring the latest in AI tooling and developer ergonomics.',
    icon: 'PenLine',
  },
  {
    title: 'Open-Source Tinkering',
    description:
      'Outside of client work, I tinker with side projects and demo apps to test new architectures and business ideas hands-on.',
    icon: 'Wrench',
  },
  {
    title: 'Gaming',
    description:
      'Strategy and simulation games are my go-to way to unwind — they scratch the same systems-thinking itch as architecture work.',
    icon: 'Gamepad2',
  },
  {
    title: 'Reading',
    description:
      'I read widely across software architecture, AI research, and engineering leadership to keep learning beyond the day-to-day.',
    icon: 'BookOpen',
  },
];

export const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '1', label: 'Team Led' },
  { value: '∞', label: 'Curiosity' },
];
