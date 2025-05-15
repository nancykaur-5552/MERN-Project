import React from 'react';
import { NavLink } from 'react-router-dom';
import Pic1 from '../assets/doctor/Pic1.png';
import Pic2 from '../assets/doctor/Pic2.png';
import Pic3 from '../assets/doctor/Pic3.png';
import Pic4 from '../assets/doctor/Pic4.png';
import Pic5 from '../assets/doctor/Pic5.png';
import Pic6 from '../assets/doctor/Pic6.png';
import Pic7 from '../assets/doctor/Pic7.png';
import Pic8 from '../assets/doctor/Pic8.png';

const doctors = [
  { name: 'Dr. John Doe', role: 'General Physician', img: Pic1, link: 'John' },
  { name: 'Dr. Richard James', role: 'Pediatricians', img: Pic2, link: 'Richard' },
  { name: 'Dr. John Millar', role: 'Gastroenterologist', img: Pic3, link: 'JohnMillar' },
  { name: 'Dr. Theresa Hamilton', role: 'Dermatologist', img: Pic4, link: 'Theresa' },
  { name: 'Dr. Brittany Robertson', role: 'Gynecologist', img: Pic5, link: 'Brittany' },
  { name: 'Dr. Henry Andrews', role: 'Neurologist', img: Pic6, link: 'Henry' },
  { name: 'Dr. Raymond Payne', role: 'Heart Specialist', img: Pic7, link: 'Raymond' },
  { name: 'Dr. Mukti Sharma', role: 'Orthopedist', img: Pic8, link: 'Mukti' },
];

const Expert = () => {
  return (
    <div className="p-[13px] sm:px-10 bg-[#80808027]">
      <h1 className="text-center text-[2.8rem] font-bold mb-12 text-[#000000] drop-shadow-md">
        Our Expert Doctors
      </h1>

      {/* Flex row of 4 cards per row, no wrap */}
      <div className="flex flex-wrap justify-center gap-x-[76px] gap-y-[43px] pt-[15px]">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="w-[22%] min-w-[241px] max-w-[241px] h-[360px] animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
          >
            <NavLink to={`/Doctors/${doctor.link}`} className="no-underline">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  className="w-full h-[250px] object-cover transition-transform duration-300"
                  src={doctor.img}
                  alt={doctor.name}
                />
                <div className="bg-gradient-to-r from-blue-50 to-white text-center py-4 px-3">
                  <h2 className="text-lg text-[#3c3939] font-semibold">{doctor.name}</h2>
                  <h3 className="text-sm text-[#4d4949] mt-1">{doctor.role}</h3>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.6s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Expert;
