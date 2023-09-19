'use client';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import { useState } from 'react';
import Link from 'next/link';

type ProjectTypes = {
  title: string;
  description: string;
  image: string;
  link: string;
  duration: number;
};

const Project = ({
  title,
  description,
  image,
  link,
  duration,
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
      <Waypoint onEnter={handleEnter} onLeave={handleLeave}>
        <Card
          shadow='sm'
          padding='lg'
          radius='md'
          withBorder
          className={`mt-20 ${opacity}`}
        >
          <Card.Section>
            <Image
              src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
              height={500}
              alt='Norway'
            />
          </Card.Section>

          <Group position='apart' mt='md' mb='xs'>
            <Text size='xl' weight={700}>
              {title}
            </Text>
            {/** CREATE IN-PROGRESS STATE */}
            <Badge color='pink' variant='light'>
              In progress
            </Badge>
          </Group>

          <Text size='sm' color='dimmed'>
            {description}
          </Text>

          <Link
            href={link}
            target='_blank'
            className='bg-red-700 text-white p-4 rounded-md'
          >
            Check it out
          </Link>
        </Card>
      </Waypoint>
    </>
  );
};

export default Project;
