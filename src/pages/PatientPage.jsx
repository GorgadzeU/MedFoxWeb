import React from 'react';
import './PatientPage.css';
import { Element } from 'react-scroll';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Staff from './staff/Staff';
import Services from './patients/Services';
import RequestForm from './patients/RequestFrom';

const PatientPage = () => {
  return (
    <div className='page patient-page'>
      <Header />
      <SideNav />

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
        <h1>სერვისები</h1>
        <Services />
      </Element>

      <Element name='el3' className='sec-wrapper'>
        <h1>სერვისის მოთხოვნა</h1>
        <RequestForm />
      </Element>
    </div>
  );
};

export default PatientPage;
