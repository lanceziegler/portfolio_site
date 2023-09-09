'use client';

import { Waypoint } from 'react-waypoint';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import akamaiLoader from '../imageLoader/loader';

const technologies: string[] = [
  '/typescript.svg',
  '/postgres.svg',
  '/react.svg',
  '/next.svg',
  '/node.svg',
  '/mongo.svg',
  '/tailwind.svg',
  '/webpack.svg',
  '/bootstrap.svg',
  '/jest.svg',
];

const TechCard = ({ logo }: { logo: string }) => {
  return (
    <div className='bg-white p-5 rounded-full'>
      <img
        // loader={akamaiLoader}
        width={50}
        height={50}
        alt={logo}
        src={logo}
      />
    </div>
  );
};
//TODO: Add tooltip to each TechCard
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
    <div
      id={id}
      className='flex justify-center items-center min-h-screen tracking-wide bg-blue-200'
    >
      <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
      {/* {content && <div className=''>{content}</div>} */}

      {sectionVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {technologies.map((tech, i) => (
            <TechCard key={i} logo={tech} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default About;
