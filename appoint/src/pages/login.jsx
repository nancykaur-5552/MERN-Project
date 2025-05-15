import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, notification } from 'antd';
import Logo1 from '../assets/Logo1.png';
import axios from 'axios';
import BaseURL from '../../../config';
import loginbg from '../assets/loginbg.avif';

const login = () => {
    const Navigate = useNavigate();
    const onFinish = async (values) => {
        console.log('Success:', values);
        try {
            const response = await axios.post(`${BaseURL}/api/auth/login`, values);

            if (response.data.success) {
                sessionStorage.setItem("email", response.data.email);
                sessionStorage.setItem("password", response.data.password);

                notification.success({
                    message: "Login Successful",
                    description: "Welcome back! You have logged in successfully.",
                    placement: "topRight",
                });
                setTimeout(() => {
                    Navigate(response.data.redirectTo || "/dashboard");
                }, 1500);
            }
            else {
                notification.error({
                    message: "Login Failed",
                    description: response.data.message || "Invalid credentials.",
                    placement: "topRight",
                });
            }
        }
        catch (error) {
            console.log("Login Failed: ", error);
            notification.error({
                message: "Login Failed",
                description: error?.response?.data?.message || "Something went wrong. Please try again.",
                placement: "topRight",
            });
        }
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${loginbg})` }}>
            <div className='p-[32px] bg-transparent mt-[4em] rounded-[8px] border-[2px] border-[white] [box-shadow:0_4px_10px_rgba(0,_0,_0,_0.1)]'>
                <div className='flex text-center content-center items-center pl-[34px]'>
                    <img src={Logo1} alt="Logo" className='h-[23vh]' />
                </div>
                <div>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600, width: '100%' }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <div>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
};

export default login;
