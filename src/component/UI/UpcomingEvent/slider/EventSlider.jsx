import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpcomingEvent1 from "../UpcomingEvent1";
import UpcomingEvent2 from "../UpcomingEvent2";

const EventSlider = () => {
  const navigate = useNavigate();

  // Slider data
  // const events = [
  //   {
  //     id: 1,
  //     title: "Afraid of Maths?",
  //     description: "Strengthen Your Maths Skills And Overcome Fear Of Numbers",
  //     date: "December 28, 2024",
  //     location: "@KalyanCenter",
  //     image: image, // Replace with actual image URL
  //     link: "/event-details/1", // Link to the event details page
  //   },
  //   {
  //     id: 2,
  //     title: "Coding Bootcamp",
  //     description: "Join Our Intensive Coding Bootcamp And Learn To Code",
  //     date: "January 15, 2025",
  //     location: "@TechPark",
  //     image: image, // Replace with actual image URL
  //     link: "/event-details/2",
  //   },
  //   // Add more events as needed
  // ];

  const events = [<UpcomingEvent2 /> , <UpcomingEvent1 />];

  const getCurrentSlide = () => {
    const currentSlide = events[currentIndex];
    return currentSlide;
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full p-2">
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <button
          className=" text-[#003047] rounded-lg   hover:bg-gray-400 text-lg md:text-5xl font-extrabold"
          onClick={handlePrev}
        >
          ❮
        </button>
        <div>
        {getCurrentSlide()}
        </div>
        {/* Navigation Buttons */}

        <button
          className="text-[#003047] rounded-lg hover:bg-gray-400 text-lg md:text-5xl font-extrabold"
          onClick={handleNext}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default EventSlider;
