import React, { useState, createContext } from 'react';
import img1 from '../images/neighborhoods/canal.webp';
import img2 from '../images/neighborhoods/south_beach.webp';
import img3 from '../images/neighborhoods/brickell.webp';
import img4 from '../images/neighborhoods/design_district.webp';
import img5 from '../images/neighborhoods/downtown.webp';
import img6 from '../images/neighborhoods/wynwood.webp';
import img7 from '../images/neighborhoods/midtown.webp';
import img8 from '../images/neighborhoods/coral_gables.webp';

export const NeighborhoodContext = createContext();

const NeighborhoodContextProvider = (props) => {
  const [neighborhoods] = useState([
    { title: 'Edgewater', img: img1, id: 1 },
    { title: 'South Beach', img: img2, id: 2 },
    { title: 'Brickell', img: img3, id: 3 },
    { title: 'Design District', img: img4, id: 4 },
    { title: 'Downtown', img: img5, id: 5 },
    { title: 'Wynwood', img: img6, id: 6 },
    { title: 'Midtown', img: img7, id: 7 },
    { title: 'Coral Gables', img: img8, id: 8 },
  ]);
  return (
    <NeighborhoodContext.Provider value={{ neighborhoods }}>
      {props.children}
    </NeighborhoodContext.Provider>
  );
};

export default NeighborhoodContextProvider;
