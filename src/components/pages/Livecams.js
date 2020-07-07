import React from 'react';
import Header from '../layout/header/Header';
import Section6 from '../sections/Section6';
import Footer from '../layout/footer/Footer';
import imgHero from '../../images/livecams-hero.jpg';

const Livecams = () => {
  return (
    <div>
      <Header />
      <section id='livecams-section-1'>
        <img
          src={imgHero}
          alt='livecams_hero'
          loading='lazy'
          style={{ width: '100%', height: '100%' }}
        />
        <h1>Miami Live Webcams</h1>
      </section>
      <article className='livecams-content'>
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
      </article>
      <Section6 />
      <section id='livecams-section-2'>
        <div className='livecams-container'>
          <h1>Coral City Underwater Webcam</h1>
          <iframe
            title='Coral City Underwater Webcam'
            width='1330'
            height='750'
            src='https://www.youtube.com/embed/7i8ARjIeM2k?autoplay=1'
            frameBorder='0'
            allow='accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            loading='lazy'
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Livecams;
