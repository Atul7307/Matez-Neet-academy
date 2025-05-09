import React, { useEffect, useState } from "react";
import Logo from "../../assets/NavBar/SGLogo.png";
import DropDown from "../../assets/NavBar/ChevronDown.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Drawer from "./Drower"; // Make sure the path is correct
import styles from './NavBar.module.css';


const NavBar = () => {
  const navigate = useNavigate();
  const [resWidth, setResWidth] = useState(window.innerWidth);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setResWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {resWidth >= 768 ? (
        <div className="flex justify-between items-center">
          <div className="ml-[30px]" onClick={() => navigate("/")}>
            <img src={Logo} alt="Logo" className="cursor-pointer" />
          </div>
          <div className="flex">
            <ul className="flex gap-[50px]">
              <li className={styles.nl + " cursor-pointer"} onClick={() => navigate("/")}>
                Home
              </li>
              <li className={styles.nl + " cursor-pointer"} onClick={() => navigate("/about")}>
                About
              </li>
              <li className={styles.nl + " cursor-pointer"} onClick={() => navigate("/event")}>
                Event
              </li>
              <li
                className={styles.nl + " cursor-pointer"}
                onClick={() => navigate("/Courses")}
              >
                Courses
              </li>
            </ul>
            <img className="gap-[0px]" src={DropDown} alt="Dropdown" />
          </div>
          <div>
            <button
              className="w-[120px] h-[40px] text-[#ffffff] items-center p-[5px] bg-[#F67F00] font-[Roboto] rounded-[5px] mr-[120px] border-solid border-2 border-black"
              onClick={() => navigate("/Contact")}
            >
              CONTACT US
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center w-full h-[73px] px-[20px] border-b-2 border-black">
          <div onClick={() => navigate("/")}>
            <img
              src={Logo}
              alt="Logo"
              className="w-[88px] h-[68px] cursor-pointer"
            />
          </div>
          <div onClick={toggleDrawer} className="cursor-pointer">
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
        </div>
      )}

      {/* Drawer Component */}
      {isDrawerOpen && <Drawer onClose={toggleDrawer} />}
    </>
  );
};

export default NavBar;
