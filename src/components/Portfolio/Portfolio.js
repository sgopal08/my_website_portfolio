import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Portfolio.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

const images = [
  '/my_website_portfolio/images/post1.webp',
  '/my_website_portfolio/images/post2.webp',
  '/my_website_portfolio/images/post3.webp',
  '/my_website_portfolio/images/post4.webp',
  '/my_website_portfolio/images/post5.webp',
  '/my_website_portfolio/images/post6.webp',
  '/my_website_portfolio/images/post7.webp',
  '/my_website_portfolio/images/post8.webp',
  '/my_website_portfolio/images/post9.webp',
  // add images here
];

const tiles = [
    {
    image: '/my_website_portfolio/images/ByteNotes.png',
    title: 'Byte Notes',
    software: 'Next.js (TypeScript), Tailwind CSS, Supabase',
    description: 'Byte Notes is a note-taking platform for Computer Science students, featuring a markdown text editor and built-in code compiler. Users can organize notes by notebooks, chapters, and pages, and share and publish them for other users. ',
    link: 'https://bytenotes-seven.vercel.app/login',
  },
      {
    image: '/my_website_portfolio/images/csxl.jpeg',
    title: 'Ticket Tracker',
    software: 'Angular (TypeScript), FastAPI (Python), PostgreSQL, Tailwind CSS',
    description: 'An AI-powered office hour summary & analytics page. Created as a feature for the UNC Computer Science department website to aid professors and teaching assistants.',
    link: 'https://csxl-team-b4-comp423-25s.apps.unc.edu/course/1/analytics',
  },
    {
    image: '/my_website_portfolio/images/safeskin.png',
    title: 'SafeSkin',
    software: 'Swift',
    description: 'A product ingredient scanner app that helps users quickly identify potentially harmful or allergy-triggering ingredients in skincare, makeup, and personal care products—especially those hidden in hard-to-read labels.',
    link: 'https://github.com/sgopal08/safeskin',
  },
  {
    image: '/my_website_portfolio/images/epic.jpeg',
    title: 'Rubbish Economics',
    software: 'Figma, UserTesting',
    description: 'High-fidelity design wireframes for a volunteer, crowd-sourcing, and community forum platform to motivate street garbage clean-ups in Bangalore, India. Users can sign-up for neighborhood cleans ups, donate directly to the cause to fund equipment & volunteer needs, and share progress via a community forum.',
    link: 'https://www.figma.com/proto/Z66UHeU8UtBM8fbU3DSgu2/Energy-Policy-Institute-at-the-University-of-Chicago---India?node-id=1027-1382&node-type=CANVAS&t=glcQixQNHE72Dqpi-1&scaling=scale-down&content-scaling=fixed&page-id=6%3A4&starting-point-node-id=1027%3A1382&show-proto-sidebar=1',
    presentationLink: 'https://docs.google.com/presentation/d/1_RqGRpBQ1FqGgb0cn5hHbGl-rbhbZMkCk5zSlrnWoXg/edit?usp=sharing', 
  },
    {
    image: '/my_website_portfolio/images/heelhouse.png',
    title: 'Heel House',
    software: 'Swift',
    description: 'UNC Chapel Hill-based roommate matching app. Users can swipe through other profiles to find a roommate match.',
    link: 'https://github.com/caitlinestrada27/heelhouse',
    presentationLink: 'https://devpost.com/software/heel-house', 
  },
  {
    image: '/my_website_portfolio/images/logo.png',
    title: 'Personal Portfolio',
    software: 'React (JavaScript), HTML/CSS, React.js',
    description: 'Personal Portfolio website platform where users can view my experiences, projects, and get in touch with me.',
    link: 'https://github.com/sgopal08/my_website_portfolio',
  },
  // {
  //   image: '/my_website_portfolio/images/jungle.png',
  //   title: 'Jungle Dash',
  //   software: 'Java',
  //   description: 'A simple side-scroller game, inspired by the T-Rex game when you lose internet connection on Google Chrome.',
  //   link: 'https://github.com/sgopal08/JungleDash',
  // },
  {
    image: '/my_website_portfolio/images/nytmini.png',
    title: 'The New York Times Mini Crossword',
    software: 'Swift',
    description: 'An iOS app recreation of the New York Times Mini Crossword game.',
    link: 'https://github.com/sgopal08/nyt_mini',
  },
  {
    image: '/my_website_portfolio/images/totspot.png',
    title: 'Tot Spot',
    software: 'Next.js (JavaScript), Tailwind CSS',
    description: 'A website to help working mothers find affordable, reliable childcare with personalized options, prices, and ratings.',
    link: 'https://github.com/nehab444/fidhacks',
    presentationLink: 'https://devpost.com/software/tot-spot'
  },
  
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="section-title">
        <TypingAnimation text="Projects"/>
      </div>
      <div className="portfolio-tiles">
        {tiles.map((tile, index) => (
          <div className="portfolio-card" key={index}>
            <div className="portfolio-image">
              <img src={tile.image} alt={tile.title} />
            </div>
            <div className="portfolio-details">
              <h3 className="portfolio-title">{tile.title}</h3>
              <p className="portfolio-description">{tile.description}</p>
              <p className="portfolio-software"><em>{tile.software}</em></p>
              <div className="portfolio-buttons">
                <a href={tile.link} target="_blank" rel="noopener noreferrer">
                  <button className="project-button">Try it Out</button>
                </a>
                {tile.presentationLink && (
                  <a href={tile.presentationLink} target="_blank" rel="noopener noreferrer">
                    <button className="presentation-button">View Presentation</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Old Image Carousel for Graphics */}
      {/* <h3 className="portfolio-subtitle">Social Media Graphics & Logos</h3> */}
      {/*  image carousel here */}
      {/* <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Portfolio ${index + 1}`} />
          </div>
        ))}
      </Carousel> */}
    </div>
  );
}

export default Portfolio;
