import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import { content } from "../data/content";
import { trackProjectClick } from "../utils/analytics";
import Button from "../components/Button";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const projects = content.projects.projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        className={styles.projectCard}
        variants={itemVariants}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className={styles.projectImageWrapper}>
          <div className={styles.projectImage}>
            <span className={styles.projectEmoji}>{project.image}</span>
          </div>
          <div className={styles.projectCategory}>{project.category}</div>
        </div>

        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>

          <div className={styles.projectTech}>
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.projectLinks}>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
              onClick={() => trackProjectClick(project.title, "github")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub />
              <span>Code</span>
            </motion.a>

            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.projectLink} ${styles.primaryLink}`}
                onClick={() => trackProjectClick(project.title, "live")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiExternalLink />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>

        <div className={styles.projectOverlay}>
          <motion.div
            className={styles.overlayContent}
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <FiCode className={styles.overlayIcon} />
            <p>View Project Details</p>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>{content.projects.title}</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>{content.projects.subtitle}</p>
          </motion.div>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.githubUrl || project.title || index}
                project={project}
                index={index}
              />
            ))}
          </div>

          <motion.div className={styles.moreProjects} variants={itemVariants}>
            <p className={styles.moreText}>
              Want to see more of my work? Check out my GitHub profile for
              additional projects and contributions.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                href="https://github.com/Akash-Chopade"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className={styles.viewAllButton}
              >
                <FiGithub />
                <span>View All Projects</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
