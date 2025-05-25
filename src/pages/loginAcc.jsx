import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { Button, Form, Input, notification } from 'antd';
import loginbg from '../assets/loginbg.avif'

const LoginAcc = () => {
  const navigate = useNavigate(); 

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", values);

      if (response.data.success) {
        sessionStorage.setItem("email", response.data.email);
        localStorage.setItem('token', response.data.token);

        notification.success({
          message: 'Login Successful',
          description: 'Welcome back! You have logged in successfully.',
          placement: 'topRight',
        });

        setTimeout(() => {
          navigate(response.data.redirectTo || "/home");
        }, 1500);
      } else {
        notification.error({
          message: 'Login Failed',
          description: response.data.message || 'Invalid credentials.',
          placement: 'topRight',
        });
      }
    } catch (error) {
      console.log("Login failed: ", error);
      notification.error({
        message: 'Login Failed',
        description: error?.response?.data?.message ||'Something went wrong. Please try again.',
        placement: 'topRight',
      });
    }
  };

  return (
    <div className='h-screen bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${loginbg})`}}>
      <div class="flex justify-center items-center min-h-screen flex-col ">
        <Form
          name="basic"
          onFinish={onFinish}
          className ="bg-transparent p-[25px] mt-[4em] rounded-[8px] border-[2px] border-[white] [box-shadow:0_4px_10px_rgba(0,_0,_0,_0.1)]"
        >
          <h2 className="text-center text-[32px] mb-[10px] text-[#444] pt-[5px]">Login Account</h2>
          <p className="text-center pb-[16px]">Please login to book an appointment.</p>
          <Form.Item
            label="Email"
            name="email"
            className="block mb-[2pc] pt-[12px] text-[14px] text-[#555]"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            className="block mb-[5px] text-[14px] text-[#555]"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <div className="text-right mb-4">
            <NavLink to="/forgotPassword" className="text-blue-400 hover:underline text-sm">
              Forgot Password?
            </NavLink>
          </div>

          <Form.Item className='pt-[22px]'>
            <Button type="primary" htmlType="submit" className="w-full bg-[#0066cc] text-white rounded-[5px] hover:bg-[#004b99] hover:border-[white]">
              Login
            </Button>
          </Form.Item>

          <p className="pt-[2em] text-center">Don't have an account? <NavLink to="/">Create here</NavLink></p>
        </Form>
      </div>
    </div>
  );
};

export default LoginAcc;
