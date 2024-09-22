import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Welcome from './components/Welcome';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Welcome /> */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
