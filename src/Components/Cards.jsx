import React from 'react'
import Github from '../assets/github.png'

const Cards = ({ items }) => {
    return (
        <div className='border border-red-200 shadow-lg shadow-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50 transform transition-transform duration-300 ease-in-out hover:scale-105'>
            <img src={items.image} alt="" className='rounded-lg w-full h-60' />
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{items.title}</h1>
                <p className='text-gray-700'>{items.desc}</p>
                {/* Stack tags */}
                <div className='flex flex-wrap gap-2 mt-4'>
                    {items.stack.map((tech, index) => (
                        <span 
                            key={index} 
                            className='bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-md'>
                            {tech}
                        </span>
                    ))}
                </div>
                {/* Buttons */}
                <div className='flex gap-3 mt-4'>
                    <button className='bg-red-500 text-white px-3 py-2 rounded-md'>
                        <a href={items.live} target='_blank' rel='noopener noreferrer'>Live Preview</a>
                    </button>
                    <button className='bg-black text-white px-3 py-2 rounded-md'>
                        <a href={items.github} target='_blank' rel='noopener noreferrer' className='flex gap-1'>
                            <img src={Github} alt="" className='w-6' />
                            Github Link
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Cards
