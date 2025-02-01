import React, { useState } from "react";
import Faqdata from "../../components/data/Faqdata";
import { IoIosArrowForward } from "react-icons/io";
import PageBG from "../../components/PageBG";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div data-aos="fade-up">
      <div
        className="  md:mx-20 mx-4 px-2 bg-[#0a0a0a]  md:px-6 md:py-3 my-2   rounded py-3  "
        style={{
          backgroundColor: isOpen ? "#111" : "",
        }}
      >
        <div
          className="flex content-center justify-between w-full pb-2 space-y-2 text-lg align-middle cursor-pointer text-color4 md:text-lg"
          onClick={onClick}
          style={{
            color: isOpen ? "color4" : "",
            borderBottom: isOpen ? "#d3d3d3 2px solid" : "",
          }}
        >
          {question}
          {isOpen ? <span> - </span> : <span>+</span>}
        </div>
        {isOpen && (
          <p className="grid overflow-hidden text-slate-300 md:mt-3 mt-1 md:text-lg text-[16px] md:pr-10 pr-2 px-1 ">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="text-white">
      <PageBG text="Frequently Asked Questions" text2="Faq" />

      <div className="">
        {Faqdata().map((item, index) => (
          <FAQItem
            data-aos="fade-up"
            key={index}
            {...item}
            isOpen={index === openIndex}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="relative mt-10 mb-10 faq-bg">
        <div className="top-0 left-0 right-0 justify-center text-center align-middle place-self-auto">
          <div className="top-0 left-0 right-0 items-center content-center justify-center gap-10 text-center align-middle ">
            <div className="z-50 grid gap-10 opacity-100 ">
              <h1 className="mt-24 text-6xl font-black text-color1">
                Contact Us For More Details
              </h1>
              <a
                href="/contact"
                className="z-50 justify-center p-4 mx-auto mb-10 text-2xl rounded cursor-pointer bg-color4 w-52"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
