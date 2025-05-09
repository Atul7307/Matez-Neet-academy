import React, { useState } from "react";
import { Drawer, theme } from "antd";
import Logo from "../../assets/Drower/SGLogo.png";
import { useNavigate } from "react-router-dom";

const AppDrawer = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate(); // React Router hook for navigation

  const [open, setOpen] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
    onClose(); // Close the drawer after navigation
  };

  return (
    <div>
      <Drawer placement="right" closable={true} onClose={onClose} open={open}>
        <div>
          <div className="flex gap-4">
            <img className="w-24" src={Logo} alt="Logo" />
            <p className="text-[24px] text-[#f77f00] font-bold">
              Best Coaching Classes in Kalyan.
            </p>
          </div>
          <div className="mx-4 mt-8 text-[20px] font-semibold">
            {/* OnClick navigation */}
            <h1
              className="ml-2 cursor-pointer"
              onClick={() => handleNavigation("/about")}
            >
              About Us
            </h1>
            <p className="w-[300px] mt-4 border-t-[2px] border-[#B2B1B1]"></p>
            <h1
              className="ml-2 mt-4 cursor-pointer"
              onClick={() => handleNavigation("/event")}
            >
              Events
            </h1>
            <p className="w-[300px] mt-4 border-t-[2px] border-[#B2B1B1]"></p>
            <h1
              className="ml-2 mt-4 cursor-pointer"
              onClick={() => handleNavigation("/Courses")}
            >
              Courses
            </h1>
            <p className="w-[300px] mt-4 border-t-[2px] border-[#B2B1B1]"></p>
          </div>
          <div>
            <button
              className="flex justify-center items-center mx-12 mt-[200px] w-[230px] h-20 text-[30px] text-[#ffffff] bg-[#f77f00] font-semibold rounded-[20px]"
              onClick={() => handleNavigation("/Contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default AppDrawer;
