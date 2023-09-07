'use client';

import { Waypoint } from 'react-waypoint';
import { useState } from 'react';

const Contact = ({ id }: { id: string }) => {
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
    <div
      id={id}
      className='flex justify-center items-center h-screen tracking-wide bg-red-200'
    >
      <div>Contact</div>
      <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
      {content && <div className=''>{content}</div>}
    </div>
  );
};

export default Contact;
