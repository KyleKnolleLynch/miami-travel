import React from 'react'

const ModalContent = ({ title, desc, img }) => {
  return (
    <div className='modal-content'>
      <h1>{title}</h1>
      <p>{desc}</p>
      <img src={img} alt='neighborhood modal desc' />
    </div>
  )
}

export default ModalContent
