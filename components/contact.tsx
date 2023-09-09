'use client';

import { Waypoint } from 'react-waypoint';
import { useState } from 'react';

const Contact = ({ id }: { id: string }) => {
  const [content, setContent] = useState<string | null>(null);
  const [scrollTop, setScrollTop] = useState(true);
  const [atBottom, setAtBottom] = useState('hidden');

  const handleEnter = () => {
    // This function will be called when the waypoint enters the viewport
    setTimeout(() => {
      setContent('Content to be shown when the waypoint is reached');
      setAtBottom('');
    }, 1000);
    console.log(window.innerHeight);
  };

  const handleLeave = () => {
    // This function will be called when the waypoint enters the viewport
    setContent('');
    setAtBottom('hidden');
  };

  const handleClick = () => {
    // Code for scrolling back to top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <div
        id={id}
        className='flex justify-center items-center h-screen tracking-wide bg-red-200 relative'
      >
        <div>Contact</div>
        <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
        {content && <div className=''>{content}</div>}

        <button
          onClick={handleClick}
          className={`bg-blue-500 px-5 pb-5 text-xl rounded-xl font-bold flex flex-col justify-center opacity-90 items-center absolute bottom-10 right-20 z-20 ${atBottom}`}
        >
          <img
            className='relative'
            src='/arrow.svg'
            alt='Back to top'
            height={70}
            width={70}
          />
          Back to top
        </button>

        <footer>Lance Ziegler</footer>
      </div>
    </>
  );
};

export default Contact;
