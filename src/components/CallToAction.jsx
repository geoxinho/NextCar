import React from "react";
// import { TypeAnimation } from "react-type-animation";

function CallToAction() {
  return (
    <div className="flex-row justify-between p-4 text-center text-white align-middle md:flex">
      <div data-aos="slide-right" className="text-center md:w-2/3">
        <h2 className="py-3 text-xl font-bold text-center uppercase md:text-4xl md:text-left">
          We are The Leaders In The{" "}
          <span className="text-color4">Automotive</span> Industry
        </h2>
      </div>
      <div
        data-aos="slide-left"
        className="text-justify md:text-left text-wrap md:w-2/3"
      >
        <p className=" text-[18px] text-white">
          A project we strive to excel in very service we provide, adding the
          value for our customer whenever possible, and thereby attaining
          national leadership in the automotive industry
        </p>
        <a href="/about" className="text-xl underline text-color4">
          Read More
        </a>
      </div>
    </div>
  );
}

export default CallToAction;
