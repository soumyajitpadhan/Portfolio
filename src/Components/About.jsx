import React from 'react'
import MernStack from '../assets/mernstack.png'
import Html from '../assets/Html.png'
import css from '../assets/CSS.png'
import JavaScript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import ReduxLogo from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind Css.png'
import NodeJs from '../assets/NodeLogo.png'
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import { useTheme } from '../Context/ThemeContext'

const About = () => {

    const { theme } = useTheme();

    return (
        <div className='relative' id='about'>
            {/* <div className='bg-gray-100 py-12'> */}
            <section className={`${theme === 'dark' ? 'bg-background-dark text-foreground-dark' : 'bg-gray-100 text-foreground-light'} py-12`}>
                <div data-aos='fade-up' data-aos-delay='250' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>About Me</h2>
                        {/* <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm Soumyajit Padhan</p> */}
                        <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'} `}>Hi, I'm Soumyajit Padhan</p>
                        {/* <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'> */}
                        <p className={`mt-4 max-w-2xl text-xl lg:mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                            A Full-Stack Developer with strong expertise in web development, specializing in the MERN stack.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div data-aos='fade-right' data-aos-delay='250'>
                                {/* <h3 className='text-2xl font-semibold text-gray-900'>My Journey</h3> */}
                                <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-red-500' : 'text-gray-900'}`}>My Journey</h3>
                                {/* <p className='mt-4 text-lg text-gray-600'> */}
                                <p className={`mt-4 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    I started my web development journey with a passion for creating intuitive and scalable applications. With expertise in the MERN stack (MongoDB, Express.js, React, and Node.js), I've built projects like a full-stack Property Listing Platform, combining powerful backend solutions with sleek, user-friendly designs. My focus is on delivering efficient, high-quality applications that offer a great user experience.
                                </p>
                                <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4' />
                            </div>
                            <div data-aos='fade-left' data-aos-delay='250' className='border border-r-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-500 '>
                                <h3 className='text-2xl font-semibold text-red-600'>Skills & Expertise</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Html} alt="" className='w-8' />
                                        <span className='font-semibold'>HTML</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={css} alt="" className='w-8' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={JavaScript} alt="" className='w-8' />
                                        <span className='font-semibold'>JavaScript</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>Tailwind CSS</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={ReduxLogo} alt="" className='w-8' />
                                        <span className='font-semibold'>Redux</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={NodeJs} alt="" className='w-8' />
                                        <span className='font-semibold'>Node Js</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Mongodb} alt="" className='w-8' />
                                        <span className='font-semibold'>MongoDB</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Express} alt="" className='w-8' />
                                        <span className='font-semibold'>Express Js</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About