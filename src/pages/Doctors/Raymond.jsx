import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from '../Navbar'
import AppointmentForm from '../AppointmentForm'
import Footer from '../Footer'
import instagram from '../../assets/doctor/instagram.png'
import facebook from '../../assets/doctor/facebook.png'
import linkdin from '../../assets/doctor/linkdin.png'
import pic2 from '../../assets/doctor/pic2.png'
import pic3 from '../../assets/doctor/pic3.png'
import pic4 from '../../assets/doctor/pic4.png'
import pic5 from '../../assets/doctor/pic5.png'
import pic7 from '../../assets/doctor/pic7.png'
import image from '../../assets/doctor/image.png'
import expert from '../../assets/doctor/expertbg.jpg'
const Raymond = () => {
    let content = document.getElementById('pchange');
    function skill() {
        content.innerHTML = `<h2>M.D. , MBBS</h2><p>Expertise in diagnosing, treating, and managing a wide range of adult diseases, such as diabetes, hypertension, and cardiovascular disorders. Understanding of pharmacology ensures appropriate medication prescriptions while considering potential side effects and drug interactions.Effective time management allows for balancing patient consultations, hospital rounds, and medical documentation using Electronic Health Records (EHR). Collaboration with other healthcare professionals strengthens teamwork and leadership, while continuous learning keeps medical knowledge up to date.</p>`
    }
    function info() {
        content.innerHTML = "It is a long established fact that is reader will be then distracted buy then thing and readable content off page when looking at that page layout. It is a long fact that on readable content ofpage. It is a long established fact that is reader will be the then distracted by the thing and readable content then page when looking at our and on established fact that page layout and more.It is a long established fact that is reader will be then distracted buy then thing and readable content off page when looking at that page layout.It is a long fact that on readable content of page.It is a long established fact that is reader will be the then distracted."
    }
    return (
        <>
            <Navbar />
            <div className='text-center bg-[cover] bg-[center] bg-no-repeat h-[350px]' style={{backgroundImage:`url(${image})`}}>
                <div className="pt-[11pc]">
                    <h1 className='text-[white]'>Our Doctors</h1>
                    <Link className='no-underline text-[white]' to="/">Home&nbsp;//</Link>
                    <Link to="/doctor" className="no-underline text-[rgb(34,159,34)]">All Doctors</Link>
                </div>
            </div>
            <div className="flex flex-wrap flex-row justify-center items-center py-[3em]">
                <div className="flex flex-row w-[61vw] gap-[33px] h-[61vh] bg-[#9491911b]">
                    <div className="left-side">
                        <img className='h-[61vh] w-[25vw]' src={pic7} alt="Raymond" />
                    </div>
                    <div className="pr-5 pt-[2em]">
                        <div className="buttons">
                            <button className="h-[5vh] gap-[13px] w-[8vw] bg-[#5798dd] text-xl  p-[5px] border-none hover:bg-[rgb(34,159,34)]" onClick={info}>Info</button>
                            <button className="h-[5vh] gap-[13px] w-[8vw] bg-[#5798dd] text-xl  p-[5px] border-none hover:bg-[rgb(34,159,34)]" onClick={skill}>Skills</button>
                        </div>
                        <div className="details">
                            <h1>Dr. Raymond Payne</h1>
                            <h3 className='text-[rgb(34,159,34)]'>Heart Specialist</h3>
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
                                <img className='h-[30px] w-[30px]' src={facebook} alt="facebook" />
                                <img className='h-[30px] w-[30px]' src={instagram} alt="instagram" />
                                <img className='h-[30px] w-[30px]' src={linkdin} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${expert})`}}
                      className="text-center bg-no-repeat bg-cover text-[white] pt-[3em];">
                <h2 className='pt-[20px]'>Meet Our Team</h2>
                <h1>Other Specialists</h1>
                <div className="flex flex-row flex-wrap justify-center items-center gap-[5px]">
                    <NavLink to='/Richard' className="text-[white] py-[2em] no-underline">
                        <img className='h-[33vh]  rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_white] hover:scale-90' src={pic2} alt="pic2" />
                        <h2>Dr. Richard James</h2>
                        <h3>Pediatrician</h3>
                    </NavLink>
                    <NavLink to='/JohnMillar' className="text-[white] py-[2em] no-underline">
                        <img className='h-[33vh]  rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_white] hover:scale-90' src={pic3} alt="pic3" />
                        <h2>Dr. John Millar</h2>
                        <h3>Gastroenterologist</h3>
                    </NavLink>
                    <NavLink to='/Theresa' className="text-[white] py-[2em] no-underline">
                        <img className='h-[33vh]  rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_white] hover:scale-90' src={pic4} alt="pic4" />
                        <h2>Dr. Theresa Hamilton</h2>
                        <h3>Dermatologist</h3>
                    </NavLink>
                    <NavLink to='/Brittany' className="text-[white] py-[2em] no-underline">
                        <img className='h-[33vh]  rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_white] hover:scale-90' src={pic5} alt="pic5" />
                        <h2>Dr. Brittany Robertson</h2>
                        <h3>Gynecologist</h3>
                    </NavLink>
                </div>
            </div>
            <AppointmentForm />
            <Footer />
        </>
    )
}

export default Raymond
