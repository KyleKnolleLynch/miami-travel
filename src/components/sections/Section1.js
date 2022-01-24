import React, { useState, useRef, useEffect } from 'react'
import img1 from '../../images/busTours.webp'
import img2 from '../../images/avalon_hotel.webp'
import img3 from '../../images/dj.webp'
import img4 from '../../images/alligator.webp'
import HotBox from '../utils/HotBox'
import Divider from '../utils/Divider'
import TitleTag from '../utils/TitleTag'

const Section1 = () => {
  const ref = useRef()
  const [opacity, setOpacity] = useState(0)
  const [node, setNode] = useState(null)
  const [state] = useState([
    {
      title: 'Double Decker Tours',
      desc: 'Great rates and buses run all day.',
      img: img1,
      link: 'https://www.bigbustours.com/en/miami/miami-bus-tours',
    },
    {
      title: 'Avalon Hotel',
      desc: 'Come stay at the iconic classic yourself.',
      img: img2,
      link: 'https://www.avalonhotel.com/',
    },
    {
      title: 'Miami Music Festival',
      desc: "Don't miss the summer park concert jam.",
      img: img3,
      link: 'https://miamimusicfestival.com/#homepage-2020',
    },
    {
      title: 'Zoo Miami',
      desc: 'Come say hi to Fritz, our local zoo celebrity.',
      img: img4,
      link: 'https://www.zoomiami.org/',
    },
  ])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? setOpacity(0.6) : setOpacity(0)
      },
      {
        root: null,
        rootMargin: '500px 0px 0px 0px',
        threshold: 0.7,
      }
    )
    setNode(ref.current)
    if (node) {
      observer.observe(node)
      return () => observer.unobserve(node)
    }
  }, [node])

  return (
    <>
      <section id='section1'>
        <div className='hot-overlay'></div>
        <div
          className='hot-overlay hot-blended'
          ref={ref}
          style={{ opacity }}
        ></div>
        <div className='hot-section-content'>
          <TitleTag
            title="What's Hot"
            bgColor='rgba(255, 239, 159, 0.7)'
            color='#111'
          />
          <div className='grid-2 grid-hot'>
            {state.map((box, i) => (
              <HotBox content={box} key={i} />
            ))}
          </div>
        </div>
      </section>
      <Divider />
    </>
  )
}

export default Section1
