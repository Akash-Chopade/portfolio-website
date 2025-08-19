import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { content } from "../data/content";
import { getEmailConfig, isFeatureEnabled } from "../config/config";
import { trackFormSubmission, trackSocialClick } from "../utils/analytics";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if email functionality is enabled
    if (!isFeatureEnabled("emailEnabled")) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 10000);
      return;
    }

    try {
      const response = await fetch(
        "https://portfolio-website-3o0p.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Failed to send message");
      }

      // Track successful form submission
      trackFormSubmission("contact_form");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 10000);
    }
  };

  // Get social links from config
  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: content.personal.email,
      link: `mailto:${content.personal.email}`,
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: content.personal.phone,
      link: `tel:${content.personal.phone.replace(/\s/g, "")}`,
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: content.personal.location,
      link: null,
    },
  ];

  // Use socialLinks from content.js (always defined)
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>{content.contact.title}</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>{content.contact.subtitle}</p>
          </motion.div>

          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <motion.div className={styles.contactInfo} variants={itemVariants}>
              <h3 className={styles.sectionTitle}>Let's Talk</h3>
              <p className={styles.sectionDescription}>
                Feel free to reach out through any of the following channels. I
                typically respond within 24 hours.
              </p>

              <div className={styles.contactItems}>
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.contactItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={styles.contactIcon}>
                      <item.icon />
                    </div>
                    <div className={styles.contactDetails}>
                      <span className={styles.contactLabel}>{item.label}</span>
                      {item.link ? (
                        <a
                          href={item.link}
                          className={styles.contactValue}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className={styles.contactValue}>
                          {item.value}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className={styles.contactForm} variants={itemVariants}>
              <h3 className={styles.sectionTitle}>Send a Message</h3>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div className={styles.formGroup}>
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div className={styles.formGroup}>
                  <motion.textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className={styles.formTextarea}
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${styles.submitButton} ${
                    isSubmitting ? styles.submitting : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className={styles.spinner}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ) : (
                    <>
                      <FiSend />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitStatus && (
                  <motion.div
                    className={`${styles.submitStatus} ${styles[submitStatus]}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {submitStatus === "success"
                      ? "Message sent successfully! I'll get back to you soon."
                      : "Something went wrong. Please try again."}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
