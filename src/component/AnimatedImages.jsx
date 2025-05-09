import React, { useEffect } from 'react';

const AnimatedImages = () => {
  useEffect(() => {
    const downwardImage = document.querySelector('.downward');
    const frontmanImage = document.querySelector('.frontman');
    const handraiseImage = document.querySelector('.handraise');
    const yellowcImage = document.querySelector('.yellowc');
    const bluecImage = document.querySelector('.bluec');
    const brectangleImage = document.querySelector('.brectangle');
    const srecImage = document.querySelector('.srec');

    // Updated timing to complete the sequence in 3 seconds
    setTimeout(() => {
      if (downwardImage) downwardImage.classList.add('animate-slide-in-top');
    }, 0);

    setTimeout(() => {
      if (frontmanImage) frontmanImage.classList.add('animate-slide-in-right');
    }, 1000); // Trigger after 1 second

    setTimeout(() => {
      if (handraiseImage) handraiseImage.classList.add('animate-slide-in-bottom');
    }, 1750); // Trigger after 1.75 seconds

    setTimeout(() => {
      if (yellowcImage) yellowcImage.classList.add('animate-zoom-in');
      if (bluecImage) bluecImage.classList.add('animate-zoom-in');
      if (brectangleImage) brectangleImage.classList.add('animate-zoom-out');
      if (srecImage) srecImage.classList.add('animate-zoom-out');
    }, 2250); // Trigger after 2.25 seconds
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-white overflow-hidden">
      <div className="absolute flex flex-col items-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Downward.png`}
          alt="Downward"
          className="downward w-[352px] h-[330px] bg-transparent translate-y-full"
          style={{ zIndex: "2" }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/Frontman.png`}
          alt="Frontman"
          className="frontman w-[294px] h-[235px] translate-x-full mt-[14px] bg-transparent"
          style={{ marginLeft: "-55px" }}
        />
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/assets/Handraise.png`}
        alt="Handraise"
        className="handraise w-[257px] h-[260px] translate-y-full absolute left-[calc(50%-180px)] top-[calc(50%+40px)] mt-[14px] bg-transparent"
      />

      <img
        src={`${process.env.PUBLIC_URL}/assets/Bluec.png`}
        alt="Bluec"
        className="bluec absolute w-[190px] h-[190px] bg-transparent opacity-0"
      />

      <img
        src={`${process.env.PUBLIC_URL}/assets/Yellowc.png`}
        alt="Yellowc"
        className="yellowc absolute w-[190px] h-[190px] bg-transparent opacity-0"
      />

      <img
        src={`${process.env.PUBLIC_URL}/assets/Brectangle.png`}
        alt="Brectangle"
        className="brectangle w-[115px] h-[118px] absolute left-[calc(50%-130px)] top-[calc(50%-70px)] bg-transparent opacity-0"
      />

      <img
        src={`${process.env.PUBLIC_URL}/assets/Srec.png`}
        alt="Srec"
        className="srec w-[44px] h-[46px] absolute left-[calc(50%+120px)] top-[calc(50%-60px)] bg-transparent opacity-0"
      />
    </div>
  );
};

export default AnimatedImages;
