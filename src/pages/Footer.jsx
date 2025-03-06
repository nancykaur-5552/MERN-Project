import React from 'react'
import { Link } from 'react-router-dom'
import Logo1 from '../assets/Logo1.png';
import up from '../assets/up.png';
function Footer() {
    return (
        <>
            <div className="bg-[#0a1a3aba] mt-[3em]">
                <div className="flex flex-row gap-5 mx-[72px]">
                    <div className="w-[452px] pt-[22px]">
                        <img className="h-[94px] w-[119px]"src={Logo1} alt="Logo" />
                        <p className="text-[rgba(255,255,255,0.722)] pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsam mollitia illum quaerat.
                            Ullam
                            impedit reprehenderit quidem! Labore aspernatur ducimus necessitatibus consequatur vero accusantium!
                        </p>
                    </div>
                    <div className="w-[582px] pt-[22px]">
                        <h2 className="text-[white]">Contact</h2>
                        <div className="text-[rgba(255,255,255,0.722)] mt-[46px]">
                            <p><b>Address:</b>JV7R+MPC, 100 Feet Rd, near Sultanwind Road, Sudarshan Nagar, Amritsar.</p>
                            <p><b>Phone:</b>+91-9087654323</p>
                            <p><b>Email:</b>appointease@gmail.com</p>
                        </div>
                    </div>
                    <div className="pt-[22px]">
                        <h2 className="text-[white]">Useful Links</h2>
                        <div className="flex flex-col gap-[9px] mt-[46px]">
                            <Link className="no-underline text-[rgba(255,255,255,0.722)] cursor-pointer" to="/">Home</Link>
                            <Link className="no-underline text-[rgba(255,255,255,0.722)] cursor-pointer" to="/about">About Us</Link>
                            <Link className="no-underline text-[rgba(255,255,255,0.722)] cursor-pointer" to="/doctor">All Doctors</Link>
                            <Link className="no-underline text-[rgba(255,255,255,0.722)] cursor-pointer" to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
                <hr className="mt-[77px] mx-10" />
                <div className="flex flex-row justify-center mt-[23px]">
                    <div className="footer-text">
                        <p className="text-center text-[white] pt-[15px]">Copyright &copy; 2023 by Nancy | All Rights Reserved.</p>
                    </div>
                    <div className="footer-iconTop">
                        <Link to="/"><img src={up} alt="Upper Arrow" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
