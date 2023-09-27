'use client';
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Tooltip,
} from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type ProjectTypes = {
  title: string;
  description: string;
  image: string;
  link: string;
  duration: number;
  techList: string[];
  isNotMobile: any;
};

const Project = ({
  title,
  description,
  image,
  link,
  duration,
  techList,
  isNotMobile,
}: ProjectTypes) => {
  const [opacity, setOpacity] = useState<string>('-translate-x-full'); //! opacity-100

  const handleEnter = () => {
    // This function will be called when the waypoint enters the viewport
    setOpacity(`translate-x-0 transition-all duration-500`);
    console.log('Project Waypoint Reached');
  };

  const handleLeave = () => {
    // This function will be called when the waypoint enters the viewport
    setOpacity(`-translate-x-full transition-all duration-500`);
    console.log('Leaving Project Waypoint');
  };

  return (
    <>
      {isNotMobile ? (
        <Card
          shadow='sm'
          radius='md'
          className={`bg-[#24262b] relative border-solid border border-gray-600`}
        >
          <Card.Section className='p-2 bg-gray-600 lg:max-w-fit'>
            <Image
              src={image}
              alt={`${title}`}
              className='border-solid border border-gray-400 rounded-xl overflow-hidden drop-shadow-2xl'
            />
          </Card.Section>

          <Group position='apart' mt='md' mb='xs'>
            <Text
              weight={800}
              className='font-montserrat tracking-wider text-gray-200 text-2xl select-none'
            >
              {title}
            </Text>
            {/** CREATE IN-PROGRESS STATE */}
            <Group
              position='right'
              spacing={0}
              className='bg-white bg-opacity-20 rounded-full flex'
            >
              {techList.map((tech) => (
                <Tooltip label={`${tech}`} key={tech}>
                  <Image
                    src={`${tech}.svg`}
                    width={19}
                    height={19}
                    className='m-1 select-none'
                    alt={`${tech}`}
                  ></Image>
                </Tooltip>
              ))}
            </Group>
          </Group>

          <Text
            size='md'
            className='mb-12 font-inter tracking-wide text-gray-400'
          >
            {description}
          </Text>

          <Link
            href={link}
            target='_blank'
            className='bg-green-700 text-white p-1.5 rounded-md absolute bottom-1 right-1 shadow-2xl shadow-white lg:hover:scale-105 transition-transform'
          >
            Check it out
          </Link>
        </Card>
      ) : (
        <Card
          shadow='sm'
          padding='sm'
          radius='md'
          className={`mt-20 bg-[#24262b] relative border-solid border border-gray-600 ${opacity}`}
        >
          <Card.Section className='p-2 bg-gray-600'>
            <Image
              src={image}
              alt={`${title}`}
              className='border-solid border border-gray-400 rounded-xl overflow-hidden drop-shadow-2xl object-cover'
            />
          </Card.Section>
          <Waypoint onEnter={handleEnter} onLeave={handleLeave} />

          <Group position='apart' mt='md' mb='xs'>
            <Text
              weight={800}
              className='font-montserrat tracking-wider text-gray-200 text-2xl select-none'
            >
              {title}
            </Text>
            {/** CREATE IN-PROGRESS STATE */}
            <Group
              position='right'
              spacing={0}
              className='bg-white bg-opacity-20 rounded-full flex'
            >
              {techList.map((tech) => (
                <Tooltip label={`${tech}`} key={tech}>
                  <Image
                    src={`${tech}.svg`}
                    width={19}
                    height={19}
                    className='m-1 select-none'
                    alt={`${tech}`}
                    draggable='false'
                  ></Image>
                </Tooltip>
              ))}
            </Group>
          </Group>

          <Text
            size='md'
            className='mb-12 font-inter tracking-wide text-gray-400'
          >
            {description}
          </Text>

          <Link
            href={link}
            target='_blank'
            className='bg-green-700 text-white p-1.5 rounded-md absolute bottom-1 right-1 shadow-2xl shadow-white lg:hover:scale-105 transition-transform'
          >
            Check it out
          </Link>
        </Card>
      )}
    </>
  );
};

export default Project;
