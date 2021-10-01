import React from 'react';
import './SideNav.css';
import { Link } from 'react-scroll';

const SideNav = () => {
  return (
    <div className='side-nav'>
      <div className='side-nav__actions'>
        <Link
          className='side-nav__link'
          activeClass='active-side-navLink'
          to='el1'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <div className='side-nav__link-text'>ტერაპევტები</div>
          <span className='side-nav__link-dot'></span>
          <span className='side-nav__link-line'></span>
        </Link>
        <Link
          className='side-nav__link'
          activeClass='active-side-navLink'
          to='el2'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <div className='side-nav__link-text'>სერვისები</div>
          <span className='side-nav__link-dot'></span>
          <span className='side-nav__link-line'></span>
        </Link>
        <Link
          className='side-nav__link'
          activeClass='active-side-navLink'
          to='el3'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <div className='side-nav__link-text'>სერვისები</div>
          <span className='side-nav__link-dot'></span>
          <span className='side-nav__link-line'></span>
        </Link>
        <Link
          className='side-nav__link'
          activeClass='active-side-navLink'
          to='el4'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <div className='side-nav__link-text'>სერვისები</div>
          <span className='side-nav__link-dot'></span>
          <span className='side-nav__link-line'></span>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
