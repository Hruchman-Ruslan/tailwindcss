'use client';

import { useEffect, useState } from 'react';

import Sun from '/public/sun.svg';
import Moon from '/public/moon.svg';
import Search from '/public/search.svg';

export interface HeaderBarProps {}

export default function HeaderBar({}: HeaderBarProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className='flex gap-8'>
      {!isDarkMode ? (
        <Sun className='size-8 hover-item' onClick={toggleTheme} />
      ) : (
        <Moon className='size-8 hover-item' onClick={toggleTheme} />
      )}
      <Search
        className={`size-8 hover-item ${!isDarkMode ? 'text-white' : 'text-black'}`}
      />
    </div>
  );
}
