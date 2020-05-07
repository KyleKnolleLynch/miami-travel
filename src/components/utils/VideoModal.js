import React from 'react';

const VideoModal = ({ title, name, closeModal }) => {
  return (
    <div className='video-modal-container'>
      <div className='video-modal'>
        <i className='far fa-window-close fa-3x' onClick={closeModal}></i>
        <iframe title={title} name={name} fullscreen='true'></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
