import Top from '@/components/top';
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';

const Home = () => {
  return (
    <>
      {/* <div>
        <video width='100%' height='auto' autoPlay muted loop preload='auto'>
          <source src='beach.mp4' type='video/mp4' />
        </video>
      </div> */}
      <Top id={'top'} />
      <About id={'about'} />
      <Projects id={'projects'} />
      <Contact id={'contact'} />
    </>
  );
};

export default Home;
