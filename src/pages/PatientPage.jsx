import React from 'react';
import './PatientPage.css';
import { Element } from 'react-scroll';
import Header from '../components/Header';

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
        test 1
      </Element>

      <Element name='el2' className='sec-wrapper'>
        test 2
      </Element>
    </div>
  );
};

export default PatientPage;
