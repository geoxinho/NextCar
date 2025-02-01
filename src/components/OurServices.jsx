import React from "react";
import { PiCertificateFill } from "react-icons/pi";
import { GrServices } from "react-icons/gr";
import { FaTruckFast } from "react-icons/fa6";

function OurServices() {
  return (
    <div>
      <div className="mx-auto text-white items-center justify-center place-content-center content-center md:w-[800px] scroll-smooth">
        <h1
          data-aos="fade-down"
          className="justify-center mt-10 text-xl font-semibold text-center uppercase align-middle md:text-4xl"
        >
          We have <span className="text-color4"> Best Service</span> For the
          rent cars
        </h1>
        <p
          data-aos="fade-up"
          className="md:mt-5 md:w-[500px] md:text-lg text-md align-middle justify-center text-center text-wrap  mt-3 px-3 mx-auto"
        >
          Car owner are consider family,connected by oan exhilarating driving
          experince
        </p>
      </div>
      <div className="justify-center gap-8 px-4 mb-20 align-middle lg:flex-row servicebg lg:flex lg:px-10 md:grid-cols-2 md:grid">
        <div
          data-aos="slide-right"
          className="p-8 mt-5 rounded-lg bg-color4 md:mt-10"
        >
          <PiCertificateFill className="text-4xl " />
          <h1 className="uppercase text-2xl py-4 font-[500]">Quality Choice</h1>
          <p className="text-[15px]">
            Our car rental service is committed to providing you with swift and
            At our car rental company, we offer a premium selection of vehicles
            to ensure that you have access to top-quality options for your
            transportation.
          </p>
          <div className="mt-2">
            <a href="/about" className="text-lg underline ">
              Read More
            </a>
          </div>
        </div>
        <div
          data-aos="slide-up"
          className="p-8 mt-5 rounded-lg bg-color2 md:mt-10"
        >
          <GrServices className="text-4xl " />
          <h1 className="uppercase text-2xl py-4 font-[500]">
            {" "}
            Exclusive Service
          </h1>
          <p className="text-[15px]">
            Experience the epitome of luxury and convenience with our exclusive
            service offerings. From personalized assistance to bespoke rental
            packages, we go above and beyond to cater to your individual
            preferences.
          </p>
          <div className="mt-2 ">
            <a href="/about" className="text-lg underline ">
              Read More
            </a>
          </div>
        </div>
        <div
          data-aos="slide-left"
          className="p-8 mt-5 rounded-lg bg-color3 md:mt-10"
        >
          <FaTruckFast className="text-4xl " />
          <h1 className="uppercase text-2xl py-4 font-[500]"> Fast service</h1>
          <p className="text-[15px]">
            Our car rental service is committed to providing you with swift and
            efficient service. We understand the value of your time and strive
            to deliver prompt assistance from the moment you make your
            reservation.
          </p>
          <div className="mt-2">
            <a href="/about" className="text-lg underline ">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
