import React, { useState } from 'react'
import { HomeOutlined, RightOutlined } from '@ant-design/icons';
import { Form, Input, InputNumber, Button, message as antMessage } from 'antd';
import { useNavigate } from 'react-router-dom';
import location from '../assets/location.png'
import contacts from '../assets/contacts.png'
import internet from '../assets/internet.png'
import message from '../assets/message.png'
import axios from 'axios';

const Contact = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
        name: '',
        address: '',
        mobile: '',
        message: '',
    });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onReset = () => {
    form.resetFields();
  };
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const response = await axios.post('http://localhost:4000/api/auth/sendContactMail', formData);
      if (response.data.success) {
        setSuccessMsg('Message sent successfully!');
        form.resetFields();
      } else {
        setErrorMsg('Failed to send message. Please try again.');
      }
    } catch (error) {
      setErrorMsg('Error sending message. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-row flex-wrap gap-[12px]">
        <h1 className="pt-[13px] pb-[13px] font-bold text-[26px]">Contact</h1>
        <RightOutlined className="text-[14px]" />
        <HomeOutlined
          className="text-[24px] cursor-pointer transition"
          onClick={() => navigate('./DoctorDashboard')}
        />
      </div>
      <div className='bg-[#ffffff77] rounded-[13px] p-[15px]'>
        <div className="w-full h-[57vh] flex flex-wrap object-fill items-center justify-center pt-[4em]">
          <p><iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.7183870318736!2d74.8891916754771!3d31.61417547417124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197cb957eaf97d%3A0x2127b4207f6390e0!2sAmritsar%20Hospital!5e0!3m2!1sen!2sin!4v1739109912775!5m2!1sen!2sin"
            width="1000"
            height="450"
            style={{ border: '0' }} allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" /></p>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center text-center gap-[61px] mt-[8em]">
          <div className="bg-[rgba(249,253,255,0.53)] w-[200px] h-[250px] rounded-[10px]">
            <img className="h-[105px] w-[103px] mt-[22px] ml-[43px]" src={location} alt="Address" />
            <h3 className="mt-[4px] font-bold"
              style={{ fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif' }}>ADDRESS</h3>
            <p className="text-[medium] mt-[10px]">JV7R+MPC, 100 Feet Rd, near Sultanwind Road, Sudarshan Nagar, Amritsar.
            </p>
          </div>
          <div className="bg-[rgba(249,253,255,0.53)] w-[200px] h-[250px] rounded-[10px]">
            <img className="h-[105px] w-[103px] mt-[22px] ml-[43px]" src={contacts} alt="Address" />
            <h3 className="mt-[4px] font-bold"
              style={{ fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif' }}>CONTACT NUMBER</h3>
            <p className="text-[medium] mt-[10px]">+91-9087654323</p>
          </div>
          <div className="bg-[rgba(249,253,255,0.53)]  w-[200px] h-[250px] rounded-[10px]">
            <img className="h-[105px] w-[103px] mt-[22px] ml-[43px]" src={message} alt="Address" />
            <h3 className="mt-[4px] font-bold"
              style={{ fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif' }}>EMAIL ADDRESS</h3>
            <p className="text-[medium] mt-[10px]">appointease@gmail.com</p>
          </div>
          <div className="bg-[rgba(249,253,255,0.53)] w-[200px] h-[250px] rounded-[10px]">
            <img className="h-[105px] w-[103px] mt-[22px] ml-[43px]" src={internet} alt="Address" />
            <h3 className="mt-[4px] font-bold"
              style={{ fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif' }}> WEBSITE</h3>
            <p className="text-[medium] mt-[10px]">Appointease.com</p>
          </div>
        </div>
        <div className="mt-[4em] mb-[4em] flex justify-center">
          <div className="bg-[rgba(249,253,255,0.53)] p-[2em] rounded-[12px] shadow-md w-full max-w-[600px]">
            <h2 className="text-[24px] font-bold text-center mb-6">Send Us a Message</h2>
            <Form
              layout="vertical"
              form={form}
              onFinish = {handleSubmit}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Your name" name="name" onChange={handleChange} value={formData.name}/>
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please enter your email' }]}
              >
                <Input placeholder="Your email" name="email" onChange={handleChange} value={formData.email}  />
              </Form.Item>

              <Form.Item
                label="Subject"
                name="subject"
                rules={[
                  { required: true, message: 'Please enter Subject' },
                ]}
              >
                <Input placeholder="Subject" name="subject" onChange={handleChange} value={formData.subject} />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <Input.TextArea rows={4} placeholder="Your message" name="message" onChange={handleChange} value={formData.message} />
              </Form.Item>

              <Form.Item>
                <div className="flex flex-row justify-center gap-[12px]">
                  <Button type="primary"
                    disabled={loading}
                    htmlType="submit">{loading ? 'Sending...' : 'Send Message'}</Button>
                  {successMsg && (
                    <p className="text-green-600 mt-2">{successMsg}</p>
                  )}
                  {errorMsg && (
                    <p className="text-red-600 mt-2">{errorMsg}</p>
                  )}
                  <Button onClick={onReset}>Cancel</Button>
                </div>
              </Form.Item>

            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
