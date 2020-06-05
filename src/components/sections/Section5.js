import React, { useContext, useState, useEffect } from 'react';
import { NeighborhoodContext } from '../../context/NeighborhoodContext';
import TitleTag from '../utils/TitleTag';
import Divider from '../utils/Divider';

const Section5 = () => {
  const { neighborhoods } = useContext(NeighborhoodContext);
  const [dividerWidth, setDividerWidth] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const newWidth = window.scrollY / window.innerHeight / 3.2;
      setDividerWidth(newWidth);
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id='section5'>
        <TitleTag
          title='Hip Neighborhoods'
          bgColor='rgba(255, 239, 159, 0.7)'
          color='#111'
        />
        <div className='neighborhood-grid'>
          {neighborhoods.map((neighborhood) => (
            <div
              key={neighborhood.id}
              className='neighborhood-card'
              style={{
                background: `url(${neighborhood.img}) no-repeat center center /cover`,
              }}
            >
              <h2>{neighborhood.title}</h2>
            </div>
          ))}
        </div>
      </section>
      <Divider width={dividerWidth} />
    </>
  );
};

export default Section5;
