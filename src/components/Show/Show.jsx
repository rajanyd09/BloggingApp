import React from 'react';

const Show = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-20 mb-10 gap-5 bg-gray-300 w-full h-[163px]">
      <div className="flex justify-center gap-10">
        <h1 className='font-serif'>As featured in</h1>
        <h1>|</h1>
        <h1 className='text-xl'>Travel blog</h1>
        <h1>Planetour</h1>
        <pre className='font-sans '>
          WORLD 
          <span className='font-bold'> TRAVEL</span>
        </pre>
        <h1>Skycloud</h1>
      </div>
    </div>
  );
};

export default Show;
