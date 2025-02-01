import React from "react";
import { useNavigate } from "react-router-dom";
import CarList from "./data/CarList";

const Booking = () => {
  const navigate = useNavigate();

  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div>
      <div>
        <div className="flex">
          <div className="items-center content-center justify-center mx-auto text-white place-content-center">
            <h1
              data-aos="slide-down"
              className="justify-center mt-10 text-xl font-semibold text-center uppercase align-middle md:text-4xl"
            >
              Let's Find Your <span className="text-color4">Dream</span> Car
            </h1>
            <p
              data-aos="slide-up"
              className="md:mt-5 md:w-[500px] md:text-lg text-md align-middle justify-center text-center text-wrap mt-3 px-3"
            >
              Car owners are considered family, connected by an exhilarating
              driving experience
            </p>
          </div>
        </div>
        <div className="grid content-center justify-center gap-6 mx-4 my-10 text-white align-middle lg:gap-10 lg:mx-16 lg:grid-cols-3 lg:my-20 md:grid-cols-2">
          {CarList.map((items) => (
            <div
              data-aos="slide-up"
              key={items.id}
              className="items-center content-center justify-center bg-gray-900 justify-self-center md:w-full h-fit rounded-xl"
            >
              <div className=" h-[300px] lg:h-full md:h-full">
                <img
                  src={items.img}
                  alt={items.name}
                  className="justify-center md:object-cover md:object-center md:w-full md:h-[250px] rounded-t-xl  w-full h-full"
                />
              </div>
              <div className="p-2 my-2 text-white">
                <h2 className="text-lg font-bold">{items.name}</h2>
                <div>
                  <p>
                    <span className="text-lg font-extrabold text-color4">
                      {items.price}
                    </span>
                    per day
                  </p>
                  <h3 className="justify-end text-left align-middle place-content-center">
                    Model: {items.model}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center content-center justify-center w-full text-white align-middle place-content-center place-items-center">
                <div className="flex items-center justify-center w-full m-2 justify-self-center place-content-center">
                  {items.icon.map((iconFlex, index) => (
                    <span
                      key={index}
                      className="flex items-center justify-center w-full text-color4 place-content-center"
                    >
                      {iconFlex}
                    </span>
                  ))}
                </div>

                <div className="flex w-full text-center">
                  {items.text.map((textList, index) => (
                    <span key={index} className="w-full text-white">
                      {textList}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex content-center justify-center w-full my-3 align-middle justify-self-center">
                <button
                  onClick={() => handleViewDetails(items.id)}
                  className="px-4 py-2 my-4 text-white transition-colors rounded bg-color4 hover:bg-color1 hover:text-black"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
