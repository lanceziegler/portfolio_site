'use client';

import { useState, useEffect } from 'react';
import canvasDots from '../public/heroCanvas';
import { motion } from 'framer-motion';
import { Title, Text } from '@mantine/core';

const Top = ({ id }: { id: string }) => {
  const [glassStyle, setGlassStyle] = useState('');

  useEffect(() => {
    canvasDots();

    setTimeout(() => {
      setGlassStyle(
        'bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30'
      );
    }, 800);
  }, []);

  return (
    <div
      id={id}
      className='min-h-screen flex justify-center items-center tracking-wide bg-gradient-to-br from-black to-slate-800'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div
          className={` flex content-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 rounded-md pb-16 pt-8 px-10 ${glassStyle} transition-colors duration-1000`}
        >
          <Title order={1} size='6rem'>
            Lance Ziegler
          </Title>
          <p className='text-slate-400 absolute mt-32'>software developer</p>
        </div>
        <div className='canvas'>
          <canvas className='connecting-dots'></canvas>
        </div>
      </motion.div>
    </div>
  );
};

export default Top;
