import React from 'react';
import closeSvg from '../../images/icons/x-square.svg';

const VideoModal = ({ source, title, name, closeModal }) => {
  return (
    <div className='video-modal-container'>
      <div className='video-modal'>
        <img
          src={closeSvg}
          alt='close_svg'
          onClick={closeModal}
          loading='lazy'
          style={{ width: '40px', height: '40px' }}
        />
        {/* <iframe title={title} name={name} fullscreen='true'></iframe>  */}
        <video
          src={source}
          autoPlay
          loop
          muted
          loading='lazy'
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></video>
      </div>
    </div>
  );
};

export default VideoModal;
