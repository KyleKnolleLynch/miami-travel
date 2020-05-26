import React, { useState, useEffect, useRef } from 'react';
import HeaderSlide from './HeaderSlide';
import Weather from '../../utils/Weather';
import Arrows from '../../utils/Arrows';
import Dots from '../../utils/Dots';

const HeaderSlider = ({ slides, autoPlay }) => {
  const lastSlide = slides[slides.length - 1];
  const firstSlide = slides[0];
  const secondSlide = slides[1];

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
    _slides: [firstSlide, secondSlide, lastSlide],
  });

  const { activeIndex, translate, transition, _slides } = state;

  const getWidth = () => window.innerWidth;
  const width = getWidth() * _slides.length;

  const styleDiv = {
    width: `${width}px`,
    height: '100%',
    display: 'flex',
    transform: `translateX(-${translate}px)`,
    transition: `transform ease-out ${transition}s`,
  };

  const prevSlide = () => {
    setState({
      ...state,
      activeIndex: activeIndex === 0 ? slides.length - 1 : activeIndex - 1,
      translate: 0,
    });
  };

  const nextSlide = () => {
    setState({
      ...state,
      activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1,
      translate: translate + getWidth(),
    });
  };

  const smoothTransition = () => {
    let _slides = [];

    //  if currently at last slide
    if (activeIndex === slides.length - 1) {
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    }
    //  if currently at first slide, reset to initial render
    else if (activeIndex === 0) {
      _slides = [lastSlide, firstSlide, secondSlide];
    }
    //  create array of previous last slide, and following two
    else {
      _slides = slides.slice(activeIndex - 1, activeIndex + 2);
    }

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const smooth = (e) => {
      e.target.className.includes('header-slider-content') &&
        transitionRef.current();
    };

    const resize = () => {
      resizeRef.current();
    };

    const interval = setInterval(play, autoPlay * 1000);
    const transitionEnd = window.addEventListener('transitionend', smooth);
    const onResize = window.addEventListener('resize', resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('transitionend', transitionEnd);
      window.removeEventListener('resize', onResize);
    };
  }, [autoPlay]);

  useEffect(() => {
    transition === 0 && setState({ ...state, transition: 0.45 });
  }, [state, transition]);

  return (
    <div className='header-slider'>
      <div className='header-slider-content' style={styleDiv}>
        {_slides.map((_slide ) => (
          <HeaderSlide slide={_slide} key={_slide.id} />
        ))}
      </div>
      <Weather />
      <Dots slides={slides} activeIndex={activeIndex} />
      <Arrows leftClick={prevSlide} rightClick={nextSlide} />
    </div>
  );
};

export default HeaderSlider;
