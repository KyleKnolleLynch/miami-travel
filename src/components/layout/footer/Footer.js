import React from 'react';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-container'>
        <div className='brand-title-footer'>
          <p>Miami</p>
          <span>Travel Miami and its Beaches</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='#!'>About GMPTB</a>
            </li>
            <li>
              <a href='#!'>Travel Guidelines</a>
            </li>
            <li>
              <a href='#!'>Meetups</a>
            </li>
            <li>
              <a href='#!'>Partnerships</a>
            </li>
            <li>
              <a href='#!'>Professionals</a>
            </li>
            <li>
              <a href='#!'>Careers</a>
            </li>
            <li>
              <a href='#!'>Accessibility</a>
            </li>
            <li>
              <a href='#!'>Resources</a>
            </li>
            <li>
              <a href='#!'>Disclaimer</a>
            </li>
          </ul>
        </nav>
        <div className='contacts-box'>
          <i className='las la-map-marked-alt la-3x'></i>
          <div>
            <p>Greater Miami Prefecture & Travel Center</p>
            <p>000 Ocean Drive</p>
            <p>Suite 0000</p>
            <p>Miami, FL 33131 USA</p>
            <br />
            <p>ph. (555) 555-5555</p>
            <p>Contact Us</p>
          </div>
        </div>

        <ul className='footer-socials'>
          <li>
            <a href='#!'>
              <i className='lab la-instagram la-4x'></i>
            </a>
          </li>
          <li>
            <a href='#!'>
              <i className='lab la-twitter la-4x'></i>
            </a>
          </li>
          <li>
            <a href='#!'>
              <i className='lab la-facebook-square la-4x'></i>
            </a>
          </li>
          <li>
            <a href='#!'>
              <i className='lab la-youtube la-4x'></i>
            </a>
          </li>
          <li>
            <a href='#!'>
              <i className='lab la-linkedin la-4x'></i>
            </a>
          </li>
        </ul>
        <a href='#header' className='footer-top-btn'>
          To Top <i className='las la-angle-up'></i>
        </a>
        <a href='#!' className='newsletter-btn'>
          <i className='las la-envelope'></i>
          Sign-up For Newsletter
        </a>
        <div className='footer-copyrights'>
          <p>&copy; Designed and Coded by Kyle Lynch 2020</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
