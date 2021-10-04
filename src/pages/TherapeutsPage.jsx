import React from 'react';
import './TherapeutsPage.css';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import { Element } from 'react-scroll';
import Staff from './staff/Staff';
const TherapeutsPage = () => {
  return (
    <div className='page therapeuts-page'>
      <Header />
      <SideNav navLinks={['თერაპევტები', 'შეთავაზებები', 'მოთხოვნა']} />

      <Element name='el1' className='sec-wrapper'>
        <div className='main-section__header'>
          <img
            src='https://i2.wp.com/www.befitphysio.com.au/wp-content/uploads/2019/01/saying.jpg?fit=1920%2C800&ssl=1'
            alt=''
          />
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            expedita magni molestiae reiciendis delectus, quos quibusdam
            similique hic sit veritatis?
          </h3>
        </div>
        <Staff />
      </Element>

      <Element name='el2' className='sec-wrapper'>
        <h1>შეთავაზებები</h1>
      </Element>

      <Element name='el3' className='sec-wrapper'>
        <h1>გაგზავნა</h1>
      </Element>
    </div>
  );
};

export default TherapeutsPage;
