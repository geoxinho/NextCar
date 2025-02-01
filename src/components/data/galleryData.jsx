import React, { useState } from "react";
import img1 from "../../assets/car1.jpeg";
import img2 from "../../assets/car2.jpeg";
import img3 from "../../assets/car3.jpeg";
import img4 from "../../assets/car4.jpeg";
import img5 from "../../assets/car5.jpeg";
import img6 from "../../assets/car6.jpeg";
import img7 from "../../assets/car7.jpeg";
import img8 from "../../assets/car8.jpeg";
import img9 from "../../assets/HeroImage.jpeg";
import img10 from "../../assets/heroImage2.jpeg";
import img11 from "../../assets/HeroImage3.jpeg";
import img12 from "../../assets/pixelCar1.jpeg";
import img13 from "../../assets/pixelCar2.jpeg";
import img14 from "../../assets/pixelCar3.jpeg";
import img15 from "../../assets/pixelCar4.jpeg";
import img16 from "../../assets/pixelCar5.jpeg";
import img17 from "../../assets/pixelCar6.png";
import img18 from "../../assets/pixelCar7.jpeg";
import img19 from "../../assets/pixelCar8.jpeg";

const data = () => [
  {
    id: 1,
    imgSrc: img1,
  },
  {
    id: 2,
    imgSrc: img2,
  },
  {
    id: 3,
    imgSrc: img3,
  },
  {
    id: 4,
    imgSrc: img4,
  },
  {
    id: 5,
    imgSrc: img5,
  },
  {
    id: 6,
    imgSrc: img6,
  },
  {
    id: 7,
    imgSrc: img7,
  },
  {
    id: 8,
    imgSrc: img8,
  },
  {
    id: 9,
    imgSrc: img9,
  },
  {
    id: 10,
    imgSrc: img10,
  },
  {
    id: 11,
    imgSrc: img11,
  },
  {
    id: 12,
    imgSrc: img12,
  },
  {
    id: 13,
    imgSrc: img13,
  },
  {
    id: 14,
    imgSrc: img14,
  },
  {
    id: 15,
    imgSrc: img15,
  },
  {
    id: 16,
    imgSrc: img16,
  },
  {
    id: 17,
    imgSrc: img17,
  },
  {
    id: 18,
    imgSrc: img18,
  },
  {
    id: 19,
    imgSrc: img19,
  },
];
const galleryData = ({ imgSrc }) => {
  const [isopen, setIsOpen] = useState(false);
  const toggleModel = () => {
    setIsOpen(!isopen);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          onClick={toggleModel}
          className="grid object-cover w-32 h-32 grid-cols-3 cursor-pointer"
        >
          {item.imgSrc}
        </div>
      ))}
      {isopen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setIsOpen(false)}
        >
          {data().map((item, index) => (
            <div
              key={index}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full"
            >
              {" "}
              {item.imgSrc}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default galleryData;
