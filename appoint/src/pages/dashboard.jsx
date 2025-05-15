import React, { useState } from 'react';
import { LogoutOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import Logo from '../assets/Logo1.png';
import {
  ContactsOutlined,
  MedicineBoxOutlined,
  CalendarOutlined,
  HeartOutlined,
  UserAddOutlined,
  TeamOutlined,
} from '@ant-design/icons';

import DoctorsDashboard from './DoctorDashboard';
import PatientDashboard from './PatientDashboard';
import AllDoctors from './AllDoctors';
import AddDoctors from './AddDoctor';
import BookAppointment from './BookAppointment';
import Contact from './Contact';
import {useNavigate} from 'react-router-dom';
import MenuItem from 'antd/es/menu/MenuItem';

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState('1');

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <DoctorsDashboard />;
      case '2':
        return <PatientDashboard />;
      case '3':
        return <AllDoctors />;
      case '4':
        return <AddDoctors />;
      case '5':
        return <BookAppointment />;
      case '6':
        return <Contact />;
      default:
        return <DoctorsDashboard />;
    }
  };
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        theme="light"
        className="bg-[blue]"
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="h-[93px] ml-[32px] mt-[12px] mb-[12px]"
          />
        </div>
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)}
        >
          <Menu.Item key="1" icon={<MedicineBoxOutlined />}>
            Doctors Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<HeartOutlined />}>
            Patient Dashboard
          </Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined />}>
            All Doctors
          </Menu.Item>
          <Menu.Item key="4" icon={<UserAddOutlined />}>
            Add Doctor
          </Menu.Item>
          <Menu.Item key="5" icon={<CalendarOutlined />}>
            Book Appointment
          </Menu.Item>
          <Menu.Item key="6" icon={<ContactsOutlined />}>
            Contact
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header
          style={{
            height: '93px',
            background: '#fff',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: '42px',
            cursor:'pointer',
          }}
        >
          <Dropdown menu = {{items: [
           {
            key:'profile',
            label: 'My Profile',
            icon: <ProfileOutlined/>,
            onClick: () =>setSelectedKey('2'),
          },
          {
            key:'logout',
            label:'Logout',
            icon:<LogoutOutlined/>,
            onClick:()=>navigate('/'),
          }
          ]}}>
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        </Dropdown>
        </Header>
        <Content
          style={{
            overflowY: 'auto',
            height: 'calc(100vh - 93px - 64px)', // total height - header - footer
            padding: '20px',
            background: '#b9cad3',
          }}
        >
          {renderContent()}
        </Content>
        
        <Footer className="text-center bg-[grey]">
          Copyright © {new Date().getFullYear()} by Nancy | All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
