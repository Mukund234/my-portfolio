import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <section className="about-hero">
          <h1>About Me</h1>
          <p className="intro-text">
            Hello! I'm a passionate developer creating amazing web experiences.
          </p>
        </section>

        <section className="about-content">
          <h2>Personal Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2>Professional Bio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent 
            libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum 
            imperdiet. Duis sagittis ipsum. Praesent mauris.
          </p>
          <p>
            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget 
            nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
            inceptos himenaeos.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
