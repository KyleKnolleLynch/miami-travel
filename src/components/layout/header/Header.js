import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-scroll';
import palmSvg from '../../../images/icons/palm.svg'
import searchSvg from '../../../images/icons/search.svg'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [menuStyle, setMenuStyle] = useState('')
  const [burger1Style, setBurger1Style] = useState({})
  const [burger2Style, setBurger2Style] = useState({})
  const [burger3Style, setBurger3Style] = useState(null)
  const [burgerTitle, setBurgerTitle] = useState(null)
  const [menuSearcherStyle, setMenuSearcherStyle] = useState('')
  const [menuInputVal, setMenuInputVal] = useState('')

  useEffect(() => {
    if (!open) {
      //  closed nav menu state
      setMenuStyle('translate(15rem, -25rem) scale(0)')
      setBurger1Style({ translateY: '1rem', rotate: '0deg' })
      setBurger2Style({ translateY: '0.9rem', rotate: '0deg' })
      setBurger3Style(1)
      setBurgerTitle(1)
      setMenuSearcherStyle('translateX(0)')

      //  close animation delay
      const delayClose = () => {
        setBurger1Style(prev => ({ ...prev, translateY: '-0.8rem' }))
        setBurger2Style(prev => ({ ...prev, translateY: '0' }))
      }

      setTimeout(() => delayClose(), 500)
      setTimeout(() => setMenuInputVal(''), 600)
    } else {
      //  opened nav menu state
      setMenuStyle('translate(0, 0) scale(1)')
      setBurger1Style({ translateY: '1rem', rotate: '0deg' })
      setBurger2Style({ translateY: '0.9rem', rotate: '0deg' })
      setBurger3Style(0)
      setBurgerTitle(0)
      setMenuSearcherStyle('translateX(-28rem)')

      //  open animation delay
      const delayOpen = () => {
        setBurger1Style({ translateY: '0', rotate: '-135deg' })
        setBurger2Style({ translateY: '0', rotate: '-45deg' })
      }
      setTimeout(() => delayOpen(), 500)
    }
  }, [open])

  const focusSearcher = () => {
    setOpen(true)
    document.querySelector('.menu-input').focus()
  }

  return (
    <header id='header'>
      <div className='header-banner'>
        <Link to='/'>
          <div className='header-logo'>
            <img src={palmSvg} alt='palm_icon' loading='lazy' />
          </div>
        </Link>
        <Link to='/'>
          <div className='header-title'>
            <h1>Miami Travel</h1>
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
            loading='lazy'
            style={{
              transform: menuSearcherStyle,
              width: '34px',
              height: '34px',
            }}
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
            <p className='offscreen'>Menu</p>
          </button>
        </div>
        <ul style={{ transform: menuStyle }}>
          <li>
            <input
              type='text'
              id='searchbar'
              className='menu-input'
              value={menuInputVal}
              onChange={e => setMenuInputVal(e.target.value)}
            />
            <label htmlFor='searchbar'>search</label>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a href='/#section3'>Events</a>
          </li>
          <li>
            <a href='/#section4'>Eats</a>
          </li>
          <li>
            <Link to='/neighborhoods'>Neighborhoods</Link>
          </li>
          <li>
            <Link to='/livecams'>Livecams</Link>
          </li>
          <li>
            <a href='/#footer'>Travel Info</a>
          </li>
          <li>
            <Link to='/credits' href='#footer'>
              Credits
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
