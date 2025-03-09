import React from 'react';
import Github from '../assets/github.png';

const Cards = ({ items }) => {
    return (
        <div className='relative border border-red-500 shadow-xl rounded-xl w-full max-w-sm lg:max-w-md h-full bg-black backdrop-blur-lg bg-opacity-80 overflow-hidden  transition-all duration-500 hover:shadow-red-500 flex flex-col'>
            <div className='relative'>
                <img src={items.image} alt={items.title} className='w-full h-64 object-cover rounded-t-xl' />
                <div className='absolute inset-0 rounded-t-xl'></div>
            </div>
            <div className='p-6 flex flex-col flex-grow'>
                <h1 className='font-extrabold text-2xl text-red-500 mb-3 tracking-wide'>{items.title}</h1>
                <p className='text-gray-300 flex-grow leading-relaxed'>{items.desc}</p>
                {/* Stack tags */}
                <div className='flex flex-wrap gap-2 mt-4'>
                    {items.stack.map((tech, index) => (
                        <span
                            key={index}
                            className='bg-gradient-to-r from-red-500 to-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md hover:opacity-80 transition-all'>
                            {tech}
                        </span>
                    ))}
                </div>
                {/* Buttons */}
                <div className='flex gap-4 mt-6'>
                    <a href={items.live} target='_blank' rel='noopener noreferrer' className='w-1/2'>
                        <button className='bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold px-5 py-2.5 rounded-lg w-full shadow-lg hover:opacity-80 transition-all transform hover:scale-105'>
                            Live Demo
                        </button>
                    </a>
                    <a href={items.github} target='_blank' rel='noopener noreferrer' className='w-1/2'>
                        <button className='bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold px-5 py-2.5 rounded-lg w-full flex gap-2 justify-center items-center shadow-lg hover:opacity-80 transition-all transform hover:scale-105'>
                            <img src={Github} alt='Github' className='w-5' />
                            Github
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cards;
