import React from 'react';

const Arrows = ({ leftClick, rightClick }) => {
  return (
    <div className='arrow-div'>
      <i className='fas fa-arrow-left fa-2x' onClick={leftClick} />
      <i className='fas fa-arrow-right fa-2x' onClick={rightClick} />
    </div>
  );
};

export default Arrows;
