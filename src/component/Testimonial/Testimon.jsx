import React from "react";
import "./Testimon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import pic1 from "./Pic1.png";
import pic2 from "./left.png";
import pic3 from "./right.png";

const TestimonialCard = () => {
  return (
    <>
      <div className="cont relative bg-[#D8E5ED] w-full">
        <div className="cards w-80 ">
          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
              "I joined SG Education in my 11th grade and stayed with them until
              I finished 12th Science. The way Latesh Sir teaches Physics and
              Maths is exceptional. He breaks down difficult concepts into
              manageable parts, which made a huge difference for me. Pooja
              Ma’am’s Chemistry classes were also very engaging, and Varsha
              Ma'am’s Biology teaching was the best! I’m now studying
              Biotechnology, and I owe a lot of my success to SG Education. It’s
              the best classes for Science students in Kalyan."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                  Sharvari Gangurde
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                  (12th Science)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>

          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "I loved the way SG Education is managed. Everything was so well-organized, from the class schedules to the regular tests and feedback sessions. The management was always available for any issues or doubts. Latesh Sir’s Physics classes, Pooja Ma’am’s Chemistry teaching, and Varsha Ma'am’s Biology lessons were all excellent, and the exams were tough but really effective in preparing us for NEET. SG Education’s management and rigorous exam structure are the best in Kalyan!"
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Divya Nair 
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (NEET Aspirant)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>

          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "SG Education’s management team is really supportive. They ensured that we had all the resources we needed and were always available to help with any concerns. The regular exams were so helpful in identifying where I needed to improve. Latesh Sir’s Maths and Physics lessons, along with Pooja Ma’am’s Chemistry teaching, were fantastic. The exam schedule was rigorous, which gave me a real sense of how the JEE would be. If you want a well-managed institute with effective exams, SG Education is the best in Kalyan!"
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Gaurav Ghude 
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (JEE Aspirant)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>

          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "The management at SG Education is super-efficient. They made sure we always knew when our tests were, and the teachers gave us detailed feedback after every exam. The frequent tests helped me stay on track for my 10th board exams. Latesh Sir’s Maths teaching was amazing, and Pooja Ma’am’s Science classes were always engaging. The management’s support, combined with regular exams, really helped me perform well. I highly recommend SG Education as the best in Kalyan."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Yash Chobe 
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (10th Board Student)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>

          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "I prepared for the Olympiad with SG Education, and I can confidently say that it’s the best in Kalyan. Latesh Sir’s approach to problem-solving and Pooja Ma’am’s clear explanations of Chemistry concepts helped me secure a good rank. The teachers here go above and beyond to ensure that you understand the material deeply, and that made a big difference for me. SG Education is definitely the top choice for competitive exams."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Ruchit Ghavat 
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (Olympiad Aspirant)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>

          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "I was part of the special Maths batch at SG Education, and it helped me so much. Latesh Sir’s teaching method is really clear, and I felt a lot more confident in my Maths skills after joining the batch. My problem-solving speed and accuracy improved significantly, and my marks went up too. SG Education is definitely the best in Kalyan for anyone looking to improve their Maths."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Aditya Gidh 
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (Special Maths Batch)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>

          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "SG Education helped me score really well in my 12th boards. Latesh Sir made Physics and Maths so much easier to understand, and Pooja Ma’am’s Chemistry teaching was always clear and to the point. The support from the teachers kept me motivated throughout the year. I highly recommend SG Education to anyone who’s looking for a solid Science coaching center in Kalyan."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Bhavik Choudhary
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (12th Science)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>
          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "The management at SG Education is top-notch! They are always ready to help with any queries and made sure that our classes and exams ran smoothly. The exam schedule was well-planned, with regular mock tests that kept me on track for my board exams. Latesh Sir and Pooja Ma’am’s teaching style made all the subjects so easy to understand, and their constant feedback on our test performance really pushed me to improve. If you want structured learning and great support, SG Education is the best in Kalyan."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Tanvi Mitre 
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (12th Science)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>
          
          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "SG Education provided everything I needed for NEET preparation. Latesh Sir made Physics fun and easy to understand, while Pooja Ma’am’s Chemistry sessions always clarified my doubts. Varsha Ma'am’s Biology classes were spot on, covering the entire syllabus in detail. Thanks to SG, I cleared NEET with a good rank. If you’re in Kalyan, there’s no better place for NEET coaching than SG Education."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Aishwarya Gaikwad 
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (NEET Aspirant)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>
          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "Preparing for NEET at SG Education was a fantastic experience. Latesh Sir’s Physics classes simplified everything for me, and Pooja Ma’am’s Chemistry teaching helped me overcome my fear of the subject. Varsha Ma'am’s Biology lessons were also key in helping me get a high score. Thanks to SG, I’m now studying medicine, and I highly recommend this institute to any NEET aspirants. The best coaching center in Kalyan!"
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Snehal Shivdas 
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (NEET Aspirant)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>
          
          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "I attended SG Education for my JEE preparation, and I can confidently say they are the best in Kalyan. Latesh Sir’s Maths and Physics classes gave me the clarity I needed, and Pooja Ma’am’s Chemistry sessions were thorough and to the point. Their teaching, combined with the practice tests, helped me score well in JEE. SG Education is definitely the top coaching center for anyone serious about JEE."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Kunal Choudhary 
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (JEE Aspirant)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>
          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "I was preparing for JEE, and SG Education was the best choice I made. The teachers, especially Latesh Sir for Maths and Physics, really know how to get you ready for competitive exams. Pooja Ma’am’s Chemistry classes were structured and covered everything I needed. Thanks to their teaching, I scored well in JEE and secured admission to my dream college. If you’re serious about JEE, SG Education is the best coaching in Kalyan."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Kunal Bankar 
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (JEE Aspirant)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>
          
          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "I studied at SG Education for my 10th board exams, and I couldn’t have chosen a better place. Latesh Sir’s Maths teaching made everything so much clearer, and I gained a lot of confidence. Pooja Ma’am’s Science classes were also really helpful, and I managed to score much higher than I expected in the board exams. SG Education is the best place in Kalyan for anyone serious about their studies."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Rutuja Budhavat 
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (10th Board Student)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>
          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "I prepared for my 10th board exams at SG Education, and it was a fantastic experience. The teachers, especially Latesh Sir for Maths and Science, made the concepts so easy to understand. I improved a lot after joining SG, and my board results were much better than I expected. The tests, assignments, and extra doubt-clearing sessions really helped me build confidence. If you want to excel in your board exams, SG Education is the best in Kalyan!"
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Unnanti Badgujar 
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (10th Board Student)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>
          
          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "I prepared for the Science Olympiad at SG Education, and it was a wonderful experience. Latesh Sir’s teaching helped me tackle even the most complex Maths and Physics problems, while Pooja Ma’am’s Chemistry guidance was extremely valuable. I managed to secure a good rank in the Olympiad, and I’m grateful to SG Education for all their support. It’s the best institute in Kalyan for Olympiad preparation."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Ujwal Ghude 
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (Olympiad Aspirant)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>
          
          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "I joined SG Education’s special Maths batch, and it’s the best in Kalyan. Latesh Sir’s way of teaching Maths is excellent. He makes sure everyone understands, and my confidence in solving problems has improved a lot."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Soham Patil
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (Special Maths Batch)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>
          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "SG Education is the best in Kalyan for Maths coaching. Latesh Sir’s special Maths batch helped me improve my problem-solving skills. I’m doing much better in Maths now, thanks to his teaching."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Samar Ubale
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (Special Maths Batch)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>
          <div className="card relative">
            <div className="absolute top-10 rating text-[#002F48] flex justify-center gap-1">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
              <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            </div>
            <p className="mt-5 text-xs leading-5 lg:text-xl font-roboto text-[#002F48] font-normal  lg:leading-8  w-72 absolute lg:left-48 lg:block pl-10 pt-16 lg:w-[890px] mx-auto">
            "For Maths, SG Education is the best in Kalyan. Latesh Sir’s special batch is great for anyone who wants to improve their scores. I’ve gained a lot of confidence since I started attending."
              <div className="absolute -bottom-28 right-[10%] lg:right-[40%] flex flex-col justify-center items-center">
                {/* <img src={pic1} className="" alt=" " width={117} /> */}
                <h3 className="font-bold font-roboto text-2xl text-[#002F48]">
                Kritika Bhanushali
                </h3>
                <p className="font-normal font-roboto text-2xl text-[#002F48]">
                (Special Maths Batch)
                </p>
              </div>
            </p>

            {/* double inverted comma */}
            <div>
              <img
                src={pic2}
                alt=""
                className="absolute top-14 left-3 lg:top-20  lg:left-36 left"
              />
              <img
                src={pic3}
                alt=""
                className="absolute bottom-40 right-7  lg:bottom-40 lg:right-28 right"
                width={79}
                height={189}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
