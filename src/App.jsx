import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Use Routes and Route here
import Navbar from './components/Navbar/Navbar';  // Correct import
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import Show from './components/Show/Show';
import Vlog from './components/Vlog/Vlog';
import Home from './pages/Home';
import About from './pages/About';
import Eat from './pages/Eat';
import Relax from './pages/Relax';
import Travel from './pages/Travel';
import Videos from './pages/Videos';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/eat" element={<Eat />} />
          <Route path="/relax" element={<Relax />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
