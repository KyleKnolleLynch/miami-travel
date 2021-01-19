import React from 'react'

const Dot = ({ active }) => {
  return (
    <span
      className='dot'
      style={{ transform: `${active ? 'scale(1.5)' : 'scale(1)'}` }}
    />
  )
}

const Dots = ({ slides, activeIndex }) => {
  return (
    <div className='dots'>
      {slides.map((slide, i) => (
        <Dot key={slide.id} active={activeIndex === i} />
      ))}
    </div>
  )
}

export default Dots
