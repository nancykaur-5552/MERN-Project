import React, { useState, useEffect } from 'react';
import { HomeOutlined, RightOutlined } from '@ant-design/icons';
import PatientTable from './patientTable';
import PatientForm from './AddPatient';
import { useNavigate } from 'react-router';
import axios from 'axios'


const PatientDashboard = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    email: "",
    disease: "",
    mobile: ""
  });

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const savedUser = localStorage.getItem('users');
    if(savedUser){
      setUsers(JSON.parse(savedUser));
    }
  },[]);

  useEffect(()=>{
    if(users.length>0){
      localStorage.setItem('users', JSON.stringify(users));
    }
  },[users]);
  const navigate = useNavigate();

  const showForm = () => setIsFormVisible(true);
  const hideForm = () => setIsFormVisible(false);

  const handleAddUser = async (formValues) => {
    try {
      const response = await axios.post("http://localhost:4000/api/auth/AddUser", formValues);
      console.log("User Added: ", response.data);

      const addedUser = {
        ...(response.data.user || formValues),
        key: formValues.email,
      };
      setUsers(prev => [...prev, addedUser]);

      setFormData({
        name: "",
        age: "",
        address: "",
        email: "",
        disease: "",
        mobile: ""
      });

    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  return (
    <div className='pl-[19px] pr-[19px] min-h-screen py-[20px] relative'>
      <div className='flex flex-row flex-wrap gap-[12px] items-center'>
        <h1 className='pt-[13px] pb-[13px] font-bold text-[26px]'>Patient's Dashboard</h1>
        <RightOutlined className="text-[14px]" />
        <HomeOutlined
          className='text-[24px] cursor-pointer transition'
          onClick={() => navigate('./DoctorDashboard')}
        />
        <div className='ml-auto pt-[12px]'>
          <button
            className='bg-[#65d377e0] p-[9px] rounded-[6px] w-[6vw]'
            onClick={showForm}
          >
            Add Patient
          </button>
        </div>
      </div>

      <PatientTable users={users} />
      {isFormVisible && (
        <div className="absolute top-[3%] left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-[500px] z-50">
          <button
            className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-red-500"
            onClick={hideForm}
          >
            ×
          </button>
          <PatientForm
            formData={formData}
            setFormData={setFormData}
            handleAddUser={handleAddUser}
            onClose={hideForm} />
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
