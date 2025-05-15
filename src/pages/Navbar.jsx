import React, { useState } from 'react';
import Logo1 from '../assets/Logo1.png';
import { Link, useNavigate } from 'react-router-dom';
import { Spin, Dropdown, Menu, Avatar, Button, Drawer } from "antd";
import { LogoutOutlined, ProfileOutlined, UserOutlined,MenuOutlined } from '@ant-design/icons';
import Appointment from '../assets/appointment.png';

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "#f0f2f5",
          }}
        >
          <Spin size="large" tip="Processing..." />
        </div>
      ) : (
        <nav className="flex items-center justify-between py-px sticky bg-[white] top-[0] w-full px-6">
          <div className="logo">
            <img className="h-[100px]" src={Logo1} alt="Appointease Logo" />
          </div>
          <div className="flex gap-[38px]">
            <Link className="no-underline text-[black] text-[24px] font-serif hover:text-[rgb(34,_159,_34)]" to="/Home">Home</Link>
            <Link className="no-underline text-[black] text-[24px] font-serif hover:text-[rgb(34,_159,_34)]" to="/About">About Us</Link>
            <Link className="no-underline text-[black] text-[24px] font-serif hover:text-[rgb(34,_159,_34)]" to="/doctor">All Doctors</Link>
            <Link className="no-underline text-[black] text-[24px] font-serif hover:text-[rgb(34,_159,_34)]" to="/contact">Contact Us</Link>
          </div>
          <div className='flex items-center gap-[12px] pr-[23px]'>
            <img onClick={() => navigate('/bookedAppointments')} src={Appointment} alt="booked appointment" className='h-[40px] w-[40px] cursor-pointer' />
            <Dropdown menu = {{items:[
              {
                key:'profile',
                label: 'My Profile',
                icon: <ProfileOutlined/>,
                onClick:()=>navigate('/userProfile'),
              },
              {
                key: 'logout',
                label: 'Logout',
                icon: <LogoutOutlined/>,
                onClick: ()=>navigate('/loginAcc'),
              },
            ]}}
             >

              <Avatar style={{backgroundColor: '#3573b5'}} icon={<UserOutlined/>} className='cursor-pointer h-[39px] w-[40px]'/>
            </Dropdown>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
