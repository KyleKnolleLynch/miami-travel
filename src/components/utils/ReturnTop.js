import React, { useEffect } from 'react';

const ReturnTop = () => {
  useEffect(() => {
    const returnTop = document.querySelector('.return-top');
    const showReturnLink = () => {
      window.pageYOffset > 800
        ? (returnTop.className += ' show-return-link')
        : (returnTop.className = 'return-top');
    };
    window.addEventListener('scroll', showReturnLink);
    return () => window.removeEventListener('scroll', showReturnLink);
  }, []);

  return (
    <div>
      <a href='#header' className='return-top'>
        <i className='las la-chevron-up la-2x'></i>
      </a>
    </div>
  );
};

export default ReturnTop;
