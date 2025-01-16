import React, { useRef, useState } from 'react'
import { useTheme } from '../Context/ThemeContext'
import emailjs from '@emailjs/browser';
// import { ToastContainer, toast } from 'react-toastify';
import { toast, Toaster } from 'react-hot-toast'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import email from '../assets/email.png'
import phone from '../assets/phone.png'
import Lottie from 'lottie-react'
import contact from '../assets/Contact.json'

const Contact = () => {

    const { theme } = useTheme();

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: formRef.current['name'].value,
            email: formRef.current['email'].value,
            message: formRef.current['message'].value,
            to_name: 'Soumyajit',
        }

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_USER_ID
            )
            .then(
                () => {
                    // toast.success('Message sent successfully!', {
                    //     position: "top-right",
                    //     autoClose: 5000,
                    //     hideProgressBar: false,
                    //     closeOnClick: false,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     theme: theme === 'dark' ? 'dark' : 'light',
                    // });
                    toast('Message sent successfully!',
                        {
                            icon: '✅',
                            style: {
                                borderRadius: '50px',
                                background: theme === 'dark' ? '#fff' : '#000',
                                color: theme === 'dark' ? '#000' : '#fff',
                            }
                        });
                    formRef.current.reset();
                },
                (error) => {
                    // toast.error('Failed to send message. Please try again.', {
                    //     position: "top-right",
                    //     autoClose: 5000,
                    //     hideProgressBar: false,
                    //     closeOnClick: false,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     theme: theme === 'dark' ? 'dark' : 'light',
                    // });
                    toast('Failed to send message. Please try again.',
                        {
                            icon: '❌',
                            style: {
                                borderRadius: '50px',
                                background: theme === 'dark' ? '#fff' : '#000',
                                color: theme === 'dark' ? '#000' : '#fff',
                            }
                        });
                    console.log('EmailJS Error:', error);
                },
            );
    };

    return (
        // <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
        <section id='contact' className={`z-50 relative py-10 px-5 md:px-0 ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-800'}`}>
            <div className='mb-16 max-w-7xl mx-auto'>
                <div data-aos='fade-up' data-aos-delay='250' className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
                        <h2 className='text-3xl font-bold mb-3 text-red-500'>Get in Touch</h2>
                        <p className='mb-4 text-white/85'>I'm always excited about new opportunities and collaborations. Feel free to reach out!</p>
                        <p className='mb-4 text-white/85'><span><img src={phone} alt="" className='h-6 w-6 inline mr-2' /></span>7327848104</p>
                        <p className='mb-4 text-white/85'> <span><img src={email} alt="" className='h-6 w-6 inline mr-2' /></span>soumyajitpadhan15@gmail.com</p>
                        <div className='flex space-x-4'>
                            <a href="https://www.linkedin.com/in/soumyajit-padhan-ab3190243/" target='_blank' rel='noopener noreferrer' className='text-foreground/60 hover:text-foreground/80'>
                                <img src={linkedin} alt="" className='h-6 w-6' />
                            </a>
                            <a href="https://github.com/soumyajitpadhan" target='_blank' rel='noopener noreferrer' className='text-foreground/60 hover:text-foreground/80'>
                                <img src={github} alt="" className='h-6 w-6' />
                            </a>
                        </div>
                        <Lottie animationData={contact} data-aos='fade-right' data-aos-delay='250' className='w-[350px] mx-auto lg:w-[500px]' />
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit} data-aos='fade-left' data-aos-delay='250' className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'>
                        <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
                        <div className='mb-4'>
                            <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                            <input type="text" id='name' name='name' placeholder='Full Name' className='mt-1 p-2 block w-full rounded-md border-gray-300 outline-none shadow-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition duration-500' required />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                            <input type="email" id='email' name='email' placeholder='Email' className='mt-1 p-2 block w-full rounded-md border-gray-300 outline-none shadow-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition duration-500' required />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                            <textarea id='message' name='message' placeholder='Enter Your Message' className='mt-1 p-2 block w-full rounded-md border-gray-300 outline-none shadow-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition duration-500' required />
                        </div>
                        <button className='bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-black transition duration-300 ease-in hover:shadow-md hover:shadow-red-500'>Send Message</button>
                    </form>
                </div>
            </div>
            {/* <ToastContainer /> */}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </section>
    )
}

export default Contact
