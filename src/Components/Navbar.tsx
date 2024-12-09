import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=" border-b-2 border-[#F5F5F5F9]  h-[45px] justify-between py-[29px] px-[420px]">
        <ul className="flex w-[367px] h-[24px] gap-[32px]">
          
         <Link href={"/"}> <li className="w-[48px] h-[24px] text-[16px] font-normal font-poppins cursor-pointer">Home</li></Link> 
          <li className="w-[66px] h-[24px] text-[16px] font-normal font-poppins  cursor-pointer">
            Shop
          </li>
         <Link href={"/product"}> <li className="w-[48px] h-[24px] text-[16px] font-normal font-poppins  cursor-pointer">
            Product
          </li></Link>
          <li className="w-[61px] h-[24px] text-[16px] font-normal font-poppins  cursor-pointer">
            Pages
          </li>
          <Link href={"/about"}>
          <li className="w-[61px] h-[24px] text-[16px] font-normal font-poppins  cursor-pointer">
            About
          </li>
          </Link>
        </ul>
        <div className='w-[368px] h-[15px] gap-[8px] flex justify-end ml-96 items-end'>
              <p className='w-[57px] h-[15px] gap-[8px] my-[22px] font-normal text-[14px] text-[#636270]'>Contact:</p>
              <p className='w-[103px] h-[15px] font-medium text-[14px] text-[#272343] my-[22px]'>(808) 555-0111</p>
        
    </div>
    </div>
  )
}

export default Navbar
