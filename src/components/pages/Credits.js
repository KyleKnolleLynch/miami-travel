import React from 'react'
import { motion } from 'framer-motion'
import Header from '../layout/header/Header'

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

const Credits = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <Header />
      <section id='credits'>
        <article>
          <h1>Credits and Thanks</h1>
          <ul>
            <li>
              <span>All photos provided by: </span>
              <a
                href='https://unsplash.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Unsplash
              </a>
            </li>
            <li>
              <span>Video files provided by: </span>
              <a
                href='https://www.videvo.net/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Videvo
              </a>
            </li>
            <li>
              <span>Livecams provided by: </span>
              <a
                href='https://windy.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Windy.com
              </a>
            </li>
            <li>
              <span>Coral City Camera provided by: </span>
              <a
                href='https://www.youtube.com/user/CoralMorphologic'
                target='_blank'
                rel='noopener noreferrer'
              >
                Coral Morphologic
              </a>{' '}
              and{' '}
              <a
                href='https://youtube.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                YouTube
              </a>
            </li>
            <li>
              <span>Live weather data provided by: </span>
              <a
                href='https://openweathermap.org'
                target='_blank'
                rel='noopener noreferrer'
              >
                OpenWeather
              </a>
            </li>
          </ul>
          <p>
            All material and links contained in this website are for learning
            and web development study/practice only. The creator of this website
            does not endorse or is not endorsed by any of the brands or
            companies listed or shown. This website is strictly a personal
            project with no commercial intent. Credit and big thank you go to
            the above listed providers of great free use data.
          </p>
        </article>
      </section>
    </motion.div>
  )
}

export default Credits
