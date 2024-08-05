import React from 'react';
import '../../App.css';
import Welcome from '../Welcome';
import Experience from '../Experience';

function Home() {
  return (
    <>
      <div id="about">
        <Welcome />
      </div>
      <div id="experience">
        <Experience />
      </div>
    </>
  );
}

export default Home;
