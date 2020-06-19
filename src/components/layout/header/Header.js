import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll';
import palmSvg from '../../../images/icons/palm.svg';
import searchSvg from '../../../images/icons/search.svg';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState(
    'translate(15rem, -25rem) scale(0)'
  );
  const [burger1Style, setBurger1Style] = useState({});
  const [burger2Style, setBurger2Style] = useState({});
  const [burger3Style, setBurger3Style] = useState(1);
  const [burgerTitle, setBurgerTitle] = useState(1);
  const [menuSearcherStyle, setMenuSearcherStyle] = useState('translateX(0)');
  const [menuInputVal, setMenuInputVal] = useState('');

  useEffect(() => {
    if (!open) {
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
      setBurger3Style(1);
      setBurgerTitle(1);
      setMenuSearcherStyle('translateX(0)');
      setTimeout(() => setMenuInputVal(''), 600);
    } else {
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
      setBurger3Style(0);
      setBurgerTitle(0);
      setMenuSearcherStyle('translateX(-28rem)');
    }
  }, [open]);

  const focusSearcher = () => {
    setOpen(true);
    document.querySelector('.menu-input').focus();
  };

  return (
    <header id='header'>
      <div className='header-banner'>
        <Link to='/'>
          <div className='header-logo'>
            <img src={palmSvg} alt='palm_icon' />
          </div>
        </Link>
        <Link to='/'>
          <div className='header-title'>
            <h1>Travel Miami</h1>
          </div>
        </Link>
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
            <p className='burger-title' style={{ opacity: burgerTitle }}>
              MENU
            </p>
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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='section3' smooth={'true'} duration={600}>
              Events
            </Link>
          </li>
          <li>
            <Link to='section4' smooth={'true'} duration={700}>
              Eats
            </Link>
          </li>
          <li>
            <Link to='/neighborhoods'>Neighborhoods</Link>
          </li>
          <li>
            <Link to='section6' smooth={'true'} duration={900}>
              Livecams
            </Link>
          </li>
          <li>
            <Link to='footer' smooth={'true'} duration={1000}>
              Travel Info
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
