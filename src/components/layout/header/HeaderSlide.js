import React from 'react';
import imgDefault from '../../../images/header_img.webp';

const HeaderSlide = ({ slide }) => {
  const { img, imgSm, title, desc, textColor, boxBgColor } = slide;

  return (
    <div className='header-slide'>
      <picture>
        <source media='(max-width: 600px)' srcSet={imgSm} />
        <source media='(min-width: 768px)' srcSet={img} />
        <img
          src={img}
          alt='header-slides'
          loading='lazy'
          style={{ width: '100%', height: '100%' }}
        />
      </picture>
      <article
        className='header-slide-box'
        style={{ backgroundColor: `${boxBgColor}`, color: `${textColor}` }}
      >
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
