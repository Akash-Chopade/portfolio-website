// Content Configuration File
// This file contains all text content for the portfolio website
// Updated to include resume points and additional accomplishments

export const content = {
  // Personal Information
  personal: {
    name: "Akash Chopade",
    title: "Full-Stack Developer",
    tagline:
      "Full-Stack Developer with 3+ years of experience building scalable enterprise solutions with React.js, .NET Core, and SQL Server",
    email: "akashchopade8686@gmail.com",
    phone: "+91 8888399386",
    location: "Pune, Maharashtra",
    resume:
      "https://drive.google.com/file/d/1PTJpql2-w4gevlFyfxupjF51-u_NT8gr/view",
  },

  // Navigation Menu
  navigation: {
    home: "Home",
    about: "About",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },

  // Hero Section
  hero: {
    greeting: "Hello, I'm",
    description:
      "Full-Stack Developer with 3+ years of experience building enterprise-scale applications using React.js, .NET Core, and SQL Server. Experienced in CI/CD automation, SQL migrations, SecOps compliance, and improving release efficiency, code quality, and application stability.",
    primaryCTA: "Download Resume",
    secondaryCTA: "Get In Touch",
  },

  // About Section
  about: {
    title: "About Me",
    subtitle: "Get to know me better",
    description: [
      "Senior Full-Stack Developer with expertise in React.js, .NET Core, and SQL Server. Skilled in CI/CD pipeline automation, security compliance, system migrations, and cross-functional collaboration.",
      "Currently working as Software Engineer II at Solera, leading SQL Server migrations, optimizing CI/CD pipelines, integrating ProGet for artifact management, and strengthening application security posture. Recognized multiple times with Star of the Month awards for CI/CD, code quality, and platform stability improvements.",
      "Passionate about writing clean, maintainable code and creating scalable solutions. I combine technical expertise with problem-solving skills to deliver results that exceed expectations.",
    ],
    highlights: {
      title: "What I Do",
      items: [
        "Enterprise-grade SQL Server migration and database management",
        "CI/CD pipeline transformation and automation with Jenkins and GitHub Actions",
        "Artifact management using ProGet for improved release traceability",
        "Full-stack development with React.js, .NET Core, and ExtJS",
        "Application security and SecOps compliance, resolving high-priority vulnerabilities",
        "UI component design and front-end architecture for scalable applications",
        "Production release management, CAB preparation, and risk mitigation",
        "Unit testing and code quality enforcement using SonarQube and Copilot Agent",
      ],
    },
    stats: [
      { number: "3+", label: "Years Experience" },
      { number: "9.34", label: "Engineering CGPA" },
      { number: "40%", label: "Release Time Reduction" },
      { number: "60%", label: "Bug Reduction" },
    ],
  },

  // Experience Section
  experience: {
    title: "Professional Experience",
    subtitle: "My journey in the tech industry",
    experiences: [
      {
        company: "Solera",
        position: "Software Engineer II",
        duration: "Dec 2024 - Present",
        location: "Bengaluru, Karnataka",
        description:
          "Leading enterprise-scale SQL Server migrations, CI/CD transformations, and application security improvements while coordinating with cross-functional teams for stable releases and high-quality code.",
        achievements: [
          "Co-led CI/CD transformation for 10+ components, reducing release failures and improving deployment efficiency by 40%",
          "Migrated and optimized pipelines for Audit Services, WebHandler, and AdminSC; ensured stable deployments across environments",
          "Integrated ProGet for artifact management, improving release traceability and consistency",
          "Created ClaimPortalIntegrator repository and integrated SonarQube and Health API checks",
          "Resolved recurring pipeline failures by debugging scripts, managing URL changes, and addressing environment-specific issues",
          "Led SQL Server migrations across all lower environments, verified application connectivity, and ensured post-migration system stability",
          "Resolved 80%+ code smells and all high-priority vulnerabilities in myClaimPortal, enhancing security and maintainability",
          "Delivered majority of UI stories for MyClaimPortal and PlatformSC, built reusable components (radio buttons, checkboxes, dropdowns, popups, loaders)",
          "Prepared detailed CAB documentation, release notes, deployment guides, and rollback plans for multiple releases",
          "Leveraged Copilot Agent to write unit tests covering 80%+ of myClaimPortal and accelerate feature development",
          "Received 2× Star of the Month awards for CI/CD automation and code quality improvements",
        ],
        technologies: [
          ".NET Core",
          ".NET Framework",
          "React.js",
          "SQL Server",
          "Jenkins",
          "Docker",
          "Kubernetes",
          "ExtJS",
          "ProGet",
          "SonarQube",
        ],
      },
      {
        company: "Solera",
        position: "Associate Software Engineer I",
        duration: "Dec 2022 - Dec 2024",
        location: "Bengaluru, Karnataka",
        description:
          "Designed reusable React UI components, improved code quality, and contributed to full-stack development across multiple enterprise-scale applications.",
        achievements: [
          "Designed reusable React UI components (radio, checkbox, dropdowns, popups, loaders), improving sprint delivery by 30%",
          "Integrated SonarQube with front-end projects, reducing bugs and code smells by 60%+",
          "Revived dormant ContentsExpress application by provisioning complete dev environment after 5 years",
          "Resolved production issues in PayeeController, claim calculations, date-related errors, and notes filtering",
          "Contributed to full-stack development using .NET Core, React.js, ExtJS, and SQL Server",
          "Prepared for CAB releases, coordinated with QA and DevOps to ensure zero-rollback deployments",
          "Earned Star of the Month awards for UI component delivery and code quality enhancements",
        ],
        technologies: [
          "React.js",
          "ExtJS",
          ".NET Core",
          ".NET Framework",
          "SQL Server",
          "SonarQube",
          "Git",
        ],
      },
    ],
  },

  // Education Section
  education: {
    title: "Education",
    subtitle: "Academic background and achievements",
    degrees: [
      {
        degree: "Bachelor of Engineering",
        field: "Information Technology",
        institution: "Savitribai Phule Pune University",
        duration: "2018 - 2022",
        grade: "9.34 CGPA",
        location: "Pune, Maharashtra",
      },
      {
        degree: "12th (HSC)",
        field: "Science",
        duration: "2016 - 2018",
        grade: "71.20%",
        location: "Pune, Maharashtra",
      },
      {
        degree: "10th (SSC)",
        field: "",
        duration: "2016",
        grade: "86.20%",
        location: "Pune, Maharashtra",
      },
    ],
  },

  // Skills Section
  skills: {
    title: "Technical Skills",
    subtitle: "Technologies and tools I work with to bring ideas to life",
    technical: {
      title: "Core Skills",
      skills: [
        { name: "React.js" },
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Python" },
        { name: ".NET Core" },
        { name: ".NET Framework" },
        { name: "C#" },
        { name: "Java" },
        { name: "SQL Server" },
        { name: "RESTful APIs" },
        { name: "Jenkins" },
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "Git/GitHub" },
        { name: "ExtJS" },
      ],
    },
    additional: {
      title: "Additional Skills",
      subtitle: "Other competencies and soft skills",
      categories: [
        {
          name: "CI/CD & DevOps",
          skills: [
            "Pipeline Automation",
            "Jenkins",
            "GitHub Actions",
            "Docker",
            "Kubernetes",
            "ProGet",
            "SonarQube",
            "New Relic",
            "Graylog",
          ],
        },
        {
          name: "Security & Quality",
          skills: [
            "SecOps Compliance",
            "Code Smell Resolution",
            "Bug Fixing",
            "Vulnerability Remediation",
          ],
        },
        {
          name: "Leadership & Problem Solving",
          skills: [
            "Team Leadership",
            "Project Management",
            "Cross-functional Collaboration",
            "System Architecture",
            "Performance Optimization",
            "Debugging & Troubleshooting",
            "Database Migration",
          ],
        },
        {
          name: "Methodologies",
          skills: [
            "Agile/Scrum",
            "Test-Driven Development",
            "CI/CD Best Practices",
            "DevOps Practices",
          ],
        },
      ],
    },
  },

  // Projects Section
  projects: {
    title: "Featured Projects",
    subtitle: "Some of my recent work that I'm proud of",
    projects: [
      {
        title: "Weed Detection System",
        description:
          "Built a YOLOv3-based system to detect weed in crop images using Python and SQLite. Improved early-stage agricultural analysis speed and accuracy.",
        technologies: [
          "Python",
          "YOLOv3",
          "SQLite",
          "OpenCV",
          "Machine Learning",
        ],
        features: [
          "Real-time weed detection in crop images",
          "YOLOv3 deep learning model",
          "SQLite database for storing images and results",
          "Improved agricultural analysis accuracy",
        ],
        liveUrl: null,
        githubUrl: "https://github.com/Akash-Chopade",
        image: "🌾",
        category: "Machine Learning",
      },
      {
        title: "Weather Scraper",
        description:
          "Developed a real-time weather tracker using Python (BeautifulSoup, Requests) to parse and display city-wise updates from Times of India via a lightweight CLI tool.",
        technologies: [
          "Python",
          "BeautifulSoup",
          "Requests",
          "Web Scraping",
          "CLI",
        ],
        features: [
          "Real-time weather data scraping",
          "City-wise weather updates",
          "Lightweight command-line interface",
          "Data parsing from Times of India",
        ],
        liveUrl: "https://weatherreporttoi.netlify.app/",
        githubUrl: "https://github.com/Akash-Chopade",
        image: "🌤️",
        category: "Automation",
      },
      {
        title: "Portfolio Website",
        description:
          "Designed a responsive portfolio using React and Tailwind CSS. Automated CI/CD with GitHub Actions and deployed via Netlify; includes projects and blog sections.",
        technologies: [
          "React",
          "Tailwind CSS",
          "GitHub Actions",
          "Netlify",
          "CI/CD",
        ],
        features: [
          "Responsive design with Tailwind CSS",
          "Automated CI/CD pipeline",
          "Project showcase section",
          "Blog section for technical articles",
        ],
        liveUrl: "https://akashchopade.netlify.app",
        githubUrl: "https://github.com/Akash-Chopade",
        image: "💼",
        category: "Web Development",
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    subtitle: "Let's discuss your next project or just say hello",
    description:
      "I'm always interested in hearing about new opportunities and interesting projects. Whether you have a question or just want to say hi, feel free to drop me a message!",
    form: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      submitButton: "Send Message",
      successMessage: "Thank you! Your message has been sent successfully.",
      errorMessage: "Oops! Something went wrong. Please try again.",
    },
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/Akash-Chopade",
        icon: "SiGithub",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/akash-chopade-b130221b1/",
        icon: "SiLinkedin",
      },
      {
        platform: "Email",
        url: "mailto:akashchopade8686@gmail.com",
        icon: "SiGmail",
      },
    ],
  },

  // Footer
  footer: {
    copyright: "© 2025 Akash Chopade. All rights reserved.",
    message: "Built with React & passion ❤️",
  },

  // SEO Meta Data
  seo: {
    title: "Akash Chopade - Full-Stack Developer | Portfolio",
    description:
      "Akash Chopade is a Full-Stack Developer with 3+ years of experience in building scalable enterprise solutions using React.js, .NET Core, and SQL Server. View my portfolio and projects.",
    keywords:
      "Full-Stack Developer, Software Engineer, React.js, .NET Core, SQL Server, JavaScript, CI/CD, Enterprise Applications, Solera",
    author: "Akash Chopade",
    ogTitle: "Akash Chopade - Full-Stack Developer Portfolio",
    ogDescription:
      "Full-Stack Developer with expertise in React.js, .NET Core, CI/CD automation, SQL migrations, and enterprise application development",
    ogUrl: "https://akashchopade.netlify.app",
    ogImage: "https://akashchopade.netlify.app/og-image.jpg",
  },
};

export default content;
