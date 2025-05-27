import React from 'react';
import './Experience.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

const experiences = [
  {
    title: 'SAS Data & AI Solutions',
    image: '/my_website_portfolio/images/sas.png',
    roles: [
      {
        role: 'Software Engineer Intern',
        duration: 'Summer 2025',
        description: '• Joining the Interactive Experiences Solutions Engineering team for summer 2025.'
      }
    ]
  },
  {
    title: 'UNC Department of Computer Science',
    image: '/my_website_portfolio/images/unccs.png',
    roles: [
      {
        role: 'Teaching Assistant',
        duration: '2023 - Present',
        description: '• Teaching Assistant for COMP 110: Introduction to Programming & Data Science, supporting 800+ students and collaborating with 50 TAs. <br> • Conduct weekly office hours to teach Python, object-oriented programming, data structures, and GitHub. <br> • Grade assignments and quizzes, ensuring comprehension, fostering academic success, and improving the course experience.'
      }
    ]
  },
  {
    title: 'Centible',
    image: '/my_website_portfolio/images/centible.png',
    roles: [
      {
        role: 'Team Lead',
        duration: 'May 2025 - Present',
        description: '• Leading development for a student-led financial tracker app built through Swift, optimizing user retention and engagement.'
      },
      {
        role: 'Product Manager',
        duration: 'January 2025 - May 2025',
        description: '• Researched and scoped 4 key features by analyzing developer documentation, synthesizing user research insights, and driving roadmap decisions through detailed user flows and wireframes. <br> • Designing a Swift-based paywall using StoreKit; built a plan to launch premium app model, targeting $5.5K+ in annual revenue.'
      },
    ]
  },
  {
    title: 'App Team Carolina',
    image: '/my_website_portfolio/images/appteam.jpg',
    roles: [
      {
        role: 'iOS Developer',
        duration: 'January 2023 - January 2024',
        description: '• Chosen from 150 applicants, developing weekly iOS projects using advanced Swift technologies (i.e. closures, Mapkit, optionals). <br> • Created an innovative iOS app integrating learned concepts and pitched the final product to the team and stakeholders.'
      }
    ]
  },
    {
    title: 'Develop for Good',
    image: '/my_website_portfolio/images/dfg.png',
    roles: [
      {
        role: 'Product Lead',
        duration: 'April 2025 - Present',
        description: '• Lead and mentor volunteer product managers and their cross-functional teams (designers and developers) through the full product development lifecycle. <br> • Oversaw product strategy, execution, and alignment across multiple squads building web and mobile apps for nonprofit organizations. <br> • Guided projects for organizations including the International Brain Research Organization (IBRO) and Partners in Education Roatan (PIER).'
      },
      {
        role: 'Product Manager',
        duration: 'April 2024 - August 2024',
        description: '• Led a team of 6 designers to create a website to facilitate street garbage clean-ups in lower-income areas of Bangalore, India, ensuring alignment with client requirements and community needs.<br>• Facilitated user research and testing in Bangalore using UserTesting, enhancing wireframes based on user feedback and competitive analysis.'
      }
    ]
  },
    {
    title: '1893 Brand Studio',
    image: '/my_website_portfolio/images/dth.png',
    roles: [
      {
        role: 'Web Developer',
        duration: 'January 2023 - January 2024',
        description: '• Led collaborative efforts with local Chapel Hill businesses and individual clients to craft visually engaging website and digital marketing materials.<br>• Utilized website construction and prototyping platforms like Wordpress, Figma, and Elementor to streamline development processes, employing HTML and CSS for website creation.'
      }
    ]
  },
];

const leadership = [
    {
    title: 'HackNC',
    image: '/my_website_portfolio/images/hacknc.jpeg',
    roles: [
      {
        role: 'Marketing Director',
        duration: 'March 2024 - January 2025',
        description: '• Drove 1K+ hackathon registrations for North Carolina’s largest hackathon by boosting event visibility through outbound emails, in-class presentations, social media campaigns, and collaborations with tech sponsors and CS organizations across the state'
      }
    ]
  },
      {
    title: 'Shiva Dance Center',
    image: '/my_website_portfolio/images/shiva.webp',
    roles: [
      {
        role: 'Assistant Dance Teacher',
        duration: 'August 2020 - August 2023',
        description: '•	Mentored students ages 10-13 in Indian classical Kathak dance, leading 2-hour weekly classes, establishing solid technique and performance skills, and teaching supplemental theory lessons on Indian dance history. <br> •	Dedicated 2-3 hours weekly for choreography development, curriculum design, and workshop planning. <br>• Drove a 1000+ follower increase across social media platforms, orchestrating a within one year on Facebook & YouTube.'
      }
    ]
  },
]

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
        <TypingAnimation text="Experiences"/>
      </div>
      <h2 className='skills-gallery-title'>Professional Experience</h2>
      <div className="experience-stack">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-logo">
              <img src={exp.image} alt={exp.title} />
            </div>
            <div className="experience-content">
              <h3 className="experience-company">{exp.title}</h3>
              {exp.roles.map((role, idx) => (
                <div key={idx} className="experience-role">
                  <p className="role-title">{role.role}</p>
                  <p className="role-duration">{role.duration}</p>
                  <p
                    className="role-description"
                    dangerouslySetInnerHTML={{ __html: role.description }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className ="leadership">
        <h2 className="subtitle">Community & Leadership</h2>
          <div className="experience-stack">
          {leadership.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-logo">
                <img src={exp.image} alt={exp.title} />
              </div>
              <div className="experience-content">
                <h3 className="experience-company">{exp.title}</h3>
                {exp.roles.map((role, idx) => (
                  <div key={idx} className="experience-role">
                    <p className="role-title">{role.role}</p>
                    <p className="role-duration">{role.duration}</p>
                    <p
                      className="role-description"
                      dangerouslySetInnerHTML={{ __html: role.description }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-gallery">
        <h2 className="subtitle">Technical Skills</h2>
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
