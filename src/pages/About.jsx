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
          <p>This is a story which is about my past life that i have been experienced. When i was child my life was so good and i was not a 
            smart boy, i was just an innocent guy who used to play game and also good at all games that he used to played So, life was running smoothly with no aim, dream
             and future carrier then my life gets turn when i entered in 9th standard because things totally depend on environmen
             t surrounded by you
             So before 9th standard i was surrounded by those friend Whose had also not interested in studies having no dreams they wer
             e mostly like me but after 9th class my circle got change
             d i got friend like those had some dreams to become something and hungry for scoring marks in exam
              So i also got influenced for study and</p>
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
