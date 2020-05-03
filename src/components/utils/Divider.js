import React from 'react';

const Divider = ({ width }) => {
  return (
    <div className='divider-wrapper'>
      <div className='divider' style={{ transform: `scaleX(${width})` }}>
        {' '}
      </div>
    </div>
  );
};

export default Divider;
