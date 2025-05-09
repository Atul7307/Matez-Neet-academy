import React, { useState, useEffect } from "react";
import LogoPic from "../../assets/AboutPage/Fac1.png";
import LogoPic1 from "../../assets/AboutPage/Fac2.png";
import LogoPic2 from "../../assets/AboutPage/Pic3.png";
import LogoPic3 from "../../assets/AboutPage/Fac4.jpg";


const Faculty = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      name: "Varsha Suresh Ghavat",
      skill: "Biology",
      src: LogoPic,
      gradient: "bg-gradient-to-r from-[#FCE376B2]/70 to-[#f7f5f5b2]/70",
      color: "text-[#002F48]",
    },
    {
      name: "Vivek Jha",
      skill: "Biology",
      src: LogoPic1,
      gradient: "bg-gradient-to-r from-[#5EAEAFB2]/70 to-[#FFFFFFB2]/70",
      color: "text-[#FFFFFF]",
    },
    {
      name: "Latesh Suresh Ghavat",
      skill: "Mentor",
      src: LogoPic2,
      gradient: "bg-gradient-to-r from-[#A27C55B2]/70 to-[#FFFFFFB2]/70",
      color: "text-[#FFFFFF]",
    },
    {
      name: "Pooja Prasana Mishra",
      skill: "Chemistry",
      src: LogoPic3,
      gradient: "bg-gradient-to-r from-[#5E5A59]/70 to-[#C4BCB9]/70",
      color: "text-[#FFFFFF]",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="sm:flex font-roboto gap-[11rem] sm:p-10 relative" style={{justifyContent: "Center", marginBottom: "20px"}}>
      {/* Left part */}
      <div className=" sm:mt-8 mt-6 mr-2">
        <h1 className="w-80 sm:w-[590px] text-[18px] sm:text-[24px] text-[#002F48] font-semibold  pl-5">
          True professionals in their field ready to teach you.
        </h1>
        <p className=" sm:w-[684px] text-[12px] sm:text-[18px] mt-7 text-[#6B6B6B] leading-0  pl-5">
          Our faculty members in Kalyan are not just educators but mentors
          committed to your success.
        </p>
        <p className=" sm:w-[684px] text-[12px] sm:text-[18px] mt-2 text-[#6B6B6B] pl-5">
          With years of experience and a deep understanding of their subjects,
          they provide the guidance and support needed to excel.
        </p>
        <div className="hidden sm:flex mt-5 sm:ml-6 gap-3 sm:gap-[90px] ">
          <img src={LogoPic} className="rounded-full w-8 h-8 sm:w-24 sm:h-24" />
          <img
            src={LogoPic2}
            className="rounded-full w-8 h-8 sm:w-24 sm:h-24"
          />
          <img
            src={LogoPic1}
            className="rounded-full w-8 h-8 sm:w-24 sm:h-24"
          />
          <img
            src={LogoPic3}
            className="rounded-full w-8 h-8 sm:w-24 sm:h-24"
          />
        </div>
      </div>

      {/* Right part */}
      <div className={`flex w-full h-40 sm:w-80 sm:h-80 relative mt-3  sm:mt-10 mb-8`}>
        <div className=" flex gap-4 pl-4 sm:hidden h-11">
          <img
            src={LogoPic}
            className="rounded-full w-10 h-10 sm:w-24 sm:h-24"
          />
          <img
            src={LogoPic2}
            className="rounded-full w-10 h-10 sm:w-24 sm:h-24"
          />
          <img
            src={LogoPic1}
            className="rounded-full w-10 h-10 sm:w-24 sm:h-24"
          />
          <img
            src={LogoPic3}
            className="rounded-full w-10 h-10 sm:w-24 sm:h-24"
          />
        </div>

        <div
          className={`image-container w-28 h-28 top-14 sm:w-36 sm:h-40 sm:w-[110%] sm:h-[110%] absolute transition-all duration-1000 linear right-4`}
          style={{
            backgroundImage: `url(${data[currentIndex].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: `imageTransition 4s ease-in-out`,
          }}
        ></div>
        <div
          className={`hidden w-[22rem] bg-transparent bg-opacity-70 absolute bottom-0 -left-12 ${data[currentIndex].gradient} shadow-custom-black sm:block `}
          style={{ animation: `imageTransition 1.5s ease-in-out` }}
        >
          <h1
            className={`text-3xl leading-10 ${data[currentIndex].color} font-normal ml-4 mt-1 mb-0`}
          >
            {data[currentIndex].name}
          </h1>
          <p
            className={`text-2xl font-light leading-9 ${data[currentIndex].color} ml-4 mb-1 mt-0`}
          >
            {data[currentIndex].skill}
          </p>
        </div>
        <div className="absolute top-16 sm:left-20 w-44 sm:hidden  ">
            <h1
              className={`text-xl leading-6 font-bold ml-4 mt-1 mb-0 text-[#002F48]`}
            >
              {data[currentIndex].name}
            </h1>
            <p
              className={`text-base font-light leading-7  ml-4 mb-1 mt-0`}
            >
              {data[currentIndex].skill}
            </p>
          </div>
      </div>
    </div>
  );
};

export default Faculty;
