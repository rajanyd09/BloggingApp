import React from 'react'
import Vedio1 from '../assets/vedio1.mp4'

const Videos = () => {
  return (
    <div>
      <div className='mt-16 grid grid-cols-1 ml-60'>
        <div className='text-4xl'>
          <h1>Video</h1>
        </div>
        <div className='text-gray-500 mt-8 mr-44'>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
        </div>
        {/* <div className='className= flex justify-center border border-gray-300 p-5 shadow-lg rounded-md max-w-[960px] mx-auto'>
          <video src=""></video>
        </div> */}
      </div>
      <div>
      <div className='flex justify-center p-5 shadow-lg rounded-md w-[968px] h-full mx-auto mt-8'>
          <video src={Vedio1} controls className="w-full h-full rounded-md"></video>
        </div>
      </div>
    </div>
  )
};

export default Videos