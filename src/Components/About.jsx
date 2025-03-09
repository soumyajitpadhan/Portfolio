import React from 'react'
import { useTheme } from '../Context/ThemeContext'

const About = () => {

    const { theme } = useTheme();

    return (
        <div className='relative' id='about'>
            <section className={`${theme === 'dark' ? 'bg-background-dark text-foreground-dark' : 'bg-gray-100 text-foreground-light'} py-12`}>
                <div data-aos='fade-up' data-aos-delay='250' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-3xl text-red-500 font-semibold tracking-wide mb-8'>About Me</h2>
                        <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'} `}>Hi, I'm Soumyajit Padhan</p>
                        <p className={`mt-4 max-w-2xl text-xl lg:mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                            A Full-Stack Developer with strong expertise in web development, specializing in the MERN stack.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12'>
                            <div data-aos='fade-right' data-aos-delay='250'>
                                <h3 className={`text-2xl font-semibold text-red-500`}>My Journey</h3>
                                <p className={`mt-4 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    My journey into web development began with a deep curiosity about how technology shapes our digital world. Fascinated by the web's potential, I started with frontend development and soon expanded into full-stack development with the MERN stack. Along the way, I refined my ability to build scalable, high-performance applications while continuously learning and adapting to new technologies. I thrive on solving real-world challenges through code, crafting seamless and engaging user experiences. Today, I am dedicated to pushing boundaries, developing innovative web solutions that drive efficiency and create meaningful impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About