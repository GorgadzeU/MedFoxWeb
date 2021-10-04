import React from 'react';
import './RequestForm.css';
import { Input, TextArea } from '../../components/Input';

const RequestFrom = () => {
  return (
    <form className='request-from'>
      <Input
        type='text'
        label='Name'
        id='name-input'
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        type='email'
        label='Email'
        id='email-input'
        onChange={(e) => console.log(e.target.value)}
      />
      <TextArea label='Text' onChange={(e) => console.log(e.target.value)} />
    </form>
  );
};

export default RequestFrom;
