import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f] min-h-[30rem]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#8892b0] text-5xl font-bold'>Hi, I am <span className='text-blue-600'>Nahidul Islam Nayan</span></p>
                {/* <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    Clint Briley
                </h1> */}
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    I'm a Font End Developer.
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I'm a web developer based in Dhaka, Bangladesh. I have profound interest in full-stack development, machine learning, human-computer interactions, and everything in between.
                </p>
                <div>
                    <button className='text-white group border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>
                        <a target='_blank' href='https://drive.google.com/file/d/1_ZJYzNV1CszrRU2ubk-glPQYGo9EjQlJ/view?usp=sharing'>
                            Resume
                        </a>
                        <span className='group-hover:rotate-90 duration-300'>
                            <AiFillCaretRight className='ml-3 ' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
