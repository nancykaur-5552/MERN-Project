import React from 'react'
import { Link } from 'react-router-dom'
import Logo1 from '../assets/Logo1.png'
import {create} from '/contact'
import Navbar from '../Navbar'
import Footer from '../Footer'
import AppointmentForm from '../AppointmentForm'
import {info, skill, Richard, JohnMillar, Theresa, Brittany} from './John'
const Mukti = () => {
  return (
    <>
     <Navbar/>
    <div className="Doctors">
        <div className="banner">
            <h1>Our Doctors</h1>
            <Link to="/">Home&nbsp;//</Link>
            <Link to="/doctor" className="doctor">All Doctors</Link>
        </div>
    </div>
    <div className="container">
        <div className="box">
            <div className="left-side">
                <img src="../All Doctors/pic8.png" alt="Mukti"/>
            </div>
            <div className="right-side">
                <div className="buttons">
                    <button onClick={info}>Info</button>
                    <button onClick={skill}>Skills</button>
                </div>
                <div className="details">
                    <h1>Dr. Mukti Sharma</h1>
                    <h3>Orthopedist</h3>
                    <p id="pchange">
                        It is a long established fact that is reader will be then distracted buy then thing
                        and readable
                        content off page when looking at that page layout. It is a long fact that on readable content of
                        page. It is a long established fact that is reader will be the then distracted by the thing and
                        readable content then page when looking at our and on established fact that page layout and
                        more.It is a long established fact that is reader will be then distracted buy then thing and
                        readable
                        content off page when looking at that page layout. It is a long fact that on readable
                        content of
                        page. It is a long established fact that is reader will be the then distracted.
                    </p>
                    <div className="social-media">
                        <img src="../All Doctors/facebook.png" alt="facebook"/>
                        <img src="../All Doctors/instagram.png" alt="instagram"/>
                        <img src="../All Doctors/linkdin.png" alt="linkdin"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div className="expert">
        <h2>Meet Our Team</h2>
        <h1>Other Specialists</h1>
        <div className="doctors">
            <div className="doc 1" onClick={Richard}>
                <img src="../All Doctors/pic2.png" alt="pic2"/>
                <h2>Dr. Richard James</h2>
                <h3>Pediatrician</h3>
            </div>
            <div className="doc 2" onClick={JohnMillar}>
                <img src="../All Doctors/pic3.png" alt="pic2"/>
                <h2>Dr. John Millar</h2>
                <h3>Gastroenterologist</h3>
            </div>
            <div className="doc 3" onClick={Theresa}>
                <img src="../All Doctors/pic4.png" alt="pic2"/>
                <h2>Dr. Theresa Hamilton</h2>
                <h3>Dermatologist</h3>
            </div>
            <div className="doc 4" onClick={Brittany}>
                <img src="../All Doctors/pic5.png" alt="pic2"/>
                <h2>Dr. Brittany Robertson</h2>
                <h3>Gynecologist</h3>
            </div>
        </div>
    </div>
    <AppointmentForm/>
    <Footer/>
    </>
  )
}

export default Mukti
