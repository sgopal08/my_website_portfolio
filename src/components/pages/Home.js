import React from 'react';
import '../../App.css';
import Welcome from '../Welcome';
import Experience from '../Experience';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <div id="about">
        <Welcome />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
