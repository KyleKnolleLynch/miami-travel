import React, { useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'

const ReturnTop = () => {
  useEffect(() => {
    const returnTop = document.querySelector('.return-top')
    const showReturnLink = () => {
      window.pageYOffset > 800
        ? (returnTop.className += ' show-return-link')
        : (returnTop.className = 'return-top')
    }
    window.addEventListener('scroll', showReturnLink)
    return () => window.removeEventListener('scroll', showReturnLink)
  }, [])

  return (
    <div className='return-top' onClick={() => scroll.scrollToTop()}>
      <i className='las la-chevron-up la-2x'></i>
    </div>
  )
}

export default ReturnTop
