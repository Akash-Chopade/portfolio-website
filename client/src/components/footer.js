import React from 'react';
import GitHub from '../assets/icons/github-icon.png';
import LinkedIn from '../assets/icons/linkedin-icon.png';
import '../styles/style.css'

function Footer() {
  return (
    <footer className='main-footer'>
        <div className='sub-footer1'>
            <div className='footer-row1'>
                <h2 className='footer-heading1'>Akash Chopade</h2>
                <h5 className='footer-subheader1'>Full Stack Developer skilled in building scalable web applications, integrating frontend and backend, delivering seamless user experiences and robust solutions.</h5>
            </div>
            <div className='footer-row2'>
                <h3 className='footer-heading2'>Social</h3>
                <div className='footer-subheader2'>
                <ul className="social-links">
                    <li>
                        <a href="https://github.com/Akash-Chopade" target="_blank" rel="noopener noreferrer">
                            <img src={GitHub} alt="GitHub Profile" />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn Profile" />
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='sub-footer2'/>
        <div className='sub-footer3'>
            <h5>&copy; 2024 Akash Chopade. All Rights Reserved.</h5>
        </div>
    </footer>
  );
}

export default Footer;