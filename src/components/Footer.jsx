import React from "react";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import { content } from "../data/content";
// import { getSocialConfig } from "../config/config";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = content.contact.socialLinks.map((link) => {
    let icon;
    switch (link.platform) {
      case "GitHub":
        icon = FiGithub;
        break;
      case "LinkedIn":
        icon = FiLinkedin;
        break;
      case "Email":
        icon = FiMail;
        break;
      default:
        icon = FiMail;
    }
    return { ...link, icon };
  });

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo and Description */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Akash Chopade</span>
            </div>
            <p className={styles.description}>
              Passionate Software Engineer crafting digital experiences with
              modern technologies and creative solutions.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <nav className={styles.quickLinks}>
              {quickLinks.map((link, index) =>
                link.href.startsWith("http") ? (
                  <a
                    key={index}
                    href={link.href}
                    className={styles.quickLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.span whileHover={{ x: 5 }}>
                      {link.label}
                    </motion.span>
                  </a>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    className={styles.quickLink}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    <motion.span whileHover={{ x: 5 }}>
                      {link.label}
                    </motion.span>
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Get In Touch</h3>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>{content.personal.email}</p>
              <p className={styles.contactItem}>{content.personal.phone}</p>
              <p className={styles.contactItem}>{content.personal.location}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>{content.footer.copyright}</p>
            <p className={styles.madeWith}>
              {content.footer.message.replace("❤️", "")}
              <motion.span
                className={styles.heart}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart />
              </motion.span>
            </p>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            className={styles.scrollTop}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
