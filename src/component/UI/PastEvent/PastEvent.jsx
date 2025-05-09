import React from 'react';
import pastEvent from './assets/images/pastEvent.png';
import styles from './PastEvent.module.css';

const PastEvent = () => {
    return (
        <>
        <div className={styles.pastEvent}>
            <div className={styles.leftColumn}>
                <img src={pastEvent} alt="" className={styles.pastEventImg}/>
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.desktop}>
                  <h1 className=" text-[40px] w-[313px] text-[#012f48] font-semibold">
                    Past Events
                  </h1>
                  <p className="w-[150px] mt-3 border-t-2 border-[#f77f00]"></p>
                  <h1 className="mt-6 text-[32px] text-[#012f48] w-[448px] font-bold ">
                    Career Opportunities After 12th Science
                  </h1>
                  <p className="text-[24px] w-[448px] mt-5">
                    Our recent seminar on 'Career Opportunities After 12th Science'
                    was a huge success, helping students in Kalyan explore various
                    career paths.
                  </p>
                </div>
                <div className={styles.mobile}>
                <h1 className="text-[24px] text-[#012f48] font-semibold">
                    Past Events
                </h1>
                <p className="w-[80px] mt-1 border-t-2 border-[#f77f00]"></p>
                <h1 className="mt-6 text-[18px] text-[#012f48] font-bold ">
                  Career Opportunities After 12th Science
                </h1>
                <p className="text-[16px] w-[321px] mt-1">
                  Our recent seminar on 'Career Opportunities After 12th Science' was
                  a huge success, helping students in Kalyan explore various career
                  paths.
                </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default PastEvent;