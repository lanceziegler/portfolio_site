import { Waypoint } from 'react-waypoint';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Text, Avatar, Title } from '@mantine/core';
import LogoCycle from './logoCycle';
import Image from 'next/image';

const About = ({ id }: { id: string }) => {
  const [content, setContent] = useState<string | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [tech, setTech] = useState('');

  const handleEnter = () => {
    setSectionVisible(true);
    setTech('');
    console.log('About Waypoint Reached');
  };

  const handleLeave = () => {
    console.log('Leaving About Waypoint');
  };

  return (
    <div id={id} className='min-h-screen tracking-wide diagonal'>
      <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
      <div className='flex flex-wrap'>
        {/* Left Column */}
        <div className='w-full lg:w-1/2 p-4 flex items-center'>
          <Card
            shadow='lg'
            padding='lg'
            component='a'
            radius={30}
            className='flex content-center items-center relative p-5 flex-col lg:flex-row'
          >
            <div className='flex items-center justify-center flex-col lg:flex-row'>
              <div className='z-10'>
                <Title className='z-10 text-white text-7xl font-caveat'>
                  Lance
                </Title>
                <Image
                  src='./arrowRight.svg'
                  alt='arrow to right'
                  className='arrow-svg'
                  width={20}
                  height={20}
                ></Image>
              </div>
              <Card.Section>
                <Avatar
                  size={300}
                  src='/me.png'
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
