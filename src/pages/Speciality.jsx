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
        <h1 className="text-center pt-[15px] font-sans">
          Find by Speciality
        </h1>

        <p className="text-center mt-[1em]">Simply browse thorugh our extensive list of doctors, schedule <br />
          your appointment hassle-free.
        </p>
        <div className='flex flex-row flex-wrap justify-center'>
          <div className="flex flex-row flex-wrap justify-center gap-[58px] pt-[4em]">
            <div className="flex flex-col">
              <img className="h-[108px] w-[108px] rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_white] hover:scale-90" src={Physician} alt="Physician" />
              <h4>General Physician</h4>
            </div>
            <div className="flex flex-col">
              <img className="h-[108px] w-[108px] rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_blue] hover:scale-90" src={Pediatricians} alt="Pediatricians" />
              <h4>Pediatricians</h4>
            </div>
            <div className="flex flex-col">
              <img className="h-[108px] w-[108px] rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_white] hover:scale-90" src={Neurologist} alt="Neurologist" />
              <h4>Neurologist</h4>
            </div>
            <div className="flex flex-col">
              <img className="h-[108px] w-[108px] rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_white] hover:scale-90" src={Gynecologist} alt="Gynecologist" />
              <h4>Gynecologist</h4>
            </div>
            <div className="flex flex-col">
              <img className="h-[108px] w-[108px] rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_white] hover:scale-90" src={Gastro} alt="Gastro" />
              <h4>Gastroenterologist</h4>
            </div>
            <div className="flex flex-col">
              <img className="h-[108px] w-[108px] rounded-[50%] hover:transition-[0.3s] hover:shadow-[2px_5px_4px_5px_white] hover:scale-90" src={Dermatologist} alt="Dermatologist" />
              <h4>Dermatologist</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Speciality
