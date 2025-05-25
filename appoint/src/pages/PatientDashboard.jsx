import React, { useState, useEffect } from 'react';
import { HomeOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import axios from 'axios'
import { Card, Spin, Alert, Table, Typography  } from 'antd'


const PatientDashboard = () => {
  const [profile, setProfile] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log("Token received by backend: ", token);
  
        if (!token) {
          setError('User is not authenticated. Please login.');
          setLoading(false);
          return;
        }
  
        const response = await axios.get('http://localhost:4000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        setError('Failed to fetch profile.');
        console.log(error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchUserProfile();
    }, []);
  
    if (loading) return <Spin tip="Loading profile..." />;
  
    if (error) return <Alert message={error} type="error" showIcon />;
  
    const appointmentColumns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Time', dataIndex: 'time', key: 'time' },
      { title: 'Doctor', dataIndex: 'doctorName', key: 'doctorName' },
      { title: 'Status', dataIndex: 'status', key: 'status' }
    ];
  
    const paymentColumns = [
      { title: 'Amount', dataIndex: 'amount', key: 'amount' },
      { title: 'Status', dataIndex: 'status', key: 'status' },
      { title: 'Payment Date', dataIndex: 'createdAt', key: 'createdAt' }
    ];
  
  return (
    <div className='pl-[19px] pr-[19px] min-h-screen py-[20px] relative'>
      <div className='flex flex-row flex-wrap gap-[12px] items-center'>
        <h1 className='pt-[13px] pb-[13px] font-bold text-[26px]'>Patient's Dashboard</h1>
        <RightOutlined className="text-[14px]" />
        <HomeOutlined
          className='text-[24px] cursor-pointer transition'
          onClick={() => navigate('./DoctorDashboard')}
        />
      </div>
      <div>
        <Card title="Patient Profile" style={{ maxWidth: 600, margin: '2rem auto' }}>
          <p><strong>Name:</strong> {profile.username}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.mobile}</p>
          <p><strong>Address:</strong> {profile.address}</p>
        </Card>
         <Card className='m-[10px] border-[2px] border-solid border-black'>
          <Typography.Title level={4}>Booked Appointments</Typography.Title>
          <Table
            dataSource={appointments}
            columns={appointmentColumns}
            rowKey="_id"
            pagination={{ pageSize: 5 }}
            bordered
          />
        </Card>

        <Card className='m-[10px] border-[2px] pt-[2em] border-solid border-black'>
          <Typography.Title level={4}>Payment History</Typography.Title>
          <Table
            dataSource={payments}
            columns={paymentColumns}
            rowKey="_id"
            pagination={{ pageSize: 5 }}
            bordered
          />
        </Card>

      </div>
  </div>
  );
};

export default PatientDashboard;
