import React from 'react'
import Doct from '../assets/doctor/doct.png'
import Laboratory from '../assets/doctor/laboratory.png'
import experience from '../assets/doctor/experience.png'
import Award from '../assets/doctor/award.png'
const Experience = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center flex-wrap gap-[30px] text-[white] py-[2em]">
      
                <div className="box1">
                  <img className="h-[69px] pl-[45px]" src={Doct} alt="doctor" />
                  <h1 className="text-center">568+</h1>
                  <div className="container1">
                    <h3>Professional Doctors</h3>
                  </div>
                </div>
      
                <div className="box2">
                  <img className="h-[69px] pl-[45px]" src={Laboratory} alt="laboratory" />
                  <h1 className="text-center">963+</h1>
                  <div className="container2">
                    <h3>Digital Laboratory</h3>
                  </div>
                </div>
      
                <div className="box3">
                  <img className="h-[69px] pl-[45px]" src={experience} alt="experience" />
                  <h1 className="text-center">38+</h1>
                  <div className="container3">
                    <h3>Years Of Experience</h3>
                  </div>
                </div>
      
                <div className="box4">
                  <img className="h-[69px] pl-[45px]" src={Award} alt="award" />
                  <h1 className="text-center">463+</h1>
                  <div className="container4">
                    <h3>Winning Awards</h3>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Experience
