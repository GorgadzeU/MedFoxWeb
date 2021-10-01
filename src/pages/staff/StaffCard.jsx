import React from 'react';
import './StaffCard.css';

const StaffCard = ({ img, name }) => {
  return (
    <div className='staff-card'>
      <img src={img} alt='staff' />

      <span className='staff-card__name'>{name}</span>
    </div>
  );
};

export default StaffCard;
