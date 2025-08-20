import React from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiArrowDown,
  FiCode,
  FiLayers,
  FiZap,
  FiCpu,
  FiMonitor,
  FiGitBranch,
} from "react-icons/fi";
import { content } from "../data/content";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleDownloadResume = () => {
    window.open(content.personal.resume, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.greeting} variants={itemVariants}>
            {content.hero.greeting}
          </motion.div>

          <motion.h1 className={styles.name} variants={itemVariants}>
            <span className={styles.nameText}>{content.personal.name}</span>
          </motion.h1>

          <motion.h2 className={styles.title} variants={itemVariants}>
            {content.personal.title}
          </motion.h2>

          <motion.p className={styles.tagline} variants={itemVariants}>
            {content.hero.description}
          </motion.p>

          <motion.div className={styles.actions} variants={itemVariants}>
            <motion.button
              className={`btn btn-primary ${styles.downloadBtn}`}
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              {content.hero.primaryCTA}
            </motion.button>

            <motion.a
              href="#contact"
              className={`btn btn-secondary ${styles.contactBtn}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.hero.secondaryCTA}
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.avatar}>
            <div className={styles.avatarInner}>
              <span className={styles.avatarText}>AK</span>
              {/* Tech glow effect */}
              <div className={styles.avatarGlow}></div>
            </div>
          </div>

          {/* Modern Tech Floating Elements */}
          <motion.div
            className={`${styles.floatingElement} ${styles.element1}`}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FiCode size={24} className={styles.techIcon} />
          </motion.div>

          <motion.div
            className={`${styles.floatingElement} ${styles.element2}`}
            animate={{
              y: [0, 12, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <FiLayers size={20} className={styles.techIcon} />
          </motion.div>

          <motion.div
            className={`${styles.floatingElement} ${styles.element3}`}
            animate={{
              y: [0, -8, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <FiZap size={22} className={styles.techIcon} />
          </motion.div>

          <motion.div
            className={`${styles.floatingElement} ${styles.element4}`}
            animate={{
              rotate: [0, -360, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <FiCpu size={18} className={styles.techIcon} />
          </motion.div>

          <motion.div
            className={`${styles.floatingElement} ${styles.element5}`}
            animate={{
              y: [0, -10, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <FiMonitor size={20} className={styles.techIcon} />
          </motion.div>

          <motion.div
            className={`${styles.floatingElement} ${styles.element6}`}
            animate={{
              x: [0, 8, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          >
            <FiGitBranch size={19} className={styles.techIcon} />
          </motion.div>

          {/* Binary/Matrix effect */}
          <div className={styles.binaryGrid}>
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.span
                key={i}
                className={styles.binaryDigit}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll to next section (hidden on mobile) */}
      <motion.button
        className={styles.scrollDown}
        onClick={() => {
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        aria-label="Scroll to about section"
        style={{ display: "none" }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiArrowDown />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
