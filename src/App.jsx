import React, { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { initGA, trackPageView } from "./utils/analytics";
import { getAnalyticsConfig, isFeatureEnabled } from "./config/config";
import "./App.css";

function App() {
  useEffect(() => {
    // Initialize Google Analytics if enabled
    if (isFeatureEnabled("analyticsEnabled")) {
      const analyticsConfig = getAnalyticsConfig();
      const { measurementId, settings } = analyticsConfig;

      if (measurementId) {
        initGA(measurementId);

        if (settings.autoPageView) {
          trackPageView(window.location.pathname, document.title);
        }
      }
    }
  }, []);
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
