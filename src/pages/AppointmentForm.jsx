import React from 'react'
import { Link } from 'react-router-dom'
import book from '../assets/About/book.jpg'
const AppointmentForm = () => {
    return (
        <>
            <div className="flex justify-center items-center pt-[4em]">
                <div className="w-4/5 max-w-[800px] bg-[rgba(183,178,178,0.13)] flex gap-[19px]">
                    <img className="h-[70vh] w-[25vw]" src={book} alt="Contact" />
                    <form className="flex flex-col gap-[9px] pl-3 pt-[21px]">
                        <h1>Appointment Form</h1>
                        <label htmlFor="Name">Full Name</label>
                        <input className="h-[4vh] w-[22vw] border pl-3 rounded-sm border-solid border-[rgb(204,201,201)]" type="text" placeholder="Your Name" />
                        <label htmlFor="Phone">Phone Number</label>
                        <input className="h-[4vh] w-[22vw] border pl-3 rounded-sm border-solid border-[rgb(204,201,201)]" type="number" placeholder="Your Mobile Number" />
                        <label htmlFor="Email">Email</label>
                        <input className="h-[4vh] w-[22vw] border pl-3 rounded-sm border-solid border-[rgb(204,201,201)]" type="email" placeholder="Your Email" />
                        <label htmlFor="message">Message</label>
                        <textarea className="w-[22vw] h-[12vh] border pl-3 pt-3 rounded-sm border-solid border-[rgb(204,201,201)]" placeholder="Your Message"></textarea>
                        <button className="h-[6vh] w-[11vw] bg-[#86B15D] text-[white] cursor-pointer border-none">Make Appointment</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AppointmentForm
