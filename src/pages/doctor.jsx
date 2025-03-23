import React from 'react'
import { Link } from 'react-router-dom'
import AllDoctors from './AllDoctors'
import Experience from './Experience'
import Navbar from './Navbar'
import Footer from './Footer'
import image from '../assets/doctor/image.png';
import AppointmentForm from './AppointmentForm'
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
      <div className="container">
        <AppointmentForm />
        <Experience/>
      </div>
      <Footer />
    </>
  )
}

export default doctor
