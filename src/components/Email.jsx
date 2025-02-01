// import React from "react";
import React, { useState } from "react";

import emailCar from "../assets/HeroImage3.jpeg";

function Email() {
  // State variables for form inputs and errors
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [errors, setErrors] = useState({});

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Function to handle form submission and perform validation
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validate username (required)
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    // Validate email (required and format)
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Update errors state
    setErrors(newErrors);

    // If no errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      // You can submit the form data to the server or perform any other actions here
    }
  };
  return (
    <div className=" bg-[#0D0E11] md:p-10 pt-2">
      <div className="pb-10 mx-4 rounded-lg lg:flex lg:flex-row lg:mx-4 lg:gap-5 ">
        <div data-aos="slide-right" className="mt-20 lg:w-1/2 lg:mx-10">
          <img src={emailCar} alt="" className="rounded-lg" />
        </div>

        <div
          data-aos="fade-up"
          className="items-center content-center mx-2 mt-10 text-white lg:w-1/2 g-4"
        >
          <div className="flex content-center ">
            <div className="items-center space-y-4 align-middle">
              <h1 className="text-3xl uppercase">Enter Your Email</h1>
              <p className=" text-[17px] text-left justify-center content-center ">
                Subscribe to get the exclusive news about our car brands, for
                free
              </p>
            </div>
          </div>
          <div className="items-center align-middle lg:flex md:mt-6 md:mr-10">
            <form
              onSubmit={handleSubmit}
              className="items-center content-center w-full text-center place-content-center justify-items-center space-y-7"
            >
              <input
                className="flex flex-col w-full h-[40px] bg-transparent border-b-2 border-zinc-600 outline-none px-4 "
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
              />
              {errors.username && (
                <span className="text-red-500">{errors.username}</span>
              )}

              <input
                className="flex flex-col w-full h-[40px] bg-transparent border-b-2 border-zinc-600  outline-none px-4"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Your Email Address"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
              <button
                type="submit"
                className="flex justify-center w-full px-10 py-3 mt-5 font-bold text-center rounded-md bg-color4 hover:bg-color1 hover:text-black"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
