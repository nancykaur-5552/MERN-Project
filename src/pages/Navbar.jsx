import React, {useState} from 'react'
import Logo1 from '../assets/Logo1.png';
import { Link } from 'react-router-dom';
import loader from '../assets/loader.gif'

const Navbar = () => {
  const[isLoading, setLoading] = useState(false);

  const handleCreate =()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      window.location.href = "/createAcc";
    },1500)
  };

  if(isLoading){
    return (
      <div className='flex justify-center items-center h-screen bg-white'>
        <img src={loader} alt="Loading..." className='w-16 h-16'/>
      </div>
    );
  }
  return (
    <>
      <nav className="flex items-center justify-between py-px sticky bg-[white] top-[0] w-full">
        <div className="logo">
          <img className="h-[100px]" src={Logo1} alt="Appointease Logo" />
        </div>
        <div className="flex flex-wrap gap-[38px]">
          <Link className="no-underline text-[black] text-[24px] font-sans hover:text-[rgb(34,_159,_34)]" to="/">Home</Link>
          <Link className="no-underline text-[black] text-[24px] font-sans hover:text-[rgb(34,_159,_34)]" to="/About">About Us</Link>
          <Link className="no-underline text-[black] text-[24px] font-sans hover:text-[rgb(34,_159,_34)]" to="/doctor">All Doctors</Link>
          <Link className="no-underline text-[black] text-[24px] font-sans hover:text-[rgb(34,_159,_34)]" to="/contact">Contact Us</Link>
        </div>
        <button className="hover:rounded-none hover:bg-[rgb(34,_159,_34)] hover:text-[white] bg-[#3573b5] text-[white] rounded-[9px] px-[20px] py-[10px] cursor-pointer border-none text-[16px]" 
        onClick={handleCreate}>
          Create Account</button>
      </nav>
    </>
  )
}

export default Navbar
