import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

const OurProducts = () => {
  return (
    <section className="bg-white dark:bg-gray-900 lg:w-[1000px] lg:h-[989px]  items-start justify-start lg:justify-center lg:items-start mt-[150px] wrapper">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="lg:-mb-9 text-[24px] tracking-tight font-semibold text-[#272343] flex justify-center lg:justify-evenly dark:text-white">
            Our Products
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto">
          <div className="flex flex-col lg:items-center">
            <Image
              className="lg:w-full h-48 object-cover rounded-lg"
              src="/images/Image.png"
              alt="Image 1"
              width={300}
              height={300}
            />
            <div className="mt-2 text-start">
              <p className="text-base text-[#007580] font-normal text-start mr-28 ">
                Library Stool Chair
              </p>
              <p className="text-lg text-[#272343]">$29.99</p>
              <div className="flex justify-end w-full ">
                <AiOutlineShoppingCart className="-mt-16 -ml-24  hover:bg-[#007580] w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:items-center">
            <Image
              className="lg:w-full h-48 object-cover rounded-lg"
              src="/images/Image1.png"
              alt="Image 2"
              width={300}
              height={300}
            />
            <div className="mt-2 text-start">
              <p className="text-base text-[#007580] font-normal text-start mr-28">
                Library Stool Chair
              </p>
              <p className="text-lg text-[#272343]">$20</p>
            </div>
            <div className="mt-2 flex justify-end w-full">
              <AiOutlineShoppingCart className="-mt-16 -ml-24 hover:bg-[#007580]  w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col lg:items-center">
            <Image
              className=" lg:w-full h-48 object-cover rounded-lg"
              src="/images/Image2.png"
              alt="Image 3"
              width={300}
              height={300}
            />
            <div className="mt-2 text-start">
              <p className="text-base text-[#007580] font-normal text-start mr-28">
                Library Stool Chair
              </p>
              <p className="text-lg text-[#272343]">$20</p>
            </div>
            <div className="mt-2 flex justify-end w-full">
              <AiOutlineShoppingCart className="-mt-16 -ml-24 w-9 p-1 hover:bg-[#007580] h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col lg:items-center">
            <Image
              className="lg:w-full h-48 object-cover rounded-lg"
              src="/images/Image3.png"
              alt="Image 4"
              width={300}
              height={300}
            />
            <div className="mt-2 text-start">
              <p className="text-base text-[#007580] font-normal text-start mr-28">
                Library Stool Chair
              </p>
              <p className="text-lg text-[#272343]">$20</p>
            </div>
            <div className="mt-2 flex justify-end w-full">
              <AiOutlineShoppingCart className="-mt-16 -ml-24 hover:bg-[#007580] w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
            </div>
          </div>
          {/* 5 */}
          <div className="flex flex-col lg:items-center">
            <Image
              className="lg:w-full h-48 object-cover rounded-lg"
              src="/images/phone chair.png"
              alt="Image 2"
              width={300}
              height={300}
            />
            <div className="mt-2 text-start">
              <p className="text-base text-[#007580] font-normal text-start mr-28">
                Library Stool Chair
              </p>
              <p className="text-lg text-[#272343]">$20</p>
            </div>
            <div className="mt-2 flex justify-end w-full">
              <AiOutlineShoppingCart className="-mt-16 -ml-24 hover:bg-[#007580] w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
            </div>
          </div>

          {/* 6 */}
          <div className="flex flex-col lg:items-center">
            <Image
              className="lg:w-full h-48 object-cover rounded-lg"
              src="/images/graychair.png"
              alt="Image 2"
              width={300}
              height={300}
            />
            <div className="mt-2 text-start">
              <p className="text-base text-[#007580] font-normal text-start mr-28">
                Library Stool Chair
              </p>
              <p className="text-lg text-[#272343]">$20</p>
            </div>
            <div className="mt-2 flex justify-end w-full">
              <AiOutlineShoppingCart className="-mt-16 -ml-24 hover:bg-[#007580]  w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
            </div>
          </div>

          {/* 7 */}
          <div className="flex flex-col lg:items-center">
            <Image
              className="lg:w-full h-48 object-cover rounded-lg"
              src="/images/blchair.png"
              alt="Image 2"
              width={300}
              height={300}
            />
            <div className="mt-2 text-start">
              <p className="text-base text-[#007580] font-normal text-start mr-28">
                Library Stool Chair
              </p>
              <p className="text-lg text-[#272343]">$20</p>
            </div>
            <div className="mt-2 flex justify-end w-full">
              <AiOutlineShoppingCart className="-mt-16 -ml-24 hover:bg-[#007580]  w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
            </div>
          </div>

          {/* 8 */}
          <div className="flex flex-col lg:items-center">
            <Image
              className="lg:w-full h-48 object-cover rounded-lg"
              src="/images/Image.png"
              alt="Image 3"
              width={300}
              height={300}
            />
            <div className="mt-2 text-start">
              <p className="text-base text-[#007580] font-normal text-start mr-28">
                Library Stool Chair
              </p>
              <p className="text-lg text-[#272343]">$20</p>
            </div>
            <div className="mt-2 flex justify-end lg:w-full">
              <AiOutlineShoppingCart className="-mt-16 -ml-24 hover:bg-[#007580]   w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
// const OurProducts = () => {
//   return (
//     <section className="bg-white dark:bg-gray-900 w-full max-w-[1020px] h-auto mx-auto flex justify-center px-4 sm:px-6 lg:px-8 -mt-[367px]">
//       <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
//         <div className="max-w-screen-md mb-8 lg:mb-16">
//           <h2 className="text-[24px] tracking-tight font-semibold text-[#272343] flex justify-center dark:text-white">
//             Our Products
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           <div className="flex flex-col items-center">
//             <Image className="w-full h-48 object-cover rounded-lg" src="/images/Image.png" alt="Image 1" width={300} height={300} />
//             <div className="mt-2 text-start">
//               <p className="text-base text-[#007580] font-normal">Library Stool Chair</p>
//               <p className="text-lg text-[#272343]">$29.99</p>
//               <div className="flex justify-end w-full">
//                 <AiOutlineShoppingCart className="hover:bg-[#007580] w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col items-center">
//             <Image className="w-full h-48 object-cover rounded-lg" src="/images/Image1.png" alt="Image 2" width={300} height={300} />
//             <div className="mt-2 text-start">
//               <p className="text-base text-[#007580] font-normal">Library Stool Chair</p>
//               <p className="text-lg text-[#272343]">$20</p>
//               <div className="flex justify-end w-full">
//                 <AiOutlineShoppingCart className="hover:bg-[#007580] w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col items-center">
//             <Image className="w-full h-48 object-cover rounded-lg" src="/images/Image2.png" alt="Image 3" width={300} height={300} />
//             <div className="mt-2 text-start">
//               <p className="text-base text-[#007580] font-normal">Library Stool Chair</p>
//               <p className="text-lg text-[#272343]">$20</p>
//               <div className="flex justify-end w-full">
//                 <AiOutlineShoppingCart className="hover:bg-[#007580] w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col items-center">
//             <Image className="w-full h-48 object-cover rounded-lg" src="/images/Image3.png" alt="Image 4" width={300} height={300} />
//             <div className="mt-2 text-start">
//               <p className="text-base text-[#007580] font-normal">Library Stool Chair</p>
//               <p className="text-lg text-[#272343]">$20</p>
//               <div className="flex justify-end w-full">
//                 <AiOutlineShoppingCart className="hover:bg-[#007580] w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
//               </div>
//             </div>
//           </div>

//           {/* Add remaining products similarly */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProducts;
