import React from "react";
import Image from "next/image";

function ContactUs() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="md:text-4xl text-3xl text-center mt-[50px]">Contact Us</h1>
      <div className="flex md:flex-row flex-col w-full mt-10 gap-4">
        <div className="flex-1">
          <div className="md:mx-[30px]  bg-transparent rounded-xl shadow-md p-8 flex flex-col gap-10">
            <h1 className="text-3xl text-color2 md:text-left text-center">Talk to specialist</h1>
            <Image alt="image" src="/spec.svg" width={400} height={400} />
            <p className="text-color2 md:w-[80% w-full text-center md:text-left">
              Chat with our specialists for more information about features,
              sizing, support plans, and consulting.
            </p>
            <button className="bg-color3 text-color2 p-4 px-5 rounded-md md:w-[30%] w-full hover:scale-105">
              Chat Now
            </button>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl shadow-md p-8 flex flex-col gap-10">
          <h1 className="text-3xl text-color2 md:text-left text-center">Get in touch</h1>
          <p className="md:text-left text-center">
            Please let us know how we can and we will get back to you as soon as
            possible.
          </p>
          <form className="flex flex-col gap-3">
            <div>
              <label>
                Name <span className="text-red-900 font-bold">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-md border bg-color1 outline-none"
              />
            </div>
            <div>
              <label>
                Email Address <span className="text-red-900 font-bold">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-md border bg-color1 outline-none"
              />
            </div>
            <div>
              <label>
                Message <span className="text-red-900 font-bold">*</span>
              </label>
              <textarea className="w-full p-2 rounded-md border bg-color1 h-40 outline-none" />
            </div>
            <button className="bg-color3 text-color2 p-4 px-5 rounded-md md:w-[30%] w-full hover:scale-105">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
