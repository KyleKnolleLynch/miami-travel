import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TitleTag from '../utils/TitleTag';
import Divider from '../utils/Divider';

const fluidVariants1 = {
  hover: { scale: 1.2 },
  tap: {
    scale: 0.8,
    rotate: -90,
    borderRadius: '100%',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Section5 = () => {
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
          title='Multi-Cultural Art'
          bgColor='rgba(255, 239, 159, 0.7)'
          color='#111'
        />
        <div className='art-wrapper'>
          <div className='fluid-s5-container'>
            <div className='fluid-s5-item art1'></div>
            <motion.div
              className='fluid-s5-item art2'
              variants={fluidVariants1}
              whileHover='hover'
              whileTap='tap'
            ></motion.div>
          </div>
          <div className='art-content'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              facere aut distinctio blanditiis doloremque voluptas molestiae
              nesciunt repellat natus quaerat. Ut est nemo aspernatur rem.
            </p>
          </div>
        </div>
      </section>
      <Divider width={dividerWidth} />
    </>
  );
};

export default Section5;
