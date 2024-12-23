import React from 'react'

const Eat = () => {
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
            src="https://static.wixstatic.com/media/240bc5b15f4e4f4582996cf6b0d6ab8f.jpg/v1/fill/w_3760,h_2116,fp_0.50_0.50,q_90,enc_auto/240bc5b15f4e4f4582996cf6b0d6ab8f.jpg"
            alt="Nature"
            className="w-full h-[494px] rounded-md object-cover"
          />
          <h1 className="text-2xl mt-4">The Girl from Ipanema</h1>
          <h2 className="text-sm mt-5">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h2>
        </div>

        {/* Second Image Block */}
        <div className="border border-gray-300 p-5 shadow-lg rounded-md max-w-[960px] mx-auto">
          <img
            src="https://static.wixstatic.com/media/e74ada189a6b4b21badde4860665a1ef.jpg/v1/fill/w_3760,h_2116,fp_0.50_0.50,q_90,enc_auto/e74ada189a6b4b21badde4860665a1ef.jpg"
            alt="Nature"
            className="w-full h-[494px] rounded-md object-cover"
          />
          <h1 className="text-2xl mt-4">The Girl from Ipanema</h1>
          <h2 className="text-sm mt-5">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h2>
        </div>

        {/* Third Image Block */}
        <div className="border border-gray-300 p-5 shadow-lg rounded-md max-w-[960px] mx-auto">
          <img
            src="https://static.wixstatic.com/media/b819819803e24f53891d300c471ed80b.jpg/v1/fill/w_3760,h_2116,fp_0.50_0.50,q_90,enc_auto/b819819803e24f53891d300c471ed80b.jpg"
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

export default Eat