import React from 'react';

const Dot = ({ active, dotClicked }) => {
  return (
    <span
      className='dot'
      onClick={dotClicked}
      style={{ transform: `${active ? 'scale(1.5)' : 'scale(1)'}` }}
    />
  );
};

const Dots = ({ slides, activeIndex, dotClicked }) => {
  return (
    <div className='dots'>
      {slides.map((slide, i) => (
        <Dot key={slide.id} active={activeIndex === i} dotClicked={dotClicked} />
      ))}
    </div>
  );
};

export default Dots;
