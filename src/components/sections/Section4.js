import React, { useRef, useState, useEffect } from 'react';
import TitleTag from '../utils/TitleTag';
import Divider from '../utils/Divider';

const Section4 = () => {
  const [dividerWidth, setDividerWidth] = useState(1);
  const [opacity, setOpacity] = useState(0);
  const [node, setNode] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? setOpacity(0.6) : setOpacity(0);
      },
      {
        root: null,
        rootMargin: '500px 0px 0px 0px',
        threshold: 0.6,
      }
    );
    setNode(ref.current);
    if (node) {
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  }, [node]);

 

  useEffect(() => {
    const handleScroll = () => {
      const newWidth = window.scrollY / window.innerHeight / 3;
      setDividerWidth(newWidth);
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <section id='section4'>
      <div className='s4-overlay'></div>
      <div
        className='s4-overlay s4-blended'
        ref={ref}
        style={{ opacity }}
      ></div>
      <TitleTag title='Miami Eats' bgColor='rgb(0, 174, 255)' color='#fff' />
      <div className='s4-content'>
        <div className='bg2'>
          <i className='las la-cocktail la-6x'></i>
          <h2>Exotic Cocktails</h2>
        </div>
        <div className='bg1'>
          <i className='las la-lemon la-4x'></i>
          <h2>Beach Cuisine</h2>
        </div>
        <div className='bg1'>
          <i className='las la-utensils la-4x'></i>
          <h2>Regional Variety</h2>
        </div>
        <div className='bg2'>
          <i className='las la-beer la-4x'></i>
          <h2>Handcrafted Brew</h2>
        </div>
        <div className='bg1'>
          <i className='las la-pepper-hot la-4x'></i>
          <h2>Spicy Dishes</h2>
        </div>
        <div className='bg1'>
          <i className='las la-ice-cream la-4x'></i>
          <h2>Tropical Desserts</h2>
        </div>
        <div className='bg1'>
          <i className='las la-seedling la-4x'></i>
          <h2>Farm to Table</h2>
        </div>
        <div className='bg2'>
          <i className='las la-wine-glass la-4x'></i>
          <h2>Local Wine</h2>
        </div>
        <div className='bg1'>
          <i className='las la-fish la-7x'></i>
          <h2>The Freshest Fish</h2>
        </div>
        <div className='bg1'>
          <i className='las la-paw la-4x'></i>
          <h2>Pet Friendly</h2>
        </div>
      </div>
    </section>
    <Divider width={dividerWidth} />
    </>
  );
};

export default Section4;
