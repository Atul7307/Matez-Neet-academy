import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import science from "../images/science.svg";
import jee from "../images/jee.svg";
import neet from "../images/neet.svg";
import fourth from "../images/fourth.svg";
import fifth from "../images/fifth.svg";
import Sixth from "../images/1b.png";
import Seventh from "../images/1a.png";
import Eighth from "../images/1c.png";
import iit from "../images/iit.svg";
import search from "../images/search.svg";
import "./AllCourses.css";
import leftArrow from "../images/leftArrow.svg";
import rightArrow from "../images/rightArrow.svg";

const courses = [
  {
    id: 1,
    title: "11th & 12th Science Coaching",
    img: science,
    description:
      "Expert faculty, In-depth syllabus coverage, Personalized attention",
    category: "school",
  },
  {
    id: 2,
    title: "IIT-JEE Coaching",
    img: iit,
    description:
      "Achieve top ranks with our focused & result-oriented IIT-JEE coaching",
    category: "exam",
  },
  {
    id: 3,
    title: "NEET Coaching",
    img: neet,
    description:
      "Master NEET with our comprehensive coaching for aspiring medical professionals",
    category: "exam",
  },
  {
    id: 4,
    title: "MHT-CET Coaching",
    img: fourth,
    description: "Tailored coaching to help you ace the Maharashtra CET",
    category: "school",
  },
  {
    id: 5,
    title: "8th-9th-10th Board Coaching",
    img: fifth,
    description:
      "Strong foundation courses for students across State, CBSE, and ICSE boards",
    category: "exam",
  },
  {
    id: 6,
    title: "JEE & NEET",
    img: Eighth,
    description:
      "Early preparation courses to build a solid foundation for future success",
    category: "exam",
  },
  {
    id: 7,
    title: "Olympiad Preparation",
    img: Sixth,
    description:
      "Advanced training to excel in national and international Olympiad",
    category: "exam",
  },
  {
    id: 8,
    title: "Special Maths Batch",
    img: Seventh,
    description: "In-depth Maths coaching for board exam and competitive exams",
    category: "exam",
  },
];

function AllCourses({ selectedCategory = "all" }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredCourses = courses.filter((course) => {
    const isCategoryMatch =
      selectedCategory === "all" || course.category === selectedCategory;
    const isSearchMatch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return isCategoryMatch && isSearchMatch;
  });

  const handleExploreClick = (courseId) => {
    window.scrollTo(0,0);
    navigate(`/allcourses/explore/${courseId}`);
  };

  const handleEnrollClick = (courseId) => {
    navigate("/allcourses/enroll");
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < filteredCourses.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div className="w-full sm:max-w-[73%] 2xl:max-w-[54%] sm:ml-4 2xl:mx-[10%] p-2  h-auto sm:h-auto">
      <div className="flex flex-col sm:flex-row justify-between  mb-6">
        <h2 className="text-xl hidden sm:text-2xl font-bold">Courses - All</h2>
        <div className="relative w-full sm:ml-[720px] sm:w-2/3 2xl:w-1/3 mt-4 sm:mt-0 hidden sm:block">
          <input
            type="text"
            placeholder="Search Courses here"
            className="border p-2 rounded-full w-full pr-10 sm:pr-12"
            style={{ borderRadius: "20px" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img
            src={search}
            alt="Search"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
          />
        </div>
      </div>

      {/* Course Container */}
      <div
        className={`w-full ${
          isSmallScreen ? "h-[410px]" : "h-[660px]"
        } overflow-hidden sm:overflow-y-auto sm:scrollbar-hidden 2xl:w-[120%] `}
      >
        <div
          className={`grid ${
            isSmallScreen ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-3"
          } gap-3`}
        >
          {filteredCourses.length > 0 ? (
            <>
              {isSmallScreen ? (
                <div
                  key={filteredCourses[currentImageIndex].id}
                  className="bg-white border rounded-md w-[340px] sm:w-full p-4 sm:p-6 shadow-sm"
                  style={{
                    maxWidth: "360px",
                    margin: "auto",
                    height: "410px",
                  }}
                >
                  <img
                    src={filteredCourses[currentImageIndex].img}
                    alt={filteredCourses[currentImageIndex].title}
                    className="w-full h-[210px] object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-base sm:text-lg font-semibold">
                    {filteredCourses[currentImageIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm mb-4">
                    {filteredCourses[currentImageIndex].description}
                  </p>

                  <div className="flex flex-row gap-2">
                    <button
                      onClick={() => {window.scrollTo(0,0);navigate("/EnrollForm");}}
                      className="bg-orange-500 text-white px-4 py-2 rounded mb-2 w-full"
                    >
                      Enroll Now
                    </button>

                    <button
                      className="text-[#F67F00] px-2 py-2 rounded mb-2 w-full border-[#F67F00] "
                      onClick={() =>
                        handleExploreClick(
                          filteredCourses[currentImageIndex].id
                        )
                      }
                    >
                      Explore
                    </button>
                  </div>
                </div>
              ) : (
                filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white border rounded-md p-4 sm:p-6 shadow-sm"
                    style={{
                      maxWidth: "360px",
                      margin: "auto",
                      height: "410px",
                    }}
                  >
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-[210px] object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-base sm:text-lg font-semibold">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm mb-4">
                      {course.description}
                    </p>

                    <div className="flex flex-row gap-2">
                      <button
                        onClick={() => {window.scrollTo(0,0);navigate("/EnrollForm");}}
                        className="bg-orange-500 text-white px-4 py-2 rounded mb-2 w-full"
                      >
                        Enroll Now
                      </button>

                      <button
                        className="bg-white text-[#f97316] border border-[#F67F00]  px-4 py-2 rounded mb-2 w-full"
                        onClick={() => {
                          //   handleEnrollClick(course.id);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          navigate(`/allcourses/explore/${course.id}`);
                          // console.log(`/explore/${course.id}`);
                        }}
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                ))
              )}
            </>
          ) : (
            <p className="w-full text-center text-xl font-semibold mt-16">
              No courses found.
            </p>
          )}
        </div>
      </div>

      {/* Navigation for small screens */}
      {isSmallScreen && filteredCourses.length > 1 && (
        <div className="flex justify-between mt-4">
          <button
            onClick={prevImage}
            className="text-white ml-[139.5px] p-2 rounded-full"
            disabled={currentImageIndex === 0}
          >
            <img
              src={leftArrow}
              alt="Previous"
              className="w-[15.41px] h-[11.94px]"
            />
          </button>
          <button
            onClick={nextImage}
            className="text-white mr-[139.5px] p-2 rounded-full"
            disabled={currentImageIndex === filteredCourses.length - 1}
          >
            <img
              src={rightArrow}
              alt="Next"
              className="w-[15.41px] h-[11.94px]"
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default AllCourses;