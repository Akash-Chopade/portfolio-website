import React, { useEffect, useRef, useState } from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import About from './pages/about.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';
import './styles/style.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <h1>Hey! I'm Akash Chopade</h1>
      <p>A Result-Oriented Software Engineer building and managing Websites and Web Applications that lead to the success of the overall product</p>
    </section>
  );
}

function SectionWithAnimation({ id, children }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 50% of the section is visible
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`fade-in ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </section>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <SectionWithAnimation id="about">
          <About />
        </SectionWithAnimation>
        <SectionWithAnimation id="projects">
          <Projects />
        </SectionWithAnimation>
        <SectionWithAnimation id="contact">
          <Contact />
        </SectionWithAnimation>
      </main>
      <Footer />
    </div>
  );
}

export default App;