import React from 'react';
import Image1 from '../../assets/bg_photu.jpg';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import Show from '../Show/Show';
import Vlog from '../Vlog/Vlog';

const Hero = () => {
  return (
    <div>

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="w-full">
            <img 
              src={Image1} 
              alt="Beautiful travel destination background" 
              className="w-full h-[600px] object-cover" 
            />
          </div>
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 bg-black bg-opacity-40"
            aria-label="Hero overlay with introductory text"
          >
            <h1 className="text-lg mb-4 uppercase tracking-wider">Travel Vlog</h1>
            <h2 className="text-7xl font-semibold mb-2">Going Places</h2>
            <p className="text-lg">
              I haven’t been everywhere, but it's on my list.
            </p>
          </div>
        </section>

        {/* Additional Sections */}
        <section aria-labelledby="menu-section">
          <Menu />
        </section>

        <section aria-labelledby="show-section">
          <Show />
        </section>

        <section aria-labelledby="vlog-section">
          <Vlog />
        </section>
      </main>
    </div>
  );
};

export default Hero;
