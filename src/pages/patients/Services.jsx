import React from 'react';
import './Services.css';

import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div className='services'>
      <ServiceCard
        title='test'
        content='Physiotherapy helps to restore movement and 
        function when someone is affected by injury,
         illness or disability. It can also help to reduce
          your risk of injury or illness in the future. 
          It takes a holistic approach that involves the patient 
          directly in their own care.
          Physiotherapy helps to restore movement and 
        function when someone is affected by injury,
         illness or disability. It can also help to reduce
          your risk of injury or illness in the future. 
          It takes a holistic approach that involves the patient 
          directly in their own care.'
      />

      <ServiceCard
        title='test'
        content='Physiotherapy helps to restore movement and 
        function when someone is affected by injury,
         illness or disability. It can also help to reduce
          your risk of injury or illness in the future. 
          It takes a holistic approach that involves the patient 
          directly in their own care.
          Physiotherapy helps to restore movement and 
        function when someone is affected by injury,
         illness or disability. It can also help to reduce
          your risk of injury or illness in the future. 
          It takes a holistic approach that involves the patient 
          directly in their own care.'
      />
    </div>
  );
};

export default Services;
