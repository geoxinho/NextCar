import React from "react";
import PortfolioData from "../../components/data/PortfolioData";
// import galleryData from "../../components/data/galleryData";
import PageBG from "../../components/PageBG";

const Feature = () => {
  return (
    <div className="text-white">
      <PageBG text="Porfolio" text2="Gallery" />
      <PortfolioData />
    </div>
  );
};

export default Feature;
