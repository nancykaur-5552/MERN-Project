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

import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, RightOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const BookAppointment = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    const formattedData = {
      ...values,
      date: values.date?.format('YYYY-MM-DD'),
      time: values.time?.format('HH:mm'),
    };
    console.log('Appointment Details:', formattedData);
    message.success('Appointment booked successfully!');
    form.resetFields();
  };

  const onCancel = () => {
    form.resetFields();
    message.info('Form cleared.');
  };

  return (
    <div className='pl-[19px] pr-[19px] min-h-screen py-[20px]'>
      <div className='flex flex-row gap-[12px]'>
        <h1 className='pt-[13px] pb-[13px] font-bold text-[26px]'>Book Appointment</h1>
        <RightOutlined className="text-[14px]"/>
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
                  <Option value="Dr. Smith">Dr. Smith</Option>
                  <Option value="Dr. Gupta">Dr. Gupta</Option>
                  <Option value="Dr. Sharma">Dr. Sharma</Option>
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

          <div className="flex justify-center gap-4 mt-4">
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button htmlType="button" onClick={onCancel}>Cancel</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BookAppointment;
