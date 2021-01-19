import React from 'react'

const TitleTag = ({ title, bgColor, color }) => {
  return (
    <h1 className='title-tag' style={{ background: bgColor, color: color }}>
      {title}
    </h1>
  )
}

export default TitleTag
