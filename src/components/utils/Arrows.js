import React from 'react'

const Arrows = ({ leftClick, rightClick }) => {
  return (
    <div className='arrow-div'>
      <i className='las la-angle-left la-3x' onClick={leftClick} />
      <i className='las la-angle-right la-3x' onClick={rightClick} />
    </div>
  )
}

export default Arrows
