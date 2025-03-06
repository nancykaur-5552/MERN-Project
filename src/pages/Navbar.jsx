import React from 'react'
import Logo1 from '../assets/Logo1.png';
import { Link } from 'react-router-dom';
// import './Navbar.css';
const Navbar = () => {
  function create() {
    window.open('/createAcc', '_self');
  }
  return (
    <>
      <nav className="flex items-center justify-between py-px sticky bg-[white] top-[0] w-full">
        <div className="logo">
          <img class="h-[100px]" src={Logo1} alt="Appointease Logo" />
        </div>
        <div className="flex gap-[30px]">
          <Link className="no-underline text-[black] text-[lg] font-medium font-sans" to="/">Home</Link>
          <Link className="no-underline text-[black] text-[lg] font-medium font-sans" to="/About">About Us</Link>
          <Link className="no-underline text-[black] text-[lg] font-medium font-sans" to="/doctor">All Doctors</Link>
          <Link className="no-underline text-[black] text-[lg] font-medium font-sans" to="/contact">Contact Us</Link>
        </div>

        <button className="hover:rounded-none hover:bg-[rgb(34,_159,_34)] hover:text-[white] bg-[#3573b5] text-[white] rounded-[9px] px-[20px] py-[10px] cursor-pointer border-none text-[16px]" onClick={create}>Create Account</button>
      </nav>
    </>
  )
}

export default Navbar
