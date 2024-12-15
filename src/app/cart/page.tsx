import { Inter } from 'next/font/google'
import React from 'react'
import Image from 'next/image'
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";



const inter=Inter({subsets:["latin"]})
const page = () => {
  return (
    <div className='w-[1260px] h-[577.9px]  wrapper mt-14  '>
     <div className='w-[733px] h-[547px] mt-[22px] ml-[100px]'>
      <h4 className={`${inter.className} w-[55px] h-[33px] ml-[16px] text-[22px] text-[#111111] font-medium`}>Bag</h4>
      
      <div className='w-[733px] h-[211px] gap-[30px] mt-[34px] py-[24px] bg-[#FFFFFF01]'>
        <Image
        className='w-[150px] h-[150px]'
         src={"/images/Image2.png"}
        alt=""
        width={400}
        height={400}
        />
  
        {/* text */}

        <div className='lg:w-[487px] lg:h-[125px] gap-[176px]  ml-44 -mt-36'>
          <h3 className={`${inter.className}lg: w-[141px] lg:h-[21px] flex justify-between font-normal text-[#272343] text-base`}>Library Stool Chair
          
          </h3>
          
          <p className='w-[235px] h-[28px] text-[15px]  mt-3'>Ashen Slate/Cobalt Bliss</p>
            {/* size div */}
          <div className='w-[235px] h-[28px] flex gap-[12px]'>
            <p className={`${inter.className} font-normal text-[15px] text-[#757575] `}>Size</p>
            <p className={`${inter.className} font-normal text-[15px] text-[#757575] `}>L</p>
            <p className={`${inter.className} font-normal text-[15px] text-[#757575] ml-6 `}>Quantity</p>
            <p className={`${inter.className} font-normal text-[15px] text-[#757575]`}>1</p>

           
          </div>
                
          <div className='w-[96px] -mt-[88px]   h-[38px] ml-96'><span className='flex justify-end text-[15px]'>MRP: $99</span></div>
          <div className='w-[537px] h-[34px] gap-[16px] pt-[59px] flex'>
             <CiHeart className='text-2xl' />
             <RiDeleteBin5Line className='text-xl'/>
             </div>

        </div>
        <hr className='text-[#FFFFFF01] opacity-[200%] mt-12'/>
      </div>
      
{/* lower div */}

      <div className='w-[733px] h-[281px] gap-[30px]  mt-8 py-[4px] bg-[#FFFFFF01]'>
        <Image
        className='w-[150px] h-[150px] '
         src={"/images/phone chair.png"}
        alt=""
        width={400}
        height={400}
        />
  
        {/* text */}

        <div className='lg:w-[487px] lg:h-[125px] gap-[176px]  ml-44 -mt-36'>
          <h3 className={`${inter.className}lg: w-[141px] lg:h-[21px] flex justify-between font-normal text-[#272343] text-base`}>Library Stool Chair
          
          </h3>
          
          <p className='w-[235px] h-[28px] text-[15px]  mt-3'>Ashen Slate/Cobalt Bliss</p>
            {/* size div */}
          <div className='w-[235px] h-[28px] flex gap-[12px]'>
            <p className={`${inter.className} font-normal text-[15px] text-[#757575] `}>Size</p>
            <p className={`${inter.className} font-normal text-[15px] text-[#757575] `}>L</p>
            <p className={`${inter.className} font-normal text-[15px] text-[#757575] ml-6 `}>Quantity</p>
            <p className={`${inter.className} font-normal text-[15px] text-[#757575]`}>1</p>

           
          </div>
                
          <div className='w-[96px] -mt-[88px]   h-[38px] ml-96'><span className='flex justify-end text-[15px]'>MRP: $99</span></div>
          <div className='w-[537px] h-[34px] gap-[16px] pt-[59px] flex'>
             <CiHeart className='text-2xl' />
             <RiDeleteBin5Line className='text-xl'/>
             </div>

        </div>
        <hr className='text-[#FFFFFF01] opacity-[200%] mt-12'/>
      </div>
      </div> 

      
      
      {/* right side  */}
      <div className='h-[295px] w-[350.67px] -mt-[518px] ml-[900px]'>
       <h2 className={`${inter.className}w-[96px] h-[33px] -mt-[1px] font-[500px] text-[21px] text-[#111111] ml-[8px]`}>Summary</h2>
        {/* paragraph */}
       <div className='w-[334px] h-[28px] mt-[14px]  ml-[8px]'>
        <p className={`${inter.className} font-normal text-[15px] text-[#111111] w-[60px] h-[28px]`}>Subtotal</p>
        <p className={`${inter.className} w-[60px] h-[20px] -mt-[20px] text-[15px] font-medium  ml-[276px]`}>$198.00</p>
      </div>
      {/* 2nd paragraph */}
      <div className='w-[334px] h-[28px] mt-1 ml-[8px] pr-[1px]  gap-[88px] flex'>
        <p className={`${inter.className} w-[214px] h-[28px]  font-normal text-[15px] `}>Estimated Delivery & Handling</p>
        <p className={`${inter.className} w-[32px] h-[28px]  font-normal text-[15px] `}>Free</p>
      </div>
       {/* last paragraph */}
       <div className='w-[340px] h-[62px] mt-[15px]  mx-auto border-y-[1px] flex border-[#E5E5E5] py-[17px] pr-[9px] justify-between
       '>
        <p className={`${inter.className}  w-[38px] h-[20px] font-normal text-[14px]`}>Total</p>
        <p className= {`${inter.className} w-[53px] h-[20px] font-normal text-[14px]`}>$198.00</p>
       </div>
       {/* button */}
       <button className='w-[235px] h-[30px] text-[13px] font-medium text-[#FFFFFF] mt-[35px] ml-[65px] rounded-[30px] py-[18px] flex px-12 items-center  justify-center bg-[#029FAE]'>
       Member Checkout
       </button>

      </div>
      
      </div> 

    
  )
}

export default page
