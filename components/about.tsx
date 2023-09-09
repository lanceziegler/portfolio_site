'use client';

import { Waypoint } from 'react-waypoint';
import { useState } from 'react';
import { motion } from 'framer-motion';

const technologies: string[] = [
  'Typescript',
  'PostgreSQL',
  'React',
  'Next',
  'Node',
  'MongoDB',
  'Tailwind',
  'Webpack',
  'Bootstrap',
  'Jest',
];

const TechCards = ({ name }: { name: string }) => {
  return <></>;
};

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
    setSectionVisible(false);
  };

  return (
    <div
      id={id}
      className='flex justify-center items-center h-screen tracking-wide bg-blue-200'
    >
      <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
      {/* {content && <div className=''>{content}</div>} */}
      {sectionVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.div>
      )}
    </div>
  );
};

export default About;
