import React from 'react'
import { HomeOutlined, RightOutlined } from '@ant-design/icons';
import DoctorTable from './doctorTable';
import { useNavigate } from 'react-router';
const AllDoctors = ({doctors}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex flex-row flex-wrap gap-[12px]'>
        <h1 className='pt-[13px] pb-[13px] font-bold text-[26px]'>All Doctors</h1>
        <RightOutlined className="text-[14px]" />
        <HomeOutlined
          className='text-[24px] cursor-pointer transition'
          onClick={() => navigate('./DoctorDashboard')}
        />
      </div>
      <div>
        <DoctorTable doctors = {doctors}/>
      </div>
    </div>
  )
}

export default AllDoctors
