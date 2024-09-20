import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'App Team',
    role: 'iOS App Developer',
    image: 'my_website_portfolio/images/appteam.jpg',
    description: '•Developing iOS app development tasks with Apple’s XCode using Swift/SwiftUI, enhancing technical and UI skills to acquire experience in professional software development.<br>•Collaborate with 20 team members within a simulated company setting to generate application ideas, provide peer feedback.'
  },
  {
    title: '1893 Brand Studio',
    role: 'Web Developer',
    image: '/my_website_portfolio/images/dth.png',
    description: '•Led collaborative efforts with local Chapel Hill businesses and individual clients to craft visually engaging website and digital marketing materials.<br>•Utilized website construction and prototyping platforms like Wordpress, Figma, and Elementor to streamline development processes, employing HTML and CSS for website creation.'
  },
  {
    title: 'HackNC',
    role: 'Jr. Marketing Director',
    image: 'my_website_portfolio/images/hacknc.jpeg',
    description: '•Maintain and manage over 4 social media platforms to increase hackathon & workshop attendance, designing content through Canva.<br>•Actively engage in weekly team meetings to receive feedback and check-in on deliverables and event planning'
  },
  {
    title: 'DevelopForGood',
    role: 'Design Manager',
    image: 'my_website_portfolio/images/dfg.png',
    description: '•Led a team of 6 designers to create a website to facilitate street garbage clean-ups in lower-income areas of Bangalore, India, ensuring alignment with client requirements and community needs.<br>•Facilitated user research and testing in Bangalore using UserTesting and Maze, enhancing wireframes based on user feedback and competitive analysis'
  }
];

const skills = [
  'Java',
  'Swift/SwiftUI',
  'Python',
  'JavaScript',
  'HTML/CSS',
  'React.js',
  'Git',
  'GitHub',
  'Figma',
  'Tableau',
  'R',
  'Microsoft Excel',
  'Adobe Photoshop & Illustrator',
  'Canva'
];

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-title">
        <h2 className="experience-title">Experiences</h2>
      </div>
      <div className="experience-grid">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <div className="image-container">
              <img src={experience.image} alt={experience.title} />
            </div>
            <div className="experience-item-content">
              <div className="experience-item-title">{experience.title}</div>
              <div className="experience-item-role">{experience.role}</div>
            </div>
            <div
              className="experience-item-description"
              dangerouslySetInnerHTML={{ __html: experience.description }}
            />
          </div>
        ))}
      </div>
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <h3 className="skills-subtitle">Software, Languages, and Frameworks</h3>
        <div className="skills-list">
          <div className="skills-column">
            <ul>
              {skills.slice(0, 7).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills-column">
            <ul>
              {skills.slice(7).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
