import React from 'react';
import nahidPhoto from '../assets/Image.jpeg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4'>
          <div className='text-end'>
            <img src={nahidPhoto}  alt='nahid photo' className='w-72 rounded-md mx-auto'></img>
          </div>
          <div>
            <p className='sm:text-left text-4xl font-bold'>Hi. I'm Nahid, <br /> nice to meet you.</p>
            <p>I am recently complete  Computer Engineering at Tangail Polytechnic Institute, with a focus in Web Development and Android apps Development.</p>
            <br />
            <p>I am a self-motivated Frontend Web developer with huge knowledge and proficiency in this section, as well as strong skills and ability in writing clean and efficient code. I am Skilled in HTML, CSS, JavaScript, React, MongoDB, NodeJS. My passion is to learn new Technologies. My aim is to be a Full Stack Web Developer.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
