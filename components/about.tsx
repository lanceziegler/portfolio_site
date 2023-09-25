'use client';

import { Waypoint } from 'react-waypoint';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Text, Avatar, Title } from '@mantine/core';
import LogoCycle from './logoCycle';
import Image from 'next/image';

//! Double check images on launched version

const About = ({ id }: { id: string }) => {
  const [content, setContent] = useState<string | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [tech, setTech] = useState('');

  const handleEnter = () => {
    setSectionVisible(true);
    setTech('');
    window.history.replaceState(null, '', `#${id}`);
    console.log('About Waypoint Reached');
  };

  const handleLeave = () => {
    console.log('Leaving About Waypoint');
    window.history.replaceState(`#${id}`, '', null);
  };

  useEffect(() => {
    console.log('Current tech is ' + tech);
  }, [tech]);

  return (
    <div id={id} className='min-h-screen tracking-wide diagonal bg-black'>
      <div className='flex flex-wrap content-center justify-center items-center'>
        {/* Left Column */}
        <div className='w-full lg:w-1/2 p-4 flex items-center'>
          <Card
            shadow='lg'
            padding='lg'
            component='a'
            radius={30}
            className='flex content-center items-center relative p-5 flex-col bg-[#24262b]'
          >
            {/* NAME, ARROW, PICTURE */}
            <div className='relative'>
              {/* NAME, ARROW */}
              <div className='flex flex-col z-10 absolute right-64 top-1/4'>
                <Title className='z-10 text-white text-4xl sm:text-7xl font-caveat'>
                  Lance
                </Title>
                <Image
                  src='./arrowRight.svg'
                  alt='arrow to right'
                  className='arrow-svg -skew-y-12'
                  width={130}
                  height={130}
                  priority
                ></Image>
              </div>
              {/* PICTURE */}
              <Card.Section className=''>
                <Avatar
                  size={300}
                  src='./me.png'
                  className='bg-slate-800 rounded-full border-solid border-8 border-red-700'
                />
              </Card.Section>
            </div>
            <div className='flex flex-col content-start p-9'>
              <Text weight={500} size='xl'>
                Driven to deliver high-quality technology solutions for your
                business.
              </Text>
              <Text mt='xs' color='dimmed' size='sm'>
                I&apos;m a full-stack developer who loves JavaScript, React, and
                web development. The mix of creativity, logic, and endless
                opportunities in this field excites me. When I&apos;m not
                coding, I enjoy playing Smash Ultimate, lifting weights, and
                messing around on the guitar.
              </Text>
              <div className='relative'>
                <Waypoint onEnter={handleEnter} onLeave={handleLeave} />

                <Text className='' color='red.4'>
                  Ask me about:
                </Text>
                <Title className='absolute'>{tech}</Title>
              </div>
            </div>
          </Card>
        </div>
        {/* Right Column */}
        <div className='w-full lg:w-1/2 p-4'>
          <div className='flex items-center justify-center'>
            <LogoCycle setTech={setTech} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
