import React from 'react';
import '../styles/style.css';

function Skill({ skill }) {
  return (
    <div className="skill-block">
      {skill}
    </div>
  );
}

export default Skill;