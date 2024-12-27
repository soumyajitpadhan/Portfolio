import React from 'react'
import { useTheme } from '../Context/ThemeContext'

const Footer = () => {

    let { theme } = useTheme();

    return (
        // <footer className='bg-gray-100 py-4 relative'>
        <footer className={`py-4 border-t border-gray-300 relative ${theme === 'dark' ? 'bg-background-dark text-foreground-dark' : 'bg-gray-100'}`}>
            <div className='container mx-auto px-4 text-center'>
                <p>&copy; 2024 Soumyajit Padhan. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
