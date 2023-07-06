import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-4 pb-16 px-8 pb-45">
      {/* Social Media Icons */}
      <div className="flex items-center">
        <a href="mailto:odaguz.dev@gmail.com">
          <img src="/email.png" alt="Email Icon" className="h-14 mr-4 hover:animate-bounce " />
        </a>

        <a href="https://github.com/OdaGuzman">
          <img src="/github.png" alt="Github Icon" className="h-14 mr-4 hover:animate-bounce" />
        </a>

        <a href="https://www.linkedin.com/in/oda-guzman">
          <img
            src="/Linkedin1.png"
            alt="LinkedIn Icon"
            className="h-14 mr-4 hover:animate-bounce"
          />
        </a>
      </div>




      {/* Logo */}
      <a href="#landing" className="text-3xl font-montserrat hover:text-white transition-colors duration-300">
        {"</>"}
      </a>


      {/* Empty space for Projects and Education */}
      <div className="flex items-center font-montserrat hover:text-white transition-colors duration-300 text-2xl">
        {/* <a href="#education" className="mr-6 text-2xl font-montserrat hover:text-white transition-colors duration-300">
          Education
        </a> */}
        <a href="#projects">
          Projects
        </a>
      </div>
    </div>
  );
};

export default Navbar;
