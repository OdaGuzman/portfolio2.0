import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  return (

    <div className="flex items-center justify-between py-4 px-8">
      <div className="flex items-center">
        <div className="flex items-center space-x-7 ">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="fa fa-Linkedin" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="fa fa-Github" />
          </a>
        </div>
      </div>
    </div>

  );
};

export default NavBar;