import React from 'react';
import closeSvg from '../../images/icons/x-square.svg';

const VideoModal = ({ title, name, closeModal }) => {
  return (
    <div className='video-modal-container'>
      <div className='video-modal'>
        <img src={closeSvg} alt='close_svg' onClick={closeModal} />
        <iframe title={title} name={name} fullscreen='true'></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
