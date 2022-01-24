import React from 'react'
import video1 from '../../images/videos/walking.m4v'
import Divider from '../utils/Divider'

const Section2 = () => {
  return (
    <>
      <section id='section2'>
        <div className='s2-video-container'>
          <video
            src={video1}
            autoPlay
            muted
            loop
            loading='lazy'
            style={{ minWidth: '100%', minHeight: '100%' }}
          ></video>
        </div>
        <div className='s2-content'>
          <h1>Welcome To Miami</h1>
          <h2>Stay, Relax</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            impedit error deserunt velit in.
          </p>
        </div>
      </section>
      <Divider />
    </>
  )
}

export default Section2
