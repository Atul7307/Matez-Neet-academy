import { useSpring, useTransition, animated } from "@react-spring/web";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import OurAchiever from "./UI/OurAchiever/OurAchiever";
import UpcomingEvent from "./UI/UpcomingEvent/UpcomingEvent";
import PastEvent from "./UI/PastEvent/PastEvent";

import HandDown from "../assets/HomePage/carbon_touch.png";
import RactanglePic from "../assets/HomePage/Rectangle.png";
import GroupPic from "../assets/HomePage/grouppic.png";
import Images1 from "../assets/HomePage/Image1.jpg";
import Images2 from "../assets/HomePage/Image2.jpg";

import Pic1 from "../assets/HomePage/YearOfExcelence.png";
import Pic2 from "../assets/HomePage/SatisfiedStudent.png";
import Pic3 from "../assets/HomePage/ExperienceFaculties.png";
import Pic4 from "../assets/HomePage/HappyParents.png";

import OurStory from "../assets/HomePage/OurStory_bg.png";
import OurStory1 from "../assets/HomePage/OurStory_bg1.png";
import TopResult from "../assets/HomePage/Top_Results_in_Kalyan.png";
import Educators from "../assets/HomePage/Experienced_Educators.png";
import Learning from "../assets/HomePage/Personalizes Learning.png";
import Facilitis from "../assets/HomePage/Modern Facilites.png";
import GroupPic2 from "../assets/HomePage/GroupPic2.png";

import Science from "../assets/HomePage/Science.png";
import JEE from "../assets/HomePage/JEE.png";
import NEET from "../assets/HomePage/NEET.png";
import { FaRegStar } from "react-icons/fa";
import Student0 from "../assets/HomePage/Student0.png";
import Student1 from "../assets/HomePage/Student1.png";
import Student2 from "../assets/HomePage/Student2.png";
import Student3 from "../assets/HomePage/Student3.png";
import Student4 from "../assets/HomePage/Student4.png";
import Student5 from "../assets/HomePage/Student5.png";
import Student6 from "../assets/HomePage/Student6.png";
import Student7 from "../assets/HomePage/Student7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay } from "swiper/modules";

import Presentor from "../assets/HomePage/Presenter.png";
import GroupPic4 from "../assets/HomePage/GroupPic4.png";
import EventPic1 from "../assets/HomePage/EventsPic1.png";
import EventPic2 from "../assets/HomePage/EventsPic2.jpeg";
import EventPic3 from "../assets/HomePage/EventsPic3.jpeg";
import EventPic4 from "../assets/HomePage/EventsPic4.png";
import EventBG from "../assets/HomePage/Event_bg.png";
import AnimatedImages from "./AnimatedImages";
import group1 from "../assets/HomePage/group1.png";
import group2 from "../assets/HomePage/group2.png";

const HomePage = () => {
  const navigate = useNavigate();
  // const achieversRef = useRef(null);
  // const handleScrollToAchievers = () => {
  //   achieversRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  const images = [GroupPic, Images1, Images2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageTransition = useTransition(currentImageIndex, {
    from: { opacity: 0, filter: "blur(2px)" },
    enter: { opacity: 1, filter: "blur(0px)" },
    leave: { opacity: 0, filter: "blur(2px)" },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const headings = [
    "11th & 12th Science",
    "NEET-UG",
    "8th-9th-10th Board",
    "NEET Foundation",
    "Olympiad",
    "Target NEET Batch",
  ];

  const [index, setIndex] = useState(0);
  const transitions = useTransition(index, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(-100%)" },
    config: { duration: 1000 },
    onRest: () => {
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % headings.length);
      }, 1000);
    },
  });

  const [springProps, api] = useSpring(() => ({
    from: { transform: "translateX(0%)" },
    to: { transform: "translateX(-100%)" },
    config: { duration: 10000 },
    loop: true,
  }));

  useEffect(() => {
    api.start();
  }, [api]);

  const [years, setYears] = useState(0);
  const [students, setStudents] = useState(0);
  const [faculties, setFaculties] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const targetValues = {
    years: 10,
    students: 5500,
    faculties: 10,
    percentage: 99,
  };

  const totalDuration = 10000;

  const totalStepsYears = targetValues.years;
  const totalStepsStudents = targetValues.students;
  const totalStepsFaculties = targetValues.faculties;
  const totalStepsPercentage = targetValues.percentage;

  const maxSteps = Math.max(
    totalStepsYears,
    totalStepsStudents,
    totalStepsFaculties,
    totalStepsPercentage
  );
  const intervalSpeed = totalDuration / maxSteps;

  const stepIncrementYears = Math.floor(targetValues.years / maxSteps);
  const stepIncrementStudents = Math.floor(targetValues.students / maxSteps);
  const stepIncrementFaculties = Math.floor(targetValues.faculties / maxSteps);
  const stepIncrementPercentage = Math.floor(
    targetValues.percentage / maxSteps
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setYears((prevYears) =>
        prevYears < targetValues.years ? prevYears + 1 : prevYears
      );
      setStudents((prevStudents) =>
        prevStudents < targetValues.students ? prevStudents + 100 : prevStudents
      );
      setFaculties((prevFaculties) =>
        prevFaculties < targetValues.faculties
          ? prevFaculties + 1
          : prevFaculties
      );
      setPercentage((prevPercentage) =>
        prevPercentage < targetValues.percentage
          ? prevPercentage + 2
          : prevPercentage
      );

      if (
        years === targetValues.years &&
        students === targetValues.students &&
        faculties === targetValues.faculties &&
        percentage === targetValues.percentage
      ) {
        clearInterval(intervalId);
      }
    }, intervalSpeed);

    return () => clearInterval(intervalId);
  }, [years, students, faculties, percentage]);

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.swiper.realIndex);
    }
  };

  const studentImages = [
    Student1,
    Student2,
    Student3,
    Student4,
    Student5,
    Student6,
    Student7,
  ];
  const videoLinks = [
    "https://youtube.com/shorts/chpwZsIC2gY?si=XLjdC9I_bBAuiL51",
    "https://youtube.com/shorts/nzAoAyweBHE?si=IgW2xs3RoIFnJvwd",
    "https://youtube.com/shorts/z1q_5iWJsnI?si=VJFyDNM6msELW61J",
    "https://youtube.com/shorts/-ZP9Ss7W4_A?si=QejUztsiI_C7VEIo",
    "https://youtube.com/shorts/DXJU_lg1k-M?si=1gPpO6VoCF_-rLBw",
    "https://youtube.com/shorts/HsUu3QEFDoQ?si=vp_GBsvohsNO5tG9",
    "https://youtube.com/shorts/7AKJwrAzcqs?si=Bvr4Hcpdqd2rWkev",
  ];

  return (
    <>
      <div>
        <div className="bg-gradient-to-b from-[#406376] to-[#002F48] justify-center font-roboto">
          <div className="container mx-auto sm:flex px-4 pb-6 sm:pb-32">
            <div className="pt-4 sm:pt-[120px] sm:ml-[50px]">
              <h1 className="w-[328px] sm:w-[650px] text-[24px] sm:text-[64px] text-[#ffffff] sm:text-[#ffffff] font-bold leading-tight">
                Best Coaching Class in Gorakhpur for
              </h1>
              <div className="relative h-[50px] w-full flex items-center overflow-hidden">
                {transitions((style, i) => (
                  <animated.h2
                    className="text-[32px] sm:text-[40px] text-[#F67F00] font-source font-bold leading-loose absolute"
                    style={style}
                  >
                    {headings[i]}
                  </animated.h2>
                ))}
              </div>
              <p className="text-[18px] sm:text-[28px] w-[328px] sm:w-[605px] text-[#ffffff] sm:text-[#ffffff] font-roboto font-normal">
                Join Gorakhpur's Top-Rated Coaching Institute for Academic
                Excellence and Competitive Exam Success.
              </p>
              <div className="flex justify-between sm:justify-normal sm:gap-4 mt-6">
                <button
                  onClick={() => {window.scrollTo(0,0);navigate('/about')}}
                  className="flex justify-center items-center bg-[#F47B1E] text-[16px] sm:text-[20px] text-[#ffffff] font-medium w-[165px] h-[50px] sm:w-[229px] sm:h-[62px] rounded-[10px] gap-2 sm:gap-4"
                >
                  Know More
                  <img src={HandDown} alt="" />
                </button>
                <button
                  className="flex justify-center items-center bg-[#ffffff] text-[16px] sm:text-[20px] text-[#031E31] font-medium w-[165px] h-[50px] sm:w-[229px] sm:h-[62px] rounded-[10px]"
                  onClick={() => navigate("/Courses")}
                >
                  View Courses
                </button>
              </div>
            </div>

            <div className="relative mt-8 sm:mt-auto mx-4 sm:mx-auto">
              <img
                className="w-[328px] h-[400px] sm:w-[470px] sm:h-[550px] sm:mt-[60px] sm:ml-[50px]"
                src={RactanglePic}
                alt="Background image"
              />
              {imageTransition((style, index) => (
                <animated.img
                  key={index}
                  src={images[index]}
                  style={style}
                  className="absolute top-[0px] mt-3 sm:mt-[100px] ml-7 sm:ml-24 w-[270px] h-[370px] sm:w-[395px] sm:h-[510px] rounded-xl shadow-lg object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#031E31] font-roboto">
          <div className="container px-2 sm:px-0 py-10 mx-auto max-w-screen-xl">
            <div className="flex justify-around">
              <img
                src={Pic1}
                alt="Year Of Excellence"
                className="w-[80px] h-[50px] sm:w-[200px] sm:h-auto"
              />
              <img
                src={Pic2}
                alt="Satisfied Students"
                className="w-[80px] h-[50px] sm:w-[200px] sm:h-auto"
              />
              <img
                src={Pic3}
                alt="Experienced Faculties"
                className="w-[80px] h-[50px] sm:w-[200px] sm:h-auto"
              />
              <img
                src={Pic4}
                alt="Happy Parents"
                className="w-[80px] h-[50px] sm:w-[200px] sm:h-auto"
              />
            </div>
            <div className="flex justify-around">
              <h1 className="text-[#FFFFFF] text-[16px] sm:text-[36px] font-medium ml-2 sm:ml-5">
                {years}+
              </h1>

              <h1 className="text-[#FFFFFF] text-[16px] sm:text-[36px] font-medium">
                {students}+
              </h1>
              <h1 className="text-[#FFFFFF] text-[16px] sm:text-[36px] font-medium mr-4">
                {faculties}+
              </h1>
              <h1 className="text-[#FFFFFF] text-[16px] sm:text-[36px] font-medium sm:ml-5">
                {percentage}%
              </h1>
            </div>
          </div>
        </div>

        {/* Achievers Section */}
        <OurAchiever />
      </div>

      <div className="relative font-roboto">
        <img
          className="hidden sm:inline  w-screen 2xl:h-[1000px]"
          src={OurStory}
          alt=""
        />
        <img className="sm:hidden h-[1050px] " src={OurStory1} alt="" />
        <div className="absolute w-full sm:flex sm:justify-center  gap-16 2xl:gap-40 top-0 ">
          <div className="mt-10 sm:px-4 px-9  sm:pl-[120px]">
            <p className="hidden w-[107px] h-[32px]  sm:flex sm:justify-center sm:items-center rounded-[35px] bg-[#031e31]">
              <h2 className=" text-[13px]  text-[#ffffff] font-medium">
                OUR STORY
              </h2>
            </p>
            <h1 className="sm:mt-10 text-[16px] sm:text-[40px] text-[#012f48] font-semibold sm:font-bold">
              Why choose MaTez Neet Academy?
            </h1>
            <p className="mt-3 sm:mt-10 w-[328px] sm:w-[433px] text-[14px] sm:text-[18px] text-[#6a6868] font-medium">
              Our coaching classes are renowned for producing top achievers in
              board exams and competitive exams like NEET-UG and Olympiads.
            </p>

            <img
              className="sm:hidden  w-[px] h-[px] mt-16 "
              src={GroupPic2}
              alt="StudentPic"
            />

            <div className="flex gap-8 sm:gap-24 mt-16 sm:mt-12">
              <div>
                <img
                  className="w-[58px] h-[53.31px] sm:w-auto sm:h-auto ml-8 sm:ml-0"
                  src={TopResult}
                  alt="TopResult"
                />
                <h1 className="mt-6 text-[14px] sm:text-[20px] font-medium	">
                  Top Results in Gorakhpur
                </h1>
                <p className="w-[157px] sm:w-[216px] mt-2 sm:mt-4 text-[#6a6868] text-[14px] sm:text-[16px]">
                  Top rank in NEET-UG, Competitive exams & Boards Exam
                </p>
              </div>
              <div>
                <img
                  className="w-[58px] h-[53px] sm:w-auto sm:h-auto ml-8 sm:ml-0"
                  src={Educators}
                  alt="Educators"
                />
                <h1 className="mt-6 text-[14px] sm:text-[20px] font-medium">
                  Experienced Educators
                </h1>
                <p className="w-[157px] sm:w-[216px] mt-2 sm:mt-4 text-[#6a6868] text-[14px] sm:text-[16px]">
                  Learn from Gorakhpur’s best educators
                </p>
              </div>
            </div>

            <p className="hidden sm:inline w-[530px] mt-12 border-t-2   "></p>

            <div className="flex gap-8 sm:gap-24 mt-5 sm:mt-12">
              <div>
                <img
                  className="w-[58px] h-[53.31px] sm:w-auto sm:h-auto ml-8 sm:ml-0"
                  src={Learning}
                  alt="Learning"
                />
                <h1 className="mt-6 text-[14px] sm:text-[20px] font-medium">
                  Personalizes Learning
                </h1>
                <p className="w-[157px] sm:w-[216px] mt-2 sm:mt-4 text-[#6a6868] text-[14px] sm:text-[16px]">
                  Each students gets individual attention
                </p>
              </div>
              <div>
                <img
                  className="w-[58px] h-[53.31px] sm:w-auto sm:h-auto ml-8 sm:ml-0"
                  src={Facilitis}
                  alt="Facilitis"
                />
                <h1 className="mt-6 text-[14px] sm:text-[20px] font-medium">
                  Modern Facilites
                </h1>
                <p className="w-[157px] sm:w-[216px] mt-2 sm:mt-4 text-[#6a6868] text-[14px] sm:text-[16px]">
                  Equipped with state of the art facilities
                </p>
              </div>
            </div>
            <button
              className="w-[130px] h-[32px] sm:w-[198px] sm:h-[48px] mb-16 sm:mb-0 ml-24 sm:ml-0 mt-[55px] rounded-[10px] shadow-xl shadow-[#f77f00] sm:bg-[#f77f00] border-[1px] border-[#000] sm:border-[#ffffff] "
              onClick={() => navigate("/about")}
            >
              Learn more
            </button>
          </div>
          <div>
            <div className="w-[50%] ">
              <img src={group1} alt=""
              className="" />
            </div>
            <div>
              <img src={group2} alt="" 
              className=""
              
              />
            </div>
          </div>
          {/* <div>
            <img
              className="hidden sm:inline mt-20"
              src={GroupPic2}
              alt="StudentPic"
            />
          </div> */}
        </div>
      </div>

      <div className="hidden sm:inline bg-[rgb(215,229,237)]">
        <h1 className="pt-8  flex justify-center text-[40px] text-[#012f48] font-semibold">
          Courses we offer{" "}
        </h1>
        <div className="flex sm:justify-between 2xl:justify-center 2xl:gap-52 px-28 mt-12">
          <div>
            <div className="relative w-[327px] h-[333px]  bg-[#ffffff] rounded-[10px] shadow-black shadow-md">
              <img
                className="mx-auto pt-5 w-[285px] h-[205px] mt"
                src={Science}
                alt=""
              />
              <div className="absolute w-[46px] h-[47px] bg-[#f77f00] rounded-[10px] top-8 right-8 flex justify-center items-center">
                <FaRegStar className="w-[30px] h-[25px] text-[#ffffff]" />
              </div>
              <p className="px-6 mt-2 text-[16px]">
                Our expert faculty focuses on building a deep understanding of
                concepts...
              </p>
              <div className="flex justify-between mt-8 px-6  ">
                <p className=" font-bold text-[#f77f00] text-[16px] ">
                  11th & 12th Science
                </p>
                <a className="text-[16px]" href="" onClick={() => {window.scrollTo(0,0);navigate('./allcourses/explore/1')}}>
                  Go to course
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="relative w-[327px] h-[333px]  bg-[#ffffff] rounded-[10px] shadow-black shadow-md">
              <img
                className="mx-auto pt-5 w-[285px] h-[205px] mt"
                src={JEE}
                alt=""
              />
              <div className="absolute w-[46px] h-[47px] bg-[#f77f00] rounded-[10px] top-8 right-8 flex justify-center items-center">
                <FaRegStar className="w-[30px] h-[25px] text-[#ffffff]" />
              </div>
              <p className="px-6 mt-2 text-[16px]">
                Our expert faculty focuses on building a deep understanding of
                concepts...
              </p>
              <div className="flex justify-between mt-8 px-6  ">
                <p className=" font-bold text-[#f77f00] text-[16px]">
                  JEE Coaching
                </p>
                <a className="text-[16px]" href="" onClick={() => {window.scrollTo(0,0);navigate('./allcourses/explore/2')}}>
                  Go to course
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="relative w-[327px] h-[333px]  bg-[#ffffff] rounded-[10px] shadow-black shadow-md">
              <img
                className="mx-auto pt-5 w-[285px] h-[205px] mt"
                src={NEET}
                alt=""
              />
              <div className="absolute w-[46px] h-[47px] bg-[#f77f00] rounded-[10px] top-8 right-8 flex justify-center items-center">
                <FaRegStar className="w-[30px] h-[25px] text-[#ffffff]" />
              </div>
              <p className="px-6 mt-2 text-[16px]">
                Our expert faculty focuses on building a deep understanding of
                concepts...
              </p>
              <div className="flex justify-between mt-8 px-6  ">
                <p className=" font-bold text-[#f77f00] text-[16px]">
                  NEET Coaching
                </p>
                <a className="text-[16px]" href="" onClick={() => {window.scrollTo(0,0);navigate('./allcourses/explore/6')}}>
                  Go to course
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className=" my-16 w-[262px] h-[56px] text-[#ffffff] bg-[#f77f00] rounded-[10px]  shadow-neutral-400 shadow-md"
            onClick={() => {window.scrollTo(0,0);navigate("/Courses");}}
          >
            View All
          </button>
        </div>
      </div>

      {/* <div className="bg-[#012f48]">
        <h1 className="pt-4 sm:pt-8 font-semibold text-[24px] sm:text-[40px] text-center text-[#ffffff]">
          Testomonials
        </h1>
        <img className="sm:hidden mt-4 w-full" src={Student0} alt="" />
        <div className="hidden sm:flex gap-[46.9px] justify-center mt-24 ">
          <img className="flex mt-auto " src={Student1} alt="" />
          <img className=" mb-5" src={Student2} alt="" />
          <img className="flex mt-auto h-[570px]" src={Student3} alt="" />
        </div>
      </div> */}

      <div className="relative bg-[#012f48] h-auto pt-16 pb-16 overflow-hidden">
        <h1 className="pt-2 sm:pt-8 font-semibold text-[24px] sm:text-[40px] text-center text-[#ffffff] z-0">
          Testimonials
        </h1>
        <div className="mt-24 relative overflow-hidden">
          <Swiper
            ref={swiperRef}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 10 }, // Mobile
              768: { slidesPerView: 2, spaceBetween: 15 }, // Tablet
              1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktop
            }}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            speed={1600}
            onSlideChange={handleSlideChange}
            modules={[Autoplay]}
            className="w-full pt-12"
          >
            {studentImages.map((student, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide flex items-center"
              >
                <div className="p-4">
                  <a
                    href={videoLinks[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={student}
                      alt={`Student ${index + 1}`}
                      className="testimonial-image mx-auto rounded-lg shadow-lg"
                      style={{
                        width: "90%",
                        maxWidth: "400px",
                        height: activeIndex === index ? "auto" : "auto",
                        maxHeight: "500px",
                        objectFit: "cover",
                        position: "relative",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        transform:
                          activeIndex === index
                            ? "translateY(-20px) scale(1.05)"
                            : "translateY(0) scale(1)",
                        boxShadow:
                          activeIndex === index
                            ? "0px 10px 20px rgba(0, 0, 0, 0.5)"
                            : "0px 5px 10px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="sm:hidden font-roboto bg-[rgb(215,229,237)]">
        <h1 className="pt-8  flex justify-center text-[15px] sm:text-[40px] text-[#012f48] font-semibold">
          Courses we offer{" "}
        </h1>
        <div className="flex justify-between px-6 sm:px-28 mt-6 sm:mt-12">
          <div className="relative w-[156px] h-[187px] sm:w-[327px] sm:h-[333px]  bg-[#ffffff] rounded-[10px] shadow-black shadow-md">
            <img
              className="mx-auto pt-3 sm:pt-5 w-[136px] h-[101px] sm:w-[285px] sm:h-[205px]"
              src={Science}
              alt=""
            />
            <div className="hidden absolute w-[46px] h-[47px] bg-[#f77f00] rounded-[10px] top-8 right-8 sm:flex justify-center items-center">
              <FaRegStar className="w-[30px] h-[25px] text-[#ffffff]" />
            </div>
            <p className="sm:hidden px-2 mt-2 font-bold text-[12px] text-[#f77f00]">
              11th & 12th Science
            </p>
            <p className="px-2 sm:px-6 mt-1 text-[8px] sm:text-[16px]">
              Our expert faculty focuses on building a deep understanding of
              concepts...
            </p>
            <div className="flex justify-between mt-3 ml-24 sm:mt-8 sm:px-6">
              <p className="hidden sm:incline font-bold text-[#f77f00]">
                11th & 12th Science
              </p>
              <a className="sm:text-[14px] text-[8px] font-bold" onClick={() => {window.scrollTo(0,0);navigate('./allcourses/explore/1')}}>
                Go to course
              </a>
            </div>
          </div>

          <div className="relative  w-[156px] h-[187px] sm:w-[327px] sm:h-[333px]  bg-[#ffffff] rounded-[10px] shadow-black shadow-md">
            <img
              className="mx-auto pt-3 sm:pt-5 w-[136px] h-[101px] sm:w-[285px] sm:h-[205px]"
              src={JEE}
              alt=""
            />
            <div className="hidden absolute w-[46px] h-[47px] bg-[#f77f00] rounded-[10px] top-8 right-8 sm:flex justify-center items-center">
              <FaRegStar className="w-[30px] h-[25px] text-[#ffffff]" />
            </div>
            <p className="sm:hidden px-2 mt-2 font-bold text-[12px] text-[#f77f00]">
              JEE Coaching
            </p>
            <p className="px-2 sm:px-6 mt-1 text-[8px] sm:text-[16px]">
              Our expert faculty focuses on building a deep understanding of
              concepts...
            </p>
            <div className="flex justify-between mt-3 ml-24 sm:mt-8 sm:px-6">
              <p className="hidden sm:incline font-bold text-[#f77f00]">
                JEE Coaching
              </p>
              <a className="sm:text-[14px] text-[8px] font-bold" onClick={() => {window.scrollTo(0,0);navigate('./allcourses/explore/2')}}>
                Go to course
              </a>
            </div>
          </div>

          <div className="hidden sm:inline relative w-[327px] h-[333px]  bg-[#ffffff] rounded-[10px] shadow-black shadow-md">
            <img
              className="mx-auto pt-5 w-[285px] h-[205px]"
              src={NEET}
              alt=""
            />
            <div className="absolute w-[46px] h-[47px] bg-[#f77f00] rounded-[10px] top-8 right-8 flex justify-center items-center">
              <FaRegStar className="w-[30px] h-[25px] text-[#ffffff]" />
            </div>
            <p className="px-6 mt-2 ">
              Our expert faculty focuses on building a deep understanding of
              concepts...
            </p>
            <div className="flex justify-between mt-8 px-6  ">
              <p className=" font-bold text-[#f77f00]">NEET Coaching</p>
              <a href="" onClick={() => {window.scrollTo(0,0);navigate('./allcourses/explore/6')}}>Go to course</a>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="text-[14px] sm:text-[16px] my-8 sm:my-16 w-[156px] h-[34px] sm:w-[262px] sm:h-[56px] text-[#ffffff] bg-[#f77f00] rounded-[10px] shadow-neutral-400 shadow-md"
            onClick={() => {window.scrollTo(0,0); navigate("/Courses");}}
          >
            View All
          </button>
        </div>
      </div>

      {/* Upcoming Events Start */}
      {/* <div className="relative font-roboto">
        <img className="w-screen h-[680px]" src={EventBG} alt="" />
        <div className="absolute top-0 sm:flex 2xl:mx-[20%] mx-4 sm:mx-[68px] ">
          <div className="relative z-10 sm:mt-10">
            <h1 className="pt-9 text-[24px] sm:text-[40px] text-[#012f48] font-semibold">
              Upcoming Events
            </h1>
            <p className="w-[120px] sm:w-[200px] mt-2 sm:mt-3 border-t-2 border-[#f77f00]"></p>
            <div className="sm:hidden flex items-center mt-4 gap-2">
              <img className="w-[9px] h-[9px]" src={Watch} alt="" />
              <p className="text-[#2c2c2c] text-[10px]">Sun, 27 October 2024</p>
            </div>
            <h1 className="w-[300px] sm:w-[570px] text-[16px] sm:text-[32px] font-bold mt-3 sm:mt-8">
              Seminar for SSC Students
            </h1>
            <p className="mt-3 sm:mt-4 w-[328px] sm:w-[490px] text-[12px] sm:text-[24px] text-[#2c2c2c] font-normal">
              Want to score 90% plus in SSC Boards?, Don’t miss our upcoming
              seminar on{" "}
              <span className="font-bold">'Seminar for SSC Students'</span> at
              our <span className="font-bold"> Kalyan Center. </span> Register
              now to secure your spot!
            </p>
            <div className="hidden sm:flex items-center  mt-4 gap-4">
              <img className="h-[20px]" src={Watch} alt="" />
              <p className="text-[#2c2c2c] text-[20px]">
                Sun, 27 October, 2024
              </p>
            </div>
            <button className="flex justify-center items-center gap-3 text-[7.5px] sm:text-[16px] text-[#ffffff] bg-[#f77f00] mt-8 sm:mt-16 w-[80px] h-[24px] sm:w-[190px] sm:h-[48px] rounded-[4px] ">
              Register now
              <img
                className="w-[5px] h-[9px] sm:w-auto sm:h-auto"
                src={Arrow}
                alt=""
              />
            </button>
          </div>
          <img
            className=" hidden sm:inline  ml-0 mt-6"
            src={GroupPic3}
            alt=""
          />
          */}
      {/* <AnimatedImages className='top-0' /> */}

      {/* <img className="sm:hidden mx-1 mt-6 " src={GroupPic3} alt="" />
        </div>
      </div>  */}

      <UpcomingEvent />

      {/* Upcoming Events End */}

      {/* Mobile */}
      <div className="sm:hidden relative font-roboto">
        <div className="mt-6 py-4 pl-6 bg-[#f77f00]">
          <h1 className="w-[168px] text-[#ffffff] text-[14px] font-bold">
            Ready to Join Gorakhpur's Best Coaching Classes?
          </h1>
          <button
            className="w-20 h-6 mt-2 text-xs text-[#f77f00] font-bold bg-white cursor-pointer"
            onClick={() => {window.scrollTo(0,0);navigate("/EnrollForm");}}
          >
            Enroll Now
          </button>
        </div>
        <div className="absolute bottom-0 right-[20px]">
          <img className="w-[144px] h-[135px]" src={Presentor} alt="" />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:inline relative">
        <div className="mt-[150px] mx-16 pl-16 bg-[#f77f00] ">
          <h1 className="w-[685px] pt-24 text-[#ffffff] leading-[57px] text-[42px] font-bold">
            Ready to Join Gorakhpur's Best Coaching Classes?
          </h1>
          <button
            className="w-[243px] h-[75px] mt-10 mb-10 text-[23px] text-[#f77f00] font-bold bg-[#ffffff] cursor-pointer"
            onClick={() => {window.scrollTo(0,0);navigate("/EnrollForm");}}
          >
            Enroll Now
          </button>
        </div>
        <div className="absolute bottom-0 ml-[59%] ">
          <img src={Presentor} alt="Presentor" />
        </div>
      </div>

      {/* <div>
        
        <div className="sm:hidden mt-4 px-4 sm:px-auto sm:mt-[200px]">
          <h1 className=" text-[24px] text-[#012f48] font-semibold">
            Past Events
          </h1>
          <p className="w-[80px] mt-1 border-t-2 border-[#f77f00]"></p>
          <h1 className="mt-6 text-[18px] text-[#012f48] font-bold ">
            Career Opportunities After 12th Science
          </h1>
          <p className="text-[16px] w-[321px] mt-1">
            Our recent seminar on 'Career Opportunities After 12th Science' was
            a huge success, helping students in Kalyan explore various career
            paths.
          </p>
          <img className="sm:hidden mt-10 mb-10" src={GroupPic4} alt="" />
        </div>

        
        <div className="relative hidden sm:inline">
          <img className="w-full h-[900px] " src={EventBG} alt="" />
          <div className="absolute flex top-0 mt-10 gap-20 mx-32 sm:justify-center 2xl:px-[20%] ">
            <img className="mb-10" src={GroupPic4} alt="" />
            <div className="mt-64 ">
              <h1 className=" text-[40px] w-[313px] text-[#012f48] font-semibold">
                Past Events
              </h1>
              <p className="w-[150px] mt-3 border-t-2 border-[#f77f00]"></p>
              <h1 className="mt-6 text-[32px] text-[#012f48] w-[448px] font-bold ">
                Career Opportunities After 12th Science
              </h1>
              <p className="text-[24px] w-[448px] mt-5">
                Our recent seminar on 'Career Opportunities After 12th Science'
                was a huge success, helping students in Kalyan explore various
                career paths.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <PastEvent />
    </>
  );
};

export default HomePage;
