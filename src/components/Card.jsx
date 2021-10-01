import React from 'react';
import './Card.css';

const Card = ({ title, content }) => {
  return (
    <div className='card'>
      <h1>{title}</h1>
      <span className='card__content'>{content}</span>
    </div>
  );
};

export default Card;
