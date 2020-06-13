import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { NeighborhoodContext } from '../../context/NeighborhoodContext';
import Header from '../layout/header/Header';
import TitleTag from '../utils/TitleTag';
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
    x: '100vw',
    transition: { ease: 'easeInOut' },
  },
};

const Neighborhoods = () => {
  const { neighborhoods } = useContext(NeighborhoodContext);

  return (
    <motion.div
      id='neighborhoods'
      variants={pageVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <Header />
      <div className='neighborhoods-hero'>
        <h1>Neighborhoods</h1>
      </div>
      <section className='neighborhoods-intro'>
        <div className='neighborhoods-intro-text'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ex
            culpa consequuntur corrupti architecto in aliquam officiis illum
            aperiam doloremque?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
            assumenda aperiam cum suscipit soluta repudiandae magnam veritatis
            voluptates nihil ex odio blanditiis, illo repellat sint molestias,
            facilis obcaecati beatae officiis! Aspernatur velit quidem numquam
            eum, amet voluptate delectus facere obcaecati, quam ex nihil
            nostrum, dolores maxime nulla! Ducimus, iusto porro?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus ut minus dolore doloremque! Magnam, quasi.
          </p>
        </div>
      </section>
      <section className='neighborhoods-display'>
        <TitleTag
          title='Featured Miami Neighborhoods'
          bgColor='rgb(0, 174, 255)'
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
      <Footer />
      <ReturnTop />
    </motion.div>
  );
};

export default Neighborhoods;
