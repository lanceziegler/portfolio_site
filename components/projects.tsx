'use client';

import { Waypoint } from 'react-waypoint';
import { useEffect, useState } from 'react';
import Project from './project';
import { Title } from '@mantine/core';

const Projects = ({ id }: { id: string }) => {
  const [content, setContent] = useState<string | null>(null);
  // const [opacity, setOpacity] = useState<string>('opacity-0 -translate-x-full'); //! opacity-100

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
  return (
    <>
      <div id={id} className={`min-h-screen space-x-10 mx-10 my-5 flex`}>
        {/* <Waypoint onEnter={handleEnter} onLeave={handleLeave} /> */}
        <div className=''>
          <Project
            title='Reactime'
            description='Open source chrome developer tool for debugging and performance monitoring in React applications'
            link='https://www.reacti.me/'
            image=''
            duration={500}
          />
        </div>
        <div className=''>
          <Project
            title='Nutrition Website'
            description='Website mockup for a burgeoning nutrition business created for a prospective business owner'
            link='#projects'
            image=''
            duration={700}
          />
        </div>
        <div className=''>
          <Project
            title='LiftLog'
            description='Worked with a small team to build a web application for planning workouts and tracking progress.'
            link='#projects'
            image=''
            duration={900}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
