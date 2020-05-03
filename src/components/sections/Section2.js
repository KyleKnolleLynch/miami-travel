import React, { useState, useEffect } from 'react';
import video1 from '../../images/walking.mp4';
import Divider from '../utils/Divider';

const Section2 = () => {
  const [dividerWidth, setDividerWidth] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const newWidth = window.scrollY / window.innerHeight / 1.55;
      setDividerWidth(newWidth);
      console.log(`section2: ${newWidth}`);
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id='section2'>
        <div className='events-video-container'>
          <video src={video1} autoPlay muted loop></video>
        </div>
        <div className='events-content'>
          <h1>Upcoming Events</h1>
          <h4>subtitle here</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            impedit error deserunt velit in.
          </p>
        </div>
      </section>
      <Divider width={dividerWidth} />
    </>
  );
};

export default Section2;
