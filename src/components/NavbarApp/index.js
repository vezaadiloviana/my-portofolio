import React, { useState, useEffect } from 'react';
import DarkModeToggle from '../DarkModeToggle';
import { Icon } from '@iconify/react';

const NavbarApp = () => {
  const [navbarClass, setNavbarClass] = useState('');
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

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

  
  const handleMobileToggle = () => {
    setMobileNavbarOpen(!mobileNavbarOpen);
  };

  return (
    <nav className={`${navbarClass} text-white text-base fixed top-0 z-50 w-full max-w-[1600px]`}>
      <div className='hidden md:flex justify-between items-center py-4 px-10'>
        <div></div>

        <div className='flex gap-5 items-center'>
          <a className='font-medium hover:underline' href="#home">Home</a>
          <a className='font-medium hover:underline' href="#about">About</a>
          <a className='font-medium hover:underline' href="#skills">Skills</a>
          <a className='font-medium hover:underline' href="#portofolio">Portofolio</a>
          <a className='font-medium hover:underline' href="#experiences">Experiences</a>
          <a className='font-medium hover:underline' href="#achievement">Achievement</a>
          <a className='font-medium hover:underline' href="#contact">Contact</a>
        </div>

        <div>
          <DarkModeToggle/>
        </div>
      </div>

      <div className='flex md:hidden justify-end py-4 px-10'>
        <button onClick={handleMobileToggle}>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <div className={`absolute w-screen z-10 h-screen top-0 bg-primaryBlue transition-transform transform ${mobileNavbarOpen ? '' : '-translate-x-full'}`}>
        <div className='py-4 px-10'>
          <div className='flex justify-end text-red-600' onClick={handleMobileToggle}>
            <Icon icon="material-symbols:close" width="24" height="24" />
          </div>
          <div className='flex flex-col gap-5 py-5'>
            <a className='font-medium hover:underline' href="#home">Home</a>
            <a className='font-medium hover:underline' href="#about">About</a>
            <a className='font-medium hover:underline' href="#skills">Skills</a>
            <a className='font-medium hover:underline' href="#portofolio">Portofolio</a>
            <a className='font-medium hover:underline' href="#experiences">Experiences</a>
            <a className='font-medium hover:underline' href="#achievement">Achievement</a>
            <a className='font-medium hover:underline' href="#contact">Contact</a>
          </div>
          <div className='absolute bottom-0 right-0 py-10'>
            <DarkModeToggle/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarApp;
