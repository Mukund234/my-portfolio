import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website built with React and React Router. Features a modern design with warm color palette and mobile-first approach.'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration. Built with React, Node.js, and MongoDB.'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Features include task assignment, progress tracking, and team collaboration tools.'
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1>My Projects</h1>
        <p className="projects-subtitle">Check out some of my recent work</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
