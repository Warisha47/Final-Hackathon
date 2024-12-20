import React from 'react'
import Image from 'next/image'



const Hero = () => {
  return (
    <div className="flex wrapper h-auto md:h-[550px] flex-col rounded-b-[48px] md:flex-row items-center justify-around bg-gray-100 p-4 md:p-8 space-y-8 md:space-y-0 md:mx-4 lg:mx-52">
      {/* Text Section */}
      <div className="wrapper text-center md:text-left w-full md:w-auto">
        <p className="text-sm font-normal text-[#272343] uppercase mb-2">Welcome to Chairy</p>
        <h1 className="text-2xl md:text-5xl font-bold text-[#272343] mb-4 md:w-[510px] md:h-[198px]">
          Best Furniture Collection For Your Interior.
        </h1>
        <button className="bg-[#029FAE] text-white px-6 py-[14px] rounded-lg text-[16px] font-medium hover:bg-teal-600">
          Shop Now →
        </button>
      </div>
      
      {/* Image Section */}
      <div className="flex w-[280px] h-[374px] mt-4 md:mt-[115px]">
        <Image
          src="/images/Product Image.png"
          alt="Furniture Chair"
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export const HeroLogo = () => {
  return (
    <div className='home flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-8 lg:gap-10 px-4 sm:px-8 md:ml-26'>
      <Image src="/images/Logo.png" alt="z" width={300} height={300} className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[87px]'/>
      <Image src="/images/Logo1.png" alt="p" width={300} height={300} className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[87px]'/>
      <Image src="/images/Logo2.png" alt="q" width={300} height={300} className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[87px]'/>
      <Image src="/images/Logo3.png" alt="r" width={300} height={300} className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[87px]'/>
      <Image src="/images/Logo4.png" alt="s" width={300} height={300} className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[87px]'/>
      <Image src="/images/Logo5.png" alt="t" width={300} height={300} className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[87px]'/>
      <Image src="/images/Logo6.png" alt="u" width={300} height={300} className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[87px]'/>
    </div>
  );
};

export default Hero;