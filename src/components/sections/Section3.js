import React, { useState } from 'react';
import TitleTag from '../utils/TitleTag';
import VideoModal from '../utils/VideoModal';
import video1 from '../../images/marathon_480.m4v';
import img1 from '../../images/header_beaches.jpg';

const Section3 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id='section3'>
      <TitleTag title='Upcoming Events' bgColor='hotpink' />
      <div className='events-grid'>
        <div className='events-video-container'>
          {modalOpen ? (
            <VideoModal
              name='frame1'
              title='marathon-run-video'
              closeModal={() => setModalOpen(!modalOpen)}
            />
          ) : (
            <div className='s3-img-container'>
              <span onClick={() => setModalOpen(!modalOpen)}>
                <a href={video1} target='frame1'>
                  <i className='fas fa-play fa-2x'></i>
                </a>
              </span>
              <img src={img1} alt='placeholder' />
            </div>
          )}
          <div className='events-video-content'>
            <h2>Surfside Marathon</h2>
            <p>Run to support clean beaches!</p>
          </div>
        </div>
        <div className='events-video-container'>
          {modalOpen ? (
            <VideoModal
              name='frame1'
              title='marathon-run-video'
              closeModal={() => setModalOpen(!modalOpen)}
            />
          ) : (
            <div className='s3-img-container'>
              <span onClick={() => setModalOpen(!modalOpen)}>
                <a href={video1} target='frame1'>
                  <i className='fas fa-play fa-2x'></i>
                </a>
              </span>
              <img src={img1} alt='placeholder' />
            </div>
          )}
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
