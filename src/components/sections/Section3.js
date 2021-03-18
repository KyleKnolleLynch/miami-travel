import React, { useState } from 'react'
import TitleTag from '../utils/TitleTag'
import VideoModal from '../utils/VideoModal'
import video1 from '../../images/videos/marathon_480.m4v'
import video2 from '../../images/videos/fireworks_480.m4v'
import img1 from '../../images/marathon_photo.webp'
import img2 from '../../images/fireworks_photo.webp'
import Divider from '../utils/Divider'

const Section3 = () => {
  const [modal1Open, setModal1Open] = useState(false)
  const [modal2Open, setModal2Open] = useState(false)

  const modalsClose = () => {
    if (modal1Open) setModal1Open(false)
    if (modal2Open) setModal2Open(false)
  }

  return (
    <>
      <section id='section3' onClick={() => modalsClose()}>
        <TitleTag title='Upcoming Events' bgColor='rgb(255, 105, 180)' />
        <div className='events-grid'>
          <div
            className='events-video-container'
            onClick={() => setModal1Open(!modal1Open)}
          >
            {modal1Open ? (
              <VideoModal source={video1} />
            ) : (
              <div className='s3-img-container'>
                <span>
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
          <div
            className='events-video-container'
            onClick={() => setModal2Open(!modal2Open)}
          >
            {modal2Open ? (
              <VideoModal source={video2} />
            ) : (
              <div className='s3-img-container'>
                <span>
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
      <Divider />
    </>
  )
}

export default Section3
