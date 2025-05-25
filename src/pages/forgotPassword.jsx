import React from "react";
import { Form, Input, Button, notification } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await axios.post("http://localhost:4000/api/auth/forgotPassword", {
        email: values.email,
      });

      if (res.data.success) {
        localStorage.setItem("resetEmail", values.email);
        notification.success({
          message: "Email Sent",
          description: res.data.message,
        });
        navigate("/resetPassword");
      } else {
        notification.error({
          message: "Error",
          description: res.data.message,
        });
      }
    } catch (err) {
      notification.error({
        message: "Error",
        description: err?.response?.data?.message || "Failed to send reset link.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-800">
      <div className="w-[30%]">
        <Form
          name="forgot-password"
          onFinish={onFinish}
          className="bg-white/10 p-[18px] rounded-2xl border border-white/20 backdrop-blur-lg shadow-lg"
        >
          <h2 className="text-2xl text-center mb-[6px] text-white font-semibold">Forgot Password</h2>

          <Form.Item
            name="email"
            label={<span className="text-white">Email</span>}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input className="bg-white/20 text-white placeholder-white" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item className="mt-[6px]">
            <div className="flex justify-center">
            <Button htmlType="submit" type="primary" className="bg-blue-500 hover:bg-blue-600">
              Send OTP
            </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
