import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Header from '../layout/header/Header'
import imgHero from '../../images/livecams-hero.webp'
import Loader from '../utils/Loader'
const Section6 = lazy(() => import('../sections/Section6'))
const Footer = lazy(() => import('../layout/footer/Footer'))

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
}

const Livecams = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <Header />
      <section className='livecams-section-1'>
        <img
          src={imgHero}
          alt='livecams_hero'
          loading='lazy'
          style={{ width: '100%', height: '100%' }}
        />
        <h1>Miami Live Webcams</h1>
      </section>
      <section className='livecams-section-2'>
        <div>
          <h2>Explore Miami with our live webcams</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti
            repellendus doloremque. Dolore esse fugiat, atque nesciunt expedita
            ipsa tempore placeat nobis mollitia! Aspernatur autem ab architecto
            eius iure qui quis ipsum reiciendis sequi nemo pariatur eum, dolores
            sit ipsam unde atque est repellat incidunt!
          </p>
        </div>
      </section>
      <Suspense fallback={<Loader />}>
        <Section6 />
        <section className='livecams-section-3'>
          <h1>Coral City Underwater Webcam</h1>
          <div className='iframe-container'>
            <iframe
              title='Coral City Underwater Webcam'
              src='https://www.youtube.com/embed/7i8ARjIeM2k?autoplay=1'
              frameBorder='0'
              allow='accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
        </section>
        <Footer />
      </Suspense>
    </motion.div>
  )
}

export default Livecams
