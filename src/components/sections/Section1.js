import React, { useState } from 'react';
import img1 from '../../images/busTours.jpg';
import img2 from '../../images/hot-eats.jpg';
import img3 from '../../images/djShow.jpg';
import img4 from '../../images/alligator.jpg';
import HotBox from '../utils/HotBox';

const Section1 = () => {
  const [state, setState] = useState([
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

  return (
    <section id='section1'>
      <div className='hot-overlay-wrapper'>
        <div className='hot-overlay'></div>
        <div className='hot-overlay hot-blended'></div>
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
