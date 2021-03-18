import React from 'react'

const VideoModal = ({ source }) => {
  return (
    <div className='video-modal'>
      <video
        src={source}
        autoPlay
        loop
        muted
        loading='lazy'
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></video>
    </div>
  )
}

export default VideoModal
