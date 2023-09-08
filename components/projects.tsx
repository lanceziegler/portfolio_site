'use client';

import { Waypoint } from 'react-waypoint';
import { useState } from 'react';
import Project from './project';

const Projects = ({ id }: { id: string }) => {
  const [content, setContent] = useState<string | null>(null);

  const handleEnter = () => {
    // This function will be called when the waypoint enters the viewport
    setTimeout(() => {
      setContent('Content to be shown when the waypoint is reached');
    }, 1000);
  };

  const handleLeave = () => {
    // This function will be called when the waypoint enters the viewport
    setContent('');
  };
  return (
    <>
      <div id={id} className=' min-h-screen tracking-wide bg-green-200'>
        <div>
          <div>Projects</div>
          <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
          {content && <div className=''>{content}</div>}
        </div>
        <div className='flex flex-wrap justify-between'>
          <Project
            title='Reactime'
            description='Collaborated on open source chrome developer tool for time travel debugging and performance monitoring in React applications'
            link='https://www.reacti.me/'
            mt={20}
            image=''
          />
          <Project
            title='Nutrition Website'
            description='Website mockup for a nutrition business created for a prospective business owner'
            image=''
            mt={25}
          />
          <Project
            title='LiftLog'
            description='Worked with a small team to build a web application for planning workouts and tracking progress.'
            image=''
            mt={30}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
