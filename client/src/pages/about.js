import React from 'react';
import '../styles/style.css';
import Skill from '../components/skill';
import Button from '../components/button'

function About() {
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      <div className='header-line'></div>
      <p className='about-subheader'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      <div className='about-block'>
        <div className='about-container'>
            <h3 className='about-main'>Get to know me!</h3>
            <div>
                <p className='about-details'>
                  I'm a Software Engineer with a strong passion for problem-solving and building impactful applications. I enjoy collaborating with teams to create solutions that enhance user experiences and drive project success.
                </p>
                <p className='about-details'>
                  Always eager to learn and grow, I find excitement in overcoming challenges and continuously improving as a developer. My focus is on delivering quality work and making meaningful contributions to every project.
                </p>
                <p className='about-details'>
                  I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                </p>
            </div>
            <div className="contact-button">
              <a href="#contact">
                <Button label="Contact" />
              </a>
            </div>
        </div>
        <div className='about-skills'>
            <h3>My Skills</h3>
            <div className='skills'>
                <Skill skill="HTML"/>
                <Skill skill="CSS"/>
                <Skill skill="React"/>
                <Skill skill="Python"/>
                <Skill skill="JavaScript"/>
                <Skill skill="DotNet"/>
                <Skill skill="NodeJs"/>
                <Skill skill="MS SQL"/>
                <Skill skill="GIt"/>
                <Skill skill="GitHub"/>
                <Skill skill="Mongo"/>
                <Skill skill="Docker"/>
                <Skill skill="CICD"/>
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;