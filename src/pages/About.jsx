import React from 'react';
import Image3 from "../assets/photo5.jpg";


const About = () => {
  return (
    <div > 
      <div className='mt-24 ml-44 mr-44 '>
        <div>
          <h1 className='font-serif text-4xl'>About Me</h1>
        </div>
        <div className='mt-5 flex justify-between gap-4'>
          <div className='text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur 
            veniam sunt ab maiores, voluptate magni id aspernatur dolores perferendis
             architecto laborum blanditiis? Cum ducimus cupiditate adipisci illum veniam similique
              distinctio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur 
              tempore harum, atque qui at non dolore quis dolores fugiat, accusamus quod 
              repudiandae veritatis quaerat cumque quas doloribus magni animi culpa?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur 
              doloribus est saepe quae officia. Consequatur, sed. Sit laboriosam minus,
               eius, maxime quam, consequatur dolores accusamus ipsam quasi autem magnam consectetur!</p>
              <p className='mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, cupiditate molestiae, tene
                tur fugit animi fugiat soluta pariatur nesciunt quia ducimus velit iusto officia minus aliquam eaque 
                nobis commodi. Molestias, excepturi!
              </p>
          </div>
          <div>
            <img src={Image3} alt="" />
          </div>
        </div>
      </div>
      <div className='bg-white w-full h-52'>

      </div>
    </div>
  );
};

export default About;
