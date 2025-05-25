import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Expert from "./Expert";
import index from "../assets/index.png";
import Speciality from "./Speciality";
import bg2 from "../assets/Home/bg2.jpg";
import { Spin } from "antd";

const Home = () => {
  function ContactBox() {
    window.open("/contact", "_self");
  }
  function doctorBox() {
    window.open("/doctor", "_self");
  }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "#f0f2f5",
          }}
        >
          <Spin size="large" tip="Loading..." />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="flex flex-row flex-wrap bg-[#3573b5] text-[white]">
            <div className="flex flex-col">
              <h1 className="pt-[74px] text-[64px] ml-[52px] mb-[5px] font-trebuchet font-normal leading-tight">
                Book Appointment <br /> With Trusted Doctors
              </h1>
              <h2 className="text-[22px] ml-[52px] pt-[3px]">
                Simple browse through our extensive list of trusted doctors,
                <br />
                schedule your appointment hassle-free.
              </h2>
              <button className="bg-neutral-100 text-base transition-colors duration-300 ease-in w-[267px] ml-[71px] mt-[34px] mb-[35px] px-[50px] py-[20px] rounded-[15px] border-0 hover:bg-[rgb(34,159,34)] hover:text-white hover:rounded-none font-sans">
                <NavLink
                  to="/AppointmentForm"
                  className="no-underline text-[#333] font-[bold] cursor-pointer hover:text-[white]"
                >
                  BOOK APPOINTMENT
                </NavLink>
              </button>
            </div>
            <div className="">
              <img
                className="h-[584px] w-[827px]"
                src={index}
                alt="Home image"
              />
            </div>
          </div>
          <Speciality />
          <Expert />
          <div
            style={{ backgroundImage: `url(${bg2})` }}
            className="bg-no-repeat bg-cover h-[54vh] text-[white] flex flex-row items-center justify-center py-[2em]"
          >
            <div className="flex flex-row items-center justify-center gap-[120px]">
              <div className="left-side">
                <h3>Get in Touch</h3>
                <h1 className="text-[56px] pt-[13px]">
                  Best Medical & Health <br /> Care Near Your City
                </h1>
                <h4 className="pt-[2em]">
                  We've 25 Years of experience in Medical Services.
                </h4>
                <div className=" flex flex-row flex-wrap pt-[2em] gap-[10px]">
                  <button
                    className="h-[6vh] w-[11vw] text-[white] text-[17px] p-2.5 rounded-[20px] border-none bg-[rgb(89,211,89)] hover:cursor-pointer shadow-[2px_3px_4px_2px_green]"
                    onClick={ContactBox}
                  >
                    <b>Contact Us | +</b>
                  </button>
                  <button
                    className="h-[6vh] w-[11vw] text-[white] text-[17px] p-2.5 rounded-[20px] border-none bg-[#3573b5] hover:cursor-pointer shadow-[2px_3px_4px_2px_#1d548e]"
                    onClick={doctorBox}
                  >
                    <b>Doctors List | +</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
