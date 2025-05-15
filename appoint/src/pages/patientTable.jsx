import React, { useState } from 'react';
import axios from 'axios';
import { Space, Table, message, Modal, Form, Input, Button } from 'antd';

const PatientTable = ({ users, setUsers }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();



  // Edit (open modal)
  const handleEdit = (record) => {
    setEditingUser(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  // Update patient (PUT)
  const handleUpdate = async () => {
    try {
      const updatedData = await form.validateFields();
      await axios.put("http://localhost:4000/api/auth/updateUser", updatedData);

      message.success('Patient updated successfully');
      setUsers(prev =>
        prev.map(user =>
          user._id === editingUser._id ? { ...user, ...updatedData } : user
        )
      );
      setIsModalVisible(false);
    } catch (error) {
      console.error(error);
      message.error('Failed to update patient');
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'username',
      key: 'name',
    },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Disease', dataIndex: 'disease', key: 'disease' },
    { title: 'Mobile no.', key: 'mobile', dataIndex: 'mobile' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>Edit</a>
          <a onClick={() => handleDelete(record._id)}>Delete</a>
        </Space>
      ),
    },
  ];
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/api/auth/deleteUser/${userId}`);
      message.success('Patient deleted successfully');
      setUsers(prev => prev.filter(user => user._id !== userId));
    } catch (error) {
      console.error(error);
      message.error('Failed to delete patient');
    }
  };
  return (
    <>
      <Table columns={columns} dataSource={users} rowKey="_id" />

      <Modal
        title="Edit Patient"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleUpdate}>
            Update
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="age" label="Age" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Address" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="disease" label="Disease" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default PatientTable;
