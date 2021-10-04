import React from 'react';
import './SideNav.css';
import NavLink from './NavLink';

const SideNav = ({ navLinks }) => {
  return (
    <div className='side-nav'>
      <div className='side-nav__actions'>
        {navLinks.length &&
          navLinks.map((l, i) => {
            return <NavLink key={i} el={`el${i + 1}`} text={l} />;
          })}
      </div>
    </div>
  );
};

export default SideNav;
