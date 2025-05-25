import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import location from '../assets/contact/location.png'
import contacts from '../assets/contact/contacts.png'
import internet from '../assets/contact/internet.png'
import message from '../assets/contact/message.png'
import image from '../assets/contact/image.png'
import ContactForm from './contactForm'

const contact = () => {
    return (
        <>
            <Navbar />
            <div style={{ backgroundImage: `url(${image})` }} className="text-center bg-cover bg-center bg-no-repeat h-[350px]">
                <div className="pt-[7pc]">
                    <h1 className="text-[white]">Contact Us</h1>
                    <Link className="no-underline text-[white]" to="/">Home&nbsp;//</Link>
                    <Link className="no-underline text-[rgb(34,159,34)]" to="/contact">Contact Us</Link>
                </div>
            </div>

            <div className="w-full h-[57vh] flex flex-wrap object-fill items-center justify-center pt-[4em]">
                <p><iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.7183870318736!2d74.8891916754771!3d31.61417547417124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197cb957eaf97d%3A0x2127b4207f6390e0!2sAmritsar%20Hospital!5e0!3m2!1sen!2sin!4v1739109912775!5m2!1sen!2sin"
                    width="1000"
                    height="450"
                    style={{ border: '0' }} allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" /></p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center text-center gap-[61px] pt-[4em]">
                <div className="bg-[rgba(183,178,178,0.13)] w-[200px] h-[250px] rounded-[10px]">
                    <img className="h-[105px] w-11 mt-[22px]" src={location} alt="Address" />
                    <h3 className="mt-[23px] font-bold"
                        style={{ fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif' }}>ADDRESS</h3>
                    <p className="text-[medium] mt-[19px]">JV7R+MPC, 100 Feet Rd, near Sultanwind Road, Sudarshan Nagar, Amritsar.
                    </p>
                </div>
                <div className="bg-[rgba(183,178,178,0.13)] w-[200px] h-[250px] rounded-[10px]">
                    <img className="h-[105px] w-11 mt-[22px]" src={contacts} alt="Address" />
                    <h3 className="mt-[23px] font-bold"
                        style={{ fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif' }}>CONTACT NUMBER</h3>
                    <p className="text-[medium] mt-[23px]">+91-9087654323</p>
                </div>
                <div className="bg-[rgba(183,178,178,0.13)] w-[200px] h-[250px] rounded-[10px]">
                    <img className="h-[105px] w-11 mt-[22px]" src={message} alt="Address" />
                    <h3 className="mt-[23px] font-bold"
                        style={{ fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif' }}>EMAIL ADDRESS</h3>
                    <p className="text-[medium] mt-[23px]">appointease@gmail.com</p>
                </div>
                <div className="bg-[rgba(183,178,178,0.13)] w-[200px] h-[250px] rounded-[10px]">
                    <img className="h-[105px] w-11 mt-[22px]" src={internet} alt="Address" />
                    <h3 className="mt-[23px] font-bold"
                        style={{ fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif' }}> WEBSITE</h3>
                    <p className="text-[medium] mt-[23px]">Appointease.com</p>
                </div>
            </div>
            <ContactForm/>
            <Footer />
        </>
    )
}

export default contact
