// Site Configuration
export const siteConfig = {
  // Personal Information
  name: "Mackenzie",
  title: "Full-stack Developer",
  email: "hello@mackenziedev.site",
  domain: "mackenziedev.site",
  bio: "My goal is to write maintainable, clean and understandable code to process development was enjoyable.",

  // Profile Images
  avatar: "/images/profile.jpg",
  favicon: "/favicon.svg",

  // Theme Colors
  colors: {
    primary: "#6366f1", // Indigo
    secondary: "#8b5cf6", // Purple
    accent: "#ec4899", // Pink
    success: "#10b981", // Green
    warning: "#f59e0b", // Amber
  },

  // Social Media Links
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/mackenzie",
      icon: "fa-brands fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mackenzie",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "Telegram",
      url: "https://t.me/mackenzie",
      icon: "fa-brands fa-telegram",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/in/mackenzie",
      icon: "fa-brands fa-instagram",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/mackenzie",
      icon: "fa-brands fa-twitter",
    },
  ],

  // Navigation Links
  navigation: [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Articles", href: "/#articles" },
    { name: "Contact", href: "/#contact" },
  ],

  // Footer Configuration
  footer: {
    showImprint: true,
    showPrivacy: true,
    showTerms: true,
    imprintLink: "/imprint",
    privacyLink: "/privacy",
    termsLink: "/terms",
    copyright: `© ${new Date().getFullYear()} Mackenzie. All rights reserved.`,
  },

  // Skills
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90, icon: "fa-brands fa-react" },
        { name: "Vue.js", level: 85, icon: "fa-brands fa-vuejs" },
        { name: "TypeScript", level: 88, icon: "fa-brands fa-js" },
        { name: "Tailwind CSS", level: 92, icon: "fa-solid fa-palette" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 87, icon: "fa-brands fa-node" },
        { name: "Python", level: 83, icon: "fa-brands fa-python" },
        { name: "PostgreSQL", level: 85, icon: "fa-solid fa-database" },
        { name: "MongoDB", level: 80, icon: "fa-solid fa-leaf" },
      ],
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", level: 86, icon: "fa-brands fa-docker" },
        { name: "AWS", level: 82, icon: "fa-brands fa-aws" },
        { name: "CI/CD", level: 84, icon: "fa-solid fa-gears" },
        { name: "Git", level: 90, icon: "fa-brands fa-git-alt" },
      ],
    },
  ],

  // Stats
  stats: [
    { label: "Years Experience", value: "5+", icon: "fa-solid fa-calendar" },
    { label: "Projects Completed", value: "50+", icon: "fa-solid fa-rocket" },
    { label: "Happy Clients", value: "30+", icon: "fa-solid fa-users" },
    { label: "Code Commits", value: "10K+", icon: "fa-brands fa-github" },
  ],

  // Experience
  experience: [
    {
      year: "2022 - Present",
      title: "Senior Full-stack Developer",
      company: "Tech Innovations Inc.",
      description:
        "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    },
    {
      year: "2021 - 2022",
      title: "Full-stack Developer",
      company: "Digital Solutions Ltd.",
      description:
        "Developed and maintained multiple client projects, focusing on performance optimization and user experience improvements.",
      technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
    },
    {
      year: "2020 - 2021",
      title: "Frontend Developer",
      company: "Creative Agency",
      description:
        "Built responsive and interactive web interfaces for various clients. Collaborated with designers to implement pixel-perfect designs.",
      technologies: ["JavaScript", "React", "Tailwind CSS", "Figma"],
    },
    {
      year: "2019 - 2020",
      title: "Junior Developer",
      company: "StartUp Hub",
      description:
        "Started my professional journey building features for a SaaS platform. Learned modern development practices and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
    },
  ],

  // GitHub Integration
  github: {
    username: "mackenzie",
    showRepos: true,
    maxRepos: 6,
  },
}
