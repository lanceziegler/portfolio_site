'use client';

import { Waypoint } from 'react-waypoint';
import { useState, useEffect } from 'react';
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

const initValues = {
  email: '',
  name: '',
  message: '',
};

const initState = { values: initValues, isLoading: false };

const Contact = ({ id }: { id: string }) => {
  const [scrollTop, setScrollTop] = useState(true);
  const [atBottom, setAtBottom] = useState('hidden');
  const [visible, setVisible] = useState('hidden');

  const [state, setState] = useState(initState);

  const { values, isLoading } = state;

  const { classes } = useStyles();

  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  useEffect(() => {
    // This effect will run when the component mounts
    if (window.location.hash === `#${id}`) {
      // If the current URL fragment matches this section's ID, no need to update it
      return;
    }
  }, [id]);

  const handleEnter = () => {
    // This function will be called when the waypoint enters the viewport
    setTimeout(() => {
      setAtBottom('opacity-100');
    }, 200);
    if (window.location.hash !== `#${id}`) {
      // window.history.replaceState(null, '', `#${id}`);
    }
    console.log(window.innerHeight);
  };

  const handleLeave = () => {
    // This function will be called when the waypoint enters the viewport
    setAtBottom('opacity-0');
    if (window.location.hash === `#${id}`) {
      // window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const handleClick = () => {
    // Code for scrolling back to top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
  };

  const handleSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // Handle success, e.g., show a success message
      } else {
        console.error('Error sending email');
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error(error);
      // Handle network error, e.g., show a generic error message
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <div
      id={id}
      className={`flex justify-center items-center min-h-screen tracking-wide bg-gradient-to-t from-blue-500 via-black via-95% to-black relative to-30%`}
    >
      {/* <canvas className='connecting-dots' /> */}
      <div
        className={`${classes.wrapper} ${atBottom} transition-opacity duration-1000 mx-6`}
      >
        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        >
          <div>
            <Title className={classes.title}>Let{"'"}s get in touch</Title>
            <Waypoint onEnter={handleEnter} onLeave={handleLeave} />

            <Text className={classes.description} mt='sm' mb={30}>
              Enter your name and email address and I will get back to you as
              soon as possible.
            </Text>
          </div>
          <div className={classes.form}>
            <TextInput
              required
              value={values.email}
              onChange={handleChange}
              type='email'
              label='Email'
              name='email'
              placeholder='name@email.com'
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              required
              value={values.name}
              onChange={handleChange}
              type='text'
              label='Name'
              name='name'
              mt='md'
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              name='message'
              value={values.message}
              onChange={handleChange}
              label='Leave me a message!'
              placeholder='Lance, you seem like an awesome person.'
              minRows={4}
              mt='md'
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group position='right' mt='md'>
              <Button
                className={`${classes.control} bg-blue-400 submitBtn`}
                disabled={!values.name || !values.email || !values.message}
                onClick={handleSubmit}
                loading={isLoading}
              >
                Send message
              </Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
      <UnstyledButton
        onClick={handleClick}
        className={`${atBottom} transition-all duration-1000 absolute md:bottom-2 bottom-0 scale-50 sm:scale-100 xl:right-32 bg-white hover:shadow-2xl hover:scale-105 rounded-xl hideShowDiv`}
      >
        <Group>
          <Avatar size={70} color='black' src={'./arrow.svg'} />
          <div>
            <Text color='black' weight={500} size={20} className='pr-6'>
              Back to top
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </div>
  );
};

export default Contact;
