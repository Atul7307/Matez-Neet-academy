import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate, useParams } from "react-router-dom";
import coursesData from "./courses.json";
import backgroundImage from "./bg1.png"; // Background image
import TutorSection from "./TutorSection";
import TestimonialCard from "../Testimonial/Testimon";
import { Modal } from "antd"; // Using Ant Design's Modal for a smooth dialog experience
import styles from "./Styles.module.css"; // Adjust the import path to match your project

function CourseDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const course = coursesData.find((course) => course.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    emailjs
      .send(
        "1234", // Service ID from EmailJS
        "template_lk8lyko", // Template ID from EmailJS
        formData, // The form data that will be sent
        "0-3YxFFXVahKZTKmH" // User ID from EmailJS
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent!");
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
    // Add form submission logic here
    handleCloseModal();
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-3">
      {/* First Main Content Container with Background Image */}
      <div
        className="relative w-full max-w-[1358px] h-auto rounded-[20px] p-6 md:p-10 shadow-lg mb-6 mt-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Title Section */}
        <div className="text-gray-700 mb-6">
          {/* Title and Subtitle Section */}
          <div className="sm:w-1/2">
            <h3 className="text-xs md:text-sm font-semibold mb-2 mt-3 ">
              Courses - School - {course.title}
            </h3>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 mt-7  text-[#002F48] leading-tight text-shadow-lg">
              {course.title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm md:text-lg text-[#002F48]">
            {course.description}
          </p>
        </div>
        {/* Bouncing Ball Animation */}
        <div className="absolute top-4 right-4 flex flex-col items-center">
          <div
            className={styles.questionBall + " bg-[#efedec] rounded-full animate-bounce text-center items-center justify-center cursor-pointer py-3 px-3 lg:px-5"}
            onClick={handleOpenModal}
            aria-label="Help Ball"
          >
            ?
          </div>
          <div className="w-10 h-2 bg-black opacity-30 rounded-full animate-shadow-bounce mt-[-10px]"></div>
        </div>
        {/* Modal Dialog */}

        <Modal
          open={isModalVisible}
          onCancel={handleCloseModal}
          footer={null}
          centered
          className={styles.modalWrapper}
        >
          <div className={styles.modalBackground}>
            <h1 className={styles.modalTitle}>Write Your Query</h1>
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`${styles.inputField} border border-gray-300 p-2 rounded-md w-full mb-4`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email ID or Phone"
                  className={`${styles.inputField} border border-gray-300 p-2 rounded-md w-full mb-4`}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Your Message Here"
                  className={`${styles.textareaField} border border-gray-300 p-2 rounded-md w-full mb-4`}
                ></textarea>

                {/* Button Container */}
                <div className="flex justify-between items-center mt-4">
                  {/* Cancel Button */}
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="text-white bg-transparent border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                  >
                    Cancel
                  </button>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-orange-600 text-white px-4 py-2 rounded-md shadow hover:bg-orange-700 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {course.features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#4D718B] text-white p-3 rounded-full  font-medium text-sm md:text-base pl-5"
            >
              {feature}
            </div>
          ))}
        </div>
        {/* Enroll Button */}
        <div className="flex mt-8">
          <button className="bg-[#F68C36] hover:bg-[#e07b2b] text-white font-bold py-3 px-8 rounded-full shadow-md transform hover:scale-105 transition-all"
          onClick={() => {window.scrollTo(0,0);navigate("/EnrollForm")}}
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Second Course Detail Container */}
      <div className="bg-[#DCE6F0] w-full max-w-[1358px] rounded-[20px] p-6 md:p-10 shadow-lg">
        {/* Heading for Course Details - Center Aligned */}
        <h2 className="text-lg md:text-2xl font-bold mb-4 text-[#173E5E] text-center">
          Course Details
        </h2>

        {/* Course Detail Title and Description */}
        <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-4 text-[#1F4C6B]">
          {course.details.title}
        </h2>
        <p className="text-sm md:text-lg lg:text-xl text-gray-700 mb-4">
          {course.details.description}
        </p>

        {/* Key Features Section */}
        <h3 className="text-md md:text-lg font-bold mb-3 text-[#1F4C6B]">
          Key Features
        </h3>
        <ul className="list-disc ml-5 text-sm md:text-base lg:text-lg text-gray-800 mb-6">
          {course.details.keyFeatures.map((keyFeature, index) => {
            // Split the text into bold heading and description based on the colon
            const [heading, description] = keyFeature.split(":");
            return (
              <li key={index} className="mb-2">
                <strong>{heading}:</strong> {description}
              </li>
            );
          })}
        </ul>

        {/* Bottom Text */}
        <p className="text-base md:text-lg font-medium text-gray-800">
          <strong>{course.details.text}</strong>
        </p>
      </div>

      <br />
      <br />
      <br />

      {/* Tutor Section */}
      <div className="bg-[#d8e5ed] w-full text-center pt-7">
        <h1 className=" text-5xl font-roboto font-semibold text-[#406376] mb-0">
          Testimonials
        </h1>
      </div>
      <TestimonialCard />
      <TutorSection course={course} />
    </div>
  );
}

export default CourseDetail;
