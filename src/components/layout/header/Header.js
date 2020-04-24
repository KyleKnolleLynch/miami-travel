import React, { useState, useEffect } from 'react';
import palmSvg from '../../../images/icons/palm.svg';
import HeaderSlider from './HeaderSlider';
import { HeaderData } from '../../../data/headerData';

const Header = () => {
  const [open, setOpen] = useState(false);
  const menu = document.querySelector('nav ul');
  const menuSearcher = document.querySelector('.menu-searcher');
  const burger1 = document.querySelector('.burgerBar1');
  const burger2 = document.querySelector('.burgerBar2');
  const burger3 = document.querySelector('.burgerBar3');

  const openMenu = () => {
    menu.style.transform = 'translate(0, 0) scale(1)';
    burger1.style.transform = 'translateY(1rem)';
    burger2.style.transform = 'translateY(0.9rem)';
    setTimeout(() => (burger1.style.transform = 'rotate(-135deg)'), 500);
    setTimeout(() => (burger2.style.transform = 'rotate(-45deg)'), 500);
    burger3.style.opacity = '0';
    menuSearcher.style.transform = 'translateX(-26.5rem)';
  };

  const closeMenu = () => {
    if (menu && burger1 && burger2) {
      menu.style.transform = 'translate(15rem, -25rem) scale(0)';
      burger1.style.transform = 'translateY(1rem) rotate(0deg)';
      burger2.style.transform = 'translateY(0.9rem) rotate(0deg)';
      setTimeout(() => (burger1.style.transform = 'translateY(-0.8rem)'), 500);
      setTimeout(() => (burger2.style.transform = 'translateY(0)'), 500);
      setTimeout(() => (burger3.style.opacity = '1'), 500);
      menuSearcher.style.transform = 'translateX(0)';
      setTimeout(() => menu.querySelector('input').value = '', 600);
    }
   
  };

  const focusSearcher = () => {
    setOpen(true);
    menu && menu.querySelector('input').focus();
  }

  useEffect(() => {
    open ? openMenu() : closeMenu();
  });

  return (
    <header>
      <div className='header-banner'>
        <img src={palmSvg} alt='palm_icon' />
        <h1>Travel Miami</h1>
      </div>

      <nav>
        <h1>Explore Greater Miami And Beyond</h1>
        <div>
          <i
            className='fas fa-search fa-3x menu-searcher'
            onClick={() => focusSearcher()}
          ></i>
          <button className='header-menu' onClick={() => setOpen(!open)}>
            <div className='burgerBar burgerBar1'></div>
            <div className='burgerBar burgerBar2'></div>
            <div className='burgerBar burgerBar3'></div>
          </button>
        </div>
        <ul>
          <li>
            <input type='text' />
          </li>
          <li>
            <a href='#section2'>Events</a>
          </li>
          <li>
            <a href='!#'>Things To Do</a>
          </li>
          <li>
            <a href='!#'>Eats</a>
          </li>
          <li>
            <a href='!#'>Neighborhoods</a>
          </li>
          <li>
            <a href='!#'>Attractions</a>
          </li>
          <li>
            <a href='!#'>Travel Info</a>
          </li>
        </ul>
      </nav>
      <HeaderSlider slides={HeaderData} autoPlay={5} />
    </header>
  );
};

export default Header;
