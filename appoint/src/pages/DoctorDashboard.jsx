import React, { useEffect, useState } from 'react'
import { HomeOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import img from '../assets/doctors.svg'

import { Table, Popconfirm, Typography, message } from 'antd';


const DoctorDashboard = () => {
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [appnt, setAppnt] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointmentCount(appointments.length);
  }, []);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('appointments')) || [];

    const apptsWithKeys = stored.map((item, index) => ({
      key: item.key || index,
      ...item,
    }));
    setAppnt(apptsWithKeys);
  }, []);

  const handleDelete = (key) => {
    const updated = appnt.filter(item => item.key !== key);
    setAppnt(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
    message.success('Appointment deleted successfully.');
  }

  const columns = [
    {
      title: 'Patient Name',
      dataIndex: 'firstName',
      key: 'firstName',
      render: (_, record) => `${record.firstName} ${record.lastName}`,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Date of Appointment',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Doctor',
      dataIndex: 'doctor',
      key: 'doctor',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete this appointment?"
          onConfirm={() => handleDelete(record.key)}
          okText="Yes"
          cancelText="No"
        >
          <Typography.Link>Delete</Typography.Link>
        </Popconfirm>
      ),
    },
  ];


  return (
    <div className='pl-[19px] pr-[19px] min-h-screen py-[20px]'>
      <div className='flex flex-row flex-wrap gap-[12px]'>
        <h1 className='pt-[13px] pb-[13px] font-bold text-[26px]'>Doctor's Dashboard</h1>
        <RightOutlined className="text-[14px]" />
        <HomeOutlined
          className='text-[24px] cursor-pointer transition'
          onClick={() => navigate('./DoctorDashboard')}
        />
      </div>

      <div className='bg-[white] p-[23px] rounded-[12px] flex flex-row flex-wrap gap-[14pc]'>
        <div>
          <h2 className='pb-[12px] font-bold text-[#737171] text-[25px]'>Welcome Back</h2>
          <h1 className='text-[#448baa] font-bold text-[28px]'><span className='text-[24px] text-[#737171]'>to</span> APPOINTEASE!!</h1>
          <h3 className='font-bold text-[#737171] pt-[18px]'>Simple browse through our extensive list of trusted doctors,
            <br />
            schedule your appointment hassle-free.</h3>
          <div className='pt-[30px] flex flex-row flex-wrap gap-[24px]'>
            <div className="bg-[#a985b784] h-[10vh] w-[15vw] pl-[12px] pt-[10px] rounded-[12px]">
              <h3 className="font-bold text-[#737171] text-[18px]">Appointments</h3>
              <h2 className='pt-[5px] text-[23px] font-bold text-[#4168a2]'>{appointmentCount}+</h2>
            </div>
          </div>
        </div>
        <div>
          <img src={img} alt="Image" className='h-[16pc] w-[20pc] ' />
        </div>
      </div>
      <div className='pt-[3em]'>
        <div className='flex pb-[12px] items-center justify-center'>
        <h1 className='text-[27px] font-bold text-[#4a4343]'>Booked Appointments</h1>
        </div>
        <Table 
        dataSource={appnt} columns={columns} rowKey="key"
          pagination={{ pageSize: 5 }}
          locale={{ emptyText: 'No booked appointments found.' }}
        />
      </div>

    </div>
  )
}

export default DoctorDashboard
