import React from "react";
import Partner from "../../components/parters";
import OurServices from "../../components/OurServices";
import Email from "../../components/Email";
import Hero from "../../components/Hero";
import CallToAction from "../../components/CallToAction";
import Carousel from "../../components/Carousel";
import Booking from "../../components/Booking";
// import Runcode from "../../components/Runcode";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Partner />
      <CallToAction />
      <Carousel />
      <Booking />
      <OurServices />
      <Email />
      {/* <Runcode /> */}
    </div>
  );
};

export default Home;
