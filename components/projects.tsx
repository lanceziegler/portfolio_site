'use client';

import { Waypoint } from 'react-waypoint';
import { useEffect, useState } from 'react';
import Project from './project';
import { Title } from '@mantine/core';
import canvasDots from '../public/heroCanvas';

const Projects = ({ id }: { id: string }) => {
  const [content, setContent] = useState<string | null>(null);
  const [opacity, setOpacity] = useState<string>('opacity-0 -translate-x-full'); //! opacity-100

  // const handleEnter = () => {
  //   // This function will be called when the waypoint enters the viewport
  //   setOpacity(' translate-x-0 opacity-100 transition-all duration-500');
  //   console.log('Projects Waypoint Reached');
  // };

  // const handleLeave = () => {
  //   // This function will be called when the waypoint enters the viewport
  //   // setOpacity(`opacity-0 transition-opacity duration-100`);
  //   console.log('Leaving Projects Waypoint');
  // };

  const handleEnter = () => {
    window.history.replaceState(null, '', `#${id}`);
    setOpacity('opacity-100 transition-all duration-500');
  };

  const handleLeave = () => {
    window.history.replaceState(`#${id}`, '', null);
    // setOpacity(`opacity-0 transition-all -translate-x-full duration-900`);
  };

  useEffect(() => {
    // canvasDots(); // Initialize your canvas animation
    return () => {
      // Optionally, you can remove the canvas animation when the component unmounts
      // canvasDots.destroy();
    };
  }, []);

  return (
    <div className='min-h-screen bg-black relative -z-30 flex items-center content-center justify-center'>
      <div
        id={id}
        className={`lg:space-x-5 mx-3 sm:mx-10 lg:mx-3 flex flex-col lg:flex-row ${opacity} justify-center content-center items-center projects-section`}
      >
        <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
        <div>
          <Project
            title='Reactime'
            description='Open source chrome developer tool for debugging and performance monitoring in React applications'
            link='https://www.reacti.me/'
            image=''
            duration={500}
            techList={['react', 'next', 'gatsby', 'd3', 'jest', 'webpack']}
          />
        </div>
        <div>
          <Project
            title='Nutrition Website'
            description='Website mockup for a burgeoning nutrition business created for a prospective business owner'
            link='#projects'
            image=''
            duration={700}
            techList={['next', 'typescript', 'node', 'postgres', 'tailwind']}
          />
        </div>{' '}
        {/**Test */}
        <div className=''>
          <Project
            title='MovieKeeper'
            description='Worked with a small team to build a web application for creating your personal movie list.'
            link='#projects'
            image=''
            duration={900}
            techList={['react', 'mongo', 'webpack']}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
