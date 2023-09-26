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
import { useState } from 'react';
import Link from 'next/link';

type ProjectTypes = {
  title: string;
  description: string;
  image: string;
  link: string;
  duration: number;
  techList: string[];
};

const Project = ({
  title,
  description,
  image,
  link,
  duration,
  techList,
}: ProjectTypes) => {
  const [opacity, setOpacity] = useState<string>('opacity-0 -translate-x-full'); //! opacity-100

  const handleEnter = () => {
    // This function will be called when the waypoint enters the viewport
    setOpacity(`translate-x-0 opacity-100 transition-all duration-${duration}`);
    console.log('Projects Waypoint Reached');
  };

  const handleLeave = () => {
    // This function will be called when the waypoint enters the viewport
    setOpacity(
      `opacity-0 transition-opacity translate-x-full duration-${duration}`
    );
    console.log('Leaving Projects Waypoint');
  };

  return (
    <>
      <Card
        shadow='sm'
        padding='sm'
        radius='md'
        withBorder
        className={`mt-20 bg-[#24262b] relative`}
      >
        <Card.Section>
          <Image
            src={'firewatch2.png'} //! CHANGE TO ACTUAL
            alt={`${title}`}
            className='h-70 sm:h-100'
          />
        </Card.Section>

        <Group position='apart' mt='md' mb='xs'>
          <Text size='xl' weight={700}>
            {title}
          </Text>
          {/** CREATE IN-PROGRESS STATE */}
          <Group
            position='right'
            spacing={0}
            className='bg-black bg-opacity-25 rounded-full flex'
          >
            {techList.map((tech) => (
              <Tooltip label={`${tech}`} key={tech}>
                <Image
                  src={`${tech}.svg`}
                  width={19}
                  height={19}
                  className='m-1 select-none hover:cursor-pointer'
                  alt={`${tech}`}
                  draggable='false'
                ></Image>
              </Tooltip>
            ))}
          </Group>
        </Group>

        <Text size='sm' color='dimmed' className='mb-12'>
          {description}
        </Text>

        <Link
          href={link}
          target='_blank'
          className='bg-green-700 text-white p-1.5 rounded-md absolute bottom-1 right-1 shadow-2xl shadow-white'
        >
          Check it out
        </Link>
       
      </Card>
    </>
  );
};

export default Project;
