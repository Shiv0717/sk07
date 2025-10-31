import React from 'react';
import HeroSection from '../components/Herosection';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Exp from '../components/Exp';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About/>
      <Exp/>
      <Projects/>
     
    </div>
  );
}

export default Home;
