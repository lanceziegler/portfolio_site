'use client';

import { Waypoint } from 'react-waypoint';
import { useState } from 'react';
import { UnstyledButton, Group, Avatar, Text } from '@mantine/core';
import {
  createStyles,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  ActionIcon,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-90deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][6]} 50%)`,
    borderRadius: theme.radius.xl,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const Contact = ({ id }: { id: string }) => {
  const [scrollTop, setScrollTop] = useState(true);
  const [atBottom, setAtBottom] = useState('hidden');

  const { classes } = useStyles();

  const handleEnter = () => {
    // This function will be called when the waypoint enters the viewport
    setTimeout(() => {
      setAtBottom('opacity-100');
    }, 200);
    console.log(window.innerHeight);
  };

  const handleLeave = () => {
    // This function will be called when the waypoint enters the viewport

    setAtBottom('opacity-0');
  };

  const handleClick = () => {
    // Code for scrolling back to top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <Waypoint onEnter={handleEnter} onLeave={handleLeave} />

      <div
        id={id}
        className={`flex justify-center items-center min-h-screen tracking-wide bg-gradient-to-t from-blue-500 to-dark.6 relative`}
      >
        <div
          className={`${classes.wrapper} ${atBottom} transition-opacity duration-1000 `}
        >
          <SimpleGrid
            cols={2}
            spacing={50}
            breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
          >
            <div>
              <Title className={classes.title}>Let{"'"}s get in touch</Title>
              <Text className={classes.description} mt='sm' mb={30}>
                Enter your name and email address and I will get back to you as
                soon as possible.
              </Text>
            </div>
            <div className={classes.form}>
              <TextInput
                label='Email'
                placeholder='helloworld@email.com'
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <TextInput
                label='Name'
                placeholder='Java Scriptington'
                mt='md'
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <Textarea
                required
                label='Leave me a message!'
                placeholder='Lance, you seem like an awesome person.'
                minRows={4}
                mt='md'
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />

              <Group position='right' mt='md'>
                <Button className={classes.control}>Send message</Button>
              </Group>
            </div>
          </SimpleGrid>
        </div>
        <UnstyledButton
          onClick={handleClick}
          className={`${atBottom} transition-opacity duration-1000 absolute bottom-32 right-32`}
        >
          <Group>
            <Avatar size={70} color='dark.4'>
              <img
                className='relative'
                src='./arrow.svg'
                alt='Back to top'
                height={70}
                width={70}
              />
            </Avatar>
            <div>
              <Text color='black' weight={700} size={20}>
                Back to top
              </Text>
            </div>
          </Group>
        </UnstyledButton>
      </div>
    </>
  );
};

export default Contact;
