import React from 'react';
import Html from '../assets/Html.png';
import css from '../assets/CSS.png';
import JavaScript from '../assets/JS.png';
import ReactLogo from '../assets/React.png';
import ReduxLogo from '../assets/Redux.png';
import Tailwind from '../assets/Tailwind Css.png';
import NodeJs from '../assets/NodeLogo.png';
import Mongodb from '../assets/mongodb.svg';
import Express from '../assets/Express.png';
import { useTheme } from '../Context/ThemeContext';
import { motion } from 'framer-motion';

const skills = [
    { name: 'HTML', icon: Html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: JavaScript },
    { name: 'Tailwind CSS', icon: Tailwind },
    { name: 'React', icon: ReactLogo },
    { name: 'Redux', icon: ReduxLogo },
    { name: 'Node.js', icon: NodeJs },
    { name: 'MongoDB', icon: Mongodb },
    { name: 'Express.js', icon: Express },
];

const Skills = () => {
    const { theme } = useTheme();

    return (
        <section id='skills' className={`${theme === 'dark' ? 'bg-background-dark text-foreground-dark' : 'bg-background-light text-foreground-light'} py-14`}>
            <div data-aos='fade-left' data-aos-delay='250' className='max-w-7xl mx-auto px-6'>
                <h3 className='text-3xl font-semibold text-center text-red-500 mb-12'>
                    My Skills
                </h3>

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5'>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className='relative p-3 rounded-lg shadow-md flex flex-col items-center gap-2 bg-gradient-to-br from-gray-200 to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-transform hover:scale-110 hover:shadow-lg hover:shadow-red-400/50'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className='w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md'>
                                <img src={skill.icon} alt={skill.name} className='w-8 h-8 object-contain' />
                            </div>
                            <span className='text-sm font-semibold'>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
