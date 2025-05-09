import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import AllCourses from "../AllCourses/AllCourses";
import Pic1 from "../images/1.jpg";
import Pic2 from "../images/2.jpg";
import Pic3 from "../images/3.jpg";
import Pic4 from "../images/4.png";
import "./Courses.css";
import TestimonialCard from "../Testimonial/Testimon";

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Array of banner images for the slideshow
  const bannerImages = [Pic1, Pic2, Pic3, Pic4];

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImageIndex < bannerImages.length) {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsTransitioning(false);
        setCurrentImageIndex(0);
        setTimeout(() => setIsTransitioning(true), 0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImageIndex, bannerImages.length]);

  return (
    <>
      <div className="slideshow-container ">
        <div
          className="slideshow-images h-[211px] sm:h-[650px] "
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {bannerImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="slideshow-image"
            />
          ))}
          <img
            src={bannerImages[0]}
            alt="Clone of first image"
            className="slideshow-image"
          />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col sm:h-auto  w-full bg-custom-bg">
        {/* Sidebar Component */}
        <Sidebar
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
        />

        {/* AllCourses Component */}
        <AllCourses selectedCategory={selectedCategory} />
      </div>

      <div className="bg-[#d8e5ed] w-full text-center pt-7">
        <h1 className=" text-5xl font-roboto font-semibold text-[#406376] mb-0">
          Testimonials
        </h1>
      </div>
      <TestimonialCard />
    </>
  );
}

export default Courses;
