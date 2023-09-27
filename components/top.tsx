'use client';

import { useState, useEffect } from 'react';
import canvasDots from '../public/heroCanvas';
import { motion } from 'framer-motion';
import { Title, Text, Tooltip } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { Waypoint } from 'react-waypoint';

const Top = ({ id }: { id: string }) => {
  const [glassStyle, setGlassStyle] = useState('');
  const [display, setDisplay] = useState('');
  const [gradient, setGradient] = useState(
    'linear-gradient(352deg, rgba(0,0,0,1) 18%, rgba(0,0,0,0.1) 100%)'
  );

  const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0;
  };

  useEffect(() => {
    window.innerWidth <= 640 ? setDisplay('block') : setDisplay('hidden');
    window.innerWidth <= 640
      ? setGradient(
          'linear-gradient(352deg, rgba(0,0,0,1) 16%, rgba(0,0,0,0.1) 100%)'
        )
      : setGradient(
          'linear-gradient(352deg, rgba(0,0,0,1) 25%, rgba(0,0,0,0.1) 100%)'
        );
    // canvasDots();

    setTimeout(() => {
      setGlassStyle(
        'bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40'
      );
    }, 800);
    return () => {
      // canvasDots;
    };
  }, []);

  const scrollToAbout = () => {
    window.location.href = '#about';
  };

  const handleEnter = () => {
    // window.history.replaceState(null, '', `/`);
  };

  const handleLeave = () => {
    // window.history.replaceState(`#${id}`, '', null);
  };

  return (
    <motion.div
      initial={{
        background:
          'linear-gradient(352deg, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
      }}
      animate={{
        background: `${gradient}`,
      }}
      transition={{ duration: 4 }}
    >
      <div
        id={id}
        className={`min-h-screen relative flex justify-center items-center`}
      >
        <motion.div
          initial={{ opacity: 0, y: 'calc(-100vw + 50%)' }}
          animate={{ opacity: 1, y: '0' }}
          transition={{ duration: 1.2 }}
        >
          {/* <canvas className='connecting-dots' /> */}
          {/* <Tooltip label='Click to read about me!' color='blue'> */}
          <div
            className='mainCard transform cursor-pointer select-none'
            onClick={scrollToAbout}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
              <motion.div
                initial={{ scale: 1.0 }}
                animate={{ scale: 0.95 }}
                transition={{
                  delay: 4.5,
                  duration: 0.25,
                  repeat: 1,
                  repeatType: 'reverse',
                }}
              >
                <div
                  className={`bg-gray-800 rounded-md ${glassStyle} transition-colors duration-1000 flex flex-col justify-center items-center p-5 max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  <div className='text-center'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-wide text-slate-300 font-bold font-montserrat'>
                      Lance Ziegler
                    </h1>
                  </div>
                  <div className='text-center'>
                    <p className='text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-slate-400 font-montserrat tracking-tighter'>
                      software developer
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.3, duration: 1 }}
                className={`flex items-center content-center justify-center ${display}`}
              >
                <h4 className='text-gray-300'>Tap to read about me!</h4>
              </motion.div>
            </motion.div>
          </div>
          {/* </Tooltip> */}
        </motion.div>
      </div>
      <video
        width='100%'
        height='100vh'
        autoPlay
        muted
        loop
        preload='auto'
        className='background-video'
        playsInline
      >
        <source src='beach3.mp4' type='video/mp4' />
      </video>
    </motion.div>
  );
};

export default Top;
