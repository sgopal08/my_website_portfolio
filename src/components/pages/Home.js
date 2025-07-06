import React from 'react';
import '../../App.css';
import Welcome from '../Welcome';
import Experience from '../Experience';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <div id="home">
        <Welcome />
      </div>
      <div>
        <About/>
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
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
