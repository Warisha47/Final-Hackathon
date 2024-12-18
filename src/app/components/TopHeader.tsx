
import { FaCheck } from "react-icons/fa6";
import { CiCircleAlert } from "react-icons/ci";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";


import { IoMenu } from "react-icons/io5";








const TopHeader = () => {

 
  return (
    <div className="w-full">
      {/* Top Header */}
      <header className="bg-[#272343] text-white py-2 sm:py-3 md:py-3.5 lg:py-[14px]">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-[100px] lg:px-[200px]">
          <div className="flex items-center mb-2 sm:mb-0">
            <FaCheck className="text-white mr-2" />
            <p className="text-xs sm:text-[13px] text-[#FFFFFF]">Free shipping on all orders over $50</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <select 
              name="sel" 
              className="bg-[#272343] text-[#FFFFFF] text-xs sm:text-[13px] w-20 sm:w-auto"
            >
              <option value="english">Eng</option>
              <option value="french">French</option>
              <option value="latin">Latin</option>
            </select>
            
            <Link href="/faqs">  <p className="text-xs sm:text-[13px] cursor-pointer text-[#F5F5F5]">Faqs</p></Link>
            
            <div className="flex items-center space-x-1">
              <CiCircleAlert className="w-4 h-4 text-[13px]" />
              <p className="text-xs sm:text-[13px] text-[#F5F5F5]">Need Help</p>
            </div>
          </div>
        </div>
      </header>

      {/* Middle Header */}
      <div className="bg-[#F0F2F3] py-4 sm:py-5 md:py-[20px]">
        <div className="flex justify-between items-center px-4 sm:px-8 md:px-[100px] lg:px-[200px]">
          <div className="flex items-center space-x-2">
            <Image 
              src="/images/Logo Icon.png" 
              alt="Comforty Logo" 
              width={40} 
              height={40} 
              className="w-8 h-8 sm:w-[40px] sm:h-[40px]"
            />
            <h2 className="text-lg sm:text-[26px] font-medium text-[#272343]">
              Comforty
            </h2>
          </div>
          
          <div className="flex items-center space-x-2 bg-white rounded-lg py-2 px-3">
            <LuShoppingCart className="w-5 h-5" />
            <Link href={"/cart"}><h2 className="text-sm sm:text-[16px]">Cart</h2></Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className=" flex bg-white border-b border-[#E1E3E5] py-4 sm:py-5 md:py-[26px]">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-[100px] lg:px-[200px]">
          <ul className="hidden md:flex  flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-8 mb-3 sm:mb-0 text-[#636270]">
            <li className="hover:text-[#007580]"><Link href="/">Home</Link></li>
            <li className="hover:text-[#007580]"><Link href="/shop">Shop</Link></li>
            <li className="hover:text-[#007580]"><Link href="/product">Product</Link></li>
            <li className="hover:text-[#007580]"><Link href="/pages">Pages</Link></li>
            <li className="hover:text-[#007580]"><Link href="/about">About</Link></li>
          </ul>
    

          
   

        </div>
        
        <div className="flex items-end  md:ml-[166px] space-x-2">
            <p className="text-sm text-[#636270] cursor-pointer"><Link href="/contact">Contact:</Link></p>
            <p className="text-sm text-[#272343]">(808) 555-0111</p>
          </div>

      </nav>

       {/* mobile menu button */}
      <div className="md:hidden">
       <details className="dropdown">
  <summary className="btn m-1"><IoMenu className="text-3xl"/></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-22 p-2 shadow">
  <li className="hover:text-[#007580]"><Link href="/">Home</Link></li>
            <li className="hover:text-[#007580]"><Link href="/shop">Shop</Link></li>
            <li className="hover:text-[#007580]"><Link href="/product">Product</Link></li>
            <li className="hover:text-[#007580]"><Link href="/pages">Pages</Link></li>
            <li className="hover:text-[#007580]"><Link href="/about">About</Link></li>
  </ul>
</details>
</div>
    </div>
  );
};

export default TopHeader;


















