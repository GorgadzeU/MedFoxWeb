import React from 'react';
import './Staff.css';
import StaffCard from './StaffCard';

const Staff = () => {
  return (
    <div className='staff-section'>
      <h1>ტერაპევტები</h1>

      <div className='staff-cards'>
        <StaffCard
          name='ბექა გორგაძე'
          img='data:image/jpeg;base64,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'
        />
        <StaffCard
          name='ბექა გორგაძე'
          img='data:image/jpeg;base64,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'
        />
      </div>
    </div>
  );
};

export default Staff;