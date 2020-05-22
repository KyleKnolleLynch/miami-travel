import React, { useState, createContext } from 'react';
import img1 from '../images/neighborhoods/canal.jpg';

export const NeighborhoodContext = createContext();

const NeighborhoodContextProvider = (props) => {
  const [neighborhoods, setNeighborhoods] = useState([
    { title: 'title1', img: img1, id: 1 },
    { title: 'title2', img: img1, id: 2 },
    { title: 'title3', img: img1, id: 3 },
    { title: 'title4', img: img1, id: 4 },
    { title: 'title5', img: img1, id: 5 },
    { title: 'title6', img: img1, id: 6 },
    { title: 'title7', img: img1, id: 7 },
    { title: 'title8', img: img1, id: 8 },
  ]);
  return (
    <NeighborhoodContext.Provider value={{ neighborhoods }}>
      {props.children}
    </NeighborhoodContext.Provider>
  );
};

export default NeighborhoodContextProvider;
