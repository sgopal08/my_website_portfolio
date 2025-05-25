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
        <img src="/my_website_portfolio/images/pfp_minipic.png" alt="Profile" className="profile-pic" />
      </div>
      <p id="desc">Third-year Computer Science & Advertising <br/>student at UNC-Chapel Hill</p>


    </div>
  );
}

export default Welcome;
