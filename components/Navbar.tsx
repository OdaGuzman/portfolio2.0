import React from 'react';
import Image from 'next/image'
import ThemeToggle from './ThemeToggle';
import { ThemeToggleProps } from '../components/types';

const Navbar = ({ isDarkMode, toggleTheme }: ThemeToggleProps) => {

  return (
    <div className="flex items-center justify-between pt-4 pb-16 px-8 pb-45 font-montserrat">
      {/* Social Media Icons */}

      <div className="flex items-center">
        <a href="mailto:odaguz.dev@gmail.com">

          <Image
            src={isDarkMode ? '/MailDark.png' : '/MailLight.png'}
            alt="Email Icon"
            className="h-18 w-20  mr-2 hover:animate-bounce"
            width={48}
            height={48} />
        </a>

        <a href="https://github.com/OdaGuzman">
          <Image
            src={isDarkMode ? '/GithubDark.png' : '/GithubLight.png'}
            alt="Github Icon"
            className="h-18 w-20 mr-2 hover:animate-bounce"
            width={68}
            height={48}
          />
        </a>

        <a href="https://www.linkedin.com/in/oda-guzman">
          <Image
            src={isDarkMode ? '/LinkedInDark.png' : '/LinkedInLight.png'}
            alt="LinkedIn Icon"
            className="h-18 w-20 mr-2 hover:animate-bounce"
            width={48}
            height={48}
          />
        </a>
      </div>

      {/* Logo */}
      <a href="#landing" className={`text-3xl mr-16 pr-12 hover:text-white transition-colors duration-300 ${isDarkMode ? 'hover:text-purple-400 transition-colors duration-300' : ''}`}>
        {"</>"}
      </a>



      {/* Education */}
      <div className="flex items-center content-center gap-4 " >
        <a href="#projects" className={`hover:text-white transition-colors duration-300 text-2xl ${isDarkMode ? 'hover:text-purple-400 transition-colors duration-300' : ''}`}>
          Projects
        </a>

        <div className="flex items-center">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
      </div >
    </div >
  );
};

export default Navbar;
