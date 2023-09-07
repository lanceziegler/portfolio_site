'use client';

import { useEffect } from 'react';
import canvasDots from '../public/heroCanvas';
import { motion } from 'framer-motion';

const Top = ({ id }: { id: string }) => {
  useEffect(() => {
    canvasDots();
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
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-10'>
          <h1 className='text-white text-5xl font-thin font-montserrat tracking-widest'>
            Lance Ziegler
          </h1>
        </div>
        <div className='canvas'>
          <canvas className='connecting-dots'></canvas>
        </div>
      </motion.div>
    </div>
  );
};

export default Top;
