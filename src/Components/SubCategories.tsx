import Image from "next/image"

  
   













 export const SubCategory=()=>{
      
     return(
      <div className="lg:w-full lg:ml-[44px] sm:px-8 relative wrapper">
   <div className="mt-14 flex flex-col justify-center items-center lg:flex-row lg:space-x-0 space-x-4 space-y-6 lg:space-y-0" >

      {/* vertical text image secion */}
          <div className="space-y-4 lg:-space-y-0 lg:-space-x-16">

            {/* heading position to the left image */}
            <div className=" lg:absolute inset-y-0 lg:-ml-36 lg:-rotate-90  text-[18px] rotate-0 font-normal tracking-wide lg:text-[32px] ">
              <span>Explore new and Popular styles</span>
            </div>


            {/* image */}
            <Image 
            src="/images/Image2.png" 
            alt="" 
            width={500} 
            height={500}
             className=" h-[300px] lg:h-[500px] pb-0 lg:pb-2 rounded-none w-[280px] lg:w-[500px] cursor-pointer hover:border-2 "/>

          </div>

<div className="flex flex-col items-center justify-center gap-3">

  <div className="flex flex-col sm:flex-row items-center gap-3">
    {/* image 2 */}
       <Image 
       src={"/images/graychair.png"} 
       alt="chair" 
       width={500} 
       height={500}
        className='lg:w-[200px] w-[280px] h-[230px] lg:h-[230px] cursor-pointer hover:border-2 transition-all '/>
      {/* image 3 */}
  <Image 
  src={"/images/Image.png"} 
  alt="chair" width={500} 
  height={500}
 className=' lg:w-[200px] w-[280px] h-[230px] lg:h-[230px] cursor-pointer hover:border-2 transition-all'/>


  </div>

  <div className="flex flex-col sm:flex-row items-center gap-3">
    {/* image 4 */}
    <Image 
  src={"/images/Image.png"} 
  alt="chair" width={500} 
  height={500}
 className=' lg:w-[200px] w-[280px] h-[230px] lg:h-[230px] cursor-pointer hover:border-2 transition-all'/>

{/* image 5 */}
<Image 
  src={"/images/Image3.png"} 
  alt="chair" width={500} 
  height={500}
 className=' lg:w-[200px] w-[280px] h-[230px] lg:h-[230px] cursor-pointer hover:border-2 transition-all'/>

  </div>
</div>

          </div>
          
          
          </div>)};
    //     <Image src="/images/Image2.png" alt="" width={400} height={400} className=" h-[496px] pb-16 rounded-none w-[460px] -mt-56 -ml-20 "/>


    //     <div className='w-[200px] h-[200px] -mt-[490px]  '>
    //       <Image src={"/images/Image3.png"} alt="chair" width={300} height={300} className=' ml-[395px] pb-5 '/>
    //       <Image src={"/images/graychair.png"} alt="chair" width={300} height={300} className=' ml-[395px] pb-5 '/>
    //       <Image src={"/images/Image.png"} alt="chair" width={300} height={300} className=' ml-[624px] pb-5 -mt-[438px] '/>
    //       <Image src={"/images/Image.png"} alt="chair" width={300} height={300} className=' ml-[624px] pb-5 '/>
    //     </div>
    //      </div>
       
       
        
    //   </div>
    // )
  
 


// export  const SubCategory = () => {
//   return (
//     <div className="w-full max-w-[1200px] mx-auto">
//       {/* Heading Section */}
//       <div className="text-center mb-8">
//         <h2 className="text-[34px] font-normal text-black">
//           Explore new and popular styles
//         </h2>
//       </div>
      
//       <div className="relative w-full max-w-[1280px] mx-auto">
//         <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
//           {/* Main Large Image */}
//           <Image 
//             src="/images/Image2.png" 
//             alt="" 
//             width={460} 
//             height={496} 
//             className="w-full max-w-[460px] h-auto object-cover"
//           />
          
//           {/* Image Grid */}
//           <div className="grid grid-cols-2 gap-4 w-full max-w-[600px]">
//             <Image 
//               src={"/images/Image3.png"} 
//               alt="chair" 
//               width={300} 
//               height={300} 
//               className="w-full h-auto object-cover"
//             />
//             <Image 
//               src={"/images/graychair.png"} 
//               alt="chair" 
//               width={300} 
//               height={300} 
//               className="w-full h-auto object-cover"
//             />
//             <Image 
//               src={"/images/Image.png"} 
//               alt="chair" 
//               width={300} 
//               height={300} 
//               className="w-full h-auto object-cover"
//             />
//             <Image 
//               src={"/images/Image.png"} 
//               alt="chair" 
//               width={300} 
//               height={300} 
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
