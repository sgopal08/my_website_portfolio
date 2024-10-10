import React from 'react';
import '../App.css';
import './Welcome.css';
import TypingAnimation from './TypingAnimation';

function Welcome() {
  return (
    <div className="welcome-container">
      {/* <video src="/my_website_portfolio/videos/video-4.mp4" autoPlay loop muted /> */}
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
          <p>Hi, I’m Sanjana! I’m an undergraduate at UNC Chapel Hill, double majoring in computer science and advertising/PR. I’m passionate about the intersection of technology and marketing, particularly interested in software engineering, product management, and UX/UI design.</p>
          <p>Creativity is at the heart of everything I do, whether I’m painting landscapes or coding a mobile app game. I’m also passionate about teaching, working as teaching assistant for the CS department and even a dance instructor for four years!</p>
          <p>Outside of school, I love horror movies, R&B music, and exploring new cuisines. Take a look at my work and experiences below!</p>
        </div>
      </div>
      {/* Resume Button */}
<div className="resume-button-container">
  <a href="https://docs.google.com/document/d/1sHww-pjzJFa20tqkW8Y7QlqIKc_9Auy-qyi8sVZBJEU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
    <button className="resume-button">Resume</button>
  </a>
</div>

    </div>
  );
}

export default Welcome;
