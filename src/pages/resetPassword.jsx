import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";
import { Button, Form, Input, Spin, notification } from "antd";
import axios from "axios";
import Footer from "../pages/Footer";

const ResetPassword = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const email = localStorage.getItem("resetEmail");

        if (!email) {
            notification.error({
                message: "Session Expired",
                description: "Email not found. Please restart the password reset process.",
            });
            navigate("/forgotPassword");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:4000/api/auth/resetPassword", {
                email,
                otp: values.otp,
                newPassword: values.newPassword,
                confirmNewPassword: values.confirmNewPassword,
            });

            notification.success({
                message: "Success",
                description: response.data.message,
            });

            localStorage.removeItem("resetEmail");
            navigate("/loginAcc");
        } catch (error) {
            notification.error({
                message: "Reset Failed",
                description: error.response?.data?.message || "Something went wrong.",
            });
        } finally {
            setLoading(false);
        }
    };
    return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-800">
      <div className="w-[30%]">
        <Form
          form={form}
          name="reset-password"
          onFinish={onFinish}
          layout="vertical"
          className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-lg shadow-lg"
        >
          <h2 className="text-2xl text-center mb-6 text-white font-semibold">Reset Password</h2>

          <Form.Item
            name="otp"
            label={<span className="text-white">OTP</span>}
            rules={[{ required: true, message: "Please enter the OTP sent to your email!" }]}
          >
            <Input className="bg-white/20 text-white placeholder-white" placeholder="Enter OTP" />
          </Form.Item>

          <Form.Item
            name="newPassword"
            label={<span className="text-white">New Password</span>}
            rules={[{ required: true, message: "Please enter your new password!" }]}
          >
            <Input.Password className="bg-white/20 text-white placeholder-white" placeholder="New password" />
          </Form.Item>

          <Form.Item
            name="confirmNewPassword"
            label={<span className="text-white">Confirm Password</span>}
            dependencies={["newPassword"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password className="bg-white/20 text-white placeholder-white" placeholder="Confirm password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? <Spin size="small" /> : "Reset Password"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default ResetPassword;