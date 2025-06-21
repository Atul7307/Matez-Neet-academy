import React from 'react';
import styles from './MissionAndVision.module.css';

const MissionAndVission = () => {
    return (
        <>
            <div className={styles.missionSection}>
                <div>
                <div>
                    <h1 className="text-[32px] sm:text-[48px] font-bold text-[#ffffff]">
                      Mission And Vision:
                    </h1>
                    <p className=" flex-row justify-between  text-[16px] sm:text-[22px] text-[#ffffff] mt-6">
                    Our mission is to be provide the best coaching in Gorakhpur, providing
                    top-tier education
                    <br/>
                    that prepares students for academic and competitivesuccess.
                    <br/>
                    We envision a future where every student in Gorakhpur has access to
                    <br/>
                    quality education that drives them to achieve their dreams.
                    </p>
                </div>
                <div className={styles.videoSection}>
                <iframe
                  className={styles.missionVideo}
                  src="https://www.youtube.com/embed/uPCfN_kD-vU?si=0rBX6X0Gg3b0M_fO"
                  title="YouTube video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
                </div>
                </div>
            </div>
        </>
    )
}

export default MissionAndVission;