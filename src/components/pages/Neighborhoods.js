import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { NeighborhoodContext } from '../../context/NeighborhoodContext'
import Header from '../layout/header/Header'
import imgHero from '../../images/neighborhoods/neighborhood-hero.webp'
import imgHeroSm from '../../images/neighborhoods/neighborhood-hero-small.webp'
import TitleTag from '../utils/TitleTag'
import Footer from '../layout/footer/Footer'
import ReturnTop from '../utils/ReturnTop'
import Modal from '../utils/Modal'
import ModalContent from '../utils/ModalContent'

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

const Neighborhoods = () => {
  const { neighborhoods } = useContext(NeighborhoodContext)

  const [modalOpen, setModalOpen] = useState(false)
  const [modalDetails, setModalDetails] = useState({
    title: '',
    desc: '',
    img: '',
  })

  const setModalData = hood => {
    setModalOpen(true)
    const res = neighborhoods.filter(item => hood.id === item.id)
    const { title, desc, img } = res[0]
    setModalDetails({
      title,
      desc,
      img,
    })
  }

  return (
    <motion.div
      className='neighborhoods'
      variants={pageVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <Header />
      <div className='neighborhoods-hero'>
        <picture>
          <source media='(min-width: 768px)' srcSet={imgHero} />
          <img
            src={imgHeroSm}
            alt='header-slides'
            loading='lazy'
            style={{ width: '100%', height: '100%' }}
          />
        </picture>
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
          <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <ModalContent
              title={modalDetails.title}
              desc={modalDetails.desc}
              img={modalDetails.img}
            />
          </Modal>
          {neighborhoods.map(neighborhood => (
            <div
              key={neighborhood.id}
              className='neighborhood-card'
              onClick={() => setModalData(neighborhood)}
            >
              <img
                src={neighborhood.img}
                alt='selected_neighborhoods'
                loading='lazy'
                style={{ width: '100%', minHeight: '240px' }}
              />
              <h2>{neighborhood.title}</h2>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <ReturnTop />
    </motion.div>
  )
}

export default Neighborhoods
