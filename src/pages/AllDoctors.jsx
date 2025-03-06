import React from 'react'
import { Link } from 'react-router-dom'
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
            <div style={{backgroundImage: `url(${bg})`}} className="text-center bg-no-repeat bg-cover pt-[4em]">
                <h3 className="text-[#357edd] text-2xl">Meet Our Team</h3>
                <h2 className="text-[55px] text-[black]">Our Expert Doctors</h2>
                <div className="flex flex-row justify-center text-center flex-wrap gap-[25px] pt-[1em] pb-[1em] px-[23px]">
                    <div className="w-[15vw] shadow-[0_4px_5px_0_rgba(161,158,158,0.282)] p-[29px] hover:text-[white] bg-[#357eddc6] rounded-[40px]" onClick="John2()">
                        <div className="image-wrapper">
                            <img className="h-[23vh] pt-0.5 rounded-[50%]" src={Pic1} alt="pic1" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. John Doe</h2>
                                <h3>General Physician</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img className="h-[23px] w-[23px]" src={Facebook} alt="facebook" />
                                <img className="h-[23px] w-[23px]" src={Instagram} alt="instagram" />
                                <img className="h-[23px] w-[23px]" src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[15vw] shadow-[0_4px_5px_0_rgba(161,158,158,0.282)] p-[29px] hover:text-[white] bg-[#357eddc6] rounded-[40px]" onClick="Richard()">
                        <div className="image-wrapper">
                            <img className="h-[23vh] pt-0.5 rounded-[50%]" src={Pic2} alt="pic2" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. Richard James</h2>
                                <h3>Pediatrician</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img className="h-[23px] w-[23px]" src={Facebook} alt="facebook" />
                                <img className="h-[23px] w-[23px]" src={Instagram} alt="instagram" />
                                <img className="h-[23px] w-[23px]" src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[15vw] shadow-[0_4px_5px_0_rgba(161,158,158,0.282)] p-[29px] hover:text-[white] bg-[#357eddc6] rounded-[40px]" onClick="John()">
                        <div className="image-wrapper">
                            <img className="h-[23vh] pt-0.5 rounded-[50%]" src={Pic3} alt="pic3" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. John Millar</h2>
                                <h3>Gastroenterologist</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img className="h-[23px] w-[23px]" src={Facebook} alt="facebook" />
                                <img className="h-[23px] w-[23px]" src={Instagram} alt="instagram" />
                                <img className="h-[23px] w-[23px]" src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[15vw] shadow-[0_4px_5px_0_rgba(161,158,158,0.282)] p-[29px] hover:text-[white] bg-[#357eddc6] rounded-[40px]" onClick="Theresa()">
                        <div className="image-wrapper">
                            <img className="h-[23vh] pt-0.5 rounded-[50%]" src={Pic4} alt="pic4" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. Theresa Hamilton</h2>
                                <h3>Dermatologist</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img className="h-[23px] w-[23px]" src={Facebook} alt="facebook" />
                                <img className="h-[23px] w-[23px]" src={Instagram} alt="instagram" />
                                <img className="h-[23px] w-[23px]" src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[15vw] shadow-[0_4px_5px_0_rgba(161,158,158,0.282)] p-[29px] hover:text-[white] bg-[#357eddc6] rounded-[40px]" onClick="Brittany()">
                        <div className="image-wrapper">
                            <img className="h-[23vh] pt-0.5 rounded-[50%]" src={Pic5} alt="pic5" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. Brittany Robertson</h2>
                                <h3>Gynecologist</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img className="h-[23px] w-[23px]" src={Facebook} alt="facebook" />
                                <img className="h-[23px] w-[23px]" src={Instagram} alt="instagram" />
                                <img className="h-[23px] w-[23px]" src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[15vw] shadow-[0_4px_5px_0_rgba(161,158,158,0.282)] p-[29px] hover:text-[white] bg-[#357eddc6] rounded-[40px]" onClick="Henry()">
                        <div className="image-wrapper">
                            <img className="h-[23vh] pt-0.5 rounded-[50%]" src={Pic6} alt="pic6" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. Henry Andrews</h2>
                                <h3>Neurologist</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img className="h-[23px] w-[23px]" src={Facebook} alt="facebook" />
                                <img className="h-[23px] w-[23px]" src={Instagram} alt="instagram" />
                                <img className="h-[23px] w-[23px]" src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[15vw] shadow-[0_4px_5px_0_rgba(161,158,158,0.282)] p-[29px] hover:text-[white] bg-[#357eddc6] rounded-[40px]" onClick="Raymond()">
                        <div className="image-wrapper">
                            <img className="h-[23vh] pt-0.5 rounded-[50%]" src={Pic7} alt="pic7" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. Raymond Payne</h2>
                                <h3>Heart Specialist</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img className="h-[23px] w-[23px]" src={Facebook} alt="facebook" />
                                <img className="h-[23px] w-[23px]" src={Instagram} alt="instagram" />
                                <img className="h-[23px] w-[23px]" src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[15vw] shadow-[0_4px_5px_0_rgba(161,158,158,0.282)] p-[29px] hover:text-[white] bg-[#357eddc6] rounded-[40px]" onClick="Mukti()">
                        <div className="image-wrapper">
                            <img className="h-[23vh] pt-0.5 rounded-[50%]" src={Pic8} alt="pic8" />
                        </div>
                        <div className="detail">
                            <div className="content">
                                <h2>Dr. Mukti Sharma</h2>
                                <h3>Orthopedist</h3>
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                            <div className="social-media">
                                <img className="h-[23px] w-[23px]" src={Facebook} alt="facebook" />
                                <img className="h-[23px] w-[23px]" src={Instagram} alt="instagram" />
                                <img className="h-[23px] w-[23px]" src={LinkdIn} alt="linkdin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllDoctors
