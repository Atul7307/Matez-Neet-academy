import React from "react";
import { useNavigate } from "react-router-dom";
import event2 from "./assets/images/event2.png";
import event2mob from "./assets/images/event2mob.png";

function UpcomingEvent2() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[182px]  md:h-[635px] mx-auto   relative">
      {/* Slider Content */}
      <img src={event2} alt="" className="w-full h-full hidden md:block" />
      <img src={event2mob} alt="" className="w-full h-full md:hidden" />

      
        <button
          className="absolute bg-orange-500 text-white md:px-4 p-[2px] md:py-2 rounded hover:bg-orange-600 text-[8px] bottom-[15%] left-[5%] "
          onClick={() => {
            navigate("/RegistrationDesk");
            window.scrollTo({
              top: 0, // Position to scroll to (0 for top)
              behavior: "smooth", // Smooth scrolling animation
            });
          }}
        >
          Read More
        </button>
    </div>
  );
}

export default UpcomingEvent2;
