import React from "react";
import ProjectCard from "./../components/projectCard"; // Import the component
import "../styles/style.css"; // Add styles for the section

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      overview: "A responsive portfolio website built with React and CSS.",
      skills: ["React", "CSS", "HTML", "NodeJs"],
      githubLink: "https://github.com/Akash-Chopade",
      liveLink: "#",
    },
    {
      title: "Weed Detection using Image Processing",
      overview:
        "Built a system using YOLO V3 (CNN) to detect weed percentage in an image and provide solutions.",
      skills: ["Python", "YOLO V3", "HTML", "CSS", "SQLite"],
    },
    {
      title: "Online Result Portal",
      overview:
        "Developed a secure online portal for students to check their results.",
      skills: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
      githubLink: "https://github.com/Akash-Chopade/Mini-Project-Online-Result-Portal-",
    },
    {
      title: "Web Scraping - Weather Data with Python",
      overview:
        "Scraped real-time weather data from Times of India and displayed it based on the city.",
      skills: ["Python", "BeautifulSoup", "Requests"],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>
      <div className="header-line"></div>
      <p className="contact-subheader">
        Here, you will find some personal projects that I have created.
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            overview={project.overview}
            skills={project.skills}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;