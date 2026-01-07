'use client';
import Top from '@/components/top';
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Home = () => {
  useEffect(() => {
    console.log('DEV CHANGE TEST', Date.now());

    if (window.location.hash) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <>
      <Top id={'top'} />
      <About id={'about'} />
      <Projects id={'projects'} />
      <Contact id={'contact'} />
    </>
  );
};

export default Home;
