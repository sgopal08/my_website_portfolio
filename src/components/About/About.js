import React from 'react';
import '../../App.css';
import './About.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

function About() {
  return (
    <section className="about-section">
      <div className="about-heading">
        <span className="section-eyebrow">01 / About</span>
        <TypingAnimation text="A little more about me" />
      </div>
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
      <div className="about-notes" aria-label="Areas of interest">
        <span>Software Engineering</span>
        <span>Product Development</span>
        <span>Technology &amp; Media</span>
        <span>Teaching</span>
      </div>
    </section>
  );
}

export default About;
