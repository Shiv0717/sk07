import React from 'react';
import HeroSection from '../components/Herosection';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default Home;
