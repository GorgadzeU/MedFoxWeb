import React from 'react';
import './Footer.css';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillPhone,
} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__icons'>
        <span className='footer-icon'>
          <AiFillFacebook className='footer-icon__svg' size='40' />
        </span>
        <span className='footer-icon'>
          <AiFillInstagram className='footer-icon__svg' size='40' />
        </span>
        <span className='footer-icon'>
          <AiFillTwitterSquare className='footer-icon__svg' size='40' />
        </span>
      </div>

      <div className='footer__contacts'>
        <span className='footer__contacts-icon'>
          <AiFillPhone size='20' className='footer__contacts-icon-svg' />

          {`(+995)123123123`}
        </span>

        <span className='footer__contacts-icon'>
          <MdEmail size='20' className='footer__contacts-icon-svg' />{' '}
          test@medfox.com
        </span>
      </div>
    </footer>
  );
};

export default Footer;
