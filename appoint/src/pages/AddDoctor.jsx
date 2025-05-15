import React from 'react';
import { HomeOutlined, RightOutlined } from '@ant-design/icons';
import { Form, Input, InputNumber, Button } from 'antd';
import { useNavigate } from 'react-router-dom'; // You might be using react-router for navigation

const AddDoctorForm = ({ initialValues, onAddDoctor, onCancel }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row flex-wrap gap-[12px]">
        <h1 className="pt-[13px] pb-[13px] font-bold text-[26px]">Add Doctor</h1>
        <RightOutlined className="text-[14px]" />
        <HomeOutlined
          className="text-[24px] cursor-pointer transition"
          onClick={() => navigate('./DoctorDashboard')}
        />
      </div>
      <div className="bg-[white] p-[15px] rounded-[15px]">
        <div className="pb-[22px]">
          <h2 className="font-bold text-[#737171] text-[20px]">Add Doctor</h2>
        </div>
        <div>
          <Form
            initialValues={initialValues}
            onFinish={onAddDoctor}
            layout="vertical"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input the doctor's name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Specialization"
              name="specialization"
              rules={[{ required: true, message: "Please input the doctor's specialization!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Availability"
              name="availability"
              rules={[{ required: true, message: "Please input the doctor's availability!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mobile"
              name="mobile"
              rules={[{ required: true, message: "Please input the doctor's mobile number!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Degree"
              name="degree"
              rules={[{ required: true, message: "Please input the doctor's degree!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Experience (Years)"
              name="experience"
              rules={[{ required: true, message: "Please input the doctor's experience!" }]}
            >
              <InputNumber min={0} />
            </Form.Item>

            <Form.Item
              label="Consultation Fee"
              name="consultationFee"
              rules={[{ required: true, message: "Please input the doctor's consultation fee!" }]}
            >
              <InputNumber min={0} />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input the doctor's email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
                {initialValues ? "Update" : "Add"}
              </Button>
              <Button onClick={onCancel}>Cancel</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddDoctorForm;
