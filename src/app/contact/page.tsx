import React from "react";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { RiCustomerService2Line } from "react-icons/ri";





const ContactForm = () => {
  return (
    <div className="bg-white">
      {/* Main Wrapper */}
      <div className="lg:w-[1250px] md:mx-auto px-4 lg:px-0 py-10 ">
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-poppins font-semibold text-center mb-2">
          Get In Touch With Us
        </h1>
        <p className="text-gray-500 font-inter text-sm text-center md:w-[620px] w-[350px] md:mx-auto mb-6">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>

        {/* Flex Container */}
        <div className="flex flex-col ml-20  md:ml-44 mt-28 lg:flex-row justify-between gap-8">
          {/* Left Content */}
          <div className="w-[200px] lg:w-1/3 space-y-8">
            {/* Address */}
            <div className="flex lg:items-start space-x-4">
              <FiMapPin className="text-3xl text-[#111111]" />
              <div>
                <h3 className="font-bold text-xl font-poppins text-black">Address</h3>
                <p className="text-[#000000] font-inter text-sm">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <FiPhone className="text-3xl text-[#111111]" />
              <div>
                <h3 className="font-bold text-xl font-poppins text-black">Phone</h3>
                <p className="text-[#000000] font-inter text-sm">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start space-x-4">
              <FiClock className="text-3xl text-[#111111]" />
              <div>
                <h3 className="font-bold text-xl font-poppins text-black">Working Time</h3>
                <p className="text-[#000000] font-inter w-44 text-sm">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="w-[200px] lg:w-2/3 md:ml-[60px] mt-[1px]">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-black font-medium text-base font-poppins mb-1"
                >
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Abc"
                  className="md:w-[300px] px-4 py-2 border font-poppins text-[14px] border-[#9F9F9F] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-poppins font-medium text-black text-base mb-1"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Abc@def.com"
                  className="md:w-[300px] font-poppins px-4 py-2 text-[14px] border border-[#9F9F9F] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block font-poppins font-medium text-black text-base mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="This is an optional"
                  className="md:w-[300px] font-poppins px-4 py-2 border text-[14px] border-[#9F9F9F] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-poppins text-black text-base font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  
                  placeholder="Hi! I’d like to ask about"
                  className="md:w-[300px] font-poppins px-4 py-2 border text-[14px] border-[#9F9F9F] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-gray-200"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[#029FAE] w-[150px] font-poppins text-white font-medium px-6 py-2 border-[#B88E2F] border-[1px] rounded-[5px] hover:bg-[#028b9b] transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col py-[70px] md:w-[806px] md:flex-row  items-center md:mx-auto md:justify-center gap-24 mt-14 w-[350px] text-center bg-[#F4F4F4] md:text-left">
          {/* High Quality */}
          <div className="flex items-center space-x-2">
            <GoTrophy className="text-2xl text-[#111111]" />
            <div>
              <h3 className="font-bold text-sm">High Quality</h3>
              <p className="text-gray-600 text-xs">
                crafted from top materials
              </p>
            </div>
          </div>

          {/* Warranty Protection */}
          <div className="flex items-center space-x-2">
            <MdOutlineVerified className="text-2xl text-[#111111]" />
            <div>
              <h3 className="font-bold text-sm">Warranty Protection</h3>
              <p className="text-gray-600 text-xs">Over 2 years</p>
            </div>
          </div>

          {/* Support */}
          <div className="flex items-center space-x-2">
            <RiCustomerService2Line className="text-2xl text-[#111111]" />
            <div>
              <h3 className="font-bold text-sm">24 / 7 Support</h3>
              <p className="text-gray-600 text-xs">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
