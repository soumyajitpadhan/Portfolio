import React from 'react'
import profile from '../assets/Profile.png'
import { useTheme } from '../Context/ThemeContext'
import Typewriter from 'typewriter-effect';

const Hero = () => {

  const { theme } = useTheme();

  return (
    <>
      <section className={` ${theme === 'dark' ? 'bg-background-dark text-foreground-dark' : 'bg-background-light text-foreground-light'}`}>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
            <div data-aos='fade-right' data-aos-delay='250' className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
              {/* <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There, <br /> I'm Soumyajit <span className='text-red-500'>Padhan</span></h1> */}
              <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>
                <Typewriter
                  options={{
                    strings: ['Hi There,', "I'm Soumyajit <span class='text-red-500'>Padhan</span>"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    raw: true,
                  }}
                />
              </h1>
              <p className='md-text-2xl text-xl mb-4'>Web Developer</p>
              <p className='mb-4 '>I'm a passionate web developer with expertise in React and modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
              <a href="#" target="_blank" rel="noopener noreferrer" download>
                <button
                  className={`relative flex h-[50px] w-40 items-center justify-center overflow-hidden rounded-md px-3 py-2 text-white shadow-2xl transition-all 
                  ${theme === 'light' ? 'bg-black' : 'bg-red-500'} 
                  before:absolute before:h-0 before:w-0 before:rounded-full before:duration-500 before:ease-out hover:shadow-red-500 hover:before:h-56 hover:before:w-56 
                  ${theme === 'light' ? 'before:bg-red-500' : 'before:bg-black'}`}
                >
                  <span className="relative z-10">Download CV</span>
                </button>
              </a>
            </div>
            <div data-aos='fade-left' data-aos-delay='250' className='md:w-1/2 relative flex justify-center items-end'>
              {/* <img src={profile} alt="" className='lg:h-[90vh] lg:w-[40vw] h-96' /> */}
              <img src={profile} alt="" className='lg:h-[65vh] lg:w-[30vw] h-96 bg-gradient-to-t from-red-500 via-25% via-red-500/50 to-65% rounded-[60px] overflow-hidden' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
