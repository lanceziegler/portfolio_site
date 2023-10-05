'use client';

import { Waypoint } from 'react-waypoint';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Text, Avatar, Title } from '@mantine/core';
import LogoCycle from './logoCycle';
import Image from 'next/image';

const About = ({ id }: { id: string }) => {
  const [content, setContent] = useState<string | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [tech, setTech] = useState<string | undefined>(undefined);
  const [carousel, setCarousel] = useState(true);

  const handleEnter = () => {
    setSectionVisible(true);
    // window.history.replaceState(null, '', `#${id}`);
    // console.log('About Waypoint Reached');
  };

  const handleLeave = () => {
    // console.log('Leaving About Waypoint');
    // window.history.replaceState(`#${id}`, '', null);
  };

  // useEffect(() => {
  //   console.log('Current tech is ' + tech);
  // }, [tech]);

  const onDragStart = (e: any) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   setTimeout(() => {}, 1000);
  //   return () => {
  //     setCarousel(true);
  //   };
  // }, []);

  return (
    <div
      id={id}
      className='min-h-screen tracking-wide diagonal bg-black flex justify-center content-center items-center z-10'
    >
      <div className='flex flex-col lg:flex-row lg:mt-10 z-30'>
        {/* Left Column */}
        <div className='px-4 flex items-center lg:flex-1 xl:m-10'>
          <Card
            className='flex content-center items-center relative p-2 flex-col bg-[#24262b] bg-opacity-75 drop-shadow-2xl rounded-3xl cardStyle pt-7'
            // onDragStart={onDragStart}
          >
            {/* NAME, ARROW, PICTURE */}
            <div className='relative'>
              {/* NAME, ARROW */}
              <div className='flex flex-col z-10 absolute -left-10 sm:-left-32 top-1/4'>
                <Title className='text-white text-4xl sm:text-7xl font-caveat select-none ml-3 sm:ml-0'>
                  Lance
                </Title>
                <Image
                  src='./arrowRight.svg'
                  alt='arrow to right'
                  className='arrow-svg -skew-y-12 select-none w-10 sm:w-28 ml-4 sm:ml-4'
                  width={130}
                  height={130}
                  priority
                ></Image>
              </div>
              {/* PICTURE */}
              <Card.Section>
                <Avatar
                  size={300}
                  src='./me.png'
                  className='bg-gradient-to-b from-gray-800 to-gray-600 rounded-full border-solid border-8 border-red-700'
                  draggable='false'
                />
              </Card.Section>
            </div>
            <div className='flex flex-col content-center justify-center items-center py-9 px-4'>
              <Text className='text-white text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-inter text-center select-none tracking-tighter 2xl:text-4xl 2xl:px-5'>
                Delivering quality technology solutions
              </Text>
              <Text className='text-gray-300 text-sm sm:text-lg text-center mt-6 font-inter mb-16 lg:mb-5 md:px-10'>
                I&apos;m a full-stack developer who strives to seamlessly
                integrate essential application functionality with modern web
                design practices. When I&apos;m not coding, I enjoy playing
                Smash Ultimate, lifting weights, and messing around on the
                guitar
              </Text>
              <div className='mt-6 absolute bottom-9'>
                <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
                <div className='lg:hidden'>
                  <Text className='text-red-400 text-center font-inter'>
                    Ask me about:
                  </Text>
                  <div className='animate-pulse'>
                    <h1 className='text-white text-center font-inter colorCycle font-bold text-4xl'>
                      {tech}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        {/* Right Column */}
        <div className='lg:flex-1 lg:static smallCyclePosition md:scale-95'>
          <div className='flex items-center justify-center'>
            {carousel ? <LogoCycle setTech={setTech} /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
