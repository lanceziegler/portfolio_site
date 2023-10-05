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
import { useForm, ValidationError } from '@formspree/react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    // backgroundImage: `linear-gradient(50deg, ${
    //   theme.colors[theme.primaryColor][0]
    // } 1%,${theme.colors[theme.primaryColor][2]} 3%, ${theme.colors.dark} 40%)`,
    // // borderRadius: theme.radius.xl,
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
    backgroundColor: theme.white,
    padding: 2,
    paddingLeft: 15,
    paddingRight: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 3,
    marginBottom: 2,
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

const successKey = 'showSuccess';
const successDuration = 5 * 60 * 1000; // 5 minutes

const Contact = ({ id }: { id: string }) => {
  const [scrollTop, setScrollTop] = useState(true);
  const [atBottom, setAtBottom] = useState('hidden');
  const [visible, setVisible] = useState('hidden');
  const [stateFormSpree, handleSubmit] = useForm('xdorpavq');
  const [state, setState] = useState(initState);
  const { values, isLoading } = state;
  const { classes } = useStyles();
  const [showSuccessMessage, setShowSuccessMessage] = useState<
    undefined | boolean
  >(undefined);

  useEffect(() => {
    const lastSubmissionTime = localStorage.getItem('lastSubmissionTime');
    const isFirstVisit = localStorage.getItem('isFirstVisit');
    if (isFirstVisit === null) {
      // If it's the user's first visit, show the form
      localStorage.setItem('isFirstVisit', 'false');
      setShowSuccessMessage(false);
    } else if (
      lastSubmissionTime &&
      Date.now() - parseInt(lastSubmissionTime, 10) <= successDuration
    ) {
      // If it's not the first visit and less than 5 minutes have passed since the last submission, show the success message
      setShowSuccessMessage(true);
    } else {
      // If it's not the first visit and more than 5 minutes have passed since the last submission, show the form
      setShowSuccessMessage(false);
    }
  }, []);

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
    // if (window.location.hash === `#${id}`) {
    //   // window.history.replaceState(null, '', window.location.pathname);
    // }
  };

  const handleClick = () => {
    // Code for scrolling back to top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleTimeout = () => {
    localStorage.setItem(successKey, 'true');
    localStorage.setItem('lastSubmissionTime', Date.now().toString());
    setShowSuccessMessage(true);
  };

  //! nodemailer does not work with static site
  // const onSubmit = async () => {
  //   setState((prev) => ({
  //     ...prev,
  //     isLoading: true,
  //   }));
  // };

  // const handleSubmit = async () => {
  //   setState((prev) => ({
  //     ...prev,
  //     isLoading: true,
  //   }));

  //   try {
  //     const response = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       // cache: 'force-cache',
  //       body: JSON.stringify(values),
  //     });

  //     if (response.ok) {
  //       console.log('Email sent successfully');
  //       // Handle success, e.g., show a success message
  //     } else {
  //       console.error('Error sending email');
  //       // Handle error, e.g., show an error message
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     // Handle network error, e.g., show a generic error message
  //   } finally {
  //     setState((prev) => ({
  //       ...prev,
  //       isLoading: false,
  //     }));
  //   }
  // };

  return (
    <div
      id={id}
      className={`flex justify-center items-center min-h-screen tracking-wide bg-gradient-to-t from-sky-900 via-black via-95% to-black relative to-30%`}
    >
      {/* <canvas className='connecting-dots' /> */}
      <div
        className={`${classes.wrapper} ${atBottom} transition-opacity duration-1000 mx-6 relative rounded-3xl drop-shadow-glow border-solid border-4 bg-black`}
      >
        <video
          width='100%'
          height='100%'
          autoPlay
          muted
          loop
          preload='auto'
          className='background-video absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full opacity-40 rounded-3xl'
          playsInline
        >
          <source src='beach3.mp4' type='video/mp4' />
        </video>
        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
          className='relative'
        >
          <div>
            <div>
              <Title className={classes.title}>Let{"'"}s get in touch</Title>
              <Waypoint onEnter={handleEnter} onLeave={handleLeave} />

              <Text
                className={`${classes.description} text-white text-lg tracking-tight`}
                mt='sm'
              >
                Enter your name and email address and I will get back to you as
                soon as possible.
              </Text>
            </div>
          </div>

          {showSuccessMessage ? (
            <div className='flex flex-col justify-center items-center content-center bg-black bg-opacity-50 rounded-xl p-5'>
              <p className='text-white font-inter pb-3 text-xl font-semibold'>
                Thanks for reaching out!
              </p>
              <svg
                className='checkmark mt-3'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 52 52'
              >
                <circle
                  className='checkmark__circle'
                  cx='26'
                  cy='26'
                  r='25'
                  fill='none'
                />
                <path
                  className='checkmark__check'
                  fill='none'
                  d='M14.1 27.2l7.1 7.2 16.7-16.8'
                />
              </svg>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleTimeout();
                handleSubmit(e);
              }}
            >
              <div className={`classes.form`}>
                <TextInput
                  required
                  value={values.email}
                  onChange={handleChange}
                  type='email'
                  label='Email'
                  name='email'
                  placeholder='name@email.com'
                  classNames={{
                    input: classes.input,
                    label: classes.inputLabel,
                  }}
                />
                <div>
                  <span className='bg-white rounded-t-lg'>
                    <TextInput
                      required
                      value={values.name}
                      onChange={handleChange}
                      type='text'
                      label='Name'
                      name='name'
                      mt='md'
                      classNames={{
                        input: classes.input,
                        label: classes.inputLabel,
                      }}
                    />
                  </span>
                </div>
                <Textarea
                  required
                  name='message'
                  value={values.message}
                  onChange={handleChange}
                  label='Leave me a message!'
                  placeholder='Lance, you seem like an awesome person.'
                  minRows={4}
                  mt='md'
                  classNames={{
                    input: classes.input,
                    label: classes.inputLabel,
                  }}
                />

                <Group position='right' mt='md'>
                  <Button
                    className={`${classes.control} bg-blue-600 submitBtn`}
                    disabled={!values.name || !values.email || !values.message}
                    // onClick={handleSubmit}
                    loading={isLoading}
                    type='submit'
                  >
                    Send message
                  </Button>
                </Group>
              </div>
            </form>
          )}
        </SimpleGrid>
      </div>

      <UnstyledButton
        onClick={handleClick}
        className={`${atBottom} transition-all duration-1000 absolute md:bottom-10 bottom-0 scale-50 sm:scale-75 xl:right-32 rounded-xl hideShowDiv`}
      >
        <Group className='flex flex-col items-center content-center justify-center'>
          <Avatar
            size={60}
            src={'./arrow.svg'}
            className='bg-white rounded-full hover:scale-125 transition-all'
          />
          <div>
            <Text color='white' weight={500} size={30}>
              Back to top
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </div>
  );
};

export default Contact;
