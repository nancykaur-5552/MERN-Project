import React from 'react'
import {NavLink } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { Button, Form, Input } from 'antd';


const loginAcc = () => {
    const onFinish = async (values) => {
        console.log("Success:", values);
        try {
            const response = await axios.post("http://localhost:4000/api/auth/login", values);
            if (response.data.success) {
                sessionStorage.setItem("username", response.data.email);
                sessionStorage.setItem("email", response.data.password);
                console.log("Login Successfully.")
                setTimeout(() => {
                    Navigate(response.data.redirectTo || "/home");
                }, 1500);
            }
        }
        catch (error) {
            console.log("Registration failed: ", error);
        }
    };
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center">
                <Form
                    name="basic"
                    onFinish={onFinish}
                    className="bg-[#ffffff] p-[25px] mt-[4em] rounded-[8px] [box-shadow:0_4px_10px_rgba(0,_0,_0,_0.1)] w-[350px]">
                    <h2 className='text-center mb-[10px] text-[#444] pt-[5px]'>Login Account</h2>
                    <p className='text-center pb-[16px]'>Please login to book an appointment.</p>
                    <Form.Item label="Email"
                        name="email"
                        className='block mb-[5px] text-[14px] text-[#555]'
                        rules={[{ required: true, message: "Please input your email!" }]}
                    >
                        <Input className='w-full p-[10px] mb-[15px] border-[1px] border-solid border-[#ddd] rounded-[5px] text-[14px]' type="email" id="email" name="email" placeholder="Enter your email" required />
                    </Form.Item>
                    <Form.Item
                        label="Password" className='block mb-[5px] text-[14px] text-[#555]' name="password" rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input className='w-full p-[10px] mb-[15px] border-[1px] border-solid border-[#ddd] rounded-[5px] text-[14px]' type="password" id="password" name="password" placeholder="Enter your password" required />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmltype="submit" className="w-full p-[10px]  bg-[#0066cc] text-[white] border-none rounded-[5px] cursor-pointer text-[16px] hover:bg-[#004b99]">
                            Login
                        </Button>
                    </Form.Item>

                    <p className="pt-[2em]">Don't have an account? <NavLink to='/createAcc'>Create here</NavLink></p>
                </Form>
            </div>
            <Footer />
        </>
    )
}

export default loginAcc;
