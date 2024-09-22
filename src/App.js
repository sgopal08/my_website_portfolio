import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
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
    </Router>
  );
}

export default App;
