import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import about1 from '../assets/About/about1.png'
import Navbar from './Navbar'
import Footer from './Footer'
import AppointmentForm from './AppointmentForm'
import image from '../assets/About/image.png'
import info from '../assets/About/Info.png';
import doctor from './doctor'
import Contact from './contact'
const About = () => {
    return (
        <>
            <Navbar />
            <div style={{ backgroundImage: `url(${image})` }} className="text-center bg-[url(image.png)] bg-cover bg-center bg-no-repeat h-[350px]">
                <div className="pt-[7pc]">
                    <h1 className="text-[white]">About Us</h1>
                    <Link className="no-underline text-[white]" to="/">Home&nbsp;//</Link>
                    <Link className="no-underline text-[rgb(34,159,34)]" to="/about">About Us</Link>
                </div>
            </div>

            <div className="flex flex-row flex-wrap gap-[104px]">
                <div className="relative w-[427px] ml-[65px] mt-[31px]">
                    <img src={about1} alt="About" className='h-[60vh]' />
                </div>
                <div className="w-6/12 ml-[49px] mr-1 mt-[55px] mb-[26px]">
                    <h1 className='text-[44px]'>We Are <span className='text-[rgb(38,86,124)]'>Appointease </span>A Healthcare<br />Provider</h1>
                    <p className='text-[19px] text-[#393838] pt-[17px]'>AppointEase is an advanced healthcare appointment management system designed to streamline and optimize the scheduling process between patients and healthcare providers. It serves as a bridge between hospitals, clinics, and patients, ensuring seamless, efficient, and hassle-free booking of medical consultations and services. AppointEase is revolutionizing the way healthcare appointments are managed, making healthcare more accessible, organized, and efficient. </p>
                    <div className='flex flex-row gap-[23px] pt-[53px]'>
                        <button className='h-[6vh] w-[13vw] border-none bg-[#3573b5] text-[white] rounded-[8px] text-[16px] hover: cursor-pointer hover:bg-[#609760]'><NavLink to="/doctor" className="no-underline text-[white]">Find Doctors</NavLink></button>
                        <button className='h-[6vh] w-[13vw] border-none bg-[#3573b5] text-[16px] text-[white] rounded-[8px] hover: cursor-pointer hover:bg-[#609760]'><NavLink to="/contact" className="no-underline text-[white]"> Contact Us</NavLink></button>
                    </div>
                </div>
                
            </div>

            <div style={{ backgroundImage: `url(${info})` }} className="bg-no-repeat bg-cover h-[30vh] mt-[5em]">
                <div className="opacity-80 bg-[#3bc053] h-[30vh]">
                    <div className="flex flex-row text-center justify-center gap-[23px] text-[white] py-[42px]">
                        <div className="border w-[15vw] p-2.5 border-solid border-[white]">
                            <h1>30</h1>
                            <h3>YEARS OF EXPERIENCED</h3>
                        </div>
                        <div className="border w-[15vw] p-2.5 border-solid border-[white]">
                            <h1>4,500</h1>
                            <h3>HAPPY PATIENTS</h3>
                        </div>
                        <div className="border w-[15vw] p-2.5 border-solid border-[white]">
                            <h1>84</h1>
                            <h3>NUMBER OF DOCTORS</h3>
                        </div>
                        <div className="border w-[15vw] p-2.5 border-solid border-[white]">
                            <h1>300</h1>
                            <h3>NUMBER OF STAFFS</h3>
                        </div>
                    </div>
                </div>
            </div>

            <AppointmentForm />
            <Footer />
        </>
    )
}

export default About
