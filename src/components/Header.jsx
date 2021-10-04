import React from 'react';
import './Header.css';
import { withRouter, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = ({ history }) => {
  return (
    <div className='header'>
      <span className='header__logo' onClick={() => history.push('/')}>
        <img src={Logo} alt='header logo' />
      </span>
      <nav className='header__nav'>
        <NavLink
          to='/patient'
          className='header__nav-link'
          activeClassName='header__nav-link-active'
        >
          პაციენტი
        </NavLink>
        <NavLink
          to='/therapeut'
          className='header__nav-link'
          activeClassName='header__nav-link-active'
        >
          თერაპევტი
        </NavLink>
      </nav>
    </div>
  );
};

export default withRouter(Header);
