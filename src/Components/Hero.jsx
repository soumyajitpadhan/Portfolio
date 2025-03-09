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
              <h1 className='lg:text-6xl text-3xl font-bold lg:leading-snug'>Hi There, <br /> I'm Soumyajit <span className=''>Padhan</span></h1>
              <p className="md:text-3xl text-2xl mb-4 font-bold text-gray-800 transition-all duration-500 ease-in-out">
                <span className="text-red-500">
                  <Typewriter
                    options={{
                      strings: ["Frontend Developer", "Full-Stack Developer", "MERN Stack Developer"],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                  />
                </span>
              </p>
              <p className='mb-4 '>I'm a passionate MERN Stack Developer specializing in building scalable and user-friendly web applications using React, Node.js, Express, and MongoDB to deliver smooth and engaging user experiences.</p>
              <a
                href="https://drive.google.com/file/d/1VwtKGrD621EftjDRjoAjnTOdHk9UZKYO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default behavior
                  window.open("https://drive.google.com/file/d/1VwtKGrD621EftjDRjoAjnTOdHk9UZKYO/view?usp=sharing", "_blank");
                  window.location.href = "https://drive.google.com/uc?export=download&id=1VwtKGrD621EftjDRjoAjnTOdHk9UZKYO";
                }}
              >
                <button
                  className={`relative flex h-[50px] w-40 items-center justify-center overflow-hidden rounded-md px-3 py-2 text-white shadow-2xl transition-all 
                  ${theme === 'light' ? 'bg-black' : 'bg-red-500'} 
                  before:absolute before:h-0 before:w-0 before:rounded-full before:duration-500 before:ease-out hover:shadow-red-500 hover:before:h-56 hover:before:w-56 
                  ${theme === 'light' ? 'before:bg-red-500' : 'before:bg-black'}`}
                >
                  <span className="relative z-10">Download Resume</span>
                </button>
              </a>
            </div>
            <div data-aos='fade-left' data-aos-delay='250' className='md:w-1/2 relative flex justify-center items-end'>
              <img src={profile} alt="" className='lg:h-[65vh] lg:w-[30vw] h-96 bg-gradient-to-t from-red-500 via-25% via-red-500/50 to-65% rounded-[60px] overflow-hidden' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
