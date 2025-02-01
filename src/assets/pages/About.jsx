import React from "react";
import aboutCar from "../../assets/pixelCar1.jpeg";
// import { IoIosArrowForward } from "react-icons/io";
import PageBG from "../../components/PageBG";

const About = () => {
  return (
    <div>
      <PageBG text="About Us" text2="About" />
      <div className=" text-white lg:flex lg:flex-row justify-center align-middle content-center lg:pt-32 p-2 w-[100%] lg:px-16 gap-16 place-content-center ">
        <div className="lg:w-[50%] content-center justify-center text-justify p-4">
          <h1
            data-aos="fade-up"
            className="md:text-[36px] text-[28px] text-left font-bold"
          >
            Welcome to <span className="text-color4">NextDrive</span> Car
            Rentals Services
          </h1>
          <p data-aos="fade-up-right">
            At NextDrive Car Rentals, we are dedicated to providing a
            hassle-free, reliable, and enjoyable car rental experience. Whether
            you're traveling for business, leisure, or need a temporary vehicle,
            NextDrive is your trusted partner on the road.
          </p>
          <h2
            data-aos="zoom-in"
            className="md:text-[26px] text-[20px] font-bold"
          >
            Our Journey{" "}
          </h2>
          <p data-aos="fade-up-left">
            NextDrive was established with a clear vision: to make car rentals
            straightforward and accessible for everyone. Starting with a small
            fleet and a big dream, we have grown into a leading car rental
            service known for exceptional customer service, a diverse vehicle
            selection, and competitive pricing.
          </p>
          <h2
            data-aos="zoom-in"
            className="md:text-[26px] text-[20px] font-bold"
          >
            Why NextDrive?{" "}
          </h2>
          <p data-aos="fade-up-right">
            We offer a wide range of vehicles, from economy cars to luxury
            sedans, SUVs to vans, ensuring there’s a vehicle to meet every need
            and budget. Our fleet is regularly updated and meticulously
            maintained to ensure your safety and comfort. Our exceptional
            customer service team is committed to providing you with the best
            experience.
          </p>
          <h2
            data-aos="zoom-in"
            className="md:text-[26px] text-[20px] font-bold"
          >
            Join the NextDrive Family
          </h2>
          <p data-aos="fade-up-left">
            At NextDrive, we’re more than just a car rental service – we’re your
            travel partner. Whether you need a car for a day, a week, or longer,
            we are here to make your journey as smooth and enjoyable as
            possible. We look forward to serving you! For more information, feel
            free to contact us or visit one of our locations.
          </p>
          <div data-aos="fade-up">
            <a href="/contact">
              <button className="px-8 py-5 mt-8 mb-10 font-bold text-black border rounded-md bg-color1 hover:bg-color4 text-md hover:transition-all hover:ease-out hover:duration-500 hover:text-white">
                Get In Touch
              </button>
            </a>
          </div>
        </div>

        <div className=" justify-center align-middle text-center content-center lg:w-[50%] h-full lg:mt-10  mt-20 md:mb-36">
          <div
            data-aos="slide-left"
            className=" lg:bg-color4  w-full lg:h-[460px] h-[250px] md:rounded-br-[70px]"
          >
            <div className="relative object-cover">
              <img
                data-aos="slide-left"
                src={aboutCar}
                alt="About Us"
                className=" absolute w-[100%]  md:h-[450px] h-[300px] align-middle md:-left-10 md:-top-16  md:rounded-br-[70px] md:rounded-tl-[70px] -top-24 rounded-2xl object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
