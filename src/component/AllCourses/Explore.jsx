import React, { useState } from "react";

import clock from "../images/clock.svg";
import learner from "../images/learners.svg";
import question from "../images/question.svg";
import Testimonial from "../Testimonial/Testimon.jsx";
import symbol from "../images/symbol.svg";
import { useParams, useLocation } from "react-router-dom";

const Explore = ({ courses }) => {
  const [openModule, setOpenModule] = useState(null);
  const { courseId } = useParams();
  const location = useLocation();

  const selectedCourse = location.state?.course;
  // Find the course based on the courseId
  //const selectedCourse = courses.find(course => course.id === parseInt(courseId));
  console.log(selectedCourse);

  console.log(selectedCourse);

  if (!selectedCourse) {
    return <p>Course not found.</p>;
  }

  const handleToggle = (moduleIndex) => {
    setOpenModule(openModule === moduleIndex ? null : moduleIndex);
    console.log("clicked");
  };

  const modules = [
    {
      id: 1,
      title: "Module-1",
      topics: 5,
      duration: "1hr 40 mins",
      topicsList: ["Introduction", "Topic 1", "Topic 2", "Topic 3", "Topic 4"],
    },
    {
      id: 2,
      title: "Module-2",
      topics: 5,
      duration: "1hr 40 mins",
      topicsList: ["Introduction", "Topic 1", "Topic 2", "Topic 3", "Topic 4"],
    },
    {
      id: 3,
      title: "Module-3",
      topics: 5,
      duration: "1hr 40 mins",
      topicsList: ["Introduction", "Topic 1", "Topic 2", "Topic 3", "Topic 4"],
    },
    {
      id: 4,
      title: "Module-4",
      topics: 5,
      duration: "1hr 40 mins",
      topicsList: ["Introduction", "Topic 1", "Topic 2", "Topic 3", "Topic 4"],
    },
    {
      id: 5,
      title: "Module-5",
      topics: 5,
      duration: "1hr 40 mins",
      topicsList: ["Introduction", "Topic 1", "Topic 2", "Topic 3", "Topic 4"],
    },
  ];

  return (
    <div>
      <div className="desktop font-roboto">
        <div
          className="min-h-screen w-full bg-[#D8E5ED] rounded-[20px] h-auto h-max-[1000px] flex flex-col sm:mt-[53.84px] w-max-[334px] items-center mt-[10px] sm:ml-[39px] sm:mr-[70px] p-6"
          style={{
            marginLeft: "26.5px",
            marginRight: "26.5px",
            maxWidth: "calc(100% - 53px)",
          }}
        >
          <div className="w-full max-w-[1101px] p-6 h-[589px] mx-auto mr-[242px]">
            <div className="flex flex-col sm:flex-row items-start sm:space-x-6 sm:space-y-4 sm:items-center relative">
              <div>
                <p className="text-sm text-gray-500 mt-0 mb-2">
                  Courses - School
                </p>
                <h1 className="sm:text-5xl w-[210px] h-[160px] sm:w-[980px] sm:h-[134px] text-3xl text-gray-800 mb-4 font-roboto font-semibold">
                  {selectedCourse.title} <br /> in Kalyan
                </h1>
                <p className="text-lg w-max-[700px] text-gray-700 mb-6">
                  {selectedCourse.details}
                </p>

                <div className="features flex flex-wrap mb-6 gap-4">
                  {selectedCourse &&
                  Array.isArray(selectedCourse.features) &&
                  selectedCourse.features.length > 0 ? (
                    selectedCourse.features.map((feature, index) => (
                      <div
                        key={index}
                        className="feature-item bg-[#f1f1f1] p-4 rounded-md mb-2 max-w-[490px] w-full sm:w-[calc(50%-8px)]"
                      >
                        {feature}
                      </div>
                    ))
                  ) : (
                    <div className="feature-item bg-[#f1f1f1] p-4 rounded-md mb-2">
                      No features available for this course.
                    </div>
                  )}
                </div>

                <div className="flex-col mb-6">
                  <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 h-[56.31px] w-[269.85px]">
                    Enroll Now
                  </button>
                  <div className="relative w-full mt-2 h-screen">
                    <div
                      className="absolute w-[211.61px]  h-[201.56px] hidden sm:block"
                      style={{ left: "750.7px", transform: "rotate(30.44deg)" }}
                    >
                      <img
                        src={symbol}
                        alt="Symbol"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Bouncing question image for all devices */}
              <div className="absolute mt-[10px] sm:top-0 right-0 transform translate-y-[-50%] mr-4 sm:mr-2">
                <img
                  src={question}
                  alt="Question"
                  className="animate-bounce w-[50px] h-[50px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-left h-[600px] sm:mb-100 mt-[20px">
          <div className="min-h-screen w-full mt-[20px] bg-[#D8E5ED] rounded-[20px] h-auto flex flex-col sm:mt-[53.84px] w-max-[334px] items-center sm:ml-[39px] sm:mr-[100px]  p-6">
            {/* Course Details */}
            <h1 className="text-2xl font-semibold ml-[20px] sm:ml-[54px] text-gray-700 sm:text-xl">
              Course Details
            </h1>
            <h1 className="sm:text-5xl w-[210px] h-[160px] sm:w-[980px] sm:h-[134px] text-3xl text-gray-800 mb-4 font-roboto font-semibold">
              {selectedCourse.title} <br /> in Kalyan
            </h1>

            <div className="flex items-center ml-[54px] text-gray-600 mb-6">
              <span className="mr-6 flex items-center">
                <img
                  src={clock}
                  alt=""
                  className="mr-[5px] w-[12px] sm:w-[20px] h-[14px] sm:h-[20px]"
                />
                <p className="">6hrs 10 mins</p>
              </span>
              <span className="mr-6 flex items-center">
                <img
                  src={learner}
                  alt=""
                  className="mr-[5px]  w-[12px] sm:w-[20px] h-[14px] sm:h-[20px]"
                />
                <p>101 Learners</p>
              </span>
              <span className="flex items-center">
                <span className="mr-1">⭐</span>4.3
              </span>
            </div>

            <div className="space-y-4 sm:ml-[133.5px] flex flex-col items-center ">
              {modules.map((module) => (
                <div
                  key={module.id}
                  className="bg-white p-4 sm:w-[800px] justify-center w-[294px] rounded-lg hover:shadow-md cursor-pointer transition-all duration-200"
                  onClick={() => handleToggle(module.id)} // Clickable area expanded to entire card
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-700">
                        {module.title}
                      </h3>
                      <p className="text-gray-500">
                        <span className="flex items-center">
                          <img
                            src={learner}
                            alt=""
                            className="mr-[5px] w-[12px] sm:w-[20px] h-[14px] sm:h-[20px]"
                          />{" "}
                          {module.topics} Topics
                          <span className="mr-6 flex items-center">
                            <img
                              className="ml-[30px] mr-[8px] w-[12px] sm:w-[20px] h-[14px] sm:h-[20px]"
                              src={clock}
                              alt=""
                            />{" "}
                            {module.duration}
                          </span>
                        </span>
                      </p>
                    </div>
                    <div>
                      {openModule === module.id ? (
                        <svg
                          className="h-6 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  {openModule === module.id && (
                    <div className="mt-4">
                      <h4 className="text-gray-700 font-semibold">Topics:</h4>
                      <ul className="list-disc list-inside">
                        {module.topicsList.map((topic, index) => (
                          <li key={index} className="text-gray-600">
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mt-14">
        <Testimonial />
      </div>
    </div>
  );
};

export default Explore;