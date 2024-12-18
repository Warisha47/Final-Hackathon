import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";

import Image from 'next/image';


export default function About() {
    return (
      <div className=" bg-gray-50 min-h-screen">
        <div className="md:w-[1000px]  md:mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Us Section */}
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#007580] w-[330px] md:w-[465px] text-white p-8 flex flex-col justify-center rounded ">
              <h2 className="text-2xl font-bold mb-4">About Us - Comforty</h2>
              <p className="text-base leading-relaxed  font-inter font-normal md:w-[435px]">
                At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomics, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
              </p>
              <button className="mt-28 mb-3 w-[159px] px-4 py-2 bg-[#F9F9F926]  text-white font-medium rounded shadow hover:bg-teal-400">
                View collection
              </button>
            </div>
            <div className=' '>
              <Image
              width={400}
              height={400}
                src="/images/Image.png"
                alt="Comforty Chair"
                className="rounded-lg md:w-[460px] md:h-[400px] w-[280px] object-cover"
              />
            </div>
          </div>
  
          {/* Brand Differentiators Section */}
          <div className="mt-16 md:text-center">
            <h2 className="md:text-3xl  text-xl font-semibold font-inter text-gray-900 mb-8">
              What Makes Our Brand Different
            </h2>
            <div className="grid grid-cols-1 font-inter text-[#007580] sm:grid-cols-2 lg:grid-cols-4  gap-6">
              {[
                {
                  title: 'Next day as standard',
                  description: 'Order before 3pm and get your order the next day as standard.',
                  icon: <TbTruckDelivery className='w-[24px] h-[24px]' />

                },
                {
                  title: 'Made by true artisans',
                  description: 'Handmade crafted goods made with real passion and craftsmanship.',
                  icon: <FaRegCheckCircle className='h-[24px] w-[24px]'/>,
                },
                {
                  title: 'Unbeatable prices',
                  description: 'For our materials and quality you won’t find better prices anywhere.',
                  icon: <CiCreditCard1 className='h-[24px] w-[24px]'/>,
                },
                {
                  title: 'Recycled packaging',
                  description: 'We use 100% recycled to ensure our footprint is more manageable.',
                  icon: '♻️',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F9F9F9] opacity-[100%]  w-[300px] md:w-full shadow rounded-lg p-6 text-[#007580] text-start"
                >
                  <div className=" mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold  text-[#007580]  mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base font-[400px] w-[179px] text-[#007580]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Popular Products Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold font-inter text-gray-900 md:text-center mb-8">
              Our Popular Products
            </h2>
            <div className="grid grid-cols-1 font-inter sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'The Poplar suede sofa',
                  price: '$99.00',
                  image: '/images/Large.png',
                },
                {
                  name: 'The Dandy chair',
                  price: '$99.00',
                  image: '/images/greenchair.png',
                },
                {
                  name: 'The Dandy chair',
                  price: '$99.00',
                  image: '/images/Photo.png',
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg md:w-full mb-2 w-[320px] overflow-hidden "
                >
                  <Image
                  width={400}
                  height={400}
                    src={product.image}
                    alt={product.name}
                    className="md:w-[1000px] w-[320px] h-[248px] object-cover"
                  />
                  <div className="p-4 md:text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  