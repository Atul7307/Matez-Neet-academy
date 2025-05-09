import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo1.svg";
import "./registrationForm.css";

import Recaptcha from "../Recaptcha";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    school: "",
    standard: "",
    gender: "",
    consent: false,
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "radio") {
      setFormData({ ...formData, gender: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleCourseChange = (course) => {
    const newCourses = formData.courses.includes(course)
      ? formData.courses.filter((c) => c !== course)
      : [...formData.courses, course];

    setFormData({ ...formData, courses: newCourses });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the CAPTCHA to submit the form.");
      return;
    }

    // Google Apps Script Web App URL
    const sheetURL =
      "https://script.google.com/macros/s/AKfycbypCvUl6TFhiI4BBE5ex-j2fddcBWqDRb0TZxVWjbQSEep125_-ng14tfsmHb7WXsJSyA/exec";

    const formDataEntries = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      school: formData.school,
      gender: formData.gender,
      courses: formData.courses.join(", "), // Convert courses array to string
    };

    try {
      const response = await fetch(sheetURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formDataEntries),
      });

      // Wait for the response to complete and check if it was successful
      if (response.ok) {
        // Navigate to the thank you page only if the form submission was successful
        navigate("/ThankYouPage");
      } else {
        // If the response was not OK, log an error message
        console.error("Failed to submit form data");
      }
    } catch (error) {
      // Catch any error that occurs during the fetch operation
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div
      className="sm:w-max-[1200px] w-max-[412px] min-h-screen "
      style={{ backgroundColor: "#CEDDE6" }}
    >
      <div
        className="flex mb-6  justify-around md:justify-start items-center p-4 max-w-xl mx-auto gap-5"
      >
        {/* Logo */}
        <img src={logo} alt="Logo" className=" w-[40px] h-[40px] md:w-auto md:h-auto" />
        {/* Registration Form Title */}
        <p className=" text-xl md:text-5xl font-bold">Registration Form</p>
      </div>
      <div className="flex sm:w-max-[1200px] items-start justify-center min-h-auto">
        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg main-container">
          <h2 className="sm:text-2xl text-xl font-bold mb-6 text-center">
            Please fill the form below to join The workshop
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="flex flex-row items-center mb-4">
              <label className="text-sm text-gray-700 w-32 font-bold">
                Name<span className="text-[#74A8C3]">*</span>:
              </label>
              <div className="flex-grow">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="border-2 border-[#74A8C3] p-2 w-full rounded bg-white focus:border-[#74A8C3] focus:outline-none focus:ring-0 placeholder-custom input-border"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-row items-center mb-4">
              <label className="text-sm font-bold text-gray-700 w-32">
                Email ID<span style={{ color: "#74A8C3" }}>*</span>:
              </label>
              <div className="flex-grow">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter a valid Email ID"
                  className="border-2 border-[#74A8C3] p-2 w-full rounded bg-white focus:border-[#74A8C3] focus:outline-none focus:ring-0 placeholder-custom input-border"
                  required
                />
              </div>
            </div>

            {/* Mobile No */}
            <div className="flex flex-row items-center mb-4">
              <label className="text-sm font-bold text-gray-700 w-32">
                Mobile No<span style={{ color: "#74A8C3" }}>*</span>:
              </label>
              <div className="flex-grow">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter Your Mobile No"
                  className="border-2 border-[#74A8C3] p-2 w-full rounded bg-white focus:border-[#74A8C3] focus:outline-none focus:ring-0 placeholder-custom input-border"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-row items-center mb-4">
              <label className="text-sm font-bold text-gray-700 w-32">
                Address<span style={{ color: "#74A8C3" }}>*</span>:
              </label>
              <div className="flex-grow">
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter Address"
                  className="border-2 border-[#74A8C3] p-2 w-full rounded bg-white focus:border-[#74A8C3] focus:outline-none focus:ring-0 placeholder-custom input-border"
                  required
                />
              </div>
            </div>

            {/* Standard */}
            <div className="flex flex-row items-center mb-4">
              <label className="text-sm font-bold text-gray-700 w-32">
              Standard<span style={{ color: "#74A8C3" }}>*</span>:
              </label>
              <div className="flex-grow">
                <input
                  type="text"
                  name="standard"
                  value={formData.standard}
                  onChange={handleChange}
                  placeholder="Enter your Standard"
                  className="border-2 border-[#74A8C3] p-2 w-full rounded bg-white focus:border-[#74A8C3] focus:outline-none focus:ring-0 placeholder-custom input-border"
                  required
                />
              </div>
            </div>

            {/* School/College */}
            <div className="flex flex-row items-center mb-4">
              <label className="text-sm font-bold text-gray-700 w-32">
                School/College<span style={{ color: "#74A8C3" }}>*</span>:
              </label>
              <div className="flex-grow">
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  placeholder="Enter your School/College Name"
                  className="border-2 border-[#74A8C3] p-2 w-full rounded bg-white focus:border-[#74A8C3] focus:outline-none focus:ring-0 placeholder-custom input-border"
                  required
                />
              </div>
            </div>

            {/* Gender */}
            <div className="flex flex-row items-center mb-4">
              <label className="text-sm font-bold text-gray-700 w-44">
                Gender<span style={{ color: "#74A8C3" }}>*</span>:
              </label>
              <div className="flex space-x-4 w-full">
                <label className="text-[#74A8C3]">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Female
                </label>
                <label className="text-[#74A8C3]">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="text-[#74A8C3]">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
            </div>

            

            {/* Consent */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label className="text-sm font-bold">
                I confirm to allow the instructor to call or message to proceed
                with the enrollment process.
              </label>
            </div>

            <Recaptcha onChange={handleCaptchaChange} required />
            {/* Submit Button */}
            <button
              type="submit"
              className="w-1/2 sm:w-1/2 bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition duration-300 mx-auto block"
              // onClick={() => navigate("/ThankYouPage")}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
