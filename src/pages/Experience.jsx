import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCalendar, FiMapPin, FiBriefcase } from "react-icons/fi";
import { content } from "../data/content";
import styles from "../styles/Experience.module.css";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const experiences = content.experience.experiences;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>{content.experience.title}</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>{content.experience.subtitle}</p>
          </motion.div>

          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id || `${exp.company}-${exp.position}-${index}`}
                className={styles.timelineItem}
                variants={timelineVariants}
                whileHover={{ scale: 1.02, x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.timelineDot}>
                  <FiBriefcase />
                </div>

                <div className={styles.timelineContent}>
                  <div className={styles.experienceHeader}>
                    <h3 className={styles.jobTitle}>{exp.title}</h3>
                    <div className={styles.jobMeta}>
                      <span className={styles.company}>{exp.company}</span>
                      <div className={styles.metaItems}>
                        <span className={styles.metaItem}>
                          <FiCalendar />
                          {exp.period}
                        </span>
                        <span className={styles.metaItem}>
                          <FiMapPin />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className={styles.description}>{exp.description}</p>

                  <div className={styles.technologies}>
                    <h4 className={styles.sectionLabel}>Technologies Used:</h4>
                    <div className={styles.techTags}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.achievements}>
                    <h4 className={styles.sectionLabel}>Key Achievements:</h4>
                    <ul className={styles.achievementsList}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className={styles.achievement}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
