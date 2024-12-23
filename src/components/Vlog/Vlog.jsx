import React from 'react';
import Image2 from '../../assets/image1.jpg'
import Image3 from '../../assets/image4.jpg'
import Image4 from '../../assets/image5.jpg'



const Vlog = () => {
  return (
    <div className="mt-16  ">
      {/* Grid Container with 3 rows and 1 column */}
      <div className="grid grid-cols-1 gap-10">
      <div className=" ml-60">
        <h1 className="font-serif text-4xl  tracking-wide">Travel</h1>
        <p className='mr-44 text-gray-500 mt-8'>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
      </div>
        {/* First Image Block */}
        <div className="border border-gray-300 p-5 shadow-lg rounded-md max-w-[960px] mx-auto">
          <img
            src={Image2}
            alt="Nature"
            className="w-full h-[494px] rounded-md object-cover"
          />
          <h1 className="text-2xl mt-4">The Girl from Ipanema</h1>
          <h2 className="text-sm mt-5">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h2>
        </div>

        {/* Second Image Block */}
        <div className="border border-gray-300 p-5 shadow-lg rounded-md max-w-[960px] mx-auto">
          <img
            src={Image3}
            alt="Nature"
            className="w-full h-[494px] rounded-md object-cover"
          />
          <h1 className="text-2xl mt-4">The Girl from Ipanema</h1>
          <h2 className="text-sm mt-5">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h2>
        </div>

        {/* Third Image Block */}
        <div className="border border-gray-300 p-5 shadow-lg rounded-md max-w-[960px] mx-auto">
          <img
            src={Image4}
            alt="Nature"
            className="w-full h-[494px] rounded-md object-cover"
          />
          <h1 className="text-2xl mt-4">The Girl from Ipanema</h1>
          <h2 className="text-sm mt-5">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h2>
        </div>
      </div>
    </div>
  );
};

export default Vlog;
