import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Expert from './Expert';
import index from '../assets/index.png'
import Speciality from './Speciality';
import play from '../assets/Home/play.gif';
import bg2 from '../assets/Home/bg2.jpg';

const home = () => {
    function ContactBox() {
        window.open('/contact','_self');
    }
    function doctorBox(){
        window.open('/doctor','_self');
    }
  return (
    <>
    <Navbar/>
    <div className="bg-[#3573b5] h-[36.5em] text-[white]">
        <img className="h-[584px] w-[927px] flex float-right -mt-9"src={index} alt="Home image"/>
        <h1 className="mt-[-474px] float-left text-[64px] ml-[57px] mb-[5px] font-trebuchet font-normal leading-tight">
  Book Appointment <br/> With Trusted Doctors
</h1>

        <p className="text-[15px] max-w-[400px] ml-[65px] -mb-px pt-[283px]">Simple browse through our extensive list of trusted doctors,<br/>schedule your appointment hassle-free.</p>
        <button className="bg-neutral-100 text-[#333] text-base font-[bold] cursor-pointer transition-colors duration-300 ease-in ml-[71px] mt-[34px] mb-[35px] px-[50px] py-[20px] rounded-[15px] border-0 hover:bg-[rgb(34,159,34)] hover:text-white hover:rounded-none font-sans">
  BOOK APPOINTMENT
</button>
    </div>
    <Speciality/>
    <Expert/>
    <div style={{backgroundImage: `url(${bg2})`}} className="bg-no-repeat bg-cover h-[54vh] text-[white] flex flex-row items-center justify-center py-[2em]">
        <div className="flex flex-row items-center justify-center gap-[120px]">
            <div className="left-side">
                <h3>Get in Touch</h3>
                <h1 className="text-[56px] pt-[13px]">Best Medical & Health <br/>Care Near Your City</h1>
                <h4 className="pt-[2em]">We've 25 Years of experience in Medical Services.</h4>
                <div className="pt-[2em] gap-[10px]">
                    <button className="h-[6vh] w-[11vw]  text-[white] text-[17px] p-2.5 rounded-[20px] border-none bg-[rgb(89,211,89)] hover:cursor-pointer shadow-[2px_3px_4px_2px_green]" onClick={ContactBox}><b>Contact Us | +</b></button>
                    <button className="h-[6vh] w-[11vw] text-[white] text-[17px] p-2.5 rounded-[20px] border-none bg-[#3573b5] hover:cursor-pointer shadow-[2px_3px_4px_2px_#1d548e]" onClick={doctorBox}><b>Doctors List | +</b></button>
                </div>
            </div>
            <div className="right-side">
                <img className="h-[10vh] rounded-[50%] cursor-pointer transform: 3s ease-in-out" src={play} alt="play" onClick="playVideo()"/>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default home;
