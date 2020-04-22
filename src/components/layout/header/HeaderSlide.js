import React from 'react';
import imgDefault from '../../../images/header_img.jpg';

const HeaderSlide = ({ slide }) => {
  const { img, title, desc, textColor, boxBgColor } = slide;

  return (
    <div
      className='header-slide'
      style={{
        background: `linear-gradient(rgba(0,0,0,0) 80%, rgba(0,0,0,0.5)),url(${img}) no-repeat center center /cover`,
      }}
    >
      <article className='header-slide-box' style={{backgroundColor: `${boxBgColor}`, color: `${textColor}`}}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </article>
    </div>
  );
};

HeaderSlide.defaultProps = {
  img: imgDefault,
};

export default HeaderSlide;
