import React from 'react';
import styles from './UpcomingEvent.module.css';
import Arrow from "./assets/images/Arrow.png";
import Watch from "./assets/images/Watch.png";
import GroupPic from "./assets/images/GroupPic.png";

const UpcomingEvent = () => {
    return (
        <>
            <div className={styles.upcomingEvent}>
                <div className={styles.leftColumn}>
                  <div>
                  <h1 className="text-[24px] sm:text-[40px] text-[#012f48] font-semibold">
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
                  <button className="flex justify-center items-center gap-3 text-[7.5px] sm:text-[16px] text-[#ffffff] bg-[#f77f00]     mt-8 sm:mt-16 w-[80px] h-[24px] sm:w-[190px] sm:h-[48px] rounded-[4px] ">
                    Register now
                    <img
                      className="w-[5px] h-[9px] sm:w-auto sm:h-auto"
                      src={Arrow}
                      alt=""
                    />
                  </button>
                  </div>
                </div>
                <div className={styles.rightColumn}>
                  <img src={GroupPic} alt="" className={styles.eventImage} />
                </div>
            </div>
        </>
    )
}

export default UpcomingEvent;