import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className='loading'>
      <svg>
        <circle
          cx='50'
          cy='50'
          r='40'
          stroke='#f56e51'
          strokeDasharray='78.5 235.5'
          strokeWidth='3'
          fill='none'
        />
        <circle
          cx='50'
          cy='50'
          r='30'
          stroke='#429eab'
          strokeDasharray='62.8 188.8'
          strokeWidth='3'
          fill='none'
        />
        <circle
          cx='50'
          cy='50'
          r='20'
          stroke='#aed6d9'
          strokeDasharray='47.1 141.3'
          strokeWidth='3'
          fill='none'
        />
      </svg>
    </div>
  );
};

export default Loading;
