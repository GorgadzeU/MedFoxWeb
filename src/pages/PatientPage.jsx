import React from 'react';
import './PatientPage.css';
import { Element } from 'react-scroll';
import Header from '../components/Header';
import Staff from './staff/Staff';
import Services from './patients/Services';

const PatientPage = () => {
  return (
    <div className='page patient-page'>
      <Header />

      <section className='patient-page__info'>
        <h2>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          molestiae impedit ex odit nostrum magni vitae saepe aut quas
          inventore, accusamus voluptate. Obcaecati ad vitae deserunt laudantium
          harum vero doloribus, vel eveniet magnam dolores rem assumenda beatae
          atque quos possimus pariatur! Aliquam maiores vero eaque eveniet, ipsa
          ab officia recusandae!
        </h2>
      </section>

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
        <Services />
      </Element>

      <Element name='el3' className='sec-wrapper'>
        test 3
      </Element>

      <Element name='el4' className='sec-wrapper'>
        test 4
      </Element>
    </div>
  );
};

export default PatientPage;
