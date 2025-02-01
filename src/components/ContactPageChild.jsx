import React, { useState } from "react";
import Car from "../assets/car3.jpeg";
import PageBG from "./PageBG";

const ContactPageChild = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted with data:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <PageBG text="Contact Us" text2="Contact" />
      <div className="flex flex-col justify-around w-full h-[400px] space-x-8 lg:flex-row mt-12 mb-20 px-10">
        <div
          data-aos="slide-right"
          className="items-center justify-center w-full text-white align-middle"
        >
          <h2 className="text-4xl ">Contact Us</h2>
          <p>Feel free to reach out to us with any questions or inquiries!</p>
          <form onSubmit={handleSubmit} className="gap-10 space-y-4">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g Timmy George"
                className="w-full p-2 text-black outline-color4 "
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g example@gmail.com"
                className="w-full p-2 text-black outline-color4"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="8"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-2 text-black outline-color4 "
                required
              />
            </div>
            <button
              data-aos="fade-up"
              type="submit"
              className="p-3 font-extrabold text-black border-none rounded-md bg-color4 px-7 hover:bg-color3"
            >
              Submit
            </button>
          </form>
        </div>

        <div
          data-aos="slide-left"
          className=" hidden lg:block items-center justify-end align-middle w-full h-[400px] rounded-lg"
        >
          <img src={Car} alt="Contact Us" className="rounded-lg" />
        </div>
      </div>

      <div>
        <div
          data-aos="slide-up"
          className="flex justify-center align-middle rounded-lg lg:px-2 lg:w-full mt-36 md:mt-24 lg:mt-36"
        >
          <iframe
            className="lg:w-[1500px] lg:h-[600px] w-3/4 h-2/3 md:h-[400px] md:w-full md:mx-10 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234078.3031179363!2d-74.20827223089393!3d40.74618378354492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a4e5de7dcf%3A0x1713565347c4d95b!2sEnterprise%20Rent-A-Car!5e0!3m2!1sen!2sng!4v1736786387166!5m2!1sen!2sng"
            // width="1500"
            // height="600"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPageChild;
