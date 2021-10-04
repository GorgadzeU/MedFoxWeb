import React, { useState, useRef } from 'react';
import './RequestForm.css';
import { Input, TextArea } from '../../components/Input';
import emailjs from 'emailjs-com';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestFrom = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_rs8p0re',
        'template_luhct1m',
        {
          from_name: name,
          message: message,
          from_email: email,
        },
        'user_atQz3T86NCTxzC0AEaFvM'
      )
      .then(
        (result) => {
          // console.log(result.text);
          setLoading(false);
          toast.success('Email send successfully');
        },
        (error) => {
          // console.log(error.text);
          setLoading(false);
          toast.warning("Could't send email");
        }
      );

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      {loading && <Loading />}
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <form ref={form} className='request-from' onSubmit={sendEmail}>
        <Input
          type='text'
          label='Name'
          id='from_name'
          name='user_name'
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
        <Input
          type='email'
          label='Email'
          id='from_email'
          name='user_email'
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <TextArea
          name='message'
          label='Text'
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
        />

        {/* <Input type='submit' value='Send' /> */}
        <Button type='submit'>Send</Button>
      </form>
    </>
  );
};

export default RequestFrom;
