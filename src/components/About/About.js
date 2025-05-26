import React from 'react';
import '../../App.css';
import './About.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

function About() {
  return (
    <div className="welcome-container">
      <TypingAnimation text="About Me"></TypingAnimation>
      {/* <video src="/my_website_portfolio/videos/video-4.mp4" autoPlay loop muted /> */}
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
          <p>Hi, I’m Sanjana! I’m an undergraduate student at UNC Chapel Hill, double majoring in computer science and advertising/PR. I aspire to excel at the intersection of technology and marketing, and am particularly interested in front-end software engineering and product management.</p>
          <p>Creativity is at the heart of everything I do– whether I’m painting landscapes or making a mobile app game. I'm also dedicated to teaching, both as a teaching assistant for the UNC CS department and as an assistant dance teacher for over 4 years.</p>
          <p>Outside of school, I love horror movies, R&B music, and exploring new cuisines. Take a look at my work and experiences below!</p>
        </div>
      {/* add resume bttn here */}
<div className="resume-button-container">
  <a href="https://docs.google.com/document/d/1P_rlOgeJnUqdX79TlVuCGXduqcwCxd7AYAICd3fAuxU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
    <button className="resume-button">Resume</button>
  </a>
</div>

    </div>
  );
}

export default About;
