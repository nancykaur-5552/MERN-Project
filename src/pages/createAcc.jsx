import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd'; 
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const createAcc = () => {
  const loginAcc = () => {
    window.open('/loginAcc', '_self');
  };

  const onFinish = async (values) => {
    console.log('Success: ', values);
    try {
      const response = await axios.post("http://localhost:4000/api/auth/register",values);
      console.log(response.data); 
    } catch (error) {
      console.error(error); 
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh', 
          flexDirection: 'column',
          
        }}
      >
        <Form
          {...layout}
          onFinish={onFinish} className="bg-[#ffffff] p-[25px] mt-[4em] rounded-[8px] [box-shadow:0_4px_10px_rgba(0,_0,_0,_0.1)]"
          onFinishFailed={onFinishFailed}
          style={{ maxWidth: 600 ,
            backgroundColor:'#ffffff',

          }}
        >
          <h2 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',            
          }}
          >Create Account</h2>
          <p 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',            
          }}
          >Please sign up to book an appointment.</p>
          <Form.Item
            name={['username']}
            label="Name"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['email']}
            label="Email"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['password']}
            label="Password"
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name={['mobile']}
            label="Mobile"
            rules={[
              { required: true, pattern: /^[0-9]{10}$/, message: 'Enter a valid 10-digit number!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['address']}
            label="Address"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',            
            }}>
            <Button 
            htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <p className="login">
          Already have an account?
          <Link to="/loginAcc" onClick={loginAcc}>
            Login here
          </Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default createAcc;
