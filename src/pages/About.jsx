import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import about1 from '../assets/About/about1.png'
import Navbar from './Navbar'
import Footer from './Footer'
import image from '../assets/About/image.png'
import info from '../assets/About/Info.png';
import pic2 from '../assets/doctor/pic2.png';
import pic3 from '../assets/doctor/pic3.png'
import pic4 from '../assets/doctor/pic4.png'
import pic5 from '../assets/doctor/pic6.png'
import expert from '../assets/doctor/expertbg.jpg'
import book from '../assets/About/book.jpg'
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
            <div className="text-center justify-center align-middle h-[73px] bg-[#4171bede]">
                <h2 className='text-[white] pt-[20px]'>Ready to get our medical care? We’re always wait for serve you, <NavLink to="/AppointmentForm" className="no-underline text-[white] hover: cursor-pointer hover:text-[#0b130dd7]">Make an Appointment.</NavLink></h2>
            </div>
            <div style={{ backgroundImage: `url(${expert})` }}
                className="text-center bg-no-repeat bg-cover text-[white] pt-[3em];">
                <h2 className='pt-[20px]'>Meet Our Team</h2>
                <h1>Other Specialists</h1>
                <div className="flex flex-row flex-wrap justify-center items-center gap-[20px]">
                    <NavLink to='/Doctors/Richard' className="text-[white] py-[2em] no-underline">
                        <img className='h-[30vh]  rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_white] hover:scale-90' src={pic2} alt="pic2" />
                        <h2>Dr. Richard James</h2>
                        <h3>Pediatrician</h3>
                    </NavLink>
                    <NavLink to='/Doctors/JohnMillar' className="text-[white] py-[2em] no-underline">
                        <img className='h-[30vh]  rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_white] hover:scale-90' src={pic3} alt="pic3" />
                        <h2>Dr. John Millar</h2>
                        <h3>Gastroenterologist</h3>
                    </NavLink>
                    <NavLink to='/Doctors/Theresa' className="text-[white] py-[2em] no-underline">
                        <img className='h-[30vh]  rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_white] hover:scale-90' src={pic4} alt="pic4" />
                        <h2>Dr. Theresa Hamilton</h2>
                        <h3>Dermatologist</h3>
                    </NavLink>
                    <NavLink to='/Doctors/Brittany' className="text-[white] py-[2em] no-underline">
                        <img className='h-[30vh]  rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_white] hover:scale-90' src={pic5} alt="pic5" />
                        <h2>Dr. Brittany Robertson</h2>
                        <h3>Gynecologist</h3>
                    </NavLink>
                </div>
            </div>
            <div className="flex justify-center items-center pt-[4em]">
                <div className="w-4/5 max-w-[800px] bg-[rgba(183,178,178,0.13)] flex gap-[19px]">
                    <img className="h-[70vh] w-[25vw]" src={book} alt="Contact" />
                    <form className="flex flex-col gap-[8px] pl-3 pt-[21px]">
                        <h1>Contact Form</h1>
                        <label htmlFor="Name"></label>
                        <input className="pl-[9px] w-[24vw] h-[5vh] border  rounded-sm border-solid border-[rgb(204,201,201)]" type="text" placeholder="Your Name" />
                        <label htmlFor="Email"></label>
                        <input className="pl-[9px] w-[24vw] h-[5vh] border  rounded-sm border-solid border-[rgb(204,201,201)]" type="email" placeholder="Your Email" />
                        <label htmlFor="Subject"></label>
                        <input className="pl-[9px] w-[24vw] h-[5vh] border rounded-sm border-solid border-[rgb(204,201,201)]" type="text" placeholder="Subject" />
                        <label htmlFor="message"></label>
                        <textarea className="pb-[12px] pl-[9px] w-[24vw] h-[20vh] border pt-3 rounded-sm border-solid border-[rgb(204,201,201)]" placeholder="Message"></textarea>
                        <button className="h-[6vh] w-[11vw] bg-[rgb(34,159,34)] text-[white] cursor-pointer border-none">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
