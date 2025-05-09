import React from 'react';
import logo from '../images/logo.svg';
import course from '../images/allcourse.svg';
import exam from '../images/exam.svg';
import school from '../images/school.svg';

function Sidebar({ onCategoryChange, selectedCategory }) {
  // Function to handle CSS classes based on the selected category
  const getAllCoursesClass = () => {
    return selectedCategory === 'all'
      ? { text: 'text-white', image: '' }
      : { text: 'text-black', image: 'filter invert' };
  };

  const getOtherCategoryClass = (category) => {
    return selectedCategory === category
      ? { text: 'text-white', image: '' }
      : { text: 'text-black', image: 'filter invert' };
  };

  return (
    <div
      className={`bg-[#f77f00] p-8 sm:mt-[43.5px] rounded-b-[50px] sm:rounded-r-[80px] sm:h-[756px] sm:w-[378px] 2xl:w-[25%] sm:flex-col sm:block flex flex-row w-full justify-around items-center 
      ${window.innerWidth >= 640 ? 'rounded-b-[10px]' : ''} `}
    >
      {/* Logo and heading - only visible on sm and larger */}
      <div className="hidden sm:block sm:ml-[19px] mt-[182px]">
        <div className="mb-8 flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 mr-4"
          />
          <h1 className="text-xl font-bold">
            Learning made easy with Kalyan's online coaching
          </h1>
        </div>
      </div>

      {/* Sidebar menu items - visible and laid out horizontally on smaller screens */}
      <div className="sm:mt-[85px] sm:ml-[92.5px]">
        <ul className="flex sm:flex-col flex-row gap-4">
          <li
            className={`mb-4 sm:mb-4 sm:flex items-center cursor-pointer ${getAllCoursesClass().text}`}
            onClick={() => onCategoryChange('all')}
          >
            <img
              src={course}
              alt="All Courses"
              className={`mr-4 w-18 h-18.12 ${getAllCoursesClass().image}`}
            />
            All Courses
          </li>
          <li
            className={`mb-4 sm:mb-4 sm:flex items-center cursor-pointer ${getOtherCategoryClass('exam').text}`}
            onClick={() => onCategoryChange('exam')}
          >
            <img
              src={exam}
              alt="Exam Courses"
              className={`mr-4 w-18 h-18.12 ${getOtherCategoryClass('exam').image}`}
            />
            School
          </li>
          <li
            className={`mb-4 sm:mb-4 sm:flex items-center cursor-pointer ${getOtherCategoryClass('school').text}`}
            onClick={() => onCategoryChange('school')}
          >
            <img
              src={school}
              alt="School Coaching"
              className={`mr-4 w-18 h-18.12 ${getOtherCategoryClass('school').image}`}
            />
            Exam Prep
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
