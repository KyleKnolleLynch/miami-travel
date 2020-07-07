import React, { useState, useEffect } from 'react';
import TitleTag from '../utils/TitleTag';
import VideoModal from '../utils/VideoModal';
import video1 from '../../images/videos/marathon_480.m4v';
import video2 from '../../images/videos/fireworks_480.m4v';
import img1 from '../../images/marathon_photo.jpg';
import img2 from '../../images/fireworks_photo.jpg';
import Divider from '../utils/Divider';

const Section3 = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [dividerWidth, setDividerWidth] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const newWidth = window.scrollY / window.innerHeight / 2.2;
      setDividerWidth(newWidth);
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id='section3'>
        <TitleTag title='Upcoming Events' bgColor='rgb(255, 105, 180)' />
        <div className='events-grid'>
          <div className='events-video-container'>
            {modal1Open ? (
              <VideoModal
                source={video1}
                name='frame1'
                title='marathon-run-video'
                closeModal={() => setModal1Open(!modal1Open)}
              />
            ) : (
              <div className='s3-img-container'>
                <span onClick={() => setModal1Open(!modal1Open)}>
                  <i className='las la-play la-4x'></i>
                </span>
                <img
                  src={img1}
                  alt='placeholder'
                  loading='lazy'
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            )}
            <div className='events-video-content'>
              <h2>Boardwalk Marathon</h2>
              <p>Run to support clean beaches!</p>
            </div>
          </div>
          <div className='events-video-container'>
            {modal2Open ? (
              <VideoModal
                source={video2}
                name='frame2'
                title='fireworks-video'
                closeModal={() => setModal2Open(!modal2Open)}
              />
            ) : (
              <div className='s3-img-container'>
                <span onClick={() => setModal2Open(!modal2Open)}>
                  <i className='las la-play la-4x'></i>
                </span>
                <img
                  src={img2}
                  alt='placeholder'
                  loading='lazy'
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            )}
            <div className='events-video-content'>
              <h2>Fireworks Display</h2>
              <p>
                Come celebrate Fourth of July with our spectacular annual
                surfside fireworks display.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Divider width={dividerWidth} />
    </>
  );
};

export default Section3;
