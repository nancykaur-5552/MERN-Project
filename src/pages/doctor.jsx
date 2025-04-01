import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import AllDoctors from './AllDoctors'
import Navbar from './Navbar'
import Footer from './Footer'
import image from '../assets/doctor/image.png';
import AppointmentForm from './AppointmentForm';
import about1 from '../assets/About/about1.png';
import ambulance from '../assets/doctor/ambulance.png';
import care from '../assets/doctor/care.png';
import laboratory from '../assets/doctor/laboratory.png';
import global from '../assets/doctor/global.png';


const doctor = () => {
   return (
    <>
      <Navbar />
      <div style={{backgroundImage: `url(${image})`}} className="text-center bg-cover bg-center bg-no-repeat h-[350px]">
        <div className="pt-[7pc]">
          <h1 className="text-[white]">Our Doctors</h1>
          <Link className="no-underline text-[white]"to="/">Home&nbsp;//</Link>
          <Link className="no-underline text-[rgb(34,159,34)]"to="/doctor">All Doctors</Link>
        </div>
</div>
      <AllDoctors />
      <div className="text-center mt-[34px] justify-center align-middle h-[73px] bg-[#4171bede]">
        <h2 className='text-[white] pt-[20px]'>Ready to get our medical care? We’re always wait for serve you, <NavLink to="/AppointmentForm" className="no-underline text-[white] hover: cursor-pointer hover:text-[#0b130dd7]">Make an Appointment.</NavLink></h2>
      </div>
      <div className="flex flex-row gap-[100px] items-center justify-between flex-nowrap">
  {/* Left Image */}
  <div className="image">
    <img src={about1} alt="about" />
  </div>

  {/* Right Content */}
  <div className="flex flex-col">
    <h2 className="text-[#c43a3af7] pl-[23px] pt-[24px] px-[0px] font-mono">Promo-Box</h2>
    <h1 className="text-[52px] text-[#444040] mt-[0px] pl-[16px]">
      Caring Health And Well <br /> Being Of You & Family
    </h1>

    {/* Features Section */}
    <div className="flex flex-row gap-[46px] flex-wrap">
      {[
        { img: care, title: "Experienced Doctors" },
        { img: laboratory, title: "Diagnostic Labs" },
        { img: global, title: "Global Branches" },
        { img: ambulance, title: "Ambulance Service" },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center pt-[10px]">
          <img src={item.img} alt={item.title} className='h-[73px]' />
          <h1>{item.title}</h1>
          <p className="text-[19px] mt-[0px] text-[#444040]">
            Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit. Earum, tempore!
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

      <div className="container">
        <AppointmentForm />
      </div>
      <Footer />
    </>
  )
}

export default doctor
