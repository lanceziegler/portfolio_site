'use client';

import { useState, useEffect } from 'react';
import canvasDots from '../public/heroCanvas';
import { motion } from 'framer-motion';
import { Title, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

const Top = ({ id }: { id: string }) => {
  const [glassStyle, setGlassStyle] = useState('');

  useEffect(() => {
    canvasDots();

    setTimeout(() => {
      setGlassStyle(
        'bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30'
      );
    }, 800);
    return () => {
      canvasDots;
    };
  }, []);

  return (
    <div
      id={id}
      className='min-h-screen md:min-h-screen bg-gradient-to-br from-black to-slate-800 relative h-screen'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <canvas className='connecting-dots' />
        <div className='mainCard absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div
            className={`bg-slate-800 rounded-md ${glassStyle} transition-colors duration-1000 flex flex-col justify-center items-center p-5 max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl`}
            style={{ whiteSpace: 'nowrap' }}
          >
            <div className='text-center'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-wide text-slate-300 font-bold font-montserrat'>
                Lance Ziegler
              </h1>
            </div>
            <div className='text-center'>
              <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-slate-400 font-montserrat tracking-tighter'>
                software developer
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Top;
