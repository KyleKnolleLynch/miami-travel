import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../layout/header/Header';
import HeaderSlider from '../layout/header/HeaderSlider';
import { HeaderData } from '../../data/headerData';
import Divider from '../utils/Divider';
import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Section3 from '../sections/Section3';
import Section4 from '../sections/Section4';
import Section5 from '../sections/Section5';
import Section6 from '../sections/Section6';
import Footer from '../layout/footer/Footer';
import ReturnTop from '../utils/ReturnTop';

const pageVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const Home = () => {
  const [dividerWidth, setDividerWidth] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const newWidth = window.scrollY / window.innerHeight + 1;
      setDividerWidth(newWidth);
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div id='home' variants={pageVariants} initial='hidden' animate='visible' exit='exit'>
      <Header />
      <HeaderSlider slides={HeaderData} autoPlay={5} />
      <Divider width={dividerWidth} />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
      <Footer />
      <ReturnTop />
    </motion.div>
  );
};

export default Home;
