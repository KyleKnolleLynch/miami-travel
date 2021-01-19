import React, { useState, useEffect, useRef } from 'react'

const Divider = () => {
  const [scaleX, setScaleX] = useState(1)
  const [node, setNode] = useState(null)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? setScaleX(3) : setScaleX(1)
      },
      {
        root: null,
        rootMargin: '300% 0px -10% 0px',
        threshold: 0,
      }
    )
    setNode(ref.current)
    if (node) {
      observer.observe(node)
      return () => observer.unobserve(node)
    }
  }, [node])

  return (
    <div className='divider-wrapper' ref={ref}>
      <div className='divider' style={{ transform: `scaleX(${scaleX})` }}>
        {' '}
      </div>
    </div>
  )
}

export default Divider
