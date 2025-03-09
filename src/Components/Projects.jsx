import React from 'react'
import property_listing_platform from '../assets/property_listing_platform.png'
import LaunchFund from '../assets/LaunchFund.png'
import Autovate from '../assets/Autovate.png'
import Etutor from '../assets/E-tutor.png'
import Cards from './Cards'
import { useTheme } from '../Context/ThemeContext'

const Projects = () => {

    const { theme } = useTheme();

    const projectJson = [
        {
            title: 'LaunchFund',
            desc: 'LaunchFund is a simple crowdfunding platform that helps users create campaigns, track donations, and engage with supporters in real time.',
            image: LaunchFund,
            stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
            live: "https://launchfund.netlify.app/",
            github: "https://github.com/soumyajitpadhan/LaunchFund"
        },
        {
            title: 'PROPERTY LISTING PLATFORM',
            desc: 'A sleek and intuitive property discovery app built with React.js, Node.js, Express, and MongoDB, offering a fast, modern, and user-friendly experience.',
            image: property_listing_platform,
            stack: ['React', 'CSS', 'Node.js', 'Express', 'MongoDB'],
            live: "https://property-listing-platform-frontendbrilliance.vercel.app/",
            github: "https://github.com/soumyajitpadhan/Property_Listing_Platform"
        },
        {
            title: 'Autovate',
            desc: 'Autovate is an AI-driven self-driving app that adapts to real-time road conditions for safe and efficient navigation, created for learning purposes.',
            image: Autovate,
            stack: ['React', 'Tailwind CSS', 'Redux', 'Firebase'],
            live: "https://autovate.netlify.app/",
            github: "https://github.com/soumyajitpadhan/Autovate-The-Future-Of-Mobility"
        },
        {
            title: 'E-tutor',
            desc: 'E-Tutor is a clone online learning platform offering interactive courses, live tutoring, and resources for personalized education.',
            image: Etutor,
            stack: ['React', 'Tailwind CSS'],
            live: "https://etutor-platform.netlify.app/",
            github: "https://github.com/soumyajitpadhan/E-tutor"
        },
    ];


    return (
        <section id='projects' className={`relative py-10 px-4 ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-700'}`}>
            <div data-aos='fade-up' data-aos-delay='250' className='mb-16 max-w-7xl mx-auto'>
                <h2 className={`text-3xl font-bold mb-8 border-b w-max pb-4 ${theme === 'dark' ? 'text-red-500 border-white' : 'text-white border-red-500'}`}>My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
                    {projectJson.map((items) => {
                        return <Cards items={items} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects
