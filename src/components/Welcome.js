import React from 'react';
import '../App.css';
import './Welcome.css';
import TypingAnimation from './TypingAnimation';

function Welcome() {
  return (
    <div className="welcome-container">
      <video src="/my_website_portfolio/videos/video-4.mp4" autoPlay loop muted />
      <TypingAnimation />
      <div className="profile-container">
        <div className="profile-pic-container">
          <img src="/my_website_portfolio/images/pfp_minipic.png" alt="Profile" className="profile-pic" />
          <p className="first-name">Sanjana</p>
          <p className="last-name">Gopalswamy</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/sanjana-gopalswamy-029887296/" target="_blank" rel="noopener noreferrer" className="icon">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://github.com/sgopal08" target="_blank" rel="noopener noreferrer" className="icon">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
        <div className="profile-blurb">
          <p>Hi, I'm Sanjana. I'm a second-year undergraduate student at UNC Chapel Hill studying computer science and advertising & PR. I aspire to excel in the intersection of technology and marketing.</p>
          <p>I'm passionate about the world of technology, and am particularly drawn to the realms of software development, product management, and UX/UI design.</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
