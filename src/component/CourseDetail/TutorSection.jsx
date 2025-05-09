import React from "react";

const TutorSection = ({ course }) => {
  // Dynamically load the image based on the course ID
  const tutorImage = require(`./${course.id}.png`);
  const Su = require("./Su.png");
  const Clg = require("./clg.png");
  const Person = require("./person.png");

  return (
    <div className="w-full bg-[#D8E5ED] py-12 flex justify-center">
      {/* Full Width Container */}
      <div className="w-[95%] max-w-screen-lg mx-auto p-6 flex flex-col lg:flex-row items-center">
        {/* Tutor Image */}
        <div className="flex-1 flex justify-center mb-8 lg:mb-0">
          <div className="w-40 h-40 lg:w-96 lg:h-96 lg:mr-56 rounded-full overflow-hidden ">
            <img
              src={tutorImage}
              alt="Tutor"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Tutor Details Section */}
        <div className="flex-1 text-center lg:text-left">
          <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            About Your Tutor
            <hr className="border-orange-500 mt-2 w-32 mx-auto lg:mx-0" />
          </h4>
          <div className="flex flex-col items-center lg:items-start text-gray-800 space-y-4">
            <p className="flex items-center text-lg lg:text-xl">
              <span className="mr-2">
                <img
                  src={Person}
                  alt="Person"
                  className="w-9 h-9 lg:w-10 lg:h-10 lg:mr-15  overflow-hidden"
                />
              </span>
              <span className="font-semibold">{course.details.tutor.name}</span>
            </p>
            <p className="flex items-center text-lg lg:text-xl">
              <span className="mr-2">
                <img
                  src={Clg}
                  alt="Person"
                  className="w-9 h-9 lg:w-10 lg:h-10 lg:mr-15  overflow-hidden"
                />
              </span>
              <span className="font-semibold">
                {course.details.tutor.qualification}
              </span>
            </p>
            <p className="flex items-center text-lg lg:text-xl">
              <span className="mr-2">
                <img
                  src={Su}
                  alt="Person"
                  className="  w-8 h-8 lg:w-10 lg:h-10 lg:mr-15  overflow-hidden"
                />
              </span>
              <span className="font-semibold">
                {course.details.tutor.experience}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorSection;
