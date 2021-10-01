import React from 'react';
import './Header.css';
import { withRouter } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Header = ({ history }) => {
  return (
    <div className='header'>
      <span className='header__logo' onClick={() => history.push('/')}>
        <img src={Logo} alt='header logo' />
      </span>

      <nav className='header__nav'>
        <Link
          className='nav-link'
          activeClass='active-navLink'
          to='el1'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          თერაპევტები
        </Link>

        <Link
          className='nav-link'
          activeClass='active-navLink'
          to='el2'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          სერვისები
        </Link>

        <Link
          className='nav-link'
          activeClass='active-navLink'
          to='el3'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          მოთხოვნა
        </Link>

        <Link
          className='nav-link'
          activeClass='active-navLink'
          to='el4'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          კონტაქტი
        </Link>
      </nav>
    </div>
  );
};

export default withRouter(Header);
