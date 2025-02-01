import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const PageBG = ({ text, text2, className }) => {
  return (
    <div>
      <div>
        <div className=" about-bg justify-center align-middle content-center   object-contain  w-full py-[50px] md:py-[100px]">
          <div className="content-center justify-center text-slate-400">
            <div className="items-center content-center justify-center text-center align-middle place-content-center">
              <h1
                data-aos="fade-up"
                className={`content-center text-4xl text-center md:text-6xl md:font-extrabold ${className}`}
              >
                {text}
              </h1>
              <div
                data-aos="slide-right"
                className="flex flex-row items-center justify-center gap-3 mt-6 align-middle "
              >
                <a href="/">Home</a>
                <span>
                  <IoIosArrowForward />
                </span>
                {text2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBG;
