import { Inter } from 'next/font/google';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai'; 

const inter = Inter({ subsets: ["latin"] });

const FeaturedProducts = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 wrapper">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-36 wrapper">
          <div className="max-w-screen-md mb-8 lg:mb-10">
            <h2 className={`${inter.className}  -mb-9 text-[24px] wrapper tracking-tight font-semibold text-[#272343] dark:text-white`}>
              Featured Products
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              
              <Image className="w-full h-48 object-cover rounded-lg" src="/images/Image.png" alt="Image 1" width={300} height={300}  />
              <div className="mt-2 text-start">
                <p className="text-base text-[#007580] font-normal text-start mr-28 ">Library Stool Chair</p>
                <p className="text-lg text-[#272343]">$29.99</p>
                <div className="flex justify-end w-full ">
                <AiOutlineShoppingCart className="-mt-12 -ml-24 hover:bg-[#007580] w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
              </div>
              </div>
              
            </div>
            <div className="flex flex-col items-center">
              <Image className="w-full h-48 object-cover rounded-lg" src="/images/Image1.png" alt="Image 2" width={300} height={300} />
              <div className="mt-2 text-start">
                <p className="text-base text-[#007580] font-normal text-start mr-28">Library Stool Chair</p>
                <p className="text-lg text-[#272343]">$20</p>
              </div>
              <div className="mt-2 flex justify-end w-full">
                <AiOutlineShoppingCart className="-mt-16 hover:bg-[#007580] -ml-24  w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image className="w-full h-48 object-cover rounded-lg" src="/images/Image2.png" alt="Image 3" width={300} height={300} />
              <div className="mt-2 text-start">
                <p className="text-base text-[#007580] font-normal text-start mr-28">Library Stool Chair</p>
                <p className="text-lg text-[#272343]">$20</p>
              </div>
              <div className="mt-2 flex justify-end w-full">
                <AiOutlineShoppingCart className="-mt-16 hover:bg-[#007580] -ml-24 w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image className="w-full h-48 object-cover rounded-lg" src="/images/Image3.png" alt="Image 4" width={300} height={300} />
              <div className="mt-2 text-start">
                <p className="text-base text-[#007580] font-normal text-start mr-28">Library Stool Chair</p>
                <p className="text-lg text-[#272343]">$20</p>
              </div>
              <div className="mt-2 flex justify-end w-full">
                <AiOutlineShoppingCart className="-mt-16  hover:bg-[#007580] -ml-24  w-9 p-1 h-9 rounded-md text-gray-600 text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;



