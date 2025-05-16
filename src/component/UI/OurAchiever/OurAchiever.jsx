import React from 'react';
import Marquee from "react-fast-marquee";

import Stu0 from "../../../assets/HomePage/stu0.webp";
import Stu1 from "../../../assets/HomePage/stu1.png";
import Stu2 from "../../../assets/HomePage/stu2.png";
import Stu3 from "../../../assets/HomePage/stu3.png";
import Stu4 from "../../../assets/HomePage/stu4.png";


const OurAchiever = () => {

    const profileData = [
        {
          id: 1,
          name: "Parva ",
          profilePic: Stu0,
          Achievements: "NEET-UG",
          Specialization: "AIR-21",
        },
        {
          id: 2,
          name: "Devanshu Gandhi",
          profilePic: Stu0,
          Achievements: "NEET-UG",
          Specialization: "Score: 692 Marks",
        },
        {
          id: 3,
          name: "Kavya",
          profilePic: Stu0,
          Achievements: "NEET-UG",
          Specialization: "Score: 670 Marks",
        },
        {
          id: 4,
          name: "Jaineel",
          profilePic: Stu0,
          Achievements: "NEET-UG",
          Specialization: "Score: 626 Marks",
        },
        {
          id: 5,
          name: "Nidhi Singh",
          profilePic: Stu0,
          Achievements: "12th Boards",
          Specialization: "Score: 80.6%age",
        },
        {
          id: 6,
          name: "Kundan Singh",
          profilePic: Stu0,
          Achievements: "12th Boards",
          Specialization: "Score: 79.9%age",
        },
      ];

    return (
        <>
        <div
        //   ref={achieversRef} // Reference to the Achievers section
          className="pb-5 sm:pb-20 bg-[#D8E5ED] font-roboto"
        >
          <h1 className="text-center text-[16px] sm:text-[40px] font-semibold text-[#002F48] pt-5 pb-8 underline underline-offset-[10px] sm:underline-offset-[25px] decoration-[#f77f00]">
            Our Achievers
          </h1>

          {/* Desktop View */}
          <div className="hidden pt-8 sm:inline">
            <Marquee gradient={false} speed={150} pauseOnHover={false}>
              {[...profileData, ...profileData].map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center flex-none mx-5"
                >
                  <div className="h-[190px] w-[190px] bg-[#D8E5ED] rounded-full border-[6px] border-orange-400 flex items-center  justify-center">
                    <img
                      className="w-[165px] h-[168px] rounded-full"
                      src={data.profilePic}
                      alt="Our Achievers"
                    />
                  </div>
                  <h1 className="text-[26px] font-semibold mt-5">
                    {data.name}
                  </h1>
                  <h2 className="text-[26px] text-[#f77f00] font-medium">
                    {data.Achievements}
                  </h2>
                  <h2 className="text-[26px] text-[#f77f00] font-medium">
                    {data.Specialization}
                  </h2>
                </div>
              ))}
            </Marquee>
          </div>
            
          {/* Mobile View */}
          <div className="overflow-hidden w-full sm:hidden">
            <Marquee gradient={false} speed={80} pauseOnHover={false}>
              {[...profileData, ...profileData].map((data, index) => (
                <div key={index} className="items-center mx-3">
                  <div className="w-[70px] h-[70px] bg-[#D8E5ED] rounded-full border-[3px] border-orange-400 flex items-center    justify-center">
                    <img
                      className="w-[60px] h-[60px] rounded-full"
                      src={data.profilePic}
                      alt="Our Achievers"
                    />
                  </div>
                  <h1 className="text-[12px] w-[100px] font-semibold mt-5">
                    {data.name}
                  </h1>
                  <h2 className="text-[12px] text-[#f77f00] font-medium">
                    {data.Achievements}
                  </h2>
                  <h2 className="text-[12px] text-[#f77f00] font-medium">
                    {data.Specialization}
                  </h2>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        </>
    )
}

export default OurAchiever;