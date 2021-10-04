import React from 'react';
import './Header.css';
import { withRouter } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = ({ history }) => {
  return (
    <div className='header'>
      <span className='header__logo' onClick={() => history.push('/')}>
        <img src={Logo} alt='header logo' />
      </span>
    </div>
  );
};

export default withRouter(Header);
