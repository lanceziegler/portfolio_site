'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [scrollStyle, setScrollStyle] = useState('');
  const [textColor, setTextColor] = useState('text-white');
  const [topHover, setTopHover] = useState(
    'hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10'
  );
  //   const [background, setBackground] = useState('bg-slate-800');

  const buttonStyles = `hover:text-red-400 hover:translate-x-1 hover:underline underline-offset-8 decoration-2 rounded-sm active:text-slate-200 p-4 transition-all ${textColor}`;

  useEffect(() => {
    // Add scroll event listener when the component mounts
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setScrollStyle('bg-white shadow-md');
        setTextColor('text-black');
        setTopHover('');
      } else {
        setScrollStyle('');
        setTextColor('text-white');
        setTopHover(
          'hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10'
        );
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
      className={`${scrollStyle} ${topHover} transition-all duration-500 fixed flex space-x-8 p-1 w-screen text-black z-20 xs:justify-center`}
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
