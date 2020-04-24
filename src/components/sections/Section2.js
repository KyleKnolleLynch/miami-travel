import React from 'react';
import video1 from '../../images/walking.mp4';

const Section2 = () => {
  return (
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
  );
};

export default Section2;
