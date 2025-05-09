import React from 'react'
import EventPic1 from './assets/images/EventsPic1.png'
import { Navigate, useNavigate } from 'react-router-dom'

function UpcomingEvent1() {
    const navigate = useNavigate();
  return (
    <div className="relative w-full">
        <img
          className=" w-full h-[182px] sm:w-[1242px] sm:h-[626px]  sm:mx-auto "
          src={EventPic1}
          alt=""
        />
        <div className="absolute flex gap-1 sm:gap-4 bottom-0 mb-28 sm:mb-[270px] ml-5 sm:ml-40 text-[7px] sm:text-[24px] text-[#B2B1B1] items-center 2xl:ml-[28%]">
          <p>October 27,2024</p>
          <p className="border-l-[1px] sm:border-l-[2px] border-[#B2B1B1] h-[10px] sm:h-[30px] "></p>
          <p>17:00</p>
        </div>
        <h1 className="absolute bottom-0 mb-[70px] sm:mb-[200px] ml-5 sm:ml-40 w-[180px] sm:w-[600px] text-[10px] sm:text-[32px] text-[#CFCFCF] font-bold 2xl:ml-[28%]">
        Seminar for SSC Students
        </h1>
        <p className="absolute bottom-0 mb-12 sm:mb-36 ml-5 sm:ml-40 text-[7px] sm:text-[24px] text-[#B2B1B1] 2xl:ml-[28%]">
          @KalyanCenter
        </p>
        <button
          className="absolute bottom-0 mb-5 sm:mb-16 ml-5 sm:ml-40 w-[45px] h-[13px] sm:w-[157px] sm:h-[46px] text-[6px] sm:text-[20px] text-[#ffffff] bg-[#F67F00] rounded-[40px] 2xl:ml-[28%]"
          onClick={() =>{ 
            navigate("/ReadMore")
            window.scrollTo({
                top: 0, // Position to scroll to (0 for top)
                behavior: "smooth", // Smooth scrolling animation
              });
          }
          }
        >
          Read More
        </button>
      </div>
  )
}

export default UpcomingEvent1
