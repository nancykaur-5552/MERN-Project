import React from 'react'
import Dermatologist from '../assets/Home/Dermatologist.png';
import Gastro from '../assets/Home/Gastro.png';
import Gynecologist from '../assets/Home/Gynecologist.png';
import Neurologist from '../assets/Home/Neurologist.png';
import Pediatricians from '../assets/Home/Pediatricians.png';
import Physician from '../assets/Home/Physician.png';
const Speciality = () => {
  return (
    <>
      <div className="pb-[16]">
        <h2 className="text-center mt-8 font-sans text-[24px] font-semibold">
          Find by Speciality
        </h2>

        <p className="text-center mt-[1em]">Simply browse thorugh our extensive list of doctors, schedule <br />
          your appointment hassle-free.
        </p>
        <div className="flex justify-center gap-[58px] pt-[4em]">
          <img className="h-[108px] w-[108px]"src={Physician} alt="Physician" />
          <img className="h-[108px] w-[108px]"src={Pediatricians} alt="Pediatricians" />
          <img className="h-[108px] w-[108px]"src={Neurologist} alt="Neurologist" />
          <img className="h-[108px] w-[108px]"src={Gynecologist} alt="Gynecologist" />
          <img className="h-[108px] w-[108px]"src={Gastro} alt="Gastro" />
          <img className="h-[108px] w-[108px]"src={Dermatologist} alt="Dermatologist" />
        </div>
        <div className="flex justify-center gap-[67px] pt-[1em]">
          <h4>General Physician</h4>
          <h4>Pediatricians</h4>
          <h4>Neurologist</h4>
          <h4>Gynecologist</h4>
          <h4>Gastroenterologist</h4>
          <h4>Dermatologist</h4>
        </div>
      </div>
    </>
  )
}

export default Speciality
