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
    {
      title: 'Edgewater',
      desc:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione minima dolorum ipsam cupiditate at, ab possimus quasi nulla qui sapiente, officia, rem iste asperiores nisi! Fuga voluptas tenetur, numquam mollitia dolorum magnam ducimus porro, perferendis saepe quos facilis obcaecati corporis.',
      img: img1,
      id: 1,
    },
    {
      title: 'South Beach',
      desc:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione minima dolorum ipsam cupiditate at, ab possimus quasi nulla qui sapiente, officia, rem iste asperiores nisi! Fuga voluptas tenetur, numquam mollitia dolorum magnam ducimus porro, perferendis saepe quos facilis obcaecati corporis.',
      img: img2,
      id: 2,
    },
    {
      title: 'Brickell',
      desc:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione minima dolorum ipsam cupiditate at, ab possimus quasi nulla qui sapiente, officia, rem iste asperiores nisi! Fuga voluptas tenetur, numquam mollitia dolorum magnam ducimus porro, perferendis saepe quos facilis obcaecati corporis.',
      img: img3,
      id: 3,
    },
    {
      title: 'Design District',
      desc:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione minima dolorum ipsam cupiditate at, ab possimus quasi nulla qui sapiente, officia, rem iste asperiores nisi! Fuga voluptas tenetur, numquam mollitia dolorum magnam ducimus porro, perferendis saepe quos facilis obcaecati corporis.',
      img: img4,
      id: 4,
    },
    {
      title: 'Downtown',
      desc:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione minima dolorum ipsam cupiditate at, ab possimus quasi nulla qui sapiente, officia, rem iste asperiores nisi! Fuga voluptas tenetur, numquam mollitia dolorum magnam ducimus porro, perferendis saepe quos facilis obcaecati corporis.',
      img: img5,
      id: 5,
    },
    {
      title: 'Wynwood',
      desc:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione minima dolorum ipsam cupiditate at, ab possimus quasi nulla qui sapiente, officia, rem iste asperiores nisi! Fuga voluptas tenetur, numquam mollitia dolorum magnam ducimus porro, perferendis saepe quos facilis obcaecati corporis.',
      img: img6,
      id: 6,
    },
    {
      title: 'Midtown',
      desc:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione minima dolorum ipsam cupiditate at, ab possimus quasi nulla qui sapiente, officia, rem iste asperiores nisi! Fuga voluptas tenetur, numquam mollitia dolorum magnam ducimus porro, perferendis saepe quos facilis obcaecati corporis.',
      img: img7,
      id: 7,
    },
    {
      title: 'Coral Gables',
      desc:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione minima dolorum ipsam cupiditate at, ab possimus quasi nulla qui sapiente, officia, rem iste asperiores nisi! Fuga voluptas tenetur, numquam mollitia dolorum magnam ducimus porro, perferendis saepe quos facilis obcaecati corporis.',
      img: img8,
      id: 8,
    },
  ]);
  return (
    <NeighborhoodContext.Provider value={{ neighborhoods }}>
      {props.children}
    </NeighborhoodContext.Provider>
  );
};

export default NeighborhoodContextProvider;
