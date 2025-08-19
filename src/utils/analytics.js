// Google Analytics utility functions
import { getAnalyticsConfig, isFeatureEnabled } from "../config/config";

// Initialize Google Analytics
export const initGA = (measurementId) => {
  const analyticsConfig = getAnalyticsConfig();

  // Add Google Analytics script to head
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', {
      page_title: document.title,
      page_location: window.location.href,
      debug_mode: ${analyticsConfig.settings.debug},
      cookie_flags: '${analyticsConfig.settings.cookieFlags}'
    });
  `;
  document.head.appendChild(script2);
};

// Track page views
export const trackPageView = (url, title) => {
  if (!isFeatureEnabled("analyticsEnabled")) return;

  const analyticsConfig = getAnalyticsConfig();
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", analyticsConfig.measurementId, {
      page_path: url,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (!isFeatureEnabled("analyticsEnabled")) return;

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  if (!isFeatureEnabled("emailEnabled")) return;
  trackEvent("form_submit", "contact", formName);
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  if (!isFeatureEnabled("socialTracking")) return;
  trackEvent("social_click", "engagement", platform);
};

// Track skill card interactions
export const trackSkillInteraction = (skillName) => {
  if (!isFeatureEnabled("skillsTracking")) return;
  trackEvent("skill_view", "engagement", skillName);
};

// Track project link clicks
export const trackProjectClick = (projectName, linkType) => {
  if (!isFeatureEnabled("projectTracking")) return;
  trackEvent("project_click", "engagement", `${projectName}_${linkType}`);
};
