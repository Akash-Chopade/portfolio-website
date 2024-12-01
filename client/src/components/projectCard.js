import React from "react";
import "../styles/style.css"; // Add styles here

const ProjectCard = ({ title, overview, skills, githubLink, liveLink }) => {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p className="project-overview">{overview}</p>
      <div className="project-skills">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
      <div className="project-links">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
