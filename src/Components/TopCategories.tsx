import React from 'react'
import Image from 'next/image'




const TopCategories = () => {
  return (
    <div>
      <section className="text-gray-600 body-font -mt-4 sm:-mt-8 md:-mt-11">
        <div className="container px-4 sm:px-8 md:px-36 py-12 sm:py-16 md:py-14 mx-auto">
          <div className="flex flex-col text-center lg:text-start lg:w-full mb-2">
            <h1 className="text-2xl sm:text-3xl md:text-[32px] font-medium title-font mb-4 text-[#272343]">
              Top categories
            </h1>
          </div>
          <div className="flex flex-wrap -m-2 sm:-m-3 md:-m-4  h-70">
            <div className="w-[340px] sm:w-1/2 lg:w-1/3 p-2 sm:p-3 md:p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 lg:w-full  h-full object-cover rounded-lg object-center"
                  src="/images/phone chair.png"
                  width={400}
                  height={400}
                />
                <div className='w-full rounded-b-md h-[80px] absolute bottom-0 bg-black bg-opacity-50 flex flex-col justify-start p-2'>
                  <h1 className='text-white text-[20px] font-semibold'>Wing Chair</h1>
                  <p className='text-white text-[14px] '>3,584 Products</p>
                </div>
        
                <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 h-64 sm:h-80 md:h-96 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                </div>
              </div>
            </div>
            {/* 2nd product */}
            <div className="w-[340px] sm:w-1/2 lg:w-1/3 p-2 sm:p-3 md:p-4">
              <div className="flex relative ">
                <Image
                  alt="gallery"
                  className="absolute inset-0 lg:w-full h-full w-[340px] object-cover object-center rounded-lg"
                  src="/images/stool.png"
                  width={400}
                  height={400}
                />
                <div className='w-full rounded-b-md h-[80px] absolute bottom-0 bg-black bg-opacity-50 flex flex-col justify-start p-2'>
                  <h1 className='text-white text-[20px] font-semibold'>Wing Chair</h1>
                  <p className='text-white text-[14px] '>3,584 Products</p>
                </div>
                <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 h-64 sm:h-80 md:h-96 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                </div>
              </div>
            </div>

            {/* 3rd product */}
            <div className="w-[340px] sm:w-1/2 lg:w-1/3 p-2 sm:p-3 md:p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 lg:w-full  w-[340px] h-full object-cover rounded-lg object-center"
                  src="/images/whitechair.png"
                  width={400}
                  height={400}
                />
                <div className='w-full rounded-b-md h-[80px] absolute bottom-0 bg-black bg-opacity-50 flex flex-col justify-start p-2'>
                  <h1 className='text-white text-[20px] font-semibold'>Wing Chair</h1>
                  <p className='text-white text-[14px] '>3,584 Products</p>
                </div>
                <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 h-64 sm:h-80 md:h-96 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCategories;



















// const TopCategories = () => {
//   return (
//     <div>
      
//       <section className="text-gray-600 body-font -mt-11">
// <div className="container px-5 py-24 mx-auto">
//   <div className="flex flex-col text-start w-full mb-2">
//     <h1 className="m:text-3xl text-[32px] font-medium title-font mb-4 text-[#272343]">
//     Top categories
//     </h1>
   
//   </div>
//   <div className="flex flex-wrap -m-4">
//     <div className="lg:w-1/3 sm:w-1/2 p-4">
//       <div className="flex relative">
//         <Image
        
//           alt="gallery"
//           className="absolute inset-0 w-full h-full object-cover object-center"
//           src="/images/Category.png"
//           width={400}
//           height={400}
//         />
//         <div className="px-8 py-10 h-96 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
       
//         </div>
//       </div>
//     </div>
//     <div className="lg:w-1/3 sm:w-1/2 p-4">
//       <div className="flex relative">
//       <Image
        
//         alt="gallery"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         src="/images/Category1.png"
//         width={400}
//         height={400}
//       />
//         <div className="px-8 h-96 py-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          
//         </div>
//       </div>
//     </div>
//     <div className="lg:w-1/3 sm:w-1/2 p-4">
//       <div className="flex relative">
//       <Image
        
//         alt="gallery"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         src="/images/Category2.png"
//         width={400}
//         height={400}
//       />
//         <div className="px-8 h-96 py-10  w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
         
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </section>
// </div>
// )}

    

