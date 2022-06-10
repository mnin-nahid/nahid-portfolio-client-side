import React from 'react';
import { Link } from 'react-router-dom';
import imgNahid from '../../images/avatar.jfif';

const Aside = () => {
    return (
        <div className='p-5 text-black h-full flex-col justify-center'>
            <div className='mt-5 absolute inset-x-12 top-0 h-16'>
                <div class="avatar">
                    <div class="w-11 mask mask-hexagon">
                        <img src={imgNahid} />
                    </div>
                    <h1 className="text-3xl font-semibold">NAHID</h1>

                </div>
            </div>
            <div className='my-20 flex-col justify-center bg-white p-4 rounded-lg'>
                <ul className='uppercase space-y-1 flex-col justify-center'>
                    <li className='btn btn-success btn-xs sm:btn-sm w-2/3 text-white'> <Link to="#home">home</Link> </li>
                    <li className='btn btn-success btn-xs sm:btn-sm w-2/3 text-white'> <Link to="#about">about</Link> </li>
                    <li className='btn btn-success btn-xs sm:btn-sm w-2/3 text-white'> <Link to="#projects">projects</Link> </li>
                    <li className='btn btn-success btn-xs sm:btn-sm w-2/3 text-white'> <Link to="#testimonial">testimonial</Link> </li>
                    <li className='btn btn-success btn-xs sm:btn-sm w-2/3 text-white'> <Link to="#contact">contact</Link> </li>
                    <li className='btn btn-success btn-xs sm:btn-sm w-2/3 text-white'> <Link to="#blogs">blogs</Link> </li>
                </ul>
            </div>
            <div className=' border-2 bg-white rounded-lg text-center'>
                <h3 className='text-xl'>Social media</h3>
                <ul className='flex space-x-3 font-bold text-center justify-center'>
                    <li>F</li>
                    <li>L</li>
                    <li>G</li>
                    <li>S</li>
                </ul>
            </div>
        </div>
    );
};

export default Aside;