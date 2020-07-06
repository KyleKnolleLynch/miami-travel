import React from 'react';
import Header from '../layout/header/Header';
import Section6 from '../sections/Section6';
import Footer from '../layout/footer/Footer';

const Livecams = () => {
  return (
    <div>
      <Header />
      <Section6 />
      <section id='livecams-hero'>
        <div className='livecams-container'>
          <h1>Coral City Underwater Webcam</h1>
          <iframe
            width='1330'
            height='750'
            src='https://www.youtube.com/embed/7i8ARjIeM2k?autoplay=1'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Livecams;
