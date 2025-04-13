import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import OurIdeology from '../components/OurIdeology';
import Statistics from '../components/Statistics';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <OurIdeology />
      <Statistics />
      <Benefits />
      <Footer />
    </div>
  );
}

export default Home; 