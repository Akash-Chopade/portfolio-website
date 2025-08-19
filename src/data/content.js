// Content Configuration File
// This file contains all text content for the portfolio website
// Modify this file to update any text throughout the application

export const content = {
  // Personal Information
  personal: {
    name: "Akash",
    title: "Full-Stack Developer",
    tagline:
      "Full-Stack Developer with 3+ years of experience in building scalable enterprise solutions",
    email: "akashchopade8686@gmail.com",
    phone: "+91 8888399386",
    location: "Pune, Maharashtra",
    resume:
      "https://drive.google.com/file/d/1Jeptlk9sc4qO5yLXFi2UjwY1heuqq2-r/view",
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
      "Full-Stack Developer with 3+ years of experience in building scalable enterprise solutions using React.js, .NET Core, and SQL Server. Proven in CI/CD automation, security compliance, and cross-team collaboration.",
    primaryCTA: "Download Resume",
    secondaryCTA: "Get In Touch",
  },

  // About Section
  about: {
    title: "About Me",
    subtitle: "Get to know me better",
    description: [
      "Full-Stack Developer with 3+ years of experience in building scalable enterprise solutions using React.js, .NET Core, and SQL Server. I specialize in creating robust web applications with a strong focus on CI/CD automation, security compliance, and cross-team collaboration.",
      "Currently working as Software Engineer II at Solera, where I've led critical SQL Server migrations, optimized CI/CD pipelines achieving 40% reduction in release time, and strengthened application security by resolving critical SecOps findings. I've been recognized multiple times with Star of the Month awards for my contributions.",
      "I'm passionate about writing clean, maintainable code and following best practices in software development. My approach combines technical expertise with strong problem-solving skills to deliver solutions that not only meet requirements but exceed expectations.",
    ],
    highlights: {
      title: "What I Do",
      items: [
        "Enterprise-grade SQL Server migration and database management",
        "CI/CD pipeline optimization and automation with Jenkins",
        "Full-stack development with React.js, .NET Core, and ExtJS",
        "Application security and SecOps compliance",
        "UI component design and front-end architecture",
        "DevOps processes and production deployment management",
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
          "Leading an enterprise-grade SQL Server migration, coordinating with DBAs and infrastructure teams to ensure data accuracy, service continuity, and minimal risk during cutover phases.",
        achievements: [
          "Led enterprise-grade SQL Server migration with DBAs and infrastructure teams",
          "Co-led CI/CD migration achieving 40% reduction in release time through optimized Jenkins pipelines",
          "Strengthened application security by resolving critical SecOps findings and enforcing secure API practices",
          "Orchestrated production rollouts through structured CAB procedures with comprehensive checklists",
          "Received Star of the Month award for CI/CD migration initiative",
        ],
        technologies: [
          ".NET Framework",
          ".NET Core",
          "React.js",
          "SQL Server",
          "Jenkins",
          "Docker",
          "Kubernetes",
          "ExtJS",
        ],
      },
      {
        company: "Solera",
        position: "Associate Software Engineer I",
        duration: "Dec 2022 - Dec 2024",
        location: "Bengaluru, Karnataka",
        description:
          "Designed reusable React UI components and integrated quality assurance tools while contributing to full-stack development across multiple enterprise-scale applications.",
        achievements: [
          "Designed reusable React UI components improving visual coherence and accelerating front-end velocity by 30%",
          "Integrated SonarQube with front-end projects reducing bugs by more than 60%",
          "Contributed to full-stack development using .NET Core, React.js, ExtJS, and SQL Server",
          "Revived dormant legacy system (ContentsExpress) by provisioning complete local dev environment",
          "Earned Star of the Month awards for UI components and code quality enhancements",
        ],
        technologies: [
          "React.js",
          "ExtJS",
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
        institution: "Savitribai Phule Pune University", // Update with actual college name
        duration: "2018 - 2022", // Update with actual years
        grade: "9.34 CGPA",
        location: "Pune, Maharashtra", // Update with actual location
      },
      {
        degree: "12th (HSC)",
        field: "Science",
        //institution: "Your College Name", // Update with actual college name
        duration: "2016 - 2018", // Update with actual years
        grade: "71.20%",
        location: "Pune, Maharashtra", // Update with actual location
      },
      {
        degree: "10th (SSC)",
        field: "",
        //institution: "Your School Name", // Update with actual school name
        duration: "2016", // Update with actual year
        grade: "86.20%",
        location: "Pune, Maharashtra", // Update with actual location
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
          name: "Leadership & Management",
          skills: [
            "Team Leadership",
            "Project Management",
            "Cross-functional Collaboration",
            "Stakeholder Communication",
          ],
        },
        {
          name: "Problem Solving",
          skills: [
            "System Architecture Design",
            "Performance Optimization",
            "Debugging & Troubleshooting",
            "Security Compliance",
            "Database Migration",
          ],
        },
        {
          name: "Methodologies",
          skills: [
            "Agile/Scrum",
            "CI/CD Best Practices",
            "Code Review",
            "Test-Driven Development",
            "DevOps Practices",
            "SonarQube",
            "New Relic",
            "Gray Logs",
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
          "Built a YOLOv3-based system to detect weed in crop images using Python and SQLite. Improved agricultural analysis speed and accuracy for early-stage weed identification.",
        technologies: [
          "Python",
          "YOLOv3",
          "SQLite",
          "OpenCV",
          "Machine Learning",
        ],
        features: [
          "Real-time weed detection in crop images",
          "YOLOv3 deep learning model implementation",
          "SQLite database for image storage and results",
          "Improved agricultural analysis accuracy",
        ],
        liveUrl: null,
        githubUrl: "https://github.com/akashchopade/weed-detection",
        image: "🌾",
        category: "Machine Learning",
      },
      {
        title: "Weather Scraper",
        description:
          "Developed a real-time weather tracker using Python with BeautifulSoup and Requests. Parsed and displayed city-wise updates from Times of India with a lightweight CLI tool.",
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
          "Data parsing from Times of India website",
        ],
        liveUrl: null,
        githubUrl: "https://github.com/akashchopade/weather-scraper",
        image: "🌤️",
        category: "Automation",
      },
      {
        title: "Portfolio Website",
        description:
          "Designed a responsive portfolio using React and Tailwind CSS. Automated CI/CD with GitHub Actions and deployed via Netlify; features project and blog sections.",
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
      "Full-Stack Developer with expertise in React.js, .NET Core, and enterprise application development",
    ogUrl: "https://akashchopade.netlify.app",
    ogImage: "https://akashchopade.netlify.app/og-image.jpg",
  },
};

export default content;
