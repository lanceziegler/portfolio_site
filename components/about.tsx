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

  const handleEnter = () => {
    // This function will be called when the waypoint enters the viewport
    setTimeout(() => {
      setContent('Content to be shown when the waypoint is reached');
      setSectionVisible(true);
    }, 500);
  };

  const handleLeave = () => {
    // This function will be called when the waypoint enters the viewport
    setContent('');
    // setSectionVisible(false);
  };

  return (
    <div id={id} className='min-h-screen tracking-wide bg-white'>
      <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
      {/* {content && <div className=''>{content}</div>} */}

      {sectionVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex items-center justify-center'>
            <LogoCycle />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
