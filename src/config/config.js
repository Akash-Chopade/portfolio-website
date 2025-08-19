// Configuration File for External Services
// This file manages all public configurations and feature flags
// Sensitive data should be stored in environment variables only

export const config = {
  // EmailJS Configuration for Contact Form
  emailjs: {
    // These are loaded from environment variables at build time
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,

    // Public email settings (safe to expose)
    toEmail: "akashchopade1000@gmail.com",
  },

  // Google Analytics Configuration for Visitor Tracking
  analytics: {
    // Measurement ID from environment variables
    measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID,

    // Public analytics settings
    settings: {
      enabled: true,
      debug: import.meta.env.DEV || false,
      cookieFlags: "SameSite=None; Secure",
      autoPageView: true,
    },
  },

  // Social Media Links (public information)
  // (Removed: Use content.js for all social links)

  // Public environment settings
  environment: {
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
    baseUrl:
      import.meta.env.VITE_BASE_URL || "https://akashchopade.netlify.app",
  },

  // Feature flags for enabling/disabling functionality
  features: {
    emailEnabled: true,
    analyticsEnabled: true,
    themeToggle: true,
    contactForm: true,
    socialTracking: true,
    projectTracking: true,
    skillsTracking: true,
  },
};

// Helper functions for easy access
export const getEmailConfig = () => ({
  serviceId: config.emailjs.serviceId,
  templateId: config.emailjs.templateId,
  publicKey: config.emailjs.publicKey,
  toEmail: config.emailjs.toEmail,
});

export const getAnalyticsConfig = () => config.analytics;
// getSocialConfig removed: Use content.contact.socialLinks from content.js
export const isFeatureEnabled = (feature) => config.features[feature] || false;

// Validation function (only checks if values exist, not their actual content)
export const validateConfig = () => {
  const errors = [];

  if (config.features.emailEnabled) {
    if (!config.emailjs.serviceId)
      errors.push("EmailJS Service ID not configured");
    if (!config.emailjs.templateId)
      errors.push("EmailJS Template ID not configured");
    if (!config.emailjs.publicKey)
      errors.push("EmailJS Public Key not configured");
  }

  if (config.features.analyticsEnabled) {
    if (!config.analytics.measurementId)
      errors.push("Google Analytics Measurement ID not configured");
  }

  return errors;
};

export default config;
