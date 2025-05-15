import React, {useEffect} from 'react';
import { HomeOutlined, RightOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const AddPatient = ({handleAddUser, onClose }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values)=>{
    console.log("Form Submitted: ", values); 
    handleAddUser(values);
    form.resetFields();
    onClose();
  }
  
  return (
    <>
      <div className="flex flex-row flex-wrap gap-[12px]">
        <h1 className="pt-[13px] pb-[13px] font-bold text-[26px]">Add Patient</h1>
        <RightOutlined className="text-[14px]" />
        <HomeOutlined
          className="text-[24px] cursor-pointer transition"
          onClick={() => navigate('./DoctorDashboard')}
        />
      </div>
      <div className="bg-[white] p-[15px] rounded-[15px]">
        <div className="pb-[22px]">
          <h2 className="font-bold text-[#737171] text-[20px]">Add Patient</h2>
        </div>
        <div>
          <Form
            form = {form}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input the patient's name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: "Please input your Age!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please input your Home Address!" }]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Mobile"
              name="mobile"
              rules={[{ required: true, message: "Please input the doctor's mobile number!" }]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Disease"
              name="disease"
              rules={[{ required: true, message: "Please enter your disease" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddPatient;
