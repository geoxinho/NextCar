import React from "react";
import avater from "../assets/Avater.png";
import { FaPlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="top-0 left-0 right-0 Hero-bg">
      <div className="flex-row items-center justify-start w-full text-white md:flex place-content-center pt-36">
        <div className="p-5 space-y-1 text-center md:text-left ">
          <h1 data-aos="fade-right" className="text-4xl uppercase md:text-6xl">
            Get Real
            <span className="hidden md:inline-block ">
              <img src={avater} alt="" className="w-[180px] h-[40px] mx-2" />
            </span>
          </h1>
          <h1
            data-aos="fade-left"
            className="mt-4 text-3xl uppercase md:text-6xl lg:mt-0"
          >
            <span className=" text-slate-50">
              E
              <span className="text-5xl font-black md:text-8xl text-color1">
                X
              </span>
              perience
            </span>{" "}
            Riding <br /> In Extreme car
          </h1>
          <p
            data-aos="fade-up"
            className="whitespace-normal text-sm md:text-lg text-slate-100 mt-4 max-w-[650px] "
          >
            Cars owners consider themselves a family, connected by an
            exhilarating driving experience unlike any other. As a family,
            they're granted access to a world of endless inspiration.
          </p>
          <div
            data-aos="fade-up"
            className="flex items-center py-10 space-x-4 align-middle sm:flex sm:place-items-center sm:items-center"
          >
            <a href="/products" className="flex py-4 rounded-lg px-9 bg-color4">
              Rent A Car
            </a>
            <div className="">
              <a
                href="#"
                className="flex items-center content-center ml-2 place-content-center"
              >
                <span className="p-2 mr-2 text-black rounded-full bg-color1 ">
                  <FaPlay className="" />
                </span>
                Order process
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
