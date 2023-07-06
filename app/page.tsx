'use client'
import Landing from '@/components/Landing'
import NavBar from '@/components/Navbar'
import Projects from '@/components/Projects'
import { ThemeToggleProps } from '../components/types';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Set the initial theme based on user's system preference
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  // Update the HTML root element class based on the theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);
  
  return (
    <>
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Landing isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
      <Projects isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
    </>
  )

}
