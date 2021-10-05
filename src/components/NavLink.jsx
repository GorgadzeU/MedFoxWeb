import React from 'react';
import './NavLink.css';
import { Link } from 'react-scroll';
const NavLink = ({ text, el }) => {
  return (
    <Link
      className='side-nav__link'
      activeClass='active-side-navLink'
      to={el}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
    >
      <div className='side-nav__link-text'>{text}</div>
      {/* <span className='side-nav__link-dot'></span>
      <span className='side-nav__link-line'></span> */}
    </Link>
  );
};

export default NavLink;
