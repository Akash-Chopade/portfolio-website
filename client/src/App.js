import React, { useEffect, useRef, useState } from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import About from './pages/about.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';
import WorkExperience from './pages/workExperience.js';
import Button from './components/button.js';
import './styles/style.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <h1>Hey! I'm Akash Chopade</h1>
      <p>A Result-Oriented Software Engineer building and managing Websites and Web Applications that lead to the success of the overall product</p>
      <a href='https://drive.google.com/file/d/1g9FuWw2JzWadVkgjXykS1oZfFuWsfaiK/view?usp=sharing' target="_blank" rel="noreferrer"><Button label="Resume"/></a>
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
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current; // Store reference in a variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
        <SectionWithAnimation id="work-experience">
          <WorkExperience />
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