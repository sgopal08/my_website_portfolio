import React from 'react';
import '../../App.css';
import './Welcome.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

function Welcome() {
  return (
    <div className="welcome-container">
      {/* <video src="/my_website_portfolio/videos/video-4.mp4" autoPlay loop muted /> */}
      <TypingAnimation text="Welcome!" fontSize="70px"/>
      <h1 id="title">Hi, I'm Sanjana Gopalswamy</h1>
      <div className="profile-pic-container">
        <img src="/my_website_portfolio/images/headshot.png" alt="Profile" className="profile-pic" />
      </div>
      <p id="desc">Third-year Computer Science & Advertising <br/>student at UNC-Chapel Hill</p>
      <img src="/my_website_portfolio/images/unc_logo.png" alt="Profile" className="unc-logo"/>
          <p className="profile-title">Connect with me!</p>
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
          </div>


    </div>
  );
}

export default Welcome;
