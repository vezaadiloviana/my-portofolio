import React, { useState, useEffect } from 'react';
import DarkModeToggle from '../DarkModeToggle';

const NavbarApp = () => {
  const [navbarClass, setNavbarClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      if (position > 0) {
        setNavbarClass('bg-primaryBlue');
      } else {
        setNavbarClass('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${navbarClass} text-white text-base fixed top-0 z-50 w-full max-w-[1600px]`}>
      <div className='flex justify-between items-center py-4 px-10'>
        <div></div>

        <div className='flex gap-5 items-center'>
          <a className='font-medium hover:underline' href="#home">Home</a>
          <a className='font-medium hover:underline' href="#home">About</a>
          <a className='font-medium hover:underline' href="#home">Skills</a>
          <a className='font-medium hover:underline' href="#home">Portofolio</a>
          <a className='font-medium hover:underline' href="#home">Experiences</a>
          <a className='font-medium hover:underline' href="#home">Achievement</a>
          <a className='font-medium hover:underline' href="#home">Contact</a>
        </div>

        <div>
          <DarkModeToggle/>
        </div>
      </div>
    </nav>
  );
};

export default NavbarApp;
