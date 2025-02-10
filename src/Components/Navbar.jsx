import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme();

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header
            className={`sticky top-0 z-50 w-full border-b backdrop-blur px-4 lg:px-0 
            ${theme === 'dark' ? 'bg-background-dark text-foreground-dark' : 'bg-background-light text-foreground-light'}`}>
            <div className='max-w-7xl mx-auto flex h-14 items-center'>
                <div className='md:mr-4 flex justify-between w-full'>
                    <a href="#" className='mr-6 flex items-center space-x-2'>
                        <img src={Logo} alt="Logo" className='w-12' />
                    </a>
                    <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                        <a href="#about" className='transition-colors text-foreground/60 hover:text-red-500'>About</a>
                        <a href="#projects" className='transition-colors text-foreground/60 hover:text-red-500'>Projects</a>
                        <a href="#contact" className='transition-colors text-foreground/60 hover:text-red-500'>Contact</a>
                        <a
                            href="https://drive.google.com/file/d/1VwtKGrD621EftjDRjoAjnTOdHk9UZKYO/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='transition-colors text-foreground/60 hover:text-red-500'
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default behavior to handle both actions
                                window.open("https://drive.google.com/file/d/1VwtKGrD621EftjDRjoAjnTOdHk9UZKYO/view?usp=sharing", "_blank");
                                window.location.href = "https://drive.google.com/uc?export=download&id=1VwtKGrD621EftjDRjoAjnTOdHk9UZKYO";
                            }}
                        >
                            Resume
                        </a>
                    </nav>
                </div>
                <div className='flex items-center space-x-4'>
                    {theme === 'light' ? (
                        <Sun className='h-6 w-6 cursor-pointer animate-fadeRotate' onClick={toggleTheme} aria-hidden="true" />
                    ) : (
                        <Moon className='h-6 w-6 cursor-pointer animate-fadeRotate' onClick={toggleTheme} aria-hidden="true" />
                    )}
                    <button className='inline-flex items-center justify-center rounded-md md:hidden' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span className='sr-only'>Open main menu</span>
                        {mobileMenuOpen ? (
                            <X className='h-6 w-6' aria-hidden="true" />
                        ) : (
                            <Menu className='h-6 w-6' aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className='md:hidden'>
                    <div className='space-y-1 px-3 pb-3 pt-2'>
                        <a href="#about" onClick={closeMobileMenu} className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-red-500 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>About</a>
                        <a href="#projects" onClick={closeMobileMenu} className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-red-500 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Projects</a>
                        <a href="#contact" onClick={closeMobileMenu} className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-red-500 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Contact</a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default anchor behavior
                                closeMobileMenu(); // Close the mobile menu
                                window.open("https://drive.google.com/file/d/1VwtKGrD621EftjDRjoAjnTOdHk9UZKYO/view?usp=sharing", "_blank");
                                window.location.href = "https://drive.google.com/uc?export=download&id=1VwtKGrD621EftjDRjoAjnTOdHk9UZKYO";
                            }}
                            className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-red-500 ${theme === 'dark' ? 'text-white' : 'text-gray-700'
                                }`}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar;
