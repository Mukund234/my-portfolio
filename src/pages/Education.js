import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2018 - 2022',
      description: 'Graduated with honors. Specialized in web development and software engineering. Completed coursework in data structures, algorithms, and full-stack development.'
    },
    {
      id: 2,
      degree: 'High School Diploma',
      institution: 'Central High School',
      period: '2014 - 2018',
      description: 'Focused on mathematics and science. Member of the computer club and participated in coding competitions. Graduated in the top 10% of the class.'
    }
  ];

  return (
    <div className="education-page">
      <div className="education-container">
        <h1>Education</h1>
        <p className="education-subtitle">My academic background</p>
        
        <div className="education-list">
          {education.map(edu => (
            <div key={edu.id} className="education-item">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="period">{edu.period}</span>
              </div>
              <h4>{edu.institution}</h4>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
