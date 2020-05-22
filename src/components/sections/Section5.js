import React, { useContext } from 'react';
import { NeighborhoodContext } from '../../context/NeighborhoodContext';
import TitleTag from '../utils/TitleTag';

const Section5 = () => {
  const { neighborhoods } = useContext(NeighborhoodContext);
  return (
    <section id='section5'>
      <TitleTag title='Neighborhoods' bgColor='#FFEF9F' color='#111' />
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
  );
};

export default Section5;
