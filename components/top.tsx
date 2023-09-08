'use client';

import { useState, useEffect } from 'react';
import canvasDots from '../public/heroCanvas';
import { motion } from 'framer-motion';

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
      className='flex justify-center items-center h-screen tracking-wide bg-gradient-to-br from-black to-slate-800'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div
          className={` flex content-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-800 rounded-md pb-16 pt-8 px-10 ${glassStyle} transition-colors duration-1000`}
        >
          <h1 className='text-white text-5xl font-thin font-montserrat tracking-widest'>
            Lance Ziegler
          </h1>
          <p className='text-slate-300 absolute mt-14 font-thin'>
            software developer
          </p>
        </div>
        <div className='canvas'>
          <canvas className='connecting-dots'></canvas>
        </div>
      </motion.div>
    </div>
  );
};

export default Top;
