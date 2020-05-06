import React, { useState, useEffect } from 'react';
import video1 from '../../images/walking.m4v';
import Divider from '../utils/Divider';

const Section2 = () => {
  const [dividerWidth, setDividerWidth] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const newWidth = window.scrollY / window.innerHeight / 1.55;
      setDividerWidth(newWidth);
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id='section2'>
        <div className='s2-video-container'>
          <video src={video1} autoPlay muted loop></video>
        </div>
        <div className='s2-content'>
          <h1>Welcome To Miami</h1>
          <h4>Stay, Relax</h4>
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
