'use client'
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // // Function to toggle between light and dark mode
  // const toggleTheme = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };

  // // Set the initial theme based on user's system preference
  // useEffect(() => {
  //   const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   setIsDarkMode(prefersDarkMode);
  // }, []);

  // // Update the HTML root element class based on the theme
  // useEffect(() => {
  //   document.documentElement.classList.toggle('dark', isDarkMode);
  // }, [isDarkMode]);

  return (
    <button
      type="button"
      className="w-12 h-12 flex items-center justify-center rounded-full  dark:bg-gray-700"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-sun w-6 h-6"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-moon w-6 h-6"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
