'use client';

import { Waypoint } from 'react-waypoint';
import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image';
// import akamaiLoader from '../imageLoader/loader';
// import Flubber from './flubber';
import LogoCycle from './logoCycle';
import { Card, Image, Text, Avatar, Title } from '@mantine/core';

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
    setTech('');
    console.log('About Waypoint Reached');
  };

  const handleLeave = () => {
    // setSectionVisible(false);
    console.log('Leaving About Waypoint');
  };

  return (
    <>
      <div id={id} className='min-h-screen tracking-wide diagonal'>
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
              <div className='w-1/2 ml-24 flex items-center justify-center relative'>
                {/* Content for the left column */}

                <Card
                  shadow='sm'
                  padding='xl'
                  component='a'
                  className='flex content-center items-center relative'
                >
                  <Title className='z-10'>(Me) -{'>'}</Title>
                  <Card.Section>
                    <Avatar size={400} />
                  </Card.Section>
                  <div className='flex flex-col content-start p-9'>
                    <Text weight={500} size='xl'>
                      Driven to deliver high quality technology solutions for
                      your business.
                    </Text>

                    <Text mt='xs' color='dimmed' size='sm'>
                      I{"'"}m a full-stack developer who loves JavaScript,
                      React, and web development. The mix of creativity, logic,
                      and endless opportunities in this field excites me. When I
                      {"'"}m not coding, I enjoy playing Smash Ultimate, lifting
                      weights, and playing the guitar.
                    </Text>
                    <Text className='absolute top-3/4' color='red.4'>
                      Ask me about:
                    </Text>
                    <Title className='absolute top-3/4 right-20'>{tech}</Title>
                  </div>
                </Card>
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
