import { Inter } from 'next/font/google';
import React from 'react';
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

const inter = Inter({ subsets: ["latin"] });

const Cart = () => {
  return (
    <div className="wrapper mt-14 lg:w-[1260px] w-[360px]  lg:h-[577.9px] lg:mx-auto  lg:px-0">
      {/* Left Side */}
      <div className="w-auto h-full lg:w-[733px] lg:h-[547px] mt-4 lg:mt-[22px] mx-auto lg:ml-[100px]">
        <h4 className={`${inter.className} text-[22px] text-[#111111] font-semibold ml-[16px]`}>Bag</h4>

        {/* Item 1 */}
        <div className="w-[150px] lg:w-[733px]  h-auto lg:h-[211px] gap-[6px] mt-4 lg:mt-[34px] py-[24px] bg-[#FFFFFF01] flex flex-row justify-start md:justify-between ">
          <Image
            className="md:w-[150px] md:h-[150px] w-[80px] h-[80px] mx-auto lg:mx-0"
            src={"/images/Image2.png"}
            alt=""
            width={400}
            height={400}
          />

          <div className="lg:w-[487px] w-[200px] h-[200px] lg:h-[125px] gap-[176px] mx-auto lg:ml-10 lg:-mt-1">
            <h3 className={`${inter.className} md:text-base  font-bold text-[#272343]`}>Library Stool Chair</h3>
            <div className="md:text-[15px] text-sm font-bold flex justify-end lg:ml-96 lg:-mt-5">MRP: $99</div>
            <p className="md:text-[15px]  text-[#757575] mt-3">Ashen Slate/Cobalt Bliss</p>

            <div className="flex md:gap-[12px] gap-2 lg:mt-2 mt-6">
              <p className={`${inter.className} font-normal md:text-[15px] md:mt-3 text-lg text-[#757575]`}>Size</p>
              <p className={`${inter.className} font-normal md:text-[15px] md:mt-3 text-lg text-[#757575]`}>L</p>
              <p className={`${inter.className} font-normal md:text-[15px] md:mt-3 text-lg text-[#757575] ml-6`}>Quantity</p>
              <p className={`${inter.className} font-normal md:text-[15px] md:mt-3 text-lg text-[#757575]`}>1</p>
            </div>

          

            <div className="flex lg:gap-[29px] gap-5 pt-9 lg:pt-[24px]">
              <CiHeart className="text-2xl" />
              <RiDeleteBin5Line className="text-xl" />
            </div>
          </div>
        </div>

        <hr className="text-[#FFFFFF01] md:w-full w-[250px] opacity-[200%] lg:mt-10" />

        {/* Item 2 */}
        <div className="w-[150px] lg:w-[733px] h-auto lg:h-[281px] gap-[6px] mt-8 py-[4px] bg-[#FFFFFF01] flex flex-row justify-start  ">
          <Image
            className="md:w-[150px] md:h-[150px] w-[80px] h-[80px] mx-auto lg:mx-0"
            src={"/images/phone chair.png"}
            alt=""
            width={400}
            height={400}
          />

          <div className="lg:w-[487px] lg:h-[125px] w-[200px] h-[200px] gap-[176px] mx-auto lg:ml-2 lg:-mt-1">
            <h3 className={`${inter.className}  text-base  font-bold text-[#272343]`}>Library Stool Chair</h3>
            <div className="md:text-[15px] text-sm font-bold flex justify-end  lg:ml-96 lg:-mt-5">MRP: $99</div>
            <p className="text-[15px]  text-[#757575] mt-3">Ashen Slate/Cobalt Bliss</p>

            <div className="flex gap-[12px] lg:mt-2 mt-6">
              <p className={`${inter.className} font-normal md:text-[15px] md:mt-3  text-[#757575]`}>Size</p>
              <p className={`${inter.className} font-normal md:text-[15px] md:mt-3  text-[#757575]`}>L</p>
              <p className={`${inter.className} font-normal md:text-[15px] md:mt-3  text-[#757575] ml-6`}>Quantity</p>
              <p className={`${inter.className} font-normal md:text-[15px] md:mt-3  text-[#757575]`}>1</p>
            </div>

         

            <div className="flex lg:gap-[29px] gap-5 pt-9 lg:pt-[24px]">
              <CiHeart className="text-2xl" />
              <RiDeleteBin5Line className="text-xl" />
            </div>
          </div>
        </div>

        <hr className="text-[#FFFFFF01]  md:w-full w-[250px] opacity-[200%] lg:-mt-24 mt-5" />
      </div>

      {/* Right Side */}
      <div className="w-[200px] lg:w-[350.67px] h-auto lg:h-[295px] mt-8 lg:-mt-[518px] ml-4 mx-auto lg:ml-[900px]">
        <h2 className={`${inter.className} text-[21px] font-[500] text-[#111111] ml-[8px]`}>Summary</h2>

        <div className="w-full flex justify-between items-center mt-[14px]">
          <p className={`${inter.className} font-normal text-[15px] text-[#111111]`}>Subtotal</p>
          <p className={`${inter.className} text-[15px] ml-32 md:ml-0 font-medium`}>$198.00</p>
        </div>

        <div className="w-full flex justify-between items-center mt-1">
          <p className={`${inter.className} font-normal text-[15px]`}>Estimated Delivery & Handling</p>
          <p className={`${inter.className} font-normal  ml-32 md:ml-0 text-[15px]`}>Free</p>
        </div>

        <div className="w-full border-y-[1px] border-[#E5E5E5] py-[17px] flex justify-between mt-[15px]">
          <p className={`${inter.className} font-normal text-[14px]`}>Total</p>
          <p className={`${inter.className} font-normal text-[14px]`}>$198.00</p>
        </div>

        <button className="md:w-[235px] w-[200px] h-[30px] text-[13px] font-medium text-[#FFFFFF] mt-[35px] mx-auto rounded-[30px] mb-8 py-[18px] flex items-center justify-center bg-[#029FAE]">
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

