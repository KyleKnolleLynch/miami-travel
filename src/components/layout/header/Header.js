import React, { useState, useEffect } from 'react';
import palmSvg from '../../../images/icons/palm.svg';
import searchSvg from '../../../images/icons/search.svg';
import HeaderSlider from './HeaderSlider';
import { HeaderData } from '../../../data/headerData';
import Divider from '../../utils/Divider';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dividerWidth, setDividerWidth] = useState(1);
  const [menuStyle, setMenuStyle] = useState(
    'translate(15rem, -25rem) scale(0)'
  );
  const [burger1Style, setBurger1Style] = useState({
    translateY: '-0.8rem',
    rotate: '0deg',
  });
  const [burger2Style, setBurger2Style] = useState({
    translateY: '0.9rem',
    rotate: '0deg',
  });
  const [burger3Style, setBurger3Style] = useState('1');
  const [menuSearcherStyle, setMenuSearcherStyle] = useState('translateX(0)');
  const [menuInputVal, setMenuInputVal] = useState('');

  useEffect(() => {
    if (open) {
      setMenuStyle('translate(0, 0) scale(1)');
      setBurger1Style({ translateY: '1rem', rotate: '0deg' });
      setBurger2Style({ translateY: '0.9rem', rotate: '0deg' });
      setTimeout(
        () => setBurger1Style({ translateY: '0', rotate: '-135deg' }),
        500
      );
      setTimeout(
        () => setBurger2Style({ translateY: '0', rotate: '-45deg' }),
        500
      );
      setBurger3Style('0');
      setMenuSearcherStyle('translateX(-26rem)');
    } else {
      setMenuStyle('translate(15rem, -25rem) scale(0)');
      setBurger1Style({ translateY: '1rem', rotate: '0deg' });
      setBurger2Style({ translateY: '0.9rem', rotate: '0deg' });
      setTimeout(
        () => setBurger1Style({ translateY: '-0.8rem', rotate: '0deg' }),
        500
      );
      setTimeout(
        () => setBurger2Style({ translateY: '0', rotate: '0deg' }),
        500
      );
      setTimeout(() => setBurger3Style('1'), 500);
      setMenuSearcherStyle('translateX(0)');
      setTimeout(() => setMenuInputVal(''), 600);
    }
  }, [open]);

  const focusSearcher = () => {
    setOpen(true);
    document.querySelector('.menu-input').focus();
  };

  useEffect(() => {
    const handleScroll = () => {
      const newWidth = window.scrollY / window.innerHeight + 1;
      setDividerWidth(newWidth);
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header id='header'>
        <div className='header-banner'>
          <img src={palmSvg} alt='palm_icon' />
          <h1>Travel Miami</h1>
        </div>
        <nav>
          <div className='header-brand-div'>
            <div className='brand-title'>
              <p>Miami</p>
              <span>Greater Miami Prefecture and Travel Center</span>
            </div>
            <h2>Explore Greater Miami And Beyond</h2>
          </div>

          <div className='header-menu-div'>
            <img
              src={searchSvg}
              alt='search_svg'
              className='menu-searcher'
              style={{ transform: menuSearcherStyle }}
              onClick={() => focusSearcher()}
            />
            <button className='header-menu' onClick={() => setOpen(!open)}>
              <div
                className='burgerBar burgerBar1'
                style={{
                  transform: `translateY(${burger1Style.translateY}) rotate(${burger1Style.rotate})`,
                }}
              ></div>
              <div
                className='burgerBar burgerBar2'
                style={{
                  transform: `translateY(${burger2Style.translateY}) rotate(${burger2Style.rotate})`,
                }}
              ></div>
              <div
                className='burgerBar burgerBar3'
                style={{ opacity: burger3Style }}
              ></div>
            </button>
          </div>
          <ul style={{ transform: menuStyle }}>
            <li>
              <input
                type='text'
                className='menu-input'
                value={menuInputVal}
                onChange={(e) => setMenuInputVal(e.target.value)}
              />
            </li>
            <li>
              <a href='#section1'>Things To Do</a>
            </li>
            <li>
              <a href='#section3'>Events</a>
            </li>
            <li>
              <a href='#section4'>Eats</a>
            </li>
            <li>
              <a href='#section5'>Neighborhoods</a>
            </li>
            <li>
              <a href='#section6'>Livecams</a>
            </li>
            <li>
              <a href='#footer'>Travel Info</a>
            </li>
          </ul>
        </nav>
        <HeaderSlider slides={HeaderData} autoPlay={5} />
      </header>
      <Divider width={dividerWidth} />
    </>
  );
};

export default Header;
