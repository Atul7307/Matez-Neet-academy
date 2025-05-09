import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Bg1 from "../../assets/EventsReadMore/Bg1.png";
import Arrow from "../../assets/EventsReadMore/RegisterNow Arrow.png";
import Event1 from "../../assets/EventsReadMore/Event1.png";

const EventReadMore = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  // Animation properties for the header and list
  const h1Props = useSpring({
    transform: inView ? "translateY(0)" : "translateY(100px)",
    opacity: inView ? 1 : 0,
    config: { tension: 100, friction: 20 },
  });

  const listProps = useSpring({
    transform: inView ? "translateY(0)" : "translateY(100px)",
    opacity: inView ? 1 : 0,
    config: { tension: 100, friction: 20 },
  });

  const [ref1, inView1] = useInView({ triggerOnce: true });

  // React Spring animation for sliding from bottom to top
  const h2Props = useSpring({
    transform: inView1 ? "translateY(0)" : "translateY(100px)",
    opacity: inView1 ? 1 : 0,
    config: { tension: 100, friction: 20 },
  });

  const pProps = useSpring({
    transform: inView1 ? "translateY(0)" : "translateY(100px)",
    opacity: inView1 ? 1 : 0,
    config: { tension: 100, friction: 20 },
  });
  // Define the spring animation
  const props = useSpring({
    from: { transform: "translateY(20px)", opacity: 0 }, // Start from below and invisible
    to: { transform: "translateY(0)", opacity: 1 }, // End at original position and visible
    config: { tension: 100, friction: 20 }, // Customize the animation speed
  });

  return (
    <div>
      <div className="relative">
        <img
          className="relative hidden sm:inline sm:pt-56 w-full 2xl:pt-8"
          src={Bg1}
          alt=""
        />
        <div className="sm:absolute top-0 lg:-left-56 sm:flex mx-5 sm:mx-20 mt-8 sm:mt-20 sm:gap-24 2xl:mx-[25%]">
          <animated.div style={props}>
            <div>
              <div className="flex gap-2 sm:gap-6 top-0 text-[10px] sm:text-[24px] text-[#424242] items-center font-inter">
                <p>October 27, 2024</p>
                <p className="sm:border-l-[2px] border-l-[1px] border-[#424242] h-[15px] sm:h-[30px]"></p>
                <p>17:00</p>
                <p className="sm:border-l-[2px] border-l-[1px] border-[#424242] h-[15px] sm:h-[30px]"></p>
                <p>@KalyanCenter</p>
              </div>
              <h1 className="mt-5 top-0 w-[305px] sm:w-[600px] text-[32px] sm:text-[64px] text-[#002F48] font-bold sm:leading-[80px] font-roboto">
                Seminar for SSC Students
              </h1>
              <h1 className="mt-2 sm:mt-4 text-[14px] sm:text-[24px] text-[#002F48] font-bold">
                WANT TO SCORE 90% PLUS IN SSC BOARDS?
              </h1>
              <button className="hidden sm:flex items-center justify-center gap-4 top-0 mt-11 w-[189px] h-[48px] text-[16px] text-[#ffffff] font-roboto bg-[#F67F00] rounded-[6px]">
                Register now
                <img src={Arrow} alt="" />
              </button>
            </div>
          </animated.div>
          <img
            className="hidden sm:inline rounded-[30px] mt-auto"
            src={Event1}
            alt=""
          />
        </div>
        <div className=" mx-5  mt-4">
          <img className="sm:hidden rounded-[30px]" src={Event1} alt="" />
        </div>
      </div>
      <div className="relative lg:-left-56 flex mt-8 sm:mt-20 2xl:mx-[20%]">
        <animated.div ref={ref} style={h1Props}>
          <animated.h1 className="mx-5 w-full sm:mx-24 font-roboto text-[16px] sm:text-[40px] text-[#002F48] font-bold">
            Key Points
          </animated.h1>
          <animated.ul
            className="ml-10 sm:mx-32 mt-5 font-inter list-disc"
            style={listProps}
          >
            {[
              "Syllabus will be explained in detail.",
              "Paper pattern will be explained.",
              "How to do study strategically.",
              "Time management techniques",
              "Smart Study techniques",
              "Subject Specifics Tips",
              "Special Guidance will be provided for Maths.",
              "We will make sure to, get rid of your Maths Phobia!",
            ].map((item, index) => (
              <animated.li
                key={index}
                className="mt-3 sm:ml-10 w-[250px] sm:w-[800px] text-[12px] sm:text-[24px] text-[#424242] font-medium"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${index * 100}ms`, // Stagger the animation
                }}
              >
                <span className="text-[#002F48] font-medium">{item}</span>
              </animated.li>
            ))}
          </animated.ul>
        </animated.div>

        <div className="">
          <p className="ml-2 sm:text-[24px] text-[15px] text-[#002F48] font-inter">
            Share on
          </p>
          <div className="flex ml-2 sm:ml-auto gap-1 sm:gap-4 mt-2">
            <div className="hidden sm:flex items-center justify-center w-[18px] h-[18px] sm:w-[42px] sm:h-[42px] border-[#002F48] border-[2px] rounded-3xl text-[#002F48] hover:bg-[#002F48] hover:text-[#fff]">
              <svg
                width="11"
                height="20"
                viewBox="0 0 11 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="sm:hidden flex items-center justify-center w-[18px] h-[18px] border-[#002F48] border-[2px] rounded-3xl text-[#002F48] hover:bg-[#002F48] hover:text-[#fff]">
              <svg
                width="6"
                height="20"
                viewBox="0 0 11 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="hidden sm:flex items-center justify-center w-[42px] h-[42px] border-[#002F48] border-[2px] rounded-3xl text-[#002F48] hover:bg-[#002F48] hover:text-[#fff]">
              <svg
                width="22"
                height="17"
                viewBox="0 0 22 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4591 2C20.6891 2.35 19.8591 2.58 18.9991 2.69C19.8791 2.16 20.5591 1.32 20.8791 0.31C20.0491 0.81 19.1291 1.16 18.1591 1.36C17.3691 0.5 16.2591 0 14.9991 0C12.6491 0 10.7291 1.92 10.7291 4.29C10.7291 4.63 10.7691 4.96 10.8391 5.27C7.27906 5.09 4.10906 3.38 1.99906 0.79C1.62906 1.42 1.41906 2.16 1.41906 2.94C1.41906 4.43 2.16906 5.75 3.32906 6.5C2.61906 6.5 1.95906 6.3 1.37906 6V6.03C1.37906 8.11 2.85906 9.85 4.81906 10.24C4.1899 10.4129 3.5291 10.4369 2.88906 10.31C3.16067 11.1625 3.6926 11.9084 4.41008 12.4429C5.12756 12.9775 5.99451 13.2737 6.88906 13.29C5.37273 14.4905 3.49307 15.1394 1.55906 15.13C1.21906 15.13 0.879063 15.11 0.539062 15.07C2.43906 16.29 4.69906 17 7.11906 17C14.9991 17 19.3291 10.46 19.3291 4.79C19.3291 4.6 19.3291 4.42 19.3191 4.23C20.1591 3.63 20.8791 2.87 21.4591 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="sm:hidden flex items-center justify-center w-[18px] h-[18px] border-[#002F48] border-[2px] rounded-3xl text-[#002F48] hover:bg-[#002F48] hover:text-[#fff]">
              <svg
                width="11"
                height="17"
                viewBox="0 0 22 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4591 2C20.6891 2.35 19.8591 2.58 18.9991 2.69C19.8791 2.16 20.5591 1.32 20.8791 0.31C20.0491 0.81 19.1291 1.16 18.1591 1.36C17.3691 0.5 16.2591 0 14.9991 0C12.6491 0 10.7291 1.92 10.7291 4.29C10.7291 4.63 10.7691 4.96 10.8391 5.27C7.27906 5.09 4.10906 3.38 1.99906 0.79C1.62906 1.42 1.41906 2.16 1.41906 2.94C1.41906 4.43 2.16906 5.75 3.32906 6.5C2.61906 6.5 1.95906 6.3 1.37906 6V6.03C1.37906 8.11 2.85906 9.85 4.81906 10.24C4.1899 10.4129 3.5291 10.4369 2.88906 10.31C3.16067 11.1625 3.6926 11.9084 4.41008 12.4429C5.12756 12.9775 5.99451 13.2737 6.88906 13.29C5.37273 14.4905 3.49307 15.1394 1.55906 15.13C1.21906 15.13 0.879063 15.11 0.539062 15.07C2.43906 16.29 4.69906 17 7.11906 17C14.9991 17 19.3291 10.46 19.3291 4.79C19.3291 4.6 19.3291 4.42 19.3191 4.23C20.1591 3.63 20.8791 2.87 21.4591 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="hidden sm:flex items-center justify-center w-[42px] h-[42px] border-[#002F48] border-[2px] rounded-3xl text-[#002F48] hover:bg-[#002F48] hover:text-[#fff]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="sm:hidden flex items-center justify-center w-[18px] h-[18px] border-[#002F48] border-[2px] rounded-3xl text-[#002F48] hover:bg-[#002F48] hover:text-[#fff]">
              <svg
                width="10"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative lg:-left-56">
        <animated.div
          ref={ref1}
          style={h2Props}
          className="sm:mt-[280px]  2xl:mt-0 2xl:mx-[20%]"
        >
          <h1 className="mx-5 sm:mx-24 mt-8 text-[16px] sm:text-[40px] text-[#002F48] font-bold font-roboto">
            Details
          </h1>
          <animated.div
            className="mx-8 sm:mx-36 mt-4 w-[300px] sm:w-[1217px] text-[12px] sm:text-[24px] text-[#002F48] font-medium font-inter"
            style={pProps}
          >
            <p>
              <span className="font-bold">Date: </span>27th October 2024
            </p>
            <p className="mt-4">
              <span className="font-bold">Time: </span>Slot 1: 11:00 am - 1:00
              pm
            </p>
            <p className="ml-[70px] mt-2">Slot 2: 2:00 pm - 4:00 pm</p>
            <p className="ml-[70px] mt-2">Slot 3: 5:00 pm - 7:00 pm</p>
            <p className="mt-3">
              <span className="font-bold">Registration Fees:</span> Rs. 49/-
              (Registration is Mandatory.)
            </p>
            <p className="mt-3">
              <span className="font-bold">Seminar will be conducted by:</span>{" "}
              Mr. Latesh Ghavat
            </p>
            <p className="mt-3">
              <span className="font-bold">Limited seat:</span> 25-30 Students
              only.
            </p>
          </animated.div>
          <button className="mx-5 sm:mx-20 flex items-center justify-center gap-4 my-8 sm:mt-16 sm:mb-32 w-[106px] h-[32px] sm:w-[189px] sm:h-[48px] text-[10px] sm:text-[16px] text-[#ffffff] font-roboto bg-[#F67F00] rounded-[6px]">
            Register now
            <img src={Arrow} alt="" />
          </button>
        </animated.div>
      </div>
    </div>
  );
};

export default EventReadMore;
