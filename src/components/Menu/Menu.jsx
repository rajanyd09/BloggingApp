import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image6 from '../../assets/image7.jpg';
import Image7 from '../../assets/image8.jpg';

const Menu = () => {
  const navigate = useNavigate();

  // Handler function to navigate to the Travel page
  const handleTravelClick = () => {
    navigate('/travel');
  };
  
  const handleEatClick = () => {
    navigate('/eat');
  };

  const handleRelaxClick = () => {
    navigate('/relax');
  };

  return (
    <div className="mt-14 mb-15">
      <div>
        <div className="mt-10 text-gray-500">
          <h1 className="flex justify-center">
            I'm a paragraph. Click here to add your own text and edit me. It’s easy.
          </h1>
          <h1 className="flex justify-center">
            Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </h1>
        </div>
      </div>
      <div className="mb-10 mt-10 ml-40 mr-40 flex justify-center gap-5">
        {/* Travel Button */}
        <div className="relative">
          <img src={Image6} alt="" className="w-[314px] h-[260px]" />
          <button
            onClick={handleTravelClick}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white hover:bg-sky-500 text-sky-500 hover:text-white px-4 py-2"
          >
            Travel
          </button>
        </div>

        {/* Eat Button */}
        <div className="relative">
          <img
            src="https://static.wixstatic.com/media/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.jpg/v1/fill/w_628,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.jpg"
            alt=""
            className="w-[314px] h-[260px]"
          />
          <button onClick={handleEatClick} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white hover:bg-sky-500 text-sky-500 hover:text-white px-4 py-2">
            Eat
          </button>
        </div>

        {/* Relax Button */}
        <div className="relative">
          <img src={Image7} alt="" className="w-[314px] h-[260px]" />
          <button onClick={handleRelaxClick} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white hover:bg-sky-500 text-sky-500 hover:text-white px-4 py-2">
            Relax
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
