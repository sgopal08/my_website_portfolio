import React from 'react';
import '../../App.css';
import './Welcome.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

function Welcome() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="hero-kicker">
          <span className="status-dot" />
          <TypingAnimation text="Welcome!" fontSize="16px" />
        </div>
        <h1>
          Hi, I'm <span>Sanjana</span>
        </h1>
        <p className="hero-description">
          Undergraduate Computer Science &amp; Advertising student at UNC-Chapel
          Hill
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#portfolio">
            Explore my work <span>↗</span>
          </a>
          <a className="secondary-link" href="#about">
            More about me <span>↓</span>
          </a>
        </div>
        <div className="hero-socials" aria-label="Social links">
          <span>Connect</span>
          <div className="social-rule" />
          <a
            href="https://www.linkedin.com/in/sanjana-gopalswamy-029887296/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            href="https://github.com/sgopal08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>
          <a href="mailto:sgopal0809@gmail.com" aria-label="Email">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <div className="portrait-ring" />
          <img
            src="/images/headshot.png"
            alt="Sanjana Gopalswamy"
            className="profile-pic"
          />
          <div className="unc-badge">
            <img src="/images/unc_logo.png" alt="UNC-Chapel Hill" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
