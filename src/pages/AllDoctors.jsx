import React from 'react'
import { NavLink } from 'react-router-dom'
import Pic1 from '../assets/doctor/Pic1.png'
import Pic2 from '../assets/doctor/Pic2.png'
import Pic3 from '../assets/doctor/Pic3.png'
import Pic4 from '../assets/doctor/Pic4.png'
import Pic5 from '../assets/doctor/Pic5.png'
import Pic6 from '../assets/doctor/Pic6.png'
import Pic7 from '../assets/doctor/Pic7.png'
import Pic8 from '../assets/doctor/Pic8.png'
import bg from '../assets/doctor/bg.avif';
import Facebook from '../assets/doctor/facebook.png'
import Instagram from '../assets/doctor/instagram.png'
import LinkdIn from '../assets/doctor/linkdin.png'

const AllDoctors = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className="text-center flex-wrap bg-no-repeat bg-cover pt-[4em]">
                <h3 className="text-[#357edd] text-[34px]">Meet Our Team</h3>
                <h2 className="text-[55px] text-[black]">Our Expert Doctors</h2>
                <div className="flex flex-row justify-center text-center flex-wrap gap-[25px] pt-[1em] pb-[1em] px-[23px]">
                    <NavLink to='/Doctors/John'
                        className="w-[300px] h-[400px] [perspective:1000px]  rounded-[15px] shadow-md">
                        <div className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex  flex-col justify-center items-center rounded-[15px] bg-white">
                                <img className="w-[80%] h-[70%] rounded-[15px]" src={Pic1} alt="pic1" />
                                <h1 class="text-[#004b99] pt-[5px]">DR. JOHN</h1>
                            </div>
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex justify-center items-center rounded-[15px] bg-[rgba(42,_121,_171,_0.458)] text-[white] text-center flex-col [transform:rotateY(180deg)]">
                                <div>
                                    <h1>Dr. John Doe</h1>
                                    <h2>General Physician</h2>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                </div>
                                <div className="social-media">
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Facebook} alt="facebook" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Instagram} alt="instagram" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={LinkdIn} alt="linkdin" />
                                </div>
                            </div>
                        </div>
                    </NavLink>


                    <NavLink to='/Doctors/Richard' className="w-[300px] h-[400px] [perspective:1000px]  rounded-[15px] shadow-md">
                        <div className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex  flex-col justify-center items-center rounded-[15px] bg-white">
                                <img className="w-[80%] h-[70%] rounded-[15px]" src={Pic2} alt="pic2" />
                                <h1 class="text-[#004b99] pt-[5px]">DR. RICHARD</h1>
                            </div>
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex justify-center items-center rounded-[15px] bg-[rgba(42,_121,_171,_0.458)] text-[white] text-center flex-col [transform:rotateY(180deg)]">
                                <div className="">
                                    <h1>Dr. Richard James</h1>
                                    <h2>Pediatrician</h2>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                </div>
                                <div className="social-media">
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Facebook} alt="facebook" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Instagram} alt="instagram" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={LinkdIn} alt="linkdin" />
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/Doctors/JohnMillar' className="w-[300px] h-[400px] [perspective:1000px] shadow-md">
                        <div className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex flex-col justify-center items-center rounded-[15px] bg-white">
                                <img className="w-[80%] h-[70%] rounded-[15px]" src={Pic3} alt="pic3" />
                                <h1 class="text-[#004b99] pt-[5px]">DR. JOHN</h1>
                            </div>
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex justify-center items-center rounded-[15px] bg-[rgba(42,_121,_171,_0.458)] text-[white] text-center flex-col [transform:rotateY(180deg)]">
                                <div className="">
                                    <h1>Dr. John Millar</h1>
                                    <h2>Gastroenterologist</h2>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                </div>
                                <div className="social-media">
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Facebook} alt="facebook" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Instagram} alt="instagram" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={LinkdIn} alt="linkdin" />
                                </div>
                            </div></div>
                    </NavLink>
                    <NavLink to='/Doctors/Theresa' className="w-[300px] h-[400px] [perspective:1000px] shadow-md">
                        <div className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex flex-col justify-center items-center rounded-[15px] bg-white">
                                <img className="w-[80%] h-[70%] rounded-[15px]" src={Pic4} alt="pic4" />
                                <h1 class="text-[#004b99] pt-[5px]">DR. THERESA</h1>
                            </div>
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex justify-center items-center rounded-[15px] bg-[rgba(42,_121,_171,_0.458)] text-[white] text-center flex-col [transform:rotateY(180deg)]">
                                <div className="">
                                    <h1>Dr. Theresa Hamilton</h1>
                                    <h2>Dermatologist</h2>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                </div>
                                <div className="social-media">
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Facebook} alt="facebook" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Instagram} alt="instagram" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={LinkdIn} alt="linkdin" />
                                </div>
                            </div></div>
                    </NavLink>
                    <NavLink to='/Doctors/Brittany' className="w-[300px] h-[400px] [perspective:1000px]  shadow-md">
                        <div className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex flex-col justify-center items-center rounded-[15px] bg-white">
                                <img className="w-[80%] h-[70%] rounded-[15px]" src={Pic5} alt="pic5" />
                                <h1 class="text-[#004b99] pt-[5px]">DR. BRITTANY</h1>
                            </div>
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex justify-center items-center rounded-[15px] bg-[rgba(42,_121,_171,_0.458)] text-[white] text-center flex-col [transform:rotateY(180deg)]">
                                <div className="">
                                    <h1>Dr. Brittany Robertson</h1>
                                    <h2>Gynecologist</h2>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                </div>
                                <div className="social-media">
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Facebook} alt="facebook" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Instagram} alt="instagram" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={LinkdIn} alt="linkdin" />
                                </div>
                            </div></div>
                    </NavLink>
                    <NavLink to='/Doctors/Henry' className="w-[300px] h-[400px] [perspective:1000px] rounded-[15px] shadow-md">
                        <div className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex flex-col justify-center items-center rounded-[15px] bg-white">
                                <img className="w-[80%] h-[70%] rounded-[15px]" src={Pic6} alt="pic6" />
                                <h1 class="text-[#004b99] pt-[5px]">DR. HENRY</h1>
                            </div>
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex justify-center items-center rounded-[15px] bg-[rgba(42,_121,_171,_0.458)] text-[white] text-center flex-col [transform:rotateY(180deg)]">
                                <div className="">
                                    <h1>Dr. Henry Andrews</h1>
                                    <h2>Neurologist</h2>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                </div>
                                <div className="social-media">
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Facebook} alt="facebook" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Instagram} alt="instagram" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={LinkdIn} alt="linkdin" />
                                </div>
                            </div></div>
                    </NavLink>
                    <NavLink to='/Doctors/Raymond' className="w-[300px] h-[400px] [perspective:1000px] rounded-[15px] shadow-md">
                        <div className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex flex-col justify-center items-center rounded-[15px] bg-white">
                                <img className="w-[80%] h-[70%] rounded-[15px]" src={Pic7} alt="pic7" />
                                <h1 class="text-[#004b99] pt-[5px]">DR. RAYMOND</h1>
                            </div>
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex justify-center items-center rounded-[15px] bg-[rgba(42,_121,_171,_0.458)] text-[white] text-center flex-col [transform:rotateY(180deg)]">
                                <div className="">
                                    <h1>Dr. Raymond Payne</h1>
                                    <h2>Heart Specialist</h2>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                </div>
                                <div className="social-media">
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Facebook} alt="facebook" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Instagram} alt="instagram" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={LinkdIn} alt="linkdin" />
                                </div>
                            </div></div>
                    </NavLink>
                    <NavLink to='/Doctors/Mukti' className="w-[300px] h-[400px] [perspective:1000px] rounded-[15px] shadow-md">
                        <div className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex flex-col justify-center items-center rounded-[15px] bg-white">
                                <img className="w-[80%] h-[70%] rounded-[15px]" src={Pic8} alt="pic8" />
                                <h1 class="text-[#004b99] pt-[5px]">DR. MUKTI</h1>
                            </div>
                            <div className="w-full h-full absolute [backface-visibility:hidden] flex justify-center items-center rounded-[15px] bg-[rgba(42,_121,_171,_0.458)] text-[white] text-center flex-col [transform:rotateY(180deg)]">
                                <div className="">
                                    <h1>Dr. Mukti Sharma</h1>
                                    <h2>Orthopedist</h2>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                </div>
                                <div className="social-media">
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Facebook} alt="facebook" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={Instagram} alt="instagram" />
                                    <img className="h-[33px] w-[33px] pt-[5px]" src={LinkdIn} alt="linkdin" />
                                </div>
                            </div></div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default AllDoctors
