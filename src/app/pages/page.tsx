import React from 'react'
import Image from 'next/image'
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineShoppingCart } from 'react-icons/ai'; 
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ["latin"] });
const page = () => {
  return (
    <div>
        <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24  md:flex-row flex-col items-center">
    <div className="  lg:w-[505px] lg:h-[400px] md:w-1/2 w-[300px] mb-10 md:mb-0">
      <Image
        className="object-cover h-full w-full lg:ml-40 object-center rounded"
        alt="chair"
        src="/images/Image1.png"
        width={300}
        height={300}
      />
    </div>
    <div className="lg:flex  md:w-1/2 lg:pl-4 md:pl-16  lg:ml-48 flex flex-col md:items-start md:text-left items-center">
      <h1 className="title-font sm:text-4xl lg:text-4xl lg:mb-4 font-bold text-gray-900 ">
      Library Stool 
        <br className="hidden lg:inline-block" />
        Chair
      </h1>
      <button className="inline-flex lg:h-[22px] lg:w-[90px] mb-7 text-white bg-[#029FAE] border-0 py-0 px-2 focus:outline-none hover:bg-teal-500 rounded-full text-sm">
      $20.00USD</button>
      <hr className='bg-[#D9D9D9] w-full lg:w-[521px] h-[1px]'/>
      <p className="mb-8 lg:leading-relaxed  w-56 lg:w-full lg:text-[16px] text-[#272343] lg:mt-9 opacity-60%">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>
      <div className="flex justify-center ">
        <button className="inline-flex text-white mb-28 bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 rounded text-md">
        <LuShoppingCart className='flex justify-start mt-1 mr-2  '/> Add To cart </button>
       
      </div>
    </div>
  </div>
</section>
      {/* featured product */}
       <div>

         <section className="bg-white h dark:bg-gray-900 wrapper">
           <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-36 wrapper">
             <div className="max-w-screen-md mb-8 lg:mb-10 ">
               <h2 className={`${inter.className}  lg:mb-9 tracking-wide text-[24px] text-center md:text-start wrapper  font-semibold text-[#272343] dark:text-white`}>
                 FEATURED PRODUCTS
                 
               </h2>
              
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
               <div className="flex flex-col items-center">
                 
                 <Image className="lg:w-full h-48 object-cover " src="/images/blchair.png" alt="Image 1" width={300} height={300}  />
                 <div className="mt-2 text-start">
                   <p className="text-xs text-[#272343]  w-40 ml-24 font-normal text-start mr-28 pb-2 ">Library Stool Chair
                   <span className="flex justify-end ml-42 font-bold tracking-tighter p-1 h-6 -mt-5  text-[#000000] text-xm cursor-pointer" >$99</span>
                   </p>
                 </div>
                 
               </div>
               <div className="flex flex-col items-center">
                 <Image className="lg:w-full h-48 object-cover " src="/images/Image.png" alt="Image 2" width={300} height={300} />
                 <div className="mt-2 text-start">
                 <p className="text-xs text-[#272343]  w-40 ml-24 font-normal text-start mr-28 pb-2 ">Library Stool Chair
                   <span className="flex justify-end ml-42 font-bold tracking-tighter p-1 h-6 -mt-5  text-[#000000] text-xm cursor-pointer" >$99</span>
                   </p>
                 </div>
               
               </div>
               <div className="flex flex-col items-center">
                 <Image className="lg:w-full h-48 object-cover " src="/images/whitechair.png" alt="Image 3" width={300} height={300} />
                 <div className="mt-2 text-start">
                 <p className="text-xs text-[#272343]  w-40 ml-24 font-normal text-start mr-28 pb-2 ">Library Stool Chair
                   <span className="flex justify-end ml-42 font-bold tracking-tighter p-1 h-6 -mt-5  text-[#000000] text-xm cursor-pointer" >$99</span>
                   </p>
                 </div>
                 
               </div>
               <div className="flex flex-col items-center">
                 <Image className="lg:w-full h-48 object-cover " src="/images/Image2.png" alt="Image 4" width={300} height={300} />
                 <div className="mt-2 text-start">
                 <p className="text-xs text-[#272343]  w-40 ml-24 font-normal text-start mr-28 pb-2 ">Library Stool Chair
                   <span className="flex justify-end ml-42 font-bold tracking-tighter p-1 h-6 -mt-5  text-[#000000] text-xm cursor-pointer" >$99</span>
                   </p>
                 </div>
                 
               </div>


               <div className="flex flex-col items-center">
                 <Image className="lg:w-full h-48 object-cover" src="/images/phone chair.png" alt="Image 4" width={300} height={300} />
                 <div className="mt-2 text-start">
                 <p className="text-xs text-[#272343]  w-40 ml-24 font-normal text-start mr-28 pb-2 ">Library Stool Chair
                   <span className="flex justify-end ml-42 font-bold tracking-tighter p-1 h-6 -mt-5  text-[#000000] text-xm cursor-pointer" >$99</span>
                   </p>
                 </div>
                
               </div>
             </div>
           </div>
         </section>
       </div>
    
    </div>
  )
}
export default page