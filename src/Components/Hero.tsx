import React from 'react'
import Image from 'next/image'


const Hero =()=> {
  return (
    <div className=" home flex flex-col  lg:flex-row items-center justify-around bg-gray-100 p-8 lg:p-16 rounded-lg space-y-8 lg:space-y-0 lg:ml-16">
      {/* Text Section */}
      <div className="max-w-lg text-center lg:text-left">
        <p className="text-sm font-medium text-gray-500 uppercase mb-2">Welcome to Chairy</p>
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
          Best Furniture Collection For Your Interior.
        </h1>
        <button className="bg-teal-500 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-teal-600">
          Shop Now →
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src="/images/Product Image.png"
          alt="Furniture Chair"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
export default Hero

export const HeroLogo=()=>{
  return(
    
       <div className=' home flex justify-center gap-20  ml-12'>
       <Image src="/images/Logo.png" alt="z" width={300} height={300}   className='w-[85px] h-[87px]'/>
         <Image src="/images/Logo1.png" alt="p" width={300} height={300}  className='w-[85px] h-[87px]'/>
        <Image src="/images/Logo2.png" alt="q" width={300} height={300}  className='w-[85px] h-[87px]'/>
        <Image src="/images/Logo3.png" alt="r" width={300} height={300}  className='w-[85px] h-[87px]'/>
        <Image src="/images/Logo4.png" alt="s" width={300} height={300}  className='w-[85px] h-[87px]'/>
        <Image src="/images/Logo5.png" alt="t" width={300} height={300}  className='w-[85px] h-[87px]'/>
        <Image src="/images/Logo6.png" alt="u" width={300} height={300}  className='w-[85px] h-[87px]'/>
       </div>
       
    
  )
}