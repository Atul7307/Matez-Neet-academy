import React from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/Footer/Logo.png";
import Phone from "../assets/Footer/phone.png";
import Mail from "../assets/Footer/Mail.png";
import Insta from "../assets/Footer/Insta.png";
import Fb from "../assets/Footer/FB.png";
import YouTube from "../assets/Footer/YouTube.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:h-auto bg-[#012f48]">
      <div className="flex sm:justify-between py-10 ml-10 gap-5 sm:py-20 sm:mx-40 ">
        <div className="">
          <img
            className="w-[70px] h-[65px] sm:w-[95px] sm:h-[95px]"
            src={Logo}
            alt=""
          />
        </div>
        <p className="border-l-[2px] border-[#30566a] h-[500px] sm:h-[300px]"></p>
        <div className="hidden sm:inline">
          <h1 className="text-[20px] text-[#ffffff] underline underline-offset-2">
            Address
          </h1>
          <p className="text-[18px] text-[#ffffff] w-[411px] mt-4">
            Office No 109, Whitefield, Flower Valley, above HDFC Bank, opposite
            Gurudev NX, Khadakpada, Birla College Road, Kalyan,
            Maharashtra 421301.
          </p>
          <h1 className="mt-8 text-[20px] text-[#ffffff] underline underline-offset-2">
            Contact
          </h1>
          <div className="mt-4 flex gap-5">
            <img src={Mail} alt="" />
            <p className="text-[18px] text-[#ffffff]">sgeducation@gmail.com</p>
          </div>
          <div className="mt-4 flex gap-5">
            <img src={Phone} alt="" />
            <p className="text-[18px] text-[#ffffff]">+91 8591932112</p>
          </div>
        </div>
        <div className="hidden sm:inline">
          <h1 className=" text-[20px] text-[#ffffff] cursor-pointer" onClick={() => {window.scrollTo(0,0);navigate("/");}}>Home</h1>
          <h1 className="mt-6 text-[20px] text-[#ffffff] cursor-pointer" onClick={() => {window.scrollTo(0,0);navigate("/about");}}>About us</h1>
          <h1 className="mt-[60px] text-[20px] text-[#ffffff] underline underline-offset-2">
            Our Social
          </h1>
          <div className="flex justify-between gap-6 mt-6">
  <a href="https://www.instagram.com/sgeducationacademy" target="_blank" rel="noopener noreferrer">
    <img src={Insta} alt="Instagram" />
  </a>
  <a href="https://www.facebook.com/sgeduhc" target="_blank" rel="noopener noreferrer">
    <img src={Fb} alt="Facebook" />
  </a>
  <a href="https://www.youtube.com/@S.G.Education" target="_blank" rel="noopener noreferrer">
    <img src={YouTube} alt="YouTube" />
  </a>
</div>

        </div>
        <div className="hidden sm:inline">
          <h1 className=" text-[20px] text-[#ffffff] cursor-pointer" onClick={() => {window.scrollTo(0,0);navigate("/event");}}>Events</h1>
          <h1 className="mt-6 text-[20px] text-[#ffffff] cursor-pointer" onClick={() => {window.scrollTo(0,0);navigate("/contact");}}>Contact us</h1>
        </div>

        <div className="inline sm:hidden">
          <div>
            <h1 className="text-[14px] text-[#ffffff] font-medium underline underline-offset-2">
              Address
            </h1>
            <p className="text-[14px] text-[#ffffff] w-[195px] mt-4">
              Office No 109, Whitefield, Flower Valley, above HDFC Bank,
              opposite Gurudev NX, Khadakpada, Birla College Road, Kalyan,
              Maharashtra 421301.
            </p>
            <h1 className="mt-8 text-[14px] text-[#ffffff] font-medium underline underline-offset-2">
              Contact
            </h1>
            <div className="mt-4 flex gap-5">
              <img src={Mail} alt="" />
              <p className="text-[14px] text-[#ffffff]">
                sgeducation@gmail.com
              </p>
            </div>
            <div className="mt-4 flex gap-5">
              <img src={Phone} alt="" />
              <p className="text-[14px] text-[#ffffff]">+91 8591932112</p>
            </div>
            <h1 className="mt-6 text-[14px] text-[#ffffff] font-medium underline underline-offset-2">
              Our Social
            </h1>
            <div className="flex mt-6 gap-8">
              <div>
                <h1 className=" text-[14px] text-[#ffffff] font-bold cursor-pointer" onClick={() => {window.scrollTo(0,0);navigate("/")}}>Home</h1>
                <h1 className="mt-1 text-[14px] text-[#ffffff] font-bold cursor-pointer"  onClick={() => {window.scrollTo(0,0,);navigate("/about");}}>About us</h1>
                <div className="w-full flex justify-between mt-6">
                  <img className="h-[20px] w-[20px]"  src={Insta} alt="" />
                  <img className="h-[20px] w-[20px]" src={Fb} alt="" />
                  <img className="h-[20px] w-[20px]" src={YouTube} alt="" />
                </div>
              </div>
              <div>
                <h1 className=" text-[14px] text-[#ffffff] font-bold cursor-pointer"  onClick={() => {window.scrollTo(0,0);navigate("/event");}}>Events</h1>
                <h1 className="mt-1 text-[14px] text-[#ffffff] font-bold cursor-pointer"  onClick={() => {window.scrollTo(0,0);navigate("/contact");}}>Contact us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
