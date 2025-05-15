import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, notification } from 'antd'; 
import axios from 'axios';
import createbg from '../assets/createbg.jpg'

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

      notification.success({
        message: 'Account Created.',
        description: 'Your account has been created successfully.',
        placement:'topRight',
        duration: 3,
      });
    } catch (error) {
      console.error(error); 
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  return (
    <div className='h-screen bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${createbg})`}}>
      <div 
        class="flex justify-center items-center min-h-screen float-right flex-col pr-[13pc]"
      >
        <Form
          {...layout}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className ="w-[33vw] bg-transparent p-[25px] mt-[4em] rounded-[8px] border-[2px] border-[white] [box-shadow:0_4px_10px_rgba(0,_0,_0,_0.1)]"
        >
          <h2 
          className="text-[36px] text-center text-2xl font-bold mb-[2px]"
          >Create Account</h2>
          <p 
          className='text-center pt-[1px]'
        >Please sign up to book an appointment.</p>
          <Form.Item
          className='pt-[22px] pr-[12pc]'
            name={['username']}
            label="Name"
          >
            <Input className='w-[22vw]'/>
          </Form.Item>
          <Form.Item className='pr-[12pc]'
            name={['email']}
            label="Email"
          >
            <Input className='w-[22vw]' />
          </Form.Item>
          <Form.Item className='pr-[12pc]'
            name={['password']}
            label="Password"
          >
            <Input.Password className='w-[22vw]' />
          </Form.Item>
          <Form.Item className='pr-[12pc]'
            name={['mobile']}
            label="Mobile"
            rules={[
              { required: true, pattern: /^[0-9]{10}$/, message: 'Enter a valid 10-digit number!' },
            ]}
          >
            <Input className='w-[22vw]' />
          </Form.Item>
          <Form.Item className='pr-[12pc]'
            name={['address']}
            label="Address"
          >
            <Input.TextArea className="w-[650px]"/>
          </Form.Item>
          <Form.Item className='text-center item-center content-center pl-[6pc] pt-[12px]'>
            <Button className='w-[11vw] hover:border-[white]'
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
    </div>
  );
};

export default createAcc;
