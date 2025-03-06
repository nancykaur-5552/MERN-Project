import React from 'react'
import bg from '../assets/Home/bg.avif';
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
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-no-repeat bg-cover">
              <div className="content">
                  <h1 className="text-center pt-[1em]">Our Expert Doctors</h1>
              </div>
              <div className="grid grid-cols-[repeat(4,1fr)] gap-[22px] justify-items-center p-[5em]">

                  <div className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[23px]" onClick={() => John()}
                  >
                      <img className="p-[10px] hover:rounded-[50%]" src={Pic1} alt="" height="250px" width="220px"/>
                      <div className="px-4 py-1.5">
                          <h3 className="text-center"><b>Dr. John Doe</b></h3>
                          <p className="text-center mt-3">General Physician</p>
                          <p className="text-center mt-3">M.D., MBBS</p>
                      </div>
                  </div>
                  <div className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[23px]" onClick="Richard()">
                      <img className="p-[10px] hover:rounded-[50%]" src={Pic2} alt="" height="250px" width="220px"/>
                      <div className="px-4 py-1.5">
                          <h3 className="text-center"><b>Dr. Richard James</b></h3>
                          <p className="text-center mt-3">Pediatricians</p>
                          <p className="text-center mt-3">M.D., Doctor of Osteopathic</p>
                      </div>
                  </div>
                  <div className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[23px]" onClick="John2()">
                      <img className="p-[10px] hover:rounded-[50%]"src={Pic3} alt="" height="250px" width="220px"/>
                      <div className="px-4 py-1.5">
                          <h3 className="text-center"><b>Dr. John Millar</b></h3>
                          <p className="text-center mt-3">Gastroenterologist</p>
                          <p className="text-center mt-3">M.D., MBBS</p>
                      </div>
                  </div>
                  <div className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[23px]" onClick="Thersa()">
                      <img className="p-[10px] hover:rounded-[50%]" src={Pic4} alt="" height="250px" width="220px"/>
                      <div className="px-4 py-1.5">
                          <h3 className="text-center"><b>Dr. Theresa Hamilton</b></h3>
                          <p className="text-center mt-3">Dermatologist</p>
                          <p className="text-center mt-3">M.D., MBBS</p>
                      </div>
                  </div>
                  <div className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[23px]" onClick="Brittany()">
                      <img className="p-[10px] hover:rounded-[50%]" src={Pic5} alt="" height="250px" width="220px"/>
                      <div className="px-4 py-1.5">
                          <h3 className="text-center"><b>Dr. Brittany Robertson</b></h3>
                          <p className="text-center mt-3">Gynecologist</p>
                          <p className="text-center mt-3">M.D., MBBS</p>
                      </div>
                  </div>
                  <div className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[23px]" onClick="Henry()">
                      <img className="p-[10px] hover:rounded-[50%]"src={Pic6} alt="" height="250px" width="220px"/>
                      <div className="px-4 py-1.5">
                          <h3 className="text-center"><b>Dr. Henry Andrews</b></h3>
                          <p className="text-center mt-3">Neurologist</p>
                          <p className="text-center mt-3">M.D., MBBS</p>
                      </div>
                  </div>
                  <div className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[23px]" onClick="Raymond()">
                      <img className="p-[10px] hover:rounded-[50%]" src={Pic7} alt="" height="250px" width="220px"/>
                      <div className="px-4 py-1.5">
                          <h3 className="text-center"><b>Dr. Raymond Payne</b></h3>
                          <p className="text-center mt-3">Heart Specialist</p>
                          <p className="text-center mt-3">M.D., MBBS</p>
                      </div>
                  </div>
                  <div className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] transition-[0.3s] w-[241px] h-[360px] flex flex-col rounded-xl hover:shadow-[4px_4px_8px_8px_rgba(0,0,0,0.2)] hover:rounded-[23px]" onClick="Mukti()">
                      <img className="p-[10px] hover:rounded-[50%]"src={Pic8} alt="" height="250px" width="220px"/>
                      <div className="px-4 py-1.5">
                          <h3 className="text-center"><b>Dr. Mukti Sharma</b></h3>
                          <p className="text-center mt-3">Orthopedist</p>
                          <p className="text-center mt-3">M.D., MBBS</p>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
export default Expert
