import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import banner from "./assets/banner.png";
import bannermob from "./assets/bannermob.png";
import Benefits from "./assets/benefits.png";
import Benefitsmob from "./assets/benefitsmob.png";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function EventReadMore2() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Banner */}
      <div className="flex w-[95%] md:w-[90%] md:h-[530px]  mx-auto justify-between items-start md:items-center gap-2  md:gap-5 my-[5%] ">
        {/* left Section */}
        <div className="w-[50%] h-full flex flex-col justify-start items-start gap-3 md:gap-16">
          <h2 className='font-bold text-[#002F48] font-["Roboto"] text-lg md:text-7xl text-start'>
            Maths Workshop to strengthen your Skills
          </h2>
          <button
            className="bg-[#F67F00] text-white px-3 md:px-10 py-2 md:py-3 rounded-lg font-bold text-[10px] md:text-lg flex items-center gap-2 text-['Roboto']"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/RegistrationDesk/Registrationform");
            }}
          >
            Register Now <IoIosArrowForward />
          </button>

          <div className="flex flex-col items-center">
            <p>Share on</p>
            <div className="flex items-center gap-5">
              <FaFacebook className="text-xl md:text-[30px] " />
              <FaTwitter className="text-xl md:text-[30px] " />
              <FaInstagram className="text-xl md:text-[30px]" />
            </div>
          </div>
        </div>
        {/* Rigth section */}
        <div className="w-[50%] md:h-[510px] flex  items-start">
          <img
            src={banner}
            alt=""
            className="w-full  object-cover hidden md:block"
          />
          <img
            src={bannermob}
            alt=""
            className="w-full  object-cover md:hidden"
          />
        </div>
      </div>
      {/* Description */}
      <div className="w-full flex justify-between items-center p-2 md:p-10 bg-[#F67F00] mb-[3%] ">
        <p className="text-[#002F48] text-[8px] md:text-4xl font-bold text-start">
          Starts from <span className="text-white font-bold">December 26</span>
        </p>
        <p className="bg-[#002F48] rounded-full p-2 md:p-8 text-white font-bold text-center text-[6px] md:text-xl">
          Complete Workshop @ <br />
          <span className=" text-[8px] md:text-3xl">Rs. 1500/- Only</span>
        </p>
        <div className="flex flex-col items-center gap-1">
          <p className="text-[#002F48] text-['Roboto'] text-[6px] md:text-2xl font-bold text-start">
            Timings
          </p>
          <p className="text-[#002F48] text-['Roboto'] text-[6px] md:text-2xl text-start font-bold">
            Khadakpada Branch: <span className="text-white">10 AM - 12 PM</span>
          </p>
          <p className="text-[#002F48] text-['Roboto'] text-[6px] md:text-2xl font-bold text-start">
            Prem Auto Branch <span className="text-white">4 PM - 6 PM</span>
          </p>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="w-[95%] md:w-[90%] mx-auto mb-[5%]">
        <h2 className="text-[#002F48] text-2xl md:text-7xl font-bold text-center mb-5 md:mb-10">
          Key Benefits
        </h2>
        <img src={Benefits} alt="" className="w-full" />
      </div>

      {/* Topic Covered */}
      <div className="w-[95%] md:w-[90%] mx-auto mb-[5%] flex justify-between items-start gap-1">
        {/* left Section */}
        <div>
          <h2 className="text-[#F67F00] text-[10px] md:text-3xl font-bold font-inter ">
            Topics Covered :
          </h2>
          <ul className="list-disc pl-3 md:pl-8 text-[#002F48] text-[8px] md:text-2xl font-bold font-inter">
            <li>Number & Quick Calculations</li>
            <li>Algebra made easy</li>
            <li>Geometry Simplified</li>
            <li>Data Handling with ease</li>
            <li>Logical thinking & Problem solving</li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <h2 className="text-[#F67F00] text-[10px] md:text-3xl font-bold font-inter ">
            Special Benefits :
          </h2>
          <ul className="list-disc pl-3 md:pl-8 text-[#002F48] text-[8px] md:text-2xl font-bold font-inter">
            <li>Free Study Material:Workshets & Notes</li>
            <li>Personal Attention Guaranteed</li>
          </ul>
        </div>
      </div>

      {/* Registered Now */}
      <button
        className="bg-[#F67F00] text-white px-3 md:px-10 py-2 md:py-3 rounded-lg font-bold text-[10px] md:text-lg flex items-center gap-2 text-['Roboto'] mx-auto mb-[5%] "
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/RegistrationDesk/Registrationform");
        }}
      >
        Register Now <IoIosArrowForward />
      </button>
    </div>
  );
}

export default EventReadMore2;
