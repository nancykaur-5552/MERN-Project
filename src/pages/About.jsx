import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/About/img1.png'
import img2 from '../assets/About/img2.png'
import Navbar from './Navbar'
import Footer from './Footer'
import AppointmentForm from './AppointmentForm'
import image from '../assets/About/image.png'
import info from '../assets/About/Info.png';
const About = () => {
    function create() {
        window.open('/createAcc', '_self');
    }
    return (
        <>
            <Navbar />
            <div style = {{backgroundImage: `url(${image})`}} className="text-center bg-[url(image.png)] bg-cover bg-center bg-no-repeat h-[350px]">
                <div className="pt-[7pc]">
                    <h1 className="text-[white]">About Us</h1>
                    <Link className="no-underline text-[white]" to="/home">Home&nbsp;//</Link>
                    <Link className="no-underline text-[rgb(34,159,34)]" to="/about">About Us</Link>
                </div>
            </div>

            <div className="flex flex-row gap-[114px]">
                <div className="w-6/12 ml-[49px] mr-1 mt-[55px] mb-[26px]">
                    <h2 className="text-[34px]" style={{ color: "rgb(10, 91, 137)" }}>WELCOME TO OUR HOSPITAL</h2>
                    <p>At Appointease, we believe that healthcare should be hassle-free, efficient, and accessible for everyone.
                        Our platform is designed to simplify the doctor appointment booking process, ensuring that patients can
                        quickly connect with trusted healthcare professionals at their convenience.</p>
                    <h3 style={{ color: "rgb(24, 122, 24)" }}>Who we are?</h3>
                    <p>We are a team of tech enthusiasts and healthcare experts committed to bridging the gap between patients
                        and doctors. With a deep understanding of the challenges faced in traditional appointment scheduling, we
                        created Appointease to offer a seamless, time-saving, and user-friendly experience.</p>
                    <h3 style={{ color: "rgb(24, 122, 24)" }}>Our Mission</h3>
                    <p>At Appointease, our mission is to make healthcare more accessible by reducing wait times, eliminating
                        scheduling conflicts, and ensuring that everyone gets the right care at the right time.Join us in
                        revolutionizing healthcare scheduling—because your health matters, and so does your time!</p>
                </div>
                <div className="relative w-[427px] ml-5 mr-[13px] mt-[31px] mb-[39px]">
                    <div className="relative">
                        <img src={img1} alt="Doctors" className="w-[90%] block" />
                        <img src={img2} alt="Elder care" className="absolute w-3/5 bottom-[-30px] border-[5px] border-solid border-[white] left-[9pc] top-[17pc]" />
                    </div>
                    <div className="absolute bg-[#86B15D] text-[white] w-6/12 h-[15pc] rounded-[5px] left-[17pc] top-[6pc]">
                        <h2 className="text-[37px] font-[bold] ml-4 mr-3 mt-[26px] mb-0">25</h2>
                        <p className="text-[28px] font-[bold] ml-4 mr-0 my-0">Years Of Experience in Medical Services</p>
                    </div>
                </div>
            </div>

            <div style ={{backgroundImage: `url(${info})`}} className="bg-no-repeat bg-cover h-[30vh] mt-[5em]">
                <div className="opacity-80 bg-[#3bc053] h-[30vh]">
                    <div className="flex flex-row text-center justify-center gap-[10px] text-[white] py-[42px]">
                        <div className="border w-[10vw] p-2.5 border-solid border-[white]">
                            <h1>30</h1>
                            <h5>YEARS OF EXPERIENCED</h5>
                        </div>
                        <div className="border w-[10vw] p-2.5 border-solid border-[white]">
                            <h1>4,500</h1>
                            <h5>HAPPY PATIENTS</h5>
                        </div>
                        <div className="border w-[10vw] p-2.5 border-solid border-[white]">
                            <h1>84</h1>
                            <h5>NUMBER OF DOCTORS</h5>
                        </div>
                        <div className="border w-[10vw] p-2.5 border-solid border-[white]">
                            <h1>300</h1>
                            <h5>NUMBER OF STAFFS</h5>
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
