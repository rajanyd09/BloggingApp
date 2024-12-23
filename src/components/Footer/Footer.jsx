import React, { useRef } from "react";
import Image1 from '../../assets/image4.jpg';
import Image2 from '../../assets/image5.jpg';
import Image3 from '../../assets/image7.jpg';
import Image4 from '../../assets/image8.jpg';
import Image5 from '../../assets/image1.jpg';
import Image6 from '../../assets/photo5.jpg';
import Image7 from '../../assets/food1.webp';
import Image8 from '../../assets/food2.webp';
import Back from '../../assets/back.png';
import Prev from '../../assets/prev.png';
import Image9 from '../../assets/image11.jpg'

const Footer = () => {
  const sliderRef = useRef(null);

  const handlePrevProject = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const handleNextProject = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div>
      {/* Footer Bar */}
      <div className="bg-blue-500 w-full h-16 mt-7 flex justify-center items-center">
        <div className="flex justify-between gap-44">
          {/* Facebook */}
          <div className="flex items-center gap-2">
            <img
              src="https://img.icons8.com/?size=100&id=62225&format=png&color=000000"
              className="w-7 h-7"
              alt="Facebook Icon"
            />
            <p className="text-white text-lg">Facebook</p>
          </div>

          {/* Twitter */}
          <div className="flex items-center gap-2">
            <img
              src="https://img.icons8.com/?size=100&id=8vaALCJ0n6As&format=png&color=000000"
              className="w-7 h-7"
              alt="Twitter Icon"
            />
            <p className="text-white text-lg">Twitter</p>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-2">
            <img
              src="https://img.icons8.com/?size=100&id=32320&format=png&color=000000"
              className="w-7 h-7"
              alt="Instagram Icon"
            />
            <p className="text-white text-lg">Instagram</p>
          </div>

          {/* Pinterest */}
          <div className="flex items-center gap-2">
            <img
              src="https://img.icons8.com/?size=100&id=16338&format=png&color=000000"
              className="w-7 h-7"
              alt="Pinterest Icon"
            />
            <p className="text-white text-lg">Pinterest</p>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative w-full">
        <div className="relative overflow-hidden">
          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-scroll scrollbar-none relative"
          >
            <img className="w-96 h-80 flex-shrink-0" src={Image5} alt="" />
            <img className="w-96 h-80 flex-shrink-0" src={Image1} alt="" />
            <img className="w-96 h-80 flex-shrink-0" src={Image2} alt="" />
            <img className="w-96 h-80 flex-shrink-0" src={Image3} alt="" />
            <img className="w-96 h-80 flex-shrink-0" src={Image4} alt="" />
            <img className="w-96 h-80 flex-shrink-0" src={Image6} alt="" />
            <img className="w-96 h-80 flex-shrink-0" src={Image7} alt="" />
            <img className="w-96 h-80 flex-shrink-0" src={Image8} alt="" />
            
          </div>

          {/* Navigation Buttons (Inside the Slider Container) */}
          <button
            onClick={handlePrevProject}
            className="absolute top-1/2 -translate-y-1/2 left-0 bg-gray-200 p-2 rounded-full"
            aria-label="Previous Project"
          >
            <img src={Back} alt="Previous" className="w-4 h-4" />
          </button>
          <button
            onClick={handleNextProject}
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-gray-200 p-2 rounded-full"
            aria-label="Next Project"
          >
            <img src={Prev} alt="Next" className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="relative bg-zinc-500 w-full h-80">
        <div className=" absolute flex justify-center gap-5 mt-14 ml-56">
          <div>
            <img className="w-36 h-32" src={Image9} alt="" />
          </div>
          <div className="text-white font-serif">
            <h1>About Me</h1>
            <p className="text-sm mt-5">
            I'm a paragraph. Click here to add your own text and edit
            </p>
            <p className="text-sm">
            me. It’s easy. Just click “Edit Text” or double click me to
            </p>
            <p className="text-sm">
            add your own content and make changes to the font.
            </p>
          </div>
          <div className="ml-10">
            <h1 className="text-white font-serif">Join My Mailing list</h1>
            <form action="">
              <label className="text-white mt-4 text-base" For="Email">Email:  </label>
              <br />
              <input className="border-2 border-white bg-zinc-500 px-4 hover hover:border-blue-500  " type="email" id='Email' placeholder="Enter your email"/>
              <br />
              <input className="mt-2" type="checkbox" />
              <label className="text-white ml-2" htmlFor="">Yes, subscribe me to your newsletter.</label>
            </form>
            
            <button className="bg-blue-500 mt-2 px-20 hover:bg-slate-300">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
