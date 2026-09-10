export const personalInfo = {
  name: "Prerna Kumari",
  initials: "PK",
  role: "B.Tech Student | AI & Technology Enthusiast",
  degree: "B.Tech in Electronics & Communication Engineering (ECE)",
  college: "JCRC University",
  status: "1st Year | 1st Semester | 2026",
  batch: "Class of 2026-2030",
  academicYear: "2026",
  hometown: "Siwan, Bihar, India",
  currentLocation: "Jaipur, Rajasthan, India",
  email: "Prerna.26BWAN@jcrcu.edu.in",
  socials: {
    linkedin: {
      status: "Coming Soon",
      available: false,
      label: "LinkedIn"
    },
    github: {
      status: "Coming Soon",
      available: false,
      label: "GitHub"
    }
  },
  heroIntro: "I’m a first-year Electronics & Communication Engineering student at JCRC University, exploring artificial intelligence, modern web technologies, and digital productivity while turning what I learn into practical projects.",
  aboutNarrative: [
    "I’m Prerna Kumari, a first-year B.Tech student in Electronics & Communication Engineering at JCRC University. I’m curious about how technology can solve real-world problems and I’m currently exploring areas such as Artificial Intelligence, Generative AI, Web Development, and digital productivity.",
    "As I begin my engineering journey, I’m focused on learning by doing — experimenting with new tools, understanding modern technologies, and building practical projects that help me turn ideas into something useful.",
    "Outside academics and technology, I enjoy singing, dancing, and art & craft, which keep my creative side active."
  ],
  quickStats: [
    {
      label: "Location",
      value: "Siwan, Bihar",
      subValue: "Currently in Jaipur, Rajasthan",
      iconName: "MapPin",
      color: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
      accent: "text-cyan-400"
    },
    {
      label: "Education",
      value: "B.Tech — ECE",
      subValue: "JCRC University",
      iconName: "GraduationCap",
      color: "from-indigo-500/20 to-violet-500/20",
      border: "border-indigo-500/30",
      accent: "text-indigo-400"
    },
    {
      label: "Current Stage",
      value: "1st Year",
      subValue: "1st Semester (2026)",
      iconName: "Compass",
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      accent: "text-purple-400"
    },
    {
      label: "Interests",
      value: "AI • Technology",
      subValue: "Web Development & Tools",
      iconName: "Sparkles",
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
      accent: "text-emerald-400"
    }
  ],
  hobbies: [
    { name: "Singing", icon: "Music", color: "bg-rose-500/10 text-rose-300 border-rose-500/20" },
    { name: "Dancing", icon: "Activity", color: "bg-amber-500/10 text-amber-300 border-amber-500/20" },
    { name: "Art & Craft", icon: "Palette", color: "bg-purple-500/10 text-purple-300 border-purple-500/20" }
  ]
};

export const educationData = {
  degree: "B.Tech in Electronics & Communication Engineering",
  shortDegree: "B.Tech ECE",
  institution: "JCRC University",
  timeline: "1st Year | 1st Semester | 2026",
  location: "Jaipur, Rajasthan, India",
  overview: "Starting the engineering journey with a strong foundation in core engineering principles, analytical reasoning, and digital technologies.",
  learningAreas: [
    { title: "Programming Fundamentals", desc: "Core logic building, algorithmic thinking, and structural code organization.", tag: "Core" },
    { title: "Web Technologies", desc: "Semantic markup, modern layout design, and responsive client-side development.", tag: "Web" },
    { title: "Artificial Intelligence Fundamentals", desc: "Basic concepts, capabilities, and real-world use cases of intelligent systems.", tag: "AI" },
    { title: "Digital Tools & Productivity", desc: "Modern software tools and AI-assisted workflows for efficient learning.", tag: "Tools" },
    { title: "Engineering Mathematics", desc: "Analytical problem solving, linear algebra, and calculus principles.", tag: "Theory" },
    { title: "Electronics & Communication Fundamentals", desc: "Understanding electronic components, basic circuit theory, and signals.", tag: "ECE" },
    { title: "Structured Problem Solving", desc: "Breaking complex engineering challenges into systematic, testable steps.", tag: "Methods" }
  ]
};

export const skillsData = [
  {
    id: "html",
    name: "HTML",
    category: "Frontend",
    description: "Building structured and semantic web pages.",
    status: "Practicing",
    statusVariant: "emerald",
    icon: "Layout"
  },
  {
    id: "css",
    name: "CSS",
    category: "Frontend",
    description: "Creating responsive layouts and modern visual designs.",
    status: "Practicing",
    statusVariant: "emerald",
    icon: "Palette"
  },
  {
    id: "js",
    name: "JavaScript",
    category: "Frontend",
    description: "Learning interactive and dynamic web experiences.",
    status: "Learning",
    statusVariant: "indigo",
    icon: "Code2"
  },
  {
    id: "python",
    name: "Python",
    category: "Programming",
    description: "Learning programming fundamentals and practical problem solving.",
    status: "Learning",
    statusVariant: "indigo",
    icon: "Terminal"
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    category: "Emerging Tech",
    description: "Exploring AI concepts and real-world applications.",
    status: "Exploring",
    statusVariant: "cyan",
    icon: "Cpu"
  },
  {
    id: "gen-ai",
    name: "Generative AI",
    category: "Emerging Tech",
    description: "Exploring AI tools, prompting, and AI-assisted workflows.",
    status: "Exploring",
    statusVariant: "cyan",
    icon: "Sparkles"
  },
  {
    id: "web-dev",
    name: "Web Development",
    category: "Development",
    description: "Learning how modern websites and web applications are designed and built.",
    status: "Building",
    statusVariant: "violet",
    icon: "Globe"
  },
  {
    id: "productivity",
    name: "Digital Productivity",
    category: "Workflows",
    description: "Using modern digital tools and AI to organize learning and work more effectively.",
    status: "Practicing",
    statusVariant: "emerald",
    icon: "Workflow"
  }
];

export const projectsData = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    tagline: "Modern & Authentic Student Portfolio",
    description: "A responsive personal portfolio designed to showcase my education, interests, skills, projects, and learning journey.",
    detailedOverview: "Built from the ground up with modern React, Vite, and Tailwind CSS. Emphasizes clean typography, authentic first-year academic presentation, accessible components, and a custom technology-inspired aesthetic.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    highlights: [
      "Responsive across mobile, tablet, and desktop viewports",
      "Accessible navigation with keyboard support & ARIA labels",
      "Tailored visual identity with dark navy theme & subtle glow effects",
      "Vercel-ready modular architecture"
    ],
    status: "Live Project",
    statusType: "active",
    demoNote: "You are currently exploring this project live!"
  },
  {
    id: "ai-website",
    title: "AI Website Project",
    tagline: "Student AI Integration Concept",
    description: "A student-focused web project exploring how artificial intelligence can be integrated into a simple, useful, and engaging web experience.",
    detailedOverview: "An exploratory project experimenting with AI-assisted user interfaces. Designed to provide clean interactions where students can query concepts, summarize notes, and test prompt engineering techniques in a streamlined browser layout.",
    technologies: ["HTML", "CSS", "JavaScript", "AI Tools"],
    highlights: [
      "Interactive conversational UI prototype",
      "Client-side state management for prompt inputs",
      "Clean visual cards for AI response formatting",
      "Explores practical integration of intelligent helpers"
    ],
    status: "Prototype / In Progress",
    statusType: "progress",
    demoNote: "Interactive preview and concept overview available."
  },
  {
    id: "productivity-tool",
    title: "Student Productivity Project",
    tagline: "Academic Task & Learning Organizer",
    description: "A productivity-focused project designed to help students organize tasks, learning activities, and everyday academic work more effectively.",
    detailedOverview: "Designed specifically for first-year engineering students to balance core subject lectures, lab assignments, personal coding practice, and revision schedules with minimal friction.",
    technologies: ["HTML", "CSS", "JavaScript", "AI / Digital Tools"],
    highlights: [
      "Semester assignment tracker with priority indicators",
      "Dedicated weekly revision schedule planner",
      "Integration with digital productivity workflows",
      "Clean, distraction-free student dashboard"
    ],
    status: "In Development",
    statusType: "progress",
    demoNote: "Detailed architecture preview available."
  }
];

export const achievementsData = [
  {
    category: "Certifications",
    iconName: "Award",
    statusNote: "More achievements coming soon.",
    description: "Planning certifications in programming fundamentals and foundational AI concepts as part of academic milestones."
  },
  {
    category: "Hackathons",
    iconName: "Rocket",
    statusNote: "More achievements coming soon.",
    description: "Preparing to participate in upcoming collegiate hackathons and tech innovation challenges."
  },
  {
    category: "Courses",
    iconName: "BookOpen",
    statusNote: "More achievements coming soon.",
    description: "Currently undertaking introductory coursework in electronics, programming, and web development."
  },
  {
    category: "Awards",
    iconName: "Trophy",
    statusNote: "More achievements coming soon.",
    description: "Academic and creative recognitions will be featured here as the journey progresses."
  },
  {
    category: "Workshops",
    iconName: "Users",
    statusNote: "More achievements coming soon.",
    description: "Attending departmental tech seminars, hands-on lab sessions, and digital skills workshops."
  },
  {
    category: "Other Achievements",
    iconName: "Sparkles",
    statusNote: "More achievements coming soon.",
    description: "Creative accomplishments in singing, dancing, and collegiate cultural initiatives."
  }
];

export const contactInfo = {
  title: "Let's Connect",
  subtitle: "Have an idea, project, collaboration, or simply want to connect? Feel free to reach out.",
  email: "Prerna.26BWAN@jcrcu.edu.in",
  location: "Jaipur, Rajasthan, India",
  hometown: "Siwan, Bihar, India",
  college: "JCRC University",
  socials: [
    { name: "LinkedIn", status: "Coming Soon", available: false },
    { name: "GitHub", status: "Coming Soon", available: false }
  ]
};

export const footerData = {
  name: "Prerna Kumari",
  tagline: "B.Tech Student | AI & Technology Enthusiast",
  email: "Prerna.26BWAN@jcrcu.edu.in",
  quickLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ],
  copyright: "© 2026 Prerna Kumari. Built with curiosity, creativity, and technology."
};
