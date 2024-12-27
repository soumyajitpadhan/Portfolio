import React from 'react'
import Github from '../assets/github.png'

const Cards = ({ items }) => {
    return (
        <div className='border border-red-200 shadow-lg shadow-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50 transform transition-transform duration-300 ease-in-out hover:scale-105'>
            <img src={items.image} alt="" className='rounded-lg' />
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{items.title}</h1>
                <p>{items.desc}</p>
                <div className='flex gap-3 mt-4'>
                    <button className='bg-red-500 text-white px-3 py-2 rounded-md'><a href={items.live} target='-blank'>Live Preview</a></button>
                    <button className='bg-black text-white px-3 py-2 rounded-md'>
                        <a href={items.github} target='-blank' className='flex gap-1'>
                            <img src={Github} alt="" className='w-6' />
                            Github Link
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards
