import React from 'react'
import palmSvg from '../../images/icons/palm.svg'

const Loader = () => {
  return (
    <div className='loading-div'>
      <div className='wave'>
        <img src={palmSvg} alt='loading_svg' />
      </div>
    </div>
  )
}

export default Loader
