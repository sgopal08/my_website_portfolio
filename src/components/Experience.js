import React from 'react';
import './Experience.css';

const experiences = [
      {
    title: 'SAS Data & AI Solutions',
    role: 'Software Engineer Intern',
    image: '/my_website_portfolio/images/sas.png',
    description: 'Joining the Interactive Experiences team for summer 2025.'
  },
    {
    title: 'UNC Department of Computer Science',
    role: 'Teaching Assistant',
    image: '/my_website_portfolio/images/unccs.png',
    description: '•Selected from a pool of 150 applicants to mentor students in an introductory Python course, providing tailored support to 300+ students through one-on-one tutoring and in-lecture assistance. •Collaborate with 10 teaching assistants and 2 professors to develop lesson plans, hold office hours, and organize hackathons, enhancing course delivery and student engagement.'
  },
  {
    title: 'App Team',
    role: 'iOS App Developer',
    image: '/my_website_portfolio/images/appteam.jpg',
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
    image: '/my_website_portfolio/images/hacknc.jpeg',
    description: '•Maintain and manage over 4 social media platforms to increase hackathon & workshop attendance, designing content through Canva.<br>•Actively engage in weekly team meetings to receive feedback and check-in on deliverables and event planning'
  },
  {
    title: 'DevelopForGood',
    role: 'Product Manager',
    image: '/my_website_portfolio/images/dfg.png',
    description: '•Led a team of 6 designers to create a website to facilitate street garbage clean-ups in lower-income areas of Bangalore, India, ensuring alignment with client requirements and community needs.<br>•Facilitated user research and testing in Bangalore using UserTesting and Maze, enhancing wireframes based on user feedback and competitive analysis'
  }
];

const skillsWithImages = [
  { name: 'Python', image: '/my_website_portfolio/images/python.png' },
  { name: 'Java', image: '/my_website_portfolio/images/java.png' },
  { name: 'JavaScript', image: '/my_website_portfolio/images/javascript.png' },
  { name: 'HTML', image: '/my_website_portfolio/images/html.jpg' },
  { name: 'CSS', image: '/my_website_portfolio/images/css.svg' },
  { name: 'TypeScript', image: '/my_website_portfolio/images/typescript.png' },
  { name: 'Swift', image: '/my_website_portfolio/images/swift.png' },
  { name: 'React.js', image: '/my_website_portfolio/images/reactjs.png' },
  { name: 'C', image: '/my_website_portfolio/images/clang.png' }
];

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-title">
        <h2>Experiences</h2>
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
      <div className="skills-gallery">
        <h2 className="skills-gallery-title">Technical Skills</h2>
        <div className="skills-gallery-grid">
          {skillsWithImages.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.image} alt={skill.name} className="skill-image" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
