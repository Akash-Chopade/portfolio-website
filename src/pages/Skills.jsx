import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiDotnet,
  SiReact,
  SiJavascript,
  SiJenkins,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiHtml5,
  SiPython,
} from "react-icons/si";
import {
  FiCode,
  FiDatabase,
  FiSettings,
  FiUsers,
  FiTarget,
  FiBriefcase,
} from "react-icons/fi";
import { content } from "../data/content";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Icon mapping for technical skills
  const iconMap = {
    "React.js": SiReact,
    JavaScript: SiJavascript,
    HTML: SiHtml5,
    CSS: SiHtml5, // Using HTML5 icon for CSS as well
    Python: SiPython,
    ".NET Core": SiDotnet,
    ".NET Framework": SiDotnet,
    "C#": FiCode,
    Java: FiCode,
    "SQL Server": FiDatabase,
    "RESTful APIs": FiCode,
    Jenkins: SiJenkins,
    Docker: SiDocker,
    Kubernetes: SiKubernetes,
    "Git/GitHub": SiGit,
    ExtJS: FiCode,
  };

  // Color mapping for technical skills
  const colorMap = {
    "React.js": "#61DAFB",
    JavaScript: "#F7DF1E",
    HTML: "#E34F26",
    CSS: "#1572B6",
    Python: "#3776AB",
    ".NET Core": "#512BD4",
    ".NET Framework": "#512BD4",
    "C#": "#239120",
    Java: "#ED8B00",
    "SQL Server": "#CC2927",
    "RESTful APIs": "#FF6B35",
    Jenkins: "#D33833",
    Docker: "#2496ED",
    Kubernetes: "#326CE5",
    "Git/GitHub": "#F05032",
    ExtJS: "#4CAF50",
  };

  // Icon mapping for additional skills categories
  const categoryIconMap = {
    "Leadership & Management": FiUsers,
    "Problem Solving": FiTarget,
    Methodologies: FiSettings,
    "Industry Knowledge": FiBriefcase,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>{content.skills.title}</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>{content.skills.subtitle}</p>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div
            className={styles.technicalSection}
            variants={itemVariants}
          >
            <h3 className={styles.sectionTitle}>
              {content.skills.technical.title}
            </h3>

            <div className={styles.skillsGrid}>
              {content.skills.technical.skills.map((skill, skillIndex) => {
                const IconComponent = iconMap[skill.name] || FiCode;
                const skillColor = colorMap[skill.name] || "#667eea";

                return (
                  <motion.div
                    key={skill.name}
                    className={styles.skillCard}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className={styles.skillIcon}
                      style={{ color: skillColor }}
                    >
                      <IconComponent />
                    </div>
                    <h3 className={styles.skillName}>{skill.name}</h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Additional Skills Section */}
          <motion.div
            className={styles.additionalSection}
            variants={itemVariants}
          >
            <div className={styles.additionalHeader}>
              <h3 className={styles.sectionTitle}>
                {content.skills.additional.title}
              </h3>
              <p className={styles.sectionSubtitle}>
                {content.skills.additional.subtitle}
              </p>
            </div>

            <div className={styles.additionalGrid}>
              {content.skills.additional.categories.map(
                (category, categoryIndex) => {
                  const CategoryIcon =
                    categoryIconMap[category.name] || FiSettings;

                  return (
                    <motion.div
                      key={category.name}
                      className={styles.additionalCard}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -3 }}
                    >
                      <div className={styles.additionalHeader}>
                        <CategoryIcon className={styles.categoryIcon} />
                        <h4 className={styles.additionalTitle}>
                          {category.name}
                        </h4>
                      </div>
                      <div className={styles.additionalSkills}>
                        {category.skills.map((skill, skillIndex) => (
                          <span key={skill} className={styles.additionalSkill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                }
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
