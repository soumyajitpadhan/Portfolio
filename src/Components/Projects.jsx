import React from 'react'
import Cards from './Cards'
import { useTheme } from '../Context/ThemeContext'

const Projects = () => {

    const { theme } = useTheme();

    const projectJson = [
        {
            title: 'WebApp',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis recusandae illo dolorem laborum fugiat quam.',
            image: 'https://placehold.co/600x400',
            live: "#",
            github: "#"
        },
        {
            title: 'WebApp',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis recusandae illo dolorem laborum fugiat quam.',
            image: 'https://placehold.co/600x400',
            live: "#",
            github: "#"
        },
        {
            title: 'WebApp',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis recusandae illo dolorem laborum fugiat quam.',
            image: 'https://placehold.co/600x400',
            live: "#",
            github: "#"
        },
        {
            title: 'WebApp',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis recusandae illo dolorem laborum fugiat quam.',
            image: 'https://placehold.co/600x400',
            live: "#",
            github: "#"
        },
        {
            title: 'WebApp',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis recusandae illo dolorem laborum fugiat quam.',
            image: 'https://placehold.co/600x400',
            live: "#",
            github: "#"
        },
    ];


    return (
        // <section id='projects' className='relative bg-gray-700 py-10 px-4'>
        <section id='projects' className={`relative py-10 px-4 ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-700'}`}>
            <div data-aos='fade-up' data-aos-delay='250' className='mb-16 max-w-7xl mx-auto'>
                {/* <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2> */}
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
