import React from 'react';
import './HomePage.css';
import Logo from '../assets/logo.png';
import Button from '../components/Button';

const HomePage = ({ history }) => {
  return (
    <div className='page home-page'>
      <header className='home-page__header'>
        <img src={Logo} alt='main logo' />
        <h1>MEDFOX</h1>
      </header>

      <section className='home-page__info'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat
        velit libero repudiandae perspiciatis, vel, hic earum explicabo numquam,
        maxime inventore corrupti excepturi. Vel odit voluptates, commodi veniam
      </section>

      <div className='home-page__actions'>
        <Button className='x2-btn' onClick={() => history.push('/patient')}>
          პაციენტი
        </Button>
        <Button className='x2-btn' onClick={() => history.push('/therapeut')}>
          თერაპევტი
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
