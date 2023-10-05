'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Nav = () => {
  const [scrollStyle, setScrollStyle] = useState('');
  const [buttonBg, setButtonBg] = useState(
    'bg-black rounded-sm bg-opacity-75 px-3 hover:bg-opacity-100'
  );
  const [textColor, setTextColor] = useState('text-white text-xl md:text-xl');
  const [topHover, setTopHover] = useState(
    'hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10'
  );
  const [display, setDisplay] = useState('hidden');
  //   const [background, setBackground] = useState('bg-slate-800');

  const buttonStyles = `hover:text-blue-400 hover:translate-x-1 decoration-2 rounded-sm active:text-slate-200 p-4 transition-all font-montserrat ${textColor} ${buttonBg}`;

  useEffect(() => {
    window.innerWidth >= 640 ? setDisplay('block') : setDisplay('hidden');

    // Add scroll event listener when the component mounts
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setScrollStyle('bg-white shadow-md');
        setTextColor('text-black text-xl md:text-xl');
        setTopHover('');
        setButtonBg('');
      } else {
        setScrollStyle('');
        setTextColor('text-white text-xl md:text-xl');
        setTopHover(
          'hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10'
        );
        setButtonBg(
          'bg-black rounded-sm bg-opacity-75 px-3 hover:bg-opacity-100'
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10, scale: 0.99 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <nav
        className={`${scrollStyle} ${topHover} ${display} transition-all duration-500 fixed flex p-1 w-screen justify-center lg:justify-normal text-black z-20 space-x-1 md:space-x-10`}
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
    </motion.div>
  );
};

export default Nav;
