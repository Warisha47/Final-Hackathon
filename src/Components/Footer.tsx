import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const FooterTop = () => {
  return (
    <div className='lg:w-full w-auto  lg:h-auto mb-8 pt-[80px] border-t-[1px] border-[#e1e3e5]'>
    
    <div className='mx-4 lg:mx-32  grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Logo Section */}
      <div className="space-y-4  flex flex-col lg:items-start  lg:text-left">
        <div className=" sm:flex items-center justify-start gap-4">
        <Link href={'/'}>
          <Image 
            width={400}
            height={400}
            alt='Logo'
            src={"/images/Logo Icon.png"}
            className='w-[26.67px] h-[23.33px] hover:w-[28px] hover:h-[25px] hover:cursor-pointer'
          /></Link>
          <h1 className="text-[26px] hover:text-[27px] hover:cursor-pointer font-bold"><Link href={'/'}>Comforty</Link> </h1>
        </div>
        <p className='text-[14px] lg:text-[16px] lg:pr-8 font-Inter font-bold  text-[#272343] '>
          Vivamus tristique odio sit amet velit semper, 
          <br/>
          eu posuere turpis interdum. 
          <br/>
          Cras egestas purus
        </p>
        <div className="flex items-center justify-between w-[150px] md:w-[206px] h-[38px]">
          <div className="w-[38px] h-[38px] hover:border-[1px] hover:border-[#007580] rounded-full flex items-center justify-center">
          <Link href={"/"}>
          <FaFacebook className='text-gray-500 hover:text-[#007580]' />
          </Link>
          </div>
          <div className="w-[38px] h-[38px] hover:border-[1px] hover:border-[#007580] rounded-full flex items-center justify-center">
            <Link href={'/'}>
             <FaTwitter className='text-gray-500 hover:text-[#007580]' />
            </Link>
           
          </div>
          <div className="w-[38px] h-[38px] hover:border-[1px] hover:border-[#007580] rounded-full flex items-center justify-center">
            <Link href={'/'}>
             <FaInstagram className='text-gray-500 hover:text-[#007580]' />
            </Link>
           
          </div>
          <div className="w-[38px] h-[38px] hover:border-[1px] hover:border-[#007580] rounded-full flex items-center justify-center">
            <Link href={"/"}>
            <FaPinterest className='text-gray-500 hover:text-[#007580]' />
            </Link>
            
          </div>
          <div className="w-[38px] h-[38px] hover:border-[1px] hover:border-[#007580] rounded-full flex items-center justify-center">
            <Link href={'/'}>
           <FaYoutube className='text-gray-500 hover:text-[#007580]' /> 
            </Link>
            
          </div>
        </div>
      </div>

      
          
                {/* Categories Section */}
                    <div className="space-y-6   ">
                      <h1 className="text-[#9a9caa] font-bold text-[14px] font-inter">
                        <Link href={"/"}>CATEGORY</Link>
                        </h1>
                      <div className='space-y-2  '>
                        <h1 className="text-[#272343] hover:text-[#007580] hover:underline font-medium text-[16px] font-inter">
                          <Link href={"/"}>Sofa</Link></h1>
                        <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-medium text-[16px] font-inter">
                          <Link href={"/"}>Armchair</Link></h1>
                        <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-medium text-[16px] font-inter">
                          <Link href={"/"}>Wing Chair</Link></h1>
                        <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-medium text-[16px] font-inter">
                          <Link href={"/"}>Desk Chair</Link></h1>
                        <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-medium text-[16px] font-inter">
                          <Link href={"/"}>Wooden Chair</Link></h1>
                        <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-medium text-[16px] font-inter">
                          <Link href={"/"}>Park Bench</Link></h1>
                      </div>
                    </div>

                    {/* Support Section */}
                    <div className="space-y-4">
                      <h1 className="text-[#9a9caa] font-bold text-[14px] font-inter">
                      <Link href={"/"}>SUPPORT</Link></h1>
                      <div className='space-y-3'>
                        <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-medium text-[16px] font-inter">
                        <Link href={"/"}>Help & Support</Link></h1>
                        <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-medium text-[16px] font-inter">
                        <Link href={"/"}>Terms & Condition</Link></h1>
                        <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-medium text-[16px] font-inter">
                        <Link href={"/"}>Privacy Policy</Link></h1>
                        <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-medium text-[16px] font-inter">
                        <Link href={"/"}>Help</Link></h1>
                      </div>
                    </div>

      
  
          {/* Newsletter Section */}
          <div className='space-y-8 '>
            <h1 className="text-[#9a9caa] font-bold text-[14px] font-inter">NEWSLETTER</h1>
            <form className="lg:flex gap-4 ">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full lg:w-[250px] h-[46px] border-[1px] border-[#e1e3e5] rounded-md bg-[#F5F5F5] p-2 text-sm"
              />
              <button className='text-white bg-[#029fae] px-6 mt-4 lg:mt-0 hover:border-2 hover:bg-[#65a1a7] w-full lg:w-[127px] h-[46px] rounded-md'>
                Subscribe
              </button>
            </form>
            <h1 className="text-[#9a9caa] font-bold text-[13px] font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              <br/>
              Nullam tincidunt erat enim.
            </h1>
          </div>
      

    </div>
      
    </div>
  );
}

export default FooterTop;

































// import { IoLogoFacebook } from "react-icons/io5";
// import Image from "next/image";
// import { RiTwitterFill } from "react-icons/ri";
// import { FaInstagram } from "react-icons/fa";
// import { ImPinterest } from "react-icons/im";
// import { FaYoutube } from "react-icons/fa6";


// const Footer = () => {
//   return (
//     <div className="lg:w-[1260px] lg:h-[350px] w-full grid grid-cols-2   lg:grid-cols-4 py-[18px] lg:py-[24px] lg:px-[8px]  bg-[#F5F5F5]">
//     <div className="w-[350px] h-[198px] pt-[80px] gap-[24px] ">
//      <span className='lg:w-[166px] lg:h-[40px] w-full gap-[9px] flex items-start'>
//             <Image src={"/images/Logo Icon.png"} alt="logo" width={100} height={100} className="w-[40px] h-[40px] ml-28"/>
//             <p className=" lg:font-[500px] text-[26px] text-[#272343]">Comforty</p>
//         </span>
//         <p className="w-[270px] h-[72px] font-normal ml-28 pt-4 text-[16px] text-[#272343] opacity-[60%]">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
//         Cras egestas purus </p>
//        <div className=" flex w-[206px] h-[38px] gap-[28px] mt-5 ml-28 pt-5 text-[#636270]">
//           <p className="h-[35px] w-[52px] border-[1px] rounded-full flex items-center px-1 border-[#007580] text-[#007580]">
//           <IoLogoFacebook className="w-[24px] h-[24px] pb-1  pt-1 flex items-center text-[#007580] " /></p>
//           <RiTwitterFill className="w-[40px] h-[40px]  " />
//           <FaInstagram className="w-[40px] h-[40px] " />
//           <ImPinterest className="w-[40px] h-[40px] " />
//          < FaYoutube className="w-[40px] h-[40px] " />
//         </div>
//     </div>

//     {/*2nd col  */}
//     <div className="w-[105px] h-[203px] pt-[70px] pl-[17px] gap-[20px] ">
//         <h2 className="w-[85px] h-[18px]  font-medium text-[14px] mb-4 text-[#9A9CAA]">
//         Category
//         </h2>
//         <p className="font-normal text-[16px] w-[94px] h-[18px] mb-3 text-[#272343]">
//         Sofa
//         </p>
//         <p className="w-[110px] h-[24px] font-poppins font-normal text-[16px] mb-3 text-[#272343]">
//         Wing Chair
//         </p>
//         <p className="w-[110px] h-[24px]  text-[#007580] underline border-solid font-normal text-[16px] mb-3">
//         Desk Chair
//         </p>

//         <p className="w-[110px] h-[24px] font-normal text-[16px] mb-3 text-[#272343]">
//         wooden Chair
//         </p>
//         <p className="w-[110px] h-[24px]   font-normal text-[16px] mb-3 text-[#272343]">
//         Park Bench
//         </p>
//       </div>
//       {/* 3rd col */}
//       <div className="w-[156] h-[143px]  pt-[70px] pl-[55px] gap-[20px]" >
//         <h3 className="w-[81px] h-[28px] font-medium text-[14px]   text-[#9A9CAA] tracking-normal">
//           Support
//         </h3>
//         <p className="w-[175px] h-[48px] font-normal text-[16px] mb-3 text-[#272343]">
//           111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
//         </p>
//         <p className="w-[175px] h-[24px] font-normal text-[16px] mb-3 text-[#272343]">
//           exclusive@gmail.com
//         </p>
//         <p className="w-[165px] h-[24px] font-normal text-[16px] mb-3 text-[#272343]">
//           +88015-88888-9999
//         </p>
//       </div>
//       {/*4 div */}
//       <div className="w-[424px] h-[142px] pt-[70px]  ">
//         <h2 className="lg:w-[118px] lg:h-[24px] font-inter  font-medium text-[14px] mt-2 mb-4 text-[#9A9CAA]">
//         NEWSLETTER
//         </h2>

//         <span className="flex flex-col lg:flex-row mt-1 w-[200px]  lg:w-[225px] h-[50px] rounded-[8px] py-[12px] pl-[16px] gap-9 text-[#9A9CAA] bg-[#FFFFFF] border-[1px] ">
//           <input
//             type="text"
//             placeholder= "Your email"
//             className=" font-normal  text-[14px]"
//           />
//            <button className ="  lg:flex items-center -mb-4 bg-[#029FAE] w-[125px] h-[45px] rounded-[8px] px-6  text-[#FFFFFF] ">Subscribe</button>
//           </span>
//           <p className="w-[415px] h-[46px] mt-[17px] ml-[9px] font-normal opacity-[60%] text-[14px] text-[#272343]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
         
//       </div>
      
// </div>
//   )
// }

// export default Footer

// import Image from 'next/image';
// import { IoLogoFacebook } from 'react-icons/io';
// import { RiTwitterFill } from 'react-icons/ri';
// import { FaInstagram, FaYoutube } from 'react-icons/fa';
// import { ImPinterest } from 'react-icons/im';

// const Footer = () => {
//   return (
//     <div className="w-full max-w-screen-xl h-auto flex flex-col lg:flex-row py-6 px-4 bg-[#F5F5F5]">
//       {/* Left Column */}
//       <div className="flex flex-col w-full lg:w-[350px] gap-6 pt-10">
//         <div className="flex items-center gap-4">
//           <Image
//             src="/images/Logo Icon.png"
//             alt="logo"
//             width={40}
//             height={40}
//             className="ml-6"
//           />
//           <p className="font-semibold text-2xl text-[#272343]">Comforty</p>
//         </div>
//         <p className="text-[#272343] opacity-60 text-sm mt-4 mx-6">
//           Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
//           Cras egestas purus
//         </p>
//         <div className="flex gap-6 mt-5 mx-6 text-[#636270]">
//           <div className="w-9 h-9 border-2 rounded-full flex items-center justify-center border-[#007580] text-[#007580]">
//             <IoLogoFacebook className="w-6 h-6" />
//           </div>
//           <RiTwitterFill className="w-10 h-10" />
//           <FaInstagram className="w-10 h-10" />
//           <ImPinterest className="w-10 h-10" />
//           <FaYoutube className="w-10 h-10" />
//         </div>
//       </div>

//       {/* 2nd Column: Category */}
//       <div className="flex flex-col w-full lg:w-[105px] pt-10 pl-4 gap-4">
//         <h2 className="text-[#9A9CAA] text-sm mb-4">Category</h2>
//         <p className="text-[#272343] text-sm mb-3">Sofa</p>
//         <p className="text-[#272343] text-sm mb-3">Wing Chair</p>
//         <p className="text-[#007580] text-sm underline mb-3">Desk Chair</p>
//         <p className="text-[#272343] text-sm mb-3">Wooden Chair</p>
//         <p className="text-[#272343] text-sm mb-3">Park Bench</p>
//       </div>

//       {/* 3rd Column: Support */}
//       <div className="flex flex-col w-full lg:w-[156px] pt-10 gap-4">
//         <h3 className="text-[#9A9CAA] text-sm mb-4">Support</h3>
//         <p className="text-[#272343] text-sm mb-3">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
//         <p className="text-[#272343] text-sm mb-3">exclusive@gmail.com</p>
//         <p className="text-[#272343] text-sm mb-3">+88015-88888-9999</p>
//       </div>

//       {/* 4th Column: Newsletter */}
//       <div className="flex flex-col w-full lg:w-[424px] pt-10 pl-4">
//         <h2 className="text-[#9A9CAA] text-sm mb-4">NEWSLETTER</h2>
//         <div className="flex gap-4">
//           <input
//             type="email"
//             placeholder="Your email"
//             className="w-full px-4 py-2 text-sm border rounded-lg bg-white"
//           />
//           <button className="bg-[#029FAE] text-white py-2 px-6 rounded-lg text-sm">
//             Subscribe
//           </button>
//         </div>
//         <p className="text-[#272343] opacity-60 text-xs mt-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
