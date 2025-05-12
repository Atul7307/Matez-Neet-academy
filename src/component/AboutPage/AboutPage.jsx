import React from "react";
import { useRef, useEffect } from "react";
import Bg from "../../assets/AboutPage/bgMain1.png"
import Bg1 from "../../assets/AboutPage/bgamain2.png"
import Bg2 from "../../assets/AboutPage/BgMain2.png"
import Person from "../../assets/AboutPage/Pic1.png";
import Person2 from "../../assets/AboutPage/pic2.png";
import Person2a from "../../assets/AboutPage/Pic2a.png";
import PlayButton from "../../assets/AboutPage/PlayButton.png";
import Background from "../../assets/AboutPage/bg1.png";
import Student1 from "../../assets/AboutPage/StudentPic1.png";
import TopResult from "../../assets/AboutPage/TopResult.png";
import Educator from "../../assets/AboutPage/Educator.png";
import Learning from "../../assets/AboutPage/Learning.png";
import Background2 from "../../assets/AboutPage/bg2.png";
import Career from "../../assets/AboutPage/career.png";
import Personal from "../../assets/AboutPage/personal.png";
import Modern from "../../assets/AboutPage/modern.png";
import Student2 from "../../assets/AboutPage/StudentPic2.png";
import Place from "../../assets/AboutPage/Pic4.png";
import Faculty from "./Faculty";

import MissionAndVission from "./components/MissionAndVision/MisisonAndVission";

const AboutPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div>
       <img className="relative hidden sm:inline w-full" src={Bg} alt="" />
       <img className="relative sm:hidden w-full" src={Bg1} alt="" />
      <div className="absolute top-0 mt-[90px] sm:mt-[15%] font-roboto flex flex-col sm:flex-row justify-between items-center mx-5 sm:mx-16  text-center sm:text-left sm:gap-24">
        <div className="sm:w-1/2">
          <h1 className="text-[20px] text-left  text-[#ffffff] font-semibold sm:text-[32px]">
            Our Story:
          </h1>
          <h1 className="mt-3 text-[28px] sm:text-[40px] text-[#ffffff] font-bold">
            About Matez Neet Academy
          </h1>
          <p className="mt-2 text-[16px] w-[325px] sm:text-[24px] text-[#ffffff]  sm:w-[614px] mx-auto sm:mx-0">
            SG Education, located in the heart of Kalyan, has been a beacon of
            academic excellence for students aiming to excel in Science and
            Mathematics. Our coaching classes are renowned for producing top
            achievers in board exams and competitive exams like IIT-JEE and
            NEET. With a focus on personalized learning and consistent
            performance, we are dedicated to helping students in Kalyan realize
            their full potential.
          </p>
        </div>
        <div className="mt-16 sm:mt-0 sm:w-1/1">
          <img src={Person} alt="" className="w-[70%] mx-auto sm:w-auto" />
        </div>
      </div>
       
        <MissionAndVission />
       

      <div className="sm:relative font-roboto">
        <img className="sm:w-full hidden sm:inline 2xl:h-[1100px]" src={Background} alt="" />
        <div className="sm:absolute sm:flex justify-between pt-10 px-5 sm:pt-20 top-0 2xl:mx-[20%]">
          <div>
            <h1 className="text-[40px] sm:text-[48px] sm:ml-20  font-bold 2xl:mx-0">
              Why choose SG Education?
            </h1>
            <img className="mt-28 hidden sm:inline" src={Student1} alt="" />
          </div>

          <div className="sm:ml-16">
            <div className="flex mt-12 sm:mt-32  gap-10 ">
              <div>
                <img className="ml-3 sm:ml-0" src={TopResult} alt="" />
                <p className="ml-9 sm:ml-6 mt-4 sm:border-l-[3px] border-l-[2px] border-black sm:h-[100px] h-[120px]"></p>
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[32px] font-bold">
                  Top Results in Kalyan
                </h1>
                <p className="text-[#726969] w-[211px] h-[144px] sm:w-[392px] sm:text-[18px] text-[16px] mt-3">
                  Our students consistently achieve high ranks in board and
                  competitive exams, making SG Education the go-to coaching
                  center in Kalyan for academic excellence
                </p>
              </div>
            </div>

            <div className="flex mt-12 sm:mt-20 gap-10 ">
              <div>
                <img className="ml-3 sm:ml-0" src={Educator} alt="" />
                <p className="ml-9 sm:ml-6 mt-4 sm:border-l-[3px] border-l-[2px] border-black sm:h-[100px] h-[105px]"></p>
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[32px] font-bold">
                  Experienced Educators
                </h1>
                <p className="text-[#726969] w-[242px] h-[144px] sm:w-[392px] sm:text-[18px] text-[16px] mt-3">
                  Learn from Kalyan’s best educators who are not just teachers
                  but mentors, guiding you through every step of your academic
                  journey with their expertise and experience
                </p>
              </div>
            </div>

            <div className="flex mt-12 sm:mt-20 gap-10">
              <div>
                <img className="ml-3 sm:ml-2" src={Learning} alt="" />
                <p className="ml-8 sm:ml-6 mt-4 sm:border-l-[3px] border-l-[2px] border-black sm:h-[130px] h-[140px]"></p>
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[32px] font-bold">
                  Personalizes Learning
                </h1>
                <p className="text-[#726969] w-[245px] h-[167px] sm:w-[392px] sm:text-[18px] text-[16px] mt-3 sm:mr-8">
                  Small batch sizes and tailored study plans ensure that each
                  student gets the individual attention they need to excel. We
                  focus on your strengths and work on your weaknesses to ensure
                  comprehensive growth
                </p>
              </div>
            </div>
          </div>
          <img className="mt-28 sm:hidden" src={Student1} alt="" />
        </div>
      </div>
      <div className="sm:relative font-roboto">
        <img className="sm:w-full hidden sm:inline 2xl:h-[1100px]" src={Background2} alt="" />
        <div className="sm:absolute sm:flex justify-between px-5 sm:px-0 pt-20 top-0 2xl:mx-[15%] ">
          <div className="sm:ml-20">
            <div className="flex gap-10 ">
              <div>
                <img src={Career} alt="" />
                <p className="ml-6 mt-4 sm:border-l-[3px] border-l-[2px] border-black sm:h-[100px] h-[260px]"></p>
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[32px] font-bold">
                  Career Mapping
                </h1>
                <p className="text-[#726969] w-[245px] sm:w-[555px] text-[16px] sm:text-[18px] mt-3">
                  At SG Education, we understand that every student has unique
                  career aspirations. Our Career Mapping service helps students
                  in Kalyan identify their strengths, interests, and potential
                  career paths. We provide personalized guidance to help you
                  make informed decisions about your future, ensuring you are on
                  the right path to achieving your career goals."
                </p>
              </div>
            </div>

            <div className="flex mt-16 sm:mt-20 gap-10 ">
              <div>
                <img src={Personal} alt="" />
                <p className="ml-6 mt-4 sm:border-l-[3px] border-l-[2px] border-black sm:h-[100px] h-[280px]"></p>
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[32px] font-bold">
                  Personal Counselling
                </h1>
                <p className=" w-[250px] sm:w-[465px] text-[16px] text-[#726969] sm:text-[18px] mt-3">
                  Navigating through academic pressures and making career
                  choices can be overwhelming. That’s why we offer Personal
                  Counselling services at our Kalyan center. Our expert
                  counsellors are here to support you with one-on-one sessions,
                  helping you overcome challenges, manage stress, and stay
                  focused on your goals. Whether you need help with study
                  strategies or emotional support, we’re here for you.
                </p>
              </div>
            </div>

            <div className="flex mt-16 sm:mt-20 gap-10">
              <div>
                <img src={Modern} alt="" />
                <p className="ml-6 mt-4 sm:border-l-[3px] border-l-[2px] border-black sm:h-[100px] h-[145px]"></p>
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[32px] font-bold">
                  Modern Facilites
                </h1>
                <p className="w-[234px] sm:w-[420px] text-[16px] text-[#726969] sm:text-[18px] mt-3 mr-8">
                  Small batch sizes and tailored study plans ensure that each
                  student gets the individual attention they need to excel. We
                  focus on your strengths and work on your weaknesses to ensure
                  comprehensive growth.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img className="mt-20 sm:mt-0" src={Student2} alt="" />
          </div>
        </div>
      </div>
      <Faculty />

      <div className="hidden sm:flex justify-between  bg-[#F67F00] font-roboto">
        <div className=" text-center pt-20 ml-3 2xl:ml-60">
          <h1 className="w-[634px] text-[56px] text-[#ffffff] font-bold">
            Describe what makes your company unique
          </h1>
          <p className="w-[634px] mt-5 text-[18px] text-[#ffffff]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div>
          <img className="w-[780px] h-[435px]" src={Place} alt="" />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
