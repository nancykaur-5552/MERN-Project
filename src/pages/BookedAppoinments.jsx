import React, { useEffect, useState } from 'react';
import { Table, Popconfirm, Typography, message } from 'antd';
import Navbar from './Navbar';
import Footer from './Footer';

const BookedAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('appointments')) || [];

        const apptsWithKeys = stored.map((item, index) => ({
            key: item.key || index,
            ...item,
        }));
        setAppointments(apptsWithKeys);
    }, []);

    const handleDelete = (key) => {
        const updated = appointments.filter(item => item.key !== key);
        setAppointments(updated);
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
        <>
            <Navbar />
            <Table dataSource={appointments} columns={columns} rowKey="key"
            pagination = {{pageSize: 5}}
            locale={{emptyText: 'No booked appointments found.'}}
            />
            <Footer />
        </>
    );
};

export default BookedAppointments;
