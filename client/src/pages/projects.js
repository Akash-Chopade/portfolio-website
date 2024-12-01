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
      title: "E-commerce App",
      overview:
        "A full-stack e-commerce application with user authentication and payment integration.",
      skills: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/Akash-Chopade",
      liveLink: "https://ecommerce-app-link.com",
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