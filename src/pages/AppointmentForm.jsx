import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
    Form,
    Input,
    Select,
    TimePicker,
    Radio,
    Button,
    message,
} from 'antd';

import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const { TextArea } = Input;

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    },
};

const AppointmentForm = () => {
    const [form] = Form.useForm();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [cardComplete, setCardComplete] = useState(false);

    const onFinish = async (values) => {
        console.log("OnFinish called with values:", values);
        if (!stripe || !elements) {
            message.error('Stripe has not loaded yet. Please wait.');
            return;
        }

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            message.error('Card element not found.');
            return;
        }

        if (!cardComplete) {
            message.error('Please enter complete card details.');
            return;
        }

        const formattedData = {
            ...values,
            date: values.date,
            time: values.time && values.time.format ? values.time.format('HH:mm') : values.time,
        };
        try {
            const amount = 5000;
            const res = await axios.post("http://localhost:4000/api/auth/createPayment", { amount });
            const clientSecret = res.data.clientSecret;

            if (!clientSecret) {
                throw new Error("Failed to retrieve client secret.");
            }

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: `${values.firstName} ${values.lastName}`,
                        email: values.email,
                    },
                },
            });
            if (result.error) {
                message.error(result.error.message);
                return;
            } else if (result.paymentIntent.status === "succeeded") {

                try{
                    const token = localStorage.getItem('token');
                    await axios.post("http://localhost:4000/api/auth/bookAppointment", formattedData,{
                        headers:{
                            Authorization:`Bearer ${token}`,
                        },
                    });

                    const newAppointment = {
                        key: Date.now(),
                        ...formattedData,
                    };

                    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
                    storedAppointments.push(newAppointment);
                    localStorage.setItem('appointments', JSON.stringify(storedAppointments));
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
                message.success('Payment successful! Appointment booked.');
                form.resetFields();
                navigate('/BookedAppointments', { state: { appointment: formattedData } });

        }catch (error) {
            message.error("Payment failed. Try again.");
            console.error(error);
        }
        }
    }catch(error){
        message.error("Payment failed. Try again.");
        console.error(error);
    }
    };
    const onCancel = () => {
        form.resetFields();
        message.info('Form cleared.');
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center ml-[52px] mr-[52px] border-[2px] border-[black] mt-[3pc]">
                <h1 className='pt-[1pc]'>Book Appointment</h1>
                <Form className="pl-[3pc] pt-[2pc] pb-[2pc] pr-[3pc]" layout="vertical" form={form} onFinish={onFinish}>
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
                                <Input
                                    className='h-[47px]'
                                    type="date"
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

                    <Form.Item label="Payment Details">
                        <CardElement options={CARD_ELEMENT_OPTIONS}
                            onChange={(event) => {
                                setCardComplete(event.complete);
                            }} />
                    </Form.Item>


                    <div className="flex justify-center gap-[16px]">
                        <Button type="primary" htmlType="submit" disabled={!stripe || !elements}>Pay & Book</Button>
                        <Button htmlType="button" onClick={onCancel}>Cancel</Button>
                    </div>
                </Form>

            </div>
            <Footer />
        </>
    )
}

export default AppointmentForm
