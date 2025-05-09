import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from "react-intersection-observer";
import SearchIcon from "../assets/EventsPage/SearchIcon.png";
import EventPic1 from "../assets/EventsPage/EventsPic1.png";
// import Mask from "../assets/EventsPage/Mask.png";
import EventPic2 from "../assets/EventsPage/EventPic2.png";
import Arrow from "../assets/EventsPage/Arrow.png";
import EventPic3 from "../assets/EventsPage/EventPic3.png";
import { useNavigate } from "react-router-dom";
import EventSlider from './UI/UpcomingEvent/slider/EventSlider';


const EventsPage = () => {
  const navigate = useNavigate();
 // Define animations for both events
 const [refFirstEvent, inViewFirstEvent] = useInView({ triggerOnce: true });
 const [refSecondEvent, inViewSecondEvent] = useInView({ triggerOnce: true });

 const slideInFirstEvent = useSpring({
   transform: inViewFirstEvent ? "translateY(0)" : "translateY(100px)",
   opacity: inViewFirstEvent ? 1 : 0,
   config: { tension: 200, friction: 20 },
 });

 const slideInSecondEvent = useSpring({
   transform: inViewSecondEvent ? "translateY(0)" : "translateY(100px)",
   opacity: inViewSecondEvent ? 1 : 0,
   config: { tension: 200, friction: 20 },
 });

  
  return (
    <div>
      <div className="font-roboto flex justify-between mx-5 sm:mx-28 mt-6 sm:mt-16">
        <div>
          <h1 className="text-[20px] sm:text-[48px] text-[#002F48] font-semibold">
            Upcoming Events
          </h1>
          <p className="w-[120px] sm:w-[300px] border-t-[3px] border-[#f77f00]"></p>
        </div>
        <div className="hidden md:flex items-center justify-center w-[292px] h-[40px] border border-black rounded-[30px]">
          <img className=" w-6 h-6" src={SearchIcon} alt="" />
          <input
            className=" border-none outline-none ml-5 placeholder:text-[#191919] placeholder:text-sm placeholder:font-medium"
            type="search"
            placeholder="SEARCH EVENTS"
          />
        </div>
      </div>
      {/* Events */}
      <EventSlider/>

      <div className="font-roboto sm:mx-[105px] mt-6 sm:mt-24">
      <h1 className="text-[20px] sm:text-[48px] mx-5 sm:mx-auto text-[#002F48] font-semibold">
        Past Events
      </h1>
      <p className="w-[80px] sm:w-[170px] mx-5 sm:mx-0 mt-2 sm:mt-auto border-t-[3px] border-[#f77f00]"></p>

     {/* First Event */}
     <animated.div
        ref={refFirstEvent}
        style={slideInFirstEvent}
        className="w-[350px] h-[410px] sm:w-auto sm:h-auto border-2 sm:border-none sm:flex justify-between mx-5 sm:mx-0 mt-10 sm:mt-20 rounded-[5px] sm:rounded-none 2xl:justify-center 2xl:gap-40"
       
      >
        <img
          className="w-[327px] h-[218px] sm:w-auto sm:h-auto mx-[10px] sm:mx-0 mt-2 sm:mt-0 rounded-[15px] sm:rounded-none"
          src={EventPic2}
          alt="Event"
        />
        <div className="mx-[10px] sm:mx-0">
          <div className="flex gap-4 text-[12px] mt-4 sm:mt-0 sm:text-[24px] text-[#424242] items-center">
            <p>September 7, 2024</p>
            <p className="border-l-[2px] border-[#B2B1B1] h-[20px] sm:h-[30px]"></p>
            <p>17:00</p>
          </div>
          <h1 className="mt-4 sm:mt-5 w-[340px] sm:w-[600px] text-[15.21px] sm:text-[32px] text-[#002F48] font-bold">
            Effective Study Techniques for IIT-JEE and NEET
          </h1>
          <p className="mt-4 sm:mt-5 text-[12px] sm:text-[24px] text-[#424242]">
            @KalyanCenter
          </p>
          <div className="flex items-center mt-4 sm:mt-[155px] gap-2 sm:gap-4">
            <p className="text-[11.41px] sm:text-[20px] text-[#002F48] font-bold">
              View event details
            </p>
            <img
              className="w-[17px] h-[12px] sm:w-auto sm:h-auto"
              src={Arrow}
              alt="Arrow"
            />
          </div>
          <p className="w-[130px] sm:w-[220px] border-t-[2px] border-[#002F48]"></p>
        </div>
      </animated.div>

      {/* Second Event */}
      <animated.div
        ref={refSecondEvent}
        style={slideInSecondEvent}
        className="w-[350px] h-[410px] sm:w-auto sm:h-auto border-2 sm:border-none sm:flex justify-between mx-5 sm:mx-0 my-10 sm:mt-20 rounded-[5px] sm:rounded-none 2xl:justify-center 2xl:gap-40"
      >
        <img
          className="w-[327px] h-[218px] sm:w-auto sm:h-auto mx-[10px] sm:mx-0 mt-2 sm:mt-0 rounded-[15px] sm:rounded-none"
          src={EventPic3}
          alt="Event"
        />
        <div className="mx-[10px] sm:mx-0">
          <div className="flex gap-4 text-[12px] mt-4 sm:mt-0 sm:text-[24px] text-[#424242] items-center">
            <p>September 7, 2024</p>
            <p className="border-l-[2px] border-[#B2B1B1] h-[20px] sm:h-[30px]"></p>
            <p>17:00</p>
          </div>
          <h1 className="mt-4 sm:mt-5 w-[340px] sm:w-[600px] text-[15.21px] sm:text-[32px] text-[#002F48] font-bold">
            Effective Study Techniques for IIT-JEE and NEET
          </h1>
          <p className="mt-4 sm:mt-5 text-[12px] sm:text-[24px] text-[#424242]">
            @KalyanCenter
          </p>
          <div className="flex items-center mt-4 sm:mt-[155px] gap-2 sm:gap-4">
            <p className="text-[11.41px] sm:text-[20px] text-[#002F48] font-bold">
              View event details
            </p>
            <img
              className="w-[17px] h-[12px] sm:w-auto sm:h-auto"
              src={Arrow}
              alt="Arrow"
            />
          </div>
          <p className="w-[130px] sm:w-[220px] border-t-[2px] border-[#002F48]"></p>
        </div>
      </animated.div>
    </div>
    </div>
  );
};

export default EventsPage;
