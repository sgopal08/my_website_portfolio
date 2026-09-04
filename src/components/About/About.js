import React from 'react';
import '../../App.css';
import './About.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

function About() {
  return (
    <div className="welcome-container">
      <TypingAnimation text="About Me"></TypingAnimation>
      {/* <p className="profile-title">Connect with me!</p>
          <div className="icons">
             <a href="https://www.linkedin.com/in/sanjana-gopalswamy-029887296/" target="_blank" rel="noopener noreferrer" className="icon">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://github.com/sgopal08" target="_blank" rel="noopener noreferrer" className="icon">
              <i className="fab fa-github" />
            </a>
              <a href="mailto:sgopal0809@gmail.com"  className="icon">
              <i className="fas fa-envelope" />
            </a>
          </div> */}
      <div className="profile-blurb">
        <p>
          Hi, I’m Sanjana! I’m an undergraduate student at UNC Chapel Hill,
          double majoring in computer science and media & journalism. I'm
          passionate about technology and media, and interested in full-stack
          software engineering and product development.
        </p>
        <p>
          Creativity is at the heart of everything I do– whether I’m painting
          landscapes or building a mobile app game. I'm also dedicated to
          teaching, both as a teaching assistant for the UNC CS department and
          as an assistant dance teacher for over 4 years.
        </p>
        <p>
          Outside of school, I love horror movies, R&B music, and exploring new
          cuisines. Take a look at my work and experiences below!
        </p>
      </div>
    </div>
  );
}

export default About;
