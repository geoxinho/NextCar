import React from "react";
// import image1 from "../../assets/car5.jpeg";
import image2 from "../../assets/car2.jpeg";
import image3 from "../../assets/car3.jpeg";
import image4 from "../../assets/car1.jpeg";
import image5 from "../../assets/car4.jpeg";
import image6 from "../../assets/car6.jpeg";
import image7 from "../../assets/car7.jpeg";
import image8 from "../../assets/car8.jpeg";
import image9 from "../../assets/pixelCar1.jpeg";
import image10 from "../../assets/pixelCar2.jpeg";

import { FaGasPump, FaCar, FaBus } from "react-icons/fa";
import { GiCarSeat } from "react-icons/gi";
const CarList = [
  {
    id: 1,
    img: image9,
    name: "Bugatti",
    model: "F-150",
    icon: [<GiCarSeat />, <FaBus />, <FaCar />, <FaGasPump />],
    text: ["Elegant", "Comfortable", "Luxury", "Petrol"],
    price: "$2331",
    detail:
      "Equipped with the latest in safety technology, including lane-keeping assist, adaptive cruise control, and a 360-degree camera system, the Velox prioritizes your peace of mind.Eco-Conscious For the environmentally mindful, the Velox is also available in a plug-in hybrid variant, delivering the same performance with a significantly reduced carbon footprint.",
  },
  {
    id: 2,
    img: image10,
    name: "Toyota",
    model: "F-150",
    icon: [<GiCarSeat />, <FaBus />, <FaCar />, <FaGasPump />],
    text: ["Elegant", "Comfortable", "Luxury", "Petrol"],
    price: "$3212",
    detail:
      "Step inside the Velox’s luxurious cabin, where premium leather seats, ambient lighting, and a panoramic sunroof create an atmosphere of refined comfort. The 15-inch infotainment system integrates seamlessly with Apple CarPlay, Android Auto, and a suite of advanced connectivity features.",
  },
  {
    id: 3,
    img: image3,
    name: "Porsche",
    model: "F-150",
    icon: [<GiCarSeat />, <FaBus />, <FaCar />, <FaGasPump />],
    text: ["Elegant", "Comfortable", "Luxury", "Petrol"],
    price: "$2131",
    detail:
      "Powered by a turbocharged V8 engine delivering 450 horsepower, the Velox accelerates from 0 to 60 mph in just 4.2 seconds, ensuring a thrilling ride on every journey. Paired with an adaptive suspension, the handling is as dynamic as the design.",
  },
  {
    id: 4,
    name: "Lamborghini",
    img: image4,
    model: "F-150",
    icon: [<GiCarSeat />, <FaBus />, <FaCar />, <FaGasPump />],
    text: ["Elegant", "Comfortable", "Luxury", "Petrol"],
    price: "$2331",
    detail:
      "Unleash your passion for driving with the Xero Velox 2024, a stunning combination of sophistication, cutting-edge technology, and unbridled performance. Designed to turn heads and deliver an exhilarating ride, the Velox redefines the modern driving experience.",
  },
  {
    id: 5,
    img: image5,
    name: "Benz",
    model: "F-150",
    icon: [<GiCarSeat />, <FaBus />, <FaCar />, <FaGasPump />],
    text: ["Elegant", "Comfortable", "Luxury", "Petrol"],
    price: "$2331",
    detail:
      "Experience the perfect harmony of innovation, style, and performance with the Astra Nova 2024. Built for the modern adventurer, this cutting-edge vehicle is designed to inspire confidence, deliver efficiency, and elevate every drive..",
  },
  {
    id: 6,
    img: image6,
    name: "Highlander",
    model: "F-150",
    icon: [<GiCarSeat />, <FaBus />, <FaCar />, <FaGasPump />],
    text: ["Elegant", "Comfortable", "Luxury", "Petrol"],
    price: "$2331",
    detail:
      "The Astra Nova boasts a futuristic aesthetic with sleek LED matrix lighting, a bold front grille, and sculpted lines that give it a commanding road presence. Its aerodynamic body enhances performance and fuel efficiency.",
  },
  {
    id: 7,
    img: image7,
    name: "Benz",
    model: "F-150",
    icon: [<GiCarSeat />, <FaBus />, <FaCar />, <FaGasPump />],
    text: ["Elegant", "Comfortable", "Luxury", "Petrol"],
    price: "$2331",
    detail:
      "Choose between the turbocharged inline-4 engine or the all-electric powertrain. The gas-powered model offers 300 horsepower and agile handling, while the electric variant delivers instant torque and an impressive range of up to 320 miles on a single charge.",
  },
  {
    id: 8,
    img: image8,
    name: "Ferrari",
    model: "F-150",
    icon: [<GiCarSeat />, <FaBus />, <FaCar />, <FaGasPump />],
    text: ["Elegant", "Comfortable", "Luxury", "Petrol"],
    price: "$2331",
    detail:
      "Featuring a 12.3-inch digital dashboard and a fully interactive 14-inch infotainment display, the Nova keeps you connected. Voice-activated controls, wireless charging, and over-the-air updates ensure your car is as smart as your devices.",
  },
];

export default CarList;
