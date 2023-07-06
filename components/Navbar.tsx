import React from 'react';
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-4 pb-16 px-8 pb-45 font-montserrat">
      {/* Social Media Icons */}
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




      {/* Logo */}
      <a href="#landing" className="text-3xl mr-16 pr-12 hover:text-white transition-colors duration-300">
        {"</>"}
      </a>


      {/* Empty space for Projects and Education */}
      <div className="flex items-center hover:text-white transition-colors duration-300 text-2xl">
        <a href="#projects">
          Projects
        </a>
      </div>
    </div>
  );
};

export default Navbar;
