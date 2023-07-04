import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-4 pb-16 px-8 pb-45">
      {/* Social Media Icons */}
      <div className="flex items-center">
        <a href="mailto:odaguz.dev@gmail.com">
          <img src="/email.png" alt="Email Icon" className="w-15 h-9 mr-4 hover:animate-pulse" />
        </a>

        <a href="https://www.github.com/">
          <img src="/github.png" alt="Github Icon" className="w-15 h-9 mr-4 " />
        </a>

        <a href="https://www.linkedin.com/">
          <img
            src="/Linkedin1.png"
            alt="LinkedIn Icon"
            className="w-15 h-9 mr-4 hover:scale-105"
          />
        </a>
      </div>

      {/* Logo */}
      <a href="#landing" className="text-3xl font-montserrat hover:text-white transition-colors duration-300">
        {"</>"}
      </a>


      {/* Empty space for Projects and Education */}
      <div className="flex items-center">
        <a href="#education" className="mr-6 text-2xl font-montserrat hover:text-white transition-colors duration-300">
          Education
        </a>
        <a href="#projects" className="text-2xl  font-montserrat  hover:text-white transition-colors duration-300">
          Projects
        </a>
      </div>
    </div>
  );
};

export default Navbar;
