import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCalendar, FiMapPin, FiAward, FiBook } from "react-icons/fi";
import { content } from "../data/content";
import styles from "../styles/Education.module.css";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const degrees = content.education.degrees;

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
    hidden: { opacity: 0, x: -100, scale: 0.9 },
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
    hidden: { opacity: 0, x: -50 },
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
    <section id="education" className={styles.education} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>{content.education.title}</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>{content.education.subtitle}</p>
          </motion.div>

          <div className={styles.timeline}>
            {degrees.map((degree, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                variants={timelineVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.timelineDot}>
                  <FiBook />
                </div>

                <div className={styles.timelineContent}>
                  <div className={styles.educationHeader}>
                    <h3 className={styles.degreeTitle}>{degree.degree}</h3>
                    {degree.field && (
                      <h4 className={styles.fieldOfStudy}>{degree.field}</h4>
                    )}
                    <div className={styles.institutionInfo}>
                      <span className={styles.institution}>
                        {degree.institution}
                      </span>
                      <div className={styles.metaItems}>
                        <span className={styles.metaItem}>
                          <FiCalendar />
                          {degree.duration}
                        </span>
                        <span className={styles.metaItem}>
                          <FiMapPin />
                          {degree.location}
                        </span>
                        <span className={styles.metaItem}>
                          <FiAward />
                          {degree.grade}
                        </span>
                      </div>
                    </div>
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

export default Education;
