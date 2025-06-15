import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import solera from '../assets/images/solera.png';
import '../styles/workExperience.css';

const experiences = [
  {
    company: 'Solera',
    role: 'Software Engineer II',
    duration: 'Dec 2024 – Present',
    location: 'Bangalore, India',
    responsibilities: [
        "Leading an enterprise-grade SQL Server migration, coordinating with DBAs and infrastructure teams to ensure data accuracy, service continuity, and minimal risk during cutover phases.",
        "Co-led CI/CD migration by refactoring configuration and automating deployments, achieving a 40% reduction in release time through optimized Jenkins pipelines. Received Star of the Month award for this initiative.",
        "Strengthened application security by resolving critical SecOps findings, remediating third-party vulnerabilities, enforcing secure API practices, and aligning system configurations with security benchmarks.",
        "Orchestrated production rollouts through structured CAB procedures, creating exhaustive pre- and post-deployment checklists to ensure reliability and enable seamless rollbacks."
    ],
  },
  {
    company: 'Solera',
    role: 'Associate Software Engineer I',
    duration: 'Sept 2022 – Dec 2024',
    location: 'Bangalore, India',
    responsibilities: [
        'Designed reusable React UI components (checkboxes, Radio, modals, loaders, notifications), improving visual coherence and accelerating front-end velocity by 30%. Earned Star of the Month for this contribution.',
        'Integrated SonarQube with front-end projects to enforce automated static code analysis, reducing bugs by more than 60%. Awarded Star of the Month for enhancing code quality.', 
        'Contributed to full-stack development using .NET Core, React.js, ExtJS, and SQL Server, actively supporting agile delivery cycles and end-to-end DevOps processes across multiple enterprise-scale applications.',
        'Revived a dormant legacy system (ContentsExpress) by provisioning a complete local dev environment with full backend connectivity, reactivating team productivity after five years of stagnation.'
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experince" className="workexperience-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="heading">Work Experience</h1>
        <div className="header-line"></div>
        <VerticalTimeline layout="1-column" className="vertical-timeline">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#1d3557',
                color: '#fff',
                borderRadius: '10px',
              }}
              contentArrowStyle={{ borderRight: '7px solid #1d3557' }}
              date={exp.duration}
              iconStyle={{
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              icon={<img src={solera} alt="work" className="solera-icon" />}
              position={index % 2 === 0 ? 'left' : 'right'} // Alternate position
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="role">
                  {exp.role} <span className="company">@ {exp.company}</span>
                </h3>
                <p className="location">{exp.location}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
