import React from "react";

const ErrorPage = () => {
  return (
    <div className=" text-white justify-center text-center mt-20 mb-20">
      <h1 className="text-8xl text-white text-center justify-center ">404</h1>
      <p className="bg-red-700 font-bold font-serif text-xl">No page found</p>
      <a href="/" className="text-center justify-center">
        <button className="py-3 px-7 m-6 bg-color4 text-center ">
          Go Back Home
        </button>
      </a>
    </div>
  );
};

export default ErrorPage;
