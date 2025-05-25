import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Portfolio.css';

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
    image: '/my_website_portfolio/images/safeskin.png',
    title: 'SafeSkin',
    software: 'Swift/SwiftUI',
    description: 'Product ingredient scanner app.',
    link: 'https://github.com/sgopal08/safeskin',
  },
  {
    image: '/my_website_portfolio/images/epic.jpeg',
    title: 'Rubbish Economics',
    software: 'Figma, UserTesting',
    description: 'High-fidelity design wireframes for a volunteer & crowd-sourcing platform for street garbage clean-ups in Bangalore, India.',
    link: 'https://www.figma.com/proto/Z66UHeU8UtBM8fbU3DSgu2/Energy-Policy-Institute-at-the-University-of-Chicago---India?node-id=1027-1382&node-type=CANVAS&t=glcQixQNHE72Dqpi-1&scaling=scale-down&content-scaling=fixed&page-id=6%3A4&starting-point-node-id=1027%3A1382&show-proto-sidebar=1',
    presentationLink: 'https://docs.google.com/presentation/d/1_RqGRpBQ1FqGgb0cn5hHbGl-rbhbZMkCk5zSlrnWoXg/edit?usp=sharing', 
  },
    {
    image: '/my_website_portfolio/images/heelhouse.png',
    title: 'Heel House',
    software: 'Swift/SwiftUI',
    description: 'UNC Chapel Hill-based roommate matching app.',
    link: 'https://github.com/caitlinestrada27/heelhouse',
    presentationLink: 'https://devpost.com/software/heel-house', 
  },
  {
    image: '/my_website_portfolio/images/logo.png',
    title: 'Personal Portfolio',
    software: 'JavaScript, HTML/CSS, React.js',
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
    title: 'NYT Mini App',
    software: 'Swift/Swift UI',
    description: 'Recreation of the New York Times Mini Crossword game.',
    link: 'https://github.com/sgopal08/nyt_mini',
  },
  {
    image: '/my_website_portfolio/images/totspot.png',
    title: 'Tot Spot',
    software: 'JavaScript (Next), HTML, CSS',
    description: 'A website to helps working mothers find affordable, reliable childcare with personalized options, prices, and ratings.',
    link: 'https://github.com/nehab444/fidhacks',
    presentationLink: 'https://devpost.com/software/tot-spot'
  },
  
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-title">
        <h2>Projects</h2>
      </div>
      <div className="portfolio-tiles">
        {tiles.map((tile, index) => (
          <div className="portfolio-tile" key={index}>
            <div className="portfolio-tile-image">
              <img src={tile.image} alt={tile.title} />
            </div>
            <div className="portfolio-tile-content">
              <div className="portfolio-tile-title">{tile.title}</div>
              <div className="portfolio-tile-software">{tile.software}</div>
            </div>
            <div className="portfolio-tile-description">
              <p>{tile.description}</p>
              <a href={tile.link} target="_blank" rel="noopener noreferrer">
                <button className="project-button">View Project</button>
              </a>
              {/* render the view present bttn for some of them*/}
              {tile.title === 'Rubbish Economics' && (
                <a href={tile.presentationLink} target="_blank" rel="noopener noreferrer">
                  <button className="presentation-button">View Presentation</button>
                </a>
              )}
              {tile.title === 'Heel House' && (
                <a href={tile.presentationLink} target="_blank" rel="noopener noreferrer">
                  <button className="presentation-button">View Presentation</button>
                </a>
              )}
               {tile.title === 'Tot Spot' && (
                <a href={tile.presentationLink} target="_blank" rel="noopener noreferrer">
                  <button className="presentation-button">View Presentation</button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
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
