import React from 'react';
import TitleTag from '../utils/TitleTag';
import video1 from '../../images/marathon_480.m4v';

const Section3 = () => {
  return (
    <section id='section3'>
      <TitleTag title='Upcoming Events' bgColor='hotpink' />
      <div className='events-grid'>
        <div className='events-video-container'>
          <video src={video1} autoPlay muted loop></video>
          <div className='events-video-content'>
            <h2>Surfside Marathon</h2>
            <p>Run to support clean beaches!</p>
          </div>
        </div>
        <div className='events-video-container'>
          <video src={video1} autoPlay muted loop></video>
          <div className='events-video-content'>
            <h2>Surfside Marathon</h2>
            <p>Run to support clean beaches!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
