import React from 'react';
import {
  Form,
  Input,
  Select,
  DatePicker,
  TimePicker,
  Radio,
  Button,
  message,
} from 'antd';

import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, RightOutlined } from '@ant-design/icons';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const { Option } = Select;
const { TextArea } = Input;

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const BookAppointment = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const onFinish = async(values) => {
    if (!stripe || !elements) {
      message.error('Stripe has not loaded yet.');
      return;
    }

    const formattedData = {
      ...values,
      date: values.date?.format('YYYY-MM-DD'),
      time: values.time?.format('HH:mm'),
    };

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      message.error('Card element not found');
      return;
    }
    try {
      const paymentRes = await axios.post("http://localhost:4000/api/auth/createPayment", {
        amount: 5000,
      });
      const clientSecret = paymentRes.data.clientSecret;

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: `${values.firstName} ${values.lastName}`,
            email: values.email,
          },
        },
      });

      if (error) {
        console.error(error);
        message.error(error.message || 'Payment failed.');
        return;
      }

      if (paymentIntent.status === 'succeeded') {
        message.success('Payment successful!!');
        const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        const updatedAppointments = [...existingAppointments, formattedData];
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
        try {
                    await axios.post('http://localhost:4000/api/auth/sendEmail', {
                        email: values.email,
                        firstName: values.firstName,
                        date: values.date,
                        time: formattedData.time,
                        doctor: values.doctor,
                    });
                } catch (error) {
                    console.log('Failed to send confirmation email', error);
                    message.error('Failed to send confirmation email.');
                }
        message.success('Appointment booked successfully!');
        form.resetFields();
        navigate('/dashboard');
        window.location.reload();
      }else{
        message.error('Payment did not succeed.');
      }
    }
    catch(error){
      console.error('Error:',error);
      message.error('An error occurred during payment.');
    }
  };

  const onCancel = () => {
    form.resetFields();
    message.info('Form cleared.');
  };

  return (
    <div className='pl-[19px] pr-[19px] min-h-screen py-[20px]'>
      <div className='flex flex-row gap-[12px]'>
        <h1 className='pt-[13px] pb-[13px] font-bold text-[26px]'>Book Appointment</h1>
        <RightOutlined className="text-[14px]" />
        <HomeOutlined
          className='text-[24px] cursor-pointer transition'
          onClick={() => navigate('./DoctorDashboard')}
        />
      </div>

      <div className='bg-[#ffffffb1] rounded-[8px] mt-[10px] p-[20px]'>
        <h2 className='text-[18px] pb-[20px]'>Appointment Form</h2>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <div className="flex flex-wrap gap-[6px]">
            <div className="w-full md:w-[48%]">
              <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}>
                <Input className='h-[47px]' placeholder="Enter your first name" />
              </Form.Item>
            </div>

            <div className="w-full md:w-[48%]">
              <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
                <Input className='h-[47px]' placeholder="Enter your last name" />
              </Form.Item>
            </div>

            <div className="w-full md:w-[48%]">
              <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
                <Radio.Group className="flex gap-4">
                  <Radio value="Male">Male</Radio>
                  <Radio value="Female">Female</Radio>
                  <Radio value="Other">Other</Radio>
                </Radio.Group>
              </Form.Item>
            </div>

            <div className="w-full md:w-[48%]">
              <Form.Item label="Address" name="address" rules={[{ required: true }]}>
                <Input className='h-[47px]' placeholder="Enter your address" />
              </Form.Item>
            </div>

            <div className="w-full md:w-[48%]">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter email' },
                  { type: 'email', message: 'Invalid email' },
                ]}
              >
                <Input className='h-[47px]' placeholder="example@mail.com" />
              </Form.Item>
            </div>

            <div className="w-full md:w-[48%]">
              <Form.Item label="Mobile No." name="mobile" rules={[{ required: true }]}>
                <Input className='h-[47px]' placeholder="Enter mobile number" />
              </Form.Item>
            </div>

            <div className="w-full md:w-[48%]">
              <Form.Item label="Consulting Doctor" name="doctor" rules={[{ required: true }]}>
                <Select className='h-[47px]' placeholder="Select a doctor">
                  <Option value="Dr. Brittany">Dr. Brittany</Option>
                  <Option value="Dr. Henry">Dr. Henry</Option>
                  <Option value="Dr. John">Dr. John</Option>
                  <Option value="Dr. JohnMillar">Dr. John Millar</Option>
                  <Option value="Dr. Mukti">Dr. Mukti</Option>
                  <Option value="Dr. Raymond">Dr. Raymond</Option>
                  <Option value="Dr. Richard">Dr. Richard</Option>
                  <Option value="Dr. Theresa">Dr. Theresa</Option>
                </Select>
              </Form.Item>
            </div>

            <div className="w-full md:w-[48%]">
              <Form.Item label="Date of Appointment" name="date" rules={[{ required: true }]}>
                <DatePicker
                  className='h-[47px]'
                  disabledDate={(current) => current && current < moment().startOf('day')}
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </div>

            <div className="w-full md:w-[48%]">
              <Form.Item label="Time of Appointment" name="time" rules={[{ required: true }]}>
                <TimePicker use12Hours format="h:mm a" style={{ width: '100%' }} />
              </Form.Item>
            </div>
          </div>

          <Form.Item label="Describe your condition" name="condition" rules={[{ required: true }]}>
            <TextArea rows={4} placeholder="Describe your symptoms or condition..." />
          </Form.Item>

          <Form.Item
            label="Payment Details"
            required
            rules={[
              {
                validator: (_, value) => {
                  // Custom validation for CardElement - no direct value, so just check if card element exists
                  if (!elements || !elements.getElement(CardElement)) {
                    return Promise.reject(new Error('Please enter your card details'));
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <div
              style={{
                border: '1px solid #d9d9d9',
                padding: '10px',
                borderRadius: '4px',
                minHeight: '40px',
              }}
            >
              <CardElement options={CARD_ELEMENT_OPTIONS} />
            </div>
          </Form.Item>
          <div className="flex justify-center gap-4 mt-4">
            <Button type="primary" htmlType="submit" disabled={!stripe}>Submit & Pay</Button>
            <Button htmlType="button" onClick={onCancel}>Cancel</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BookAppointment;
