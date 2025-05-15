import React from 'react'
import { HomeOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import PatientsSurveyChart from './patientSurveyChart';
import AppointmentReviewChart from './AppointmentReviewChart';
import img from '../assets/doctors.svg'
const DoctorDashboard = () => {
  return (
    <div className='pl-[19px] pr-[19px] min-h-screen py-[20px]'>
      <div className='flex flex-row flex-wrap gap-[12px]'>
        <h1 className='pt-[13px] pb-[13px] font-bold text-[26px]'>Doctor's Dashboard</h1>
        <RightOutlined className="text-[14px]"/>
        <HomeOutlined
          className='text-[24px] cursor-pointer transition'
          onClick={() => navigate('./DoctorDashboard')}
        />
      </div>

      <div className='bg-[white] p-[23px] rounded-[12px] flex flex-row flex-wrap gap-[14pc]'>
        <div>
          <h3 className='pb-[12px] font-bold text-[#737171]'>Welcome Back</h3>
          <h1 className='text-[#448baa] font-bold text-[28px]'>DR. JOHN DOE!</h1>
          <h3 className='font-bold text-[#737171]'>General Physician</h3>
          <div className='pt-[30px] flex flex-row flex-wrap gap-[24px]'>
            <div className="bg-[#a985b784] h-[10vh] w-[13vw] pl-[12px] pt-[10px] rounded-[12px]">
              <h3 className="font-bold text-[#737171]">Appointments</h3>
              <h2 className='pt-[5px] text-[23px] font-bold text-[#4168a2]'>12+</h2>
            </div>
            <div className="bg-[#cb8c8c94] h-[10vh] w-[13vw] pl-[12px] pt-[10px] rounded-[12px]">
              <h3 className="font-bold text-[#737171]">Surgeries</h3>
              <h2 className='pt-[5px] text-[23px] font-bold text-[#4168a2]'>3+</h2>
            </div>
            <div className="bg-[#85b78f84] h-[10vh] w-[13vw] pl-[12px] pt-[10px] rounded-[12px]">
              <h3 className="font-bold text-[#737171]">Room Visit</h3>
              <h2 className='pt-[5px] text-[23px] font-bold text-[#4168a2]'>12+</h2>
            </div>
          </div>
        </div>
        <div>
          <img src={img} alt="Image" className='h-[16pc] w-[20pc]'/>
        </div>
      </div>
      <div className='pt-[15px] flex flex-row flex-wrap gap-[23px]'>
      <div className='w-[55vw]'>
        <PatientsSurveyChart/>
      </div>
      <div>
        <AppointmentReviewChart/>
      </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
