'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [scrollStyle, setScrollStyle] = useState('');
  const [buttonBg, setButtonBg] = useState(
    'bg-black rounded-sm bg-opacity-75 px-3'
  );
  const [textColor, setTextColor] = useState('text-white');
  const [topHover, setTopHover] = useState(
    'hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10'
  );
  //   const [background, setBackground] = useState('bg-slate-800');

  const buttonStyles = `hover:text-blue-400 hover:translate-x-1 hover:bg-black decoration-2 rounded-sm active:text-slate-200 p-4 transition-all font-montserrat ${textColor} ${buttonBg}`;

  useEffect(() => {
    // Add scroll event listener when the component mounts
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setScrollStyle('bg-white shadow-md');
        setTextColor('text-black text-xl md:text-2xl');
        setTopHover('');
        setButtonBg('');
      } else {
        setScrollStyle('');
        setTextColor('text-white text-xl md:text-2xl');
        setTopHover(
          'hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10'
        );
        setButtonBg('bg-black rounded-sm bg-opacity-75 px-3');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //! use context to pass state from sections to nav for UNDERLINE during active section
  return (
    <nav
      className={`${scrollStyle} ${topHover} transition-all duration-500 fixed flex p-1 w-screen justify-center lg:justify-normal text-black z-20 space-x-2 md:space-x-10`}
    >
      <Link href={'#about'} className={buttonStyles}>
        About Me
      </Link>
      <Link href={'#projects'} className={buttonStyles}>
        Projects
      </Link>
      <Link href={'#contact'} className={buttonStyles}>
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
