'use client';

import { Waypoint } from 'react-waypoint';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import akamaiLoader from '../imageLoader/loader';
// import Flubber from './flubber';
import LogoCycle from './logoCycle';

const technologies: string[] = [
  './typescript.svg',
  './postgres.svg',
  './react.svg',
  './next.svg',
  './node.svg',
  './mongo.svg',
  './tailwind.svg',
  './webpack.svg',
  './bootstrap.svg',
  './jest.svg',
];

const About = ({ id }: { id: string }) => {
  const [content, setContent] = useState<string | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [tech, setTech] = useState('');

  const handleEnter = () => {
    // This function will be called when the waypoint enters the viewport
    setSectionVisible(true);

    console.log('About Waypoint Reached');
  };

  const handleLeave = () => {
    // setSectionVisible(false);
    console.log('Leaving About Waypoint');
  };

  return (
    <>
      <div id={id} className='h-screen tracking-wide bg-blue-200'>
        <div>
          {/* {sectionVisible && ( */}
          <>
            {/* <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='flex'
              > */}
            <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
            <div className='flex'>
              <div className='w-1/2 p-4 flex items-center justify-center'>
                {/* Content for the left column */}
                <h1 className='text-2xl font-montserrat bold'>{tech}</h1>
              </div>

              <div className='w-1/2 p-4'>
                {/* Content for the right column */}
                <div className='flex items-center justify-center'>
                  <LogoCycle setTech={setTech} />
                </div>
              </div>
            </div>

            {/* </motion.div> */}
          </>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default About;
