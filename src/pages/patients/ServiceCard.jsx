import React, { useState } from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, content }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className={`service-card ${showFull && 'show-full'}`}>
      <h1>{title}</h1>
      <div className='service-card__content'>{content}</div>
      <span
        className='service-card__aciton'
        onClick={() => setShowFull((prevState) => !prevState)}
      >
        Show {showFull ? 'less' : 'more'}...
      </span>
    </div>
  );
};

export default ServiceCard;
