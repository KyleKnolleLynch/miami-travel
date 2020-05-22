import React from 'react';
import Header from '../layout/header/Header';
import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Section3 from '../sections/Section3';
import Section4 from '../sections/Section4';
import Section5 from '../sections/Section5';
import NeighborhoodContextProvider from '../../context/NeighborhoodContext';
import ReturnTop from '../utils/ReturnTop';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <NeighborhoodContextProvider>
          <Section5 />
        </NeighborhoodContextProvider>
        <ReturnTop />
      </main>
    </>
  );
};

export default Home;
