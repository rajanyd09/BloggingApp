import React from 'react'

const Relax = () => {
  return (
    <div className="mt-16  ">
      {/* Grid Container with 3 rows and 1 column */}
      <div className="grid grid-cols-1 gap-10">
      <div className=" ml-60">
        <h1 className="font-serif text-4xl  tracking-wide">Relax</h1>
        <p className='mr-44 mt-8 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum incidunt officia aliquam tempora quos. Suscipit autem voluptate, magnam quia modi odit quaerat officiis recusandae inventore error exercitationem sed ad.</p>
      </div>
        {/* First Image Block */}
        <div className="border border-gray-300 p-5 shadow-lg rounded-md max-w-[960px] mx-auto">
          <img
            src="https://static.wixstatic.com/media/38c4af340de54c78b4e1869be78ef1fd.jpg/v1/fill/w_3760,h_2116,fp_0.50_0.50,q_90,enc_auto/38c4af340de54c78b4e1869be78ef1fd.jpg"
            alt="Nature"
            className="w-full h-[494px] rounded-md object-cover"
          />
          <h1 className="text-2xl mt-4">The Girl from Ipanema</h1>
          <h2 className="text-sm mt-5">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h2>
        </div>

        {/* Second Image Block */}
        <div className="border border-gray-300 p-5 shadow-lg rounded-md max-w-[960px] mx-auto">
          <img
            src="https://static.wixstatic.com/media/4d2d8fa0c42543a7b9a5ec9416597378.jpg/v1/fill/w_3760,h_2116,fp_0.50_0.50,q_90,enc_auto/4d2d8fa0c42543a7b9a5ec9416597378.jpg"
            alt="Nature"
            className="w-full h-[494px] rounded-md object-cover"
          />
          <h1 className="text-2xl mt-4">The Girl from Ipanema</h1>
          <h2 className="text-sm mt-5">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h2>
        </div>

        {/* Third Image Block */}
        <div className="border border-gray-300 p-5 shadow-lg rounded-md max-w-[960px] mx-auto">
          <img
            src="https://static.wixstatic.com/media/da1004557f254d4b9d4166b1bf32c599.jpg/v1/fill/w_3760,h_2116,fp_0.50_0.50,q_90,enc_auto/da1004557f254d4b9d4166b1bf32c599.jpg"
            alt="Nature"
            className="w-full h-[494px] rounded-md object-cover"
          />
          <h1 className="text-2xl mt-4">The Girl from Ipanema</h1>
          <h2 className="text-sm mt-5">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h2>
        </div>
      </div>
    </div>
  )
}

export default Relax;