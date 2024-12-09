
import { FaCheck } from "react-icons/fa6";
import { CiCircleAlert } from "react-icons/ci";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";






const TopHeader = () => {
  return (
    <div className="home w-[1300px] mx-auto h-[48px] py-[14px] bg-[#272343] flex justify-between items-center px-[8px] sm:px-[20px] md:px-[40px]">
      {/* Left Side - Shipping Information */}
      <div className="w-[460px] h-[16px] gap-[8px] opacity-[70%] flex justify-between items-center sm:w-[70%] md:w-[60%]">
        <span className="w-[16px] h-[16px]">
          <FaCheck className="text-[#FFFFFF]" />
        </span>
        <p className="w-[231px] h-[14px] font-normal text-[13px] text-[#FFFFFF] flex">
          Free shipping on all orders over $50
        </p>
      </div>

      {/* Right Side - Language Selector and Help Links */}
      <div className="w-[202px] h-[17px] gap-[10px] flex items-center justify-end sm:w-auto md:w-auto">
        <select name="select" id="select" className="w-[237px] h-[19px] bg-[#272343]  text-white sm:w-[150px] md:w-[180px]">
          <option value="Eng">Eng</option>
        </select>

        <p className="font-normal text-[15px] text-[#FFFFFF] hidden sm:block md:block">Faqs</p>
        <span className="opacity-[70%] text-[#FFFFFF] pt-1 pl-3 hidden sm:block md:block">
          <CiCircleAlert />
        </span>
        <p className="gap-[6px] text-[15px] text-[#FFFFFF] hidden sm:block md:block">Need Help</p>
      </div>
    </div>
  );
}

export default TopHeader;



//original

// const TopHeader = () => {
//   return (
    
//         <div
//         className='home w-[1300px] h-[48px] py-[14px] bg-[#272343] flex justify-evenly'>
//             <div className='w-[460px] h-[16px] gap-[8px] opacity-[70%] flex justify-between'>
//                 <span className='w-[16px] h-[16px]'>
//                 <FaCheck className='text-[#FFFFFF]'/>
//                 </span>
//                 <p className='w-[231px] h-[14px] font-normal text-[13px] text-[#FFFFFF] flex'>Free shipping on all orders over $50</p>

            
//                  {/*right side  */}
//                  <div className="w-[202px] h-[17px] gap-[10px]  flex ">
//                 <select name="select" id="select" className="w-[237px] h-[19px] bg-[#272343] ml-[300px] text-white">
//                 <option value="Eng">Eng</option>
//                 </select>
            
//                 <p className=" font-normal text-[15px] text-[#FFFFFF]">Faqs</p>
//                 <span className=" opacity-[70%] text-[#FFFFFF] pt-1 pl-3"><CiCircleAlert/></span>
//                 <p className="gap-[6px] text-[15px]  text-[#FFFFFF] ">
//             NeedHelp
//                 </p>
//                 </div>
//             </div>
           
//                 </div> 
      
    
//   )
// }

// export default TopHeader




// export const Header=()=>{
//     return(
//         <div  className=" home w-[1300px] h-[82px] flex justify-between py-[20px] px-[300px] bg-[#F0F2F3]">
//         <span className='w-[166px] h-[40px] gap-[9px] flex'>
//             <Image src={"/images/Logo Icon.png"} alt="logo" width={100} height={100} className="w-[40px] h-[40px] ml-28"/>
//             <p className="w-[118px] h-[31px] font-[500px] text-[26px] text-[#272343]">Comforty</p>
//         </span>
//           <div className="ml-64">
//             <div className="w-[140px] h-[48px] rounded-lg py-[11px] px-[ 20px] ml-80 gap-[5px] bg-[#FFFFFF] flex items-center">
            
//               <LuShoppingCart className="w-[28px] h-[20px] mt-[2px] ml-[12px]"/>
//               <h2 className="text-black ml-2 text-[17px]">Cart </h2>
//               <span className="w-[26px] h-[26px] bg-[#007580] rounded-full pl-2 pt-0 text-[#FFFFFF] ml-2">2</span>
//             </div>
//             </div>
//         </div>
        
//     )

    
// }

export const Header = () => {
    return (
      <div className="home w-full max-w-screen-xl h-[82px] flex justify-between items-center py-6 px-8 bg-[#F0F2F3]">
        <div className="flex items-center gap-4">
          <Image src="/images/Logo Icon.png" alt="Comforty Logo" width={40} height={40} />
          <p className="font-semibold text-2xl text-[#272343]">Comforty</p>
        </div>
  
        <div className="flex items-center gap-6">
          <div className="w-[140px] h-[48px] flex items-center justify-center gap-2 bg-white rounded-lg py-2 px-4">
            <LuShoppingCart className="w-[28px] h-[20px]" />
            <h2 className="text-black text-lg">Cart</h2>
            <span className="w-6 h-6 bg-[#007580] rounded-full text-white text-xs flex items-center justify-center">2</span>
          </div>
        </div>
      </div>
    );
  };
  
  
  