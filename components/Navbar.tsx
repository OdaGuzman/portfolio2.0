import React from 'react';
import Image from 'next/image'
import ThemeToggle from './ThemeToggle';
import { ThemeToggleProps } from '../components/types';


const Navbar = ({ isDarkMode, toggleTheme }: ThemeToggleProps) => {
  return (
    <div className="flex items-center justify-between pt-4 pb-16 px-8 pb-45 font-montserrat">
      {/* Social Media Icons */}
      {isDarkMode ?
        <div className="flex items-center">
          <a href="mailto:odaguz.dev@gmail.com">

            <Image src="/email.png"
              alt="Email Icon"
              className="h-14 mr-4 hover:animate-bounce"
              width={56}
              height={56} />
          </a>

          <a href="https://github.com/OdaGuzman">
            <Image src="/github.png"
              alt="Github Icon"
              className="h-14 mr-4 hover:animate-bounce"
              width={56}
              height={56}
            />
          </a>

          <a href="https://www.linkedin.com/in/oda-guzman">
            <Image
              src="/LinkedInDark.png"
              alt="LinkedIn Icon"
              className="h-14 mr-4 hover:animate-bounce"
              width={56}
              height={56}
            />
          </a>
        </div>
        :
        <div className="flex items-center">
          <a href="mailto:odaguz.dev@gmail.com">

            <Image src="/email.png"
              alt="Email Icon"
              className="h-14 mr-4 hover:animate-bounce"
              width={56}
              height={56} />
          </a>

          <a href="https://github.com/OdaGuzman">
            <Image src="/github.png"
              alt="Github Icon"
              className="h-14 mr-4 hover:animate-bounce"
              width={56}
              height={56}
            />
          </a>

          <a href="https://www.linkedin.com/in/oda-guzman">
            <Image
              src="/Linkedin1.png"
              alt="LinkedIn Icon"
              className="h-14 mr-4 hover:animate-bounce"
              width={56}
              height={56}
            />
          </a>
        </div>
      }




      {/* Logo */}
      <a href="#landing" className="text-3xl mr-16 pr-12 hover:text-white transition-colors duration-300">
        {"</>"}
      </a>


      {/* Empty space for Projects and Education */}
      <div className="flex items-center content-center gap-4 ">
        <a href="#projects" className='hover:text-white transition-colors duration-300 text-2xl'>
          Projects
        </a>
        <div className="flex items-center">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
