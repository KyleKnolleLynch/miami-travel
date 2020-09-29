import React from 'react';

const HotBox = ({ content: { title, desc, img, link } }) => {
  return (
    <div className='grid-2 content-box-hot'>
      <div>
        <div>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <a href={link} className='btn'>
          Visit Now
        </a>
      </div>
      <div>
        <img
          src={img}
          alt='hot-box_image'
          loading='lazy'
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default HotBox;
