import React from 'react'
import bg from '../assets/Home/bg.avif';
import { NavLink } from 'react-router-dom';
import Pic1 from '../assets/doctor/Pic1.png'
import Pic2 from '../assets/doctor/Pic2.png'
import Pic3 from '../assets/doctor/Pic3.png'
import Pic4 from '../assets/doctor/Pic4.png'
import Pic5 from '../assets/doctor/Pic5.png'
import Pic6 from '../assets/doctor/Pic6.png'
import Pic7 from '../assets/doctor/Pic7.png'
import Pic8 from '../assets/doctor/Pic8.png'
const Expert = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-no-repeat flex-wrap bg-cover">
              <div className="content">
                  <h1 className="text-center pt-[1em]">Our Expert Doctors</h1>
              </div>
              <div className=" flex flex-row flex-wrap gap-[52px] align-items-[center] justify-content-center pt-[5em] pb-[5em] pl-[11em] pr-[5em]">

                  <NavLink to='/Doctors/John' className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] no-underline text-[black] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[18px]"
                  >
                      <img className="p-[10px] hover: transform transition duration-300 hover:scale-110" src={Pic1} alt="" height="250px" width="220px"/>
                      <div className="px-4  hover: bg-[white]">
                          <h2 className="text-center">Dr. John Doe</h2>
                          <h3 className="text-center pt-[0px]">General Physician</h3>
                      </div>
                  </NavLink>
                  <NavLink to='/Doctors/Richard' className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] no-underline text-[black] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[18px]">
                      <img className="p-[10px] hover: transform transition duration-300 hover:scale-110" src={Pic2} alt="" height="250px" width="220px"/>
                      <div className="px-4 hover: bg-[white]">
                          <h2 className="text-center">Dr. Richard James</h2>
                          <h3 className="text-center pt-[0px]">Pediatricians</h3>
                      </div>
                  </NavLink>
                  <NavLink to='/Doctors/JohnMillar' className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] no-underline text-[black] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[18px]">
                      <img className="p-[10px] hover: transform transition duration-300 hover:scale-110"src={Pic3} alt="" height="250px" width="220px"/>
                      <div className="px-4 hover: bg-[white]">
                          <h2 className="text-center">Dr. John Millar</h2>
                          <h3 className="text-center pt-[0px]">Gastroenterologist</h3>
                      </div>
                  </NavLink>
                  <NavLink to='/Doctors/Theresa' className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] no-underline text-[black] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[18px]">
                      <img className="p-[10px] hover: transform transition duration-300 hover:scale-110" src={Pic4} alt="" height="250px" width="220px"/>
                      <div className="px-4 hover: bg-[white]">
                          <h2 className="text-center">Dr. Theresa Hamilton</h2>
                          <h3 className="text-center pt-[0px]">Dermatologist</h3>
                      </div>
                  </NavLink>
                  <NavLink to='/Doctors/Brittany' className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] no-underline text-[black] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[18px]">
                      <img className="p-[10px] hover: transform transition duration-300 hover:scale-110" src={Pic5} alt="" height="250px" width="220px"/>
                      <div className="px-4 hover: bg-[white]">
                          <h2 className="text-center">Dr. Brittany Robertson</h2>
                          <h3 className="text-center pt-[0px]">Gynecologist</h3>
                      </div>
                  </NavLink>
                  <NavLink to='/Doctors/Henry' className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] no-underline text-[black] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[18px]">
                      <img className="p-[10px] hover: transform transition duration-300 hover:scale-110"src={Pic6} alt="" height="250px" width="220px"/>
                      <div className="px-4 hover: bg-[white]">
                          <h2 className="text-center">Dr. Henry Andrews</h2>
                          <h3 className="text-center pt-[0px]">Neurologist</h3>
                      </div>
                  </NavLink>
                  <NavLink to='/Doctors/Raymond' className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] no-underline text-[black] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[18px]">
                      <img className="p-[10px] hover: transform transition duration-300 hover:scale-110" src={Pic7} alt="" height="250px" width="220px"/>
                      <div className="px-4 hover: bg-[white]">
                          <h2 className="text-center">Dr. Raymond Payne</h2>
                          <h3 className="text-center pt-[0px]">Heart Specialist</h3>
                      </div>
                  </NavLink>
                  <NavLink to='/Doctors/Mukti' className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] no-underline text-[black] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[18px]">
                      <img className="p-[10px] hover: transform transition duration-300 hover:scale-110"src={Pic8} alt="" height="250px" width="220px"/>
                      <div className="px-4 hover: bg-[white]">
                          <h2 className="text-center">Dr. Mukti Sharma</h2>
                          <h3 className="text-center pt-[0px]">Orthopedist</h3>
                      </div>
                  </NavLink>
              </div>
          </div>
    </>
  )
}
export default Expert
