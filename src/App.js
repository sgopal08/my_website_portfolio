import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div id="home">
        <Welcome/>
      </div>
      <div id="about">
        <About />
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
    </Router>
  );
}

export default App;
