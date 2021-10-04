import React from 'react';
import './Input.css';

export const Input = ({ label, type, value, onChange, id, ...otherProps }) => {
  return (
    <div className='input-wrapper'>
      <label htmlFor={id}>{label}</label>
      <input
        className='input'
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
};

export const TextArea = ({ label, value, onChange }) => {
  return (
    <div className='input-wrapper'>
      <label htmlFor=''>{label}</label>
      <textarea
        placeholder='Your message here...'
        className='textarea'
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
