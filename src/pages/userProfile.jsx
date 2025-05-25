import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { Spin, Alert, Table } from 'antd'
import user from '../assets/User/user.png';
import { Tag } from 'antd';

const getStatusTag = (status) => {
  switch (status) {
    case 'Pending':
      return <Tag color="orange">Pending</Tag>;
    case 'Confirmed':
      return <Tag color="green">Confirmed</Tag>;
    case 'Cancelled':
      return <Tag color="red">Cancelled</Tag>;
    default:
      return <Tag color="blue">{status}</Tag>;
  }
};

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
      setAppointments(response.data.appointments || []);
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
    { title: 'Date', dataIndex: 'date', key: 'date', render: (date) => <span className='font-medium'>{new Date(date).toLocaleDateString()}</span> },
    { title: 'Time', dataIndex: 'time', key: 'time', render: (time) => <span className='text-gray-700'>{time}</span> },
    { title: 'Doctor', dataIndex: 'doctorName', key: 'doctorName', render: (name) => <span className='text-blue-500 font-semibold'>{name}</span> },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status) => getStatusTag(status) }
  ];

  return (
    <div>
      <Navbar />
      <div className='p-[4px]'>
        <div style={{ backgroundImage: `url(${user})`, backgroundSize: 'cover', backgroundPosition: 'center', }} className='relative roundede-lg overflow-hidden shadow-md mb-[6px] h-[20pc] flex justify-end items-center'>
          <div className='bg-black bg-opacity-60 text-white pr-[350px] h-full flex flex-col justify-center transform transition-all duration-700 hover:scale-105'>
            <h2 className='text-[44px] font-semibold animate-fadeIn'>Welcome, {profile.username}</h2>
            <h3><strong>Email:</strong> {profile.email}</h3>
            <h3><strong>Phone:</strong> {profile.mobile}</h3>
            <h3><strong>Address:</strong> {profile.address}</h3>
          </div>
        </div>
        <div className='pt-[3em] px-[4px]'>
          <div className='bg-white shadow-lg rounded-xl p-6'>
            <h2 className='text-[34px] text-blue-600 text-center pb-[4px]'>Your Booked Appointments</h2>
            <Table
              dataSource={appointments}
              columns={appointmentColumns}
              rowKey="_id"
              pagination={{ pageSize: 5 }}
              bordered
              className="rounded-xl"
            /></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default UserProfile;

