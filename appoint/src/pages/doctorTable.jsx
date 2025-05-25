import React, { useState, useEffect } from 'react';
import { Table, Input, Modal, Popconfirm, Space } from 'antd';
import { DownloadOutlined, SearchOutlined, PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';
import AddDoctorForm from './AddDoctor';

const DoctorTable = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editDoctor, setEditDoctor] = useState(null);

  useEffect(() => {
    const savedDoctors = localStorage.getItem('doctors');
    if (savedDoctors) {
      setDoctors(JSON.parse(savedDoctors));
    }
  }, []);

  useEffect(() => {
    if (doctors.length > 0) {
      localStorage.setItem('doctors', JSON.stringify(doctors));
    }
  }, [doctors]);

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Specialization', dataIndex: 'specialization', key: 'specialization' },
    { title: 'Availability', dataIndex: 'availability', key: 'availability' },
    { title: 'Mobile', dataIndex: 'mobile', key: 'mobile' },
    { title: 'Degree', dataIndex: 'degree', key: 'degree' },
    { title: 'Experience', dataIndex: 'experience', key: 'experience' },
    { title: 'Consultation Fee', dataIndex: 'consultationFee', key: 'consultationFee' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Action', key: 'action', render: (_, record) => (
        <>
          <span
            onClick={() => handleEdit(record)}
            style={{ marginRight: 8, cursor: 'pointer', color: '#1890ff' }}
          >
            Edit
          </span>
          <Popconfirm
            title="Are you sure you want to delete this doctor?"
            onConfirm={() => handleDelete(record.key)}
            onCancel={() => console.log('Delete canceled')}
            okText="Yes"
            cancelText="No"
          >
            <span style={{ cursor: 'pointer', color: '#f5222d' }}>Delete</span>
          </Popconfirm>
        </>
      )
    }
  ];

  const handleAddDoctor = (values) => {
    if (editDoctor) {
      const updatedDoctors = doctors.map(doc =>
        doc.key === editDoctor.key ? { ...values, key: editDoctor.key } : doc
      );
      setDoctors(updatedDoctors);
      message.success('Doctor updated successfully');
    } else {
      const newDoctor = { ...values, key: Date.now() };
      setDoctors([...doctors, newDoctor]);
      message.success('Doctor added successfully');
    }
    setEditDoctor(null);
    setIsModalOpen(false);
  };

  const handleEdit = (doctor) => {
    setEditDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleDelete = (key) => {
    const updatedDoctors = doctors.filter(doctor => doctor.key !== key);
    setDoctors(updatedDoctors);
    message.success('Doctor deleted');
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleRefresh = () => {
    setSearch('');
  };

  const handleDownload = () => {
    const tableData = doctors.map(doctor => ({
      Name: doctor.name,
      Specialization: doctor.specialization,
      Availability: doctor.availability,
      Mobile: doctor.mobile,
      Degree: doctor.degree,
      Experience: doctor.experience,
      'Consultation Fee': doctor.consultationFee,
      Email: doctor.email,
    }));

    const ws = XLSX.utils.json_to_sheet(tableData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Doctors');
    XLSX.writeFile(wb, 'doctors_data.xlsx');
  };

  const filteredDoctors = doctors.filter((doctor) => {
    return Object.values(doctor).some(val => val.toString().toLowerCase().includes(search));
  });

  return (
    <div className="bg-[#bfbdbd91] p-[22px] rounded-[15px]">
      <div className="mb-[16px] flex flex-row">
        <h2 className="mr-[16px] text-[#5b5858] font-bold">Doctors</h2>
        <Input
          style={{ width: 200 }}
          placeholder="Search doctor..."
          prefix={<SearchOutlined />}
          onChange={handleSearch}
        />
        <Space style={{ marginLeft: 16 }}>
          <PlusOutlined
          className='pl-[52pc] pr-[12px]'
            onClick={() => setIsModalOpen(true)}
            style={{ fontSize: 24, color: '#52c41a', cursor: 'pointer' }} // Green for Add
          />
          <ReloadOutlined
          className='pr-[12px]'
            onClick={handleRefresh}
            style={{ fontSize: 24, color: '#1890ff', cursor: 'pointer' }} // Blue for Refresh
          />
          <DownloadOutlined
            onClick={handleDownload}
            style={{ fontSize: 24, color: '#f5222d', cursor: 'pointer' }} // Red for Download
          />
        </Space>
      </div>

      <Table
        columns={columns}
        dataSource={filteredDoctors}
        pagination={false}
        rowKey="key"
      />

      {/* Modal for adding or editing doctor */}
      <Modal
        title={editDoctor ? 'Edit Doctor' : 'Add Doctor'}
        open={isModalOpen}
        onCancel={() =>{
          setEditDoctor(null);
          setIsModalOpen(false);
        }}
        footer={null}
      >
        <AddDoctorForm
          initialValues={editDoctor}
          onCancel={() => {
            setEditDoctor(null);
            setIsModalOpen(false);
          }}
          onAddDoctor={handleAddDoctor}
        />
      </Modal>
    </div>
  );
};

export default DoctorTable;
