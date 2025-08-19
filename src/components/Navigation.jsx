import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { content } from "../data/content";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: content.navigation.home },
    { href: "#about", label: content.navigation.about },
    { href: "#experience", label: content.navigation.experience },
    { href: "#skills", label: content.navigation.skills },
    { href: "#projects", label: content.navigation.projects },
    { href: "#contact", label: content.navigation.contact },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogoClick}
          tabIndex={0}
          role="button"
          aria-label="Scroll to top"
        >
          <span className={styles.logoText}>{content.personal.name}</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className={styles.navActions}>
          <motion.button
            className={styles.themeToggle}
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </motion.button>

          <motion.button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ""}`}
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.href);
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              x: isMobileMenuOpen ? 0 : -20,
            }}
            transition={{ delay: index * 0.1 }}
          >
            {item.label}
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
