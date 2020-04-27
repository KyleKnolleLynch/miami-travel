import React, { useState, useRef, useEffect } from 'react';
import img1 from '../../images/busTours.jpg';
import img2 from '../../images/hot-eats.jpg';
import img3 from '../../images/djShow.jpg';
import img4 from '../../images/alligator.jpg';
import HotBox from '../utils/HotBox';

const Section1 = () => {
  const ref = useRef();
  const [opacity, setOpacity] = useState(0);
  const [node, setNode] = useState(null);
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
      title: 'DJ Fizzbuzz',
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
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpacity(0.6);
        } else {
          setOpacity(0);
        }
      },
      {
        root: null,
        rootMargin: '500px 0px 0px 0px',
        threshold: 0.6,
      }
    );
    setNode(ref.current);
    if (node) {
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  }, [node]);

  return (
    <section id='section1'>
      <div className='hot-overlay-wrapper'>
        <div className='hot-overlay'></div>
        <div
          className='hot-overlay hot-blended'
          ref={ref}
          style={{ opacity: `${opacity}` }}
        ></div>
      </div>
      <div className='hot-section-content'>
        <h1>What's Hot</h1>
        <div className='grid-2 grid-hot'>
          {state.map((box, i) => (
            <HotBox content={box} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
