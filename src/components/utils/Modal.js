import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ modalOpen, children, setModalOpen }) => {
  if (!modalOpen) return null
  return createPortal(
    <div className='modal' onClick={() => setModalOpen(false)}>
      <div>{children}</div>
    </div>,
    document.body
  )
}

export default Modal
