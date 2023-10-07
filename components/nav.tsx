'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

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
  const [opened, { toggle }] = useDisclosure(true);
  //   const [background, setBackground] = useState('bg-slate-800');

  const buttonStyles = `hover:text-blue-400 hover:translate-x-1 hover:border-blue-400 decoration-2 rounded-sm active:text-slate-200 p-4 box-border transition-all border-2 border-slate-800 rounded-xl font-montserrat ${textColor} ${buttonBg}`;

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'circInOut',
        type: 'spring',
        mass: 0.1,
        bounce: 0,
        stiffness: 200,
      },
    },
  };

  useEffect(() => {
    window.innerWidth >= 640 ? setDisplay('block') : setDisplay('hidden');

    const handleScroll = () => {
      if (opened) toggle();
      if (window.scrollY !== 0) {
        // setScrollStyle('bg-white shadow-md');
        // setTextColor('text-black text-xl md:text-xl');
        setTopHover('');
        // setButtonBg('');
      } else {
        // setScrollStyle('');
        // setTextColor('text-white text-xl md:text-xl');
        setTopHover(
          'hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10'
        );
        if (!opened) toggle();
        // setButtonBg(
        //   'bg-black rounded-sm bg-opacity-75 px-3 hover:bg-opacity-100'
        // );
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [opened, toggle]);

  const linkItems = [
    { href: '#about', text: 'About Me' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  const calculateStaggerDelay = (index: number, totalItems: number) => {
    const baseStaggerDelay = 0.05;
    return index * baseStaggerDelay;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10, scale: 0.99 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <nav
        className={`${scrollStyle} ${topHover} ${display} transition-all duration-500 fixed flex p-7 gap-2 justify-center items-center lg:justify-normal text-black z-20 space-x-1 md:space-x-5`}
      >
        <Burger
          size={'lg'}
          opened={opened}
          onClick={toggle}
          aria-label='Toggle navigation'
        />
        <AnimatePresence>
          {opened && (
            <motion.ul
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={listVariants}
              transition={{ staggerChildren: 0.05, when: 'afterChildren' }} // Added when: 'beforeChildren'
              className='flex gap-1'
            >
              {linkItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={listVariants}
                  custom={index}
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  transition={{
                    delay: calculateStaggerDelay(index, linkItems.length),
                  }}
                >
                  <Link href={item.href} className={buttonStyles}>
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Nav;
