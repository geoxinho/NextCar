import React from "react";
import { Link, useParams } from "react-router-dom";
import CarList from "./data/CarList";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = CarList.find((p) => p.id === parseInt(productId));
  if (!product) {
    return (
      <div className="container p-4 mx-auto text-center">
        <h1 className="text-2xl font-bold text-white">Product Not Found</h1>
        <Link
          to="/products"
          className="inline-block w-full px-4 py-2 mt-4 text-white rounded bg-color4"
        >
          Back to Products
        </Link>
      </div>
    );
  }
  return (
    <div className="p-4 mx-auto text-white ">
      <Link
        to="/products"
        className="inline-block w-full px-4 py-2 mb-4 text-2xl font-extrabold text-center text-white rounded bg-color4"
      >
        Back to Products
      </Link>

      <div className="flex flex-col justify-between gap-6 p-4 mx-auto md:flex-row">
        <div className="mt-4 md:w-1/2 ">
          <img
            src={product.img}
            alt={product.name}
            className="object-contain rounded-md md:w-[50rem] md:h-[30rem]"
          />
        </div>
        <div className="md:mt-10 md:w-1/2">
          <h1 className="mb-4 text-3xl font-bold text-color1">
            {product.name}
          </h1>
          <p className="mb-2 text-xl font-bold">Price: {product.price}</p>
          <p className="mb-4">{product.description}</p>
          <h2 className="mb-2 text-xl font-bold text-color4">Details</h2>
          <p>{product.detail}</p>
          <div className="justify-between w-full mt-6 text-center ">
            <p className="flex items-center justify-between">{product.icon}</p>
            <div className="flex items-center justify-between">
              {product.text.map((textList, index) => (
                <div key={index} className="text-center ">
                  <p>{textList}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-2 mt-6 font-bold rounded bg-slate-500">
            <h1>
              Model: {""}"{product.model}"
            </h1>
          </div>
          <div className="justify-center p-2 py-4 mx-auto mt-4 text-2xl text-center rounded bg-color4">
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
