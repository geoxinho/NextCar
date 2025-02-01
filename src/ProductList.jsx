import React from "react";
import { Link } from "react-router-dom";
import CarList from "./components/data/CarList";
import PageBG from "./components/PageBG";

const ProductList = () => {
  return (
    <div className="p-4 mx-auto ">
      <PageBG text="Our Product" text2="Products" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
        {CarList.map((product) => (
          <Link
            data-aos="fade-up"
            to={`/products/${product.id}`}
            key={product.id}
            className="block transition-shadow cursor-pointer border-[2px] border-neutral-800 hover:shadow-lg"
          >
            <div className="p-4">
              <h2 className="py-2 text-2xl font-bold text-color4">
                {product.name}
              </h2>
              <img
                src={product.img}
                alt={product.name}
                className="object-cover w-full h-48 mb-2 rounded-md"
              />
              <div className="flex justify-between text-xl font-bold text-color4">
                <p className="">
                  {product.price}
                  <sub>/ day</sub>
                </p>
                <p className="p-2 text-sm text-black bg-color1">
                  Model: {""}
                  {product.model}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
