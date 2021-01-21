import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Header from '../layout/header/Header'
import HeaderSlider from '../layout/header/HeaderSlider'
import { HeaderData } from '../../data/headerData'
import Loader from '../utils/Loader'
import Divider from '../utils/Divider'

const Section1 = lazy(() => import('../sections/Section1'))
const Section2 = lazy(() => import('../sections/Section2'))
const Section3 = lazy(() => import('../sections/Section3'))
const Section4 = lazy(() => import('../sections/Section4'))
const Section5 = lazy(() => import('../sections/Section5'))
const Section6 = lazy(() => import('../sections/Section6'))
const Footer = lazy(() => import('../layout/footer/Footer'))
const ReturnTop = lazy(() => import('../utils/ReturnTop'))

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

const Home = () => {
  return (
    <motion.div
      id='home'
      variants={pageVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <Header />
      <HeaderSlider slides={HeaderData} autoPlay={5} />
      <Divider />
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </motion.div>
  )
}

export default Home
