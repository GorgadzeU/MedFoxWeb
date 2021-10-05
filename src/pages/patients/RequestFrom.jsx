import React, { useState, useRef } from 'react';
import './RequestForm.css';
import { Input, TextArea, CheckBox } from '../../components/Input';
import emailjs from 'emailjs-com';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import {
  BsFillArrowDownSquareFill,
  BsFillArrowUpSquareFill,
} from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestFrom = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showServices, setShowServices] = useState(false);

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
          from_phone: phone,
          services: services.join(', '),
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
    setPhone('');
    setServices([]);
    setShowServices(false);
  };

  const handleServiceChange = ({ target: { checked, name } }) => {
    if (checked) {
      if (services.includes(name)) {
        return;
      } else {
        const newServices = [...services, name];
        setServices(newServices);
      }
    } else {
      if (services.includes(name)) {
        const filteredServices = services.filter((s) => s !== name);
        setServices(filteredServices);
      } else {
        return;
      }
    }
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
        <Input
          type='number'
          label='Phone Number'
          id='from_phone'
          name='from_phone'
          value={phone}
          onChange={({ target: { value } }) => setPhone(value)}
        />

        <div
          className='services-dropdown_action'
          onClick={() => setShowServices((prevState) => !prevState)}
        >
          Show services
          {showServices ? (
            <BsFillArrowUpSquareFill />
          ) : (
            <BsFillArrowDownSquareFill />
          )}
        </div>

        <div
          className={
            showServices ? 'services-dropdown-show' : 'services-dropdown'
          }
        >
          <CheckBox
            type='checkbox'
            label='ფიზიკური თერაპია'
            id='serviceId1'
            name='physycal-therapy'
            disabled={!showServices}
            // value={phone}
            onChange={handleServiceChange}
          />
          <CheckBox
            type='checkbox'
            label='ცხენოთერაპიე'
            id='serviceId2'
            name='ipo-therapy'
            disabled={!showServices}
            // value={phone}
            onChange={handleServiceChange}
          />
          <CheckBox
            type='checkbox'
            label='სენსორული თერაპია'
            id='serviceId3'
            name='sensory-therapy'
            disabled={!showServices}
            // value={phone}
            onChange={handleServiceChange}
          />
        </div>

        <TextArea
          name='message'
          label='Text'
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
        />

        <Button type='submit'>Send</Button>
      </form>
    </>
  );
};

export default RequestFrom;
