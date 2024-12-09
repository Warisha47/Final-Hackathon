import { IoLogoFacebook } from "react-icons/io5";
import Image from "next/image";
import { RiTwitterFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { ImPinterest } from "react-icons/im";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="w-[1290px] h-[440px] flex justify-between py-[24px] px-[8px]  bg-[#F5F5F5]">
    <div className="w-[350px] h-[198px] pt-[80px] gap-[24px] ">
     <span className='w-[166px] h-[40px] gap-[9px] flex'>
            <Image src={"/images/Logo Icon.png"} alt="logo" width={100} height={100} className="w-[40px] h-[40px] ml-28"/>
            <p className=" font-[500px] text-[26px] text-[#272343]">Comforty</p>
        </span>
        <p className="w-[270px] h-[72px] font-normal ml-28 pt-4 text-[16px] text-[#272343] opacity-[60%]">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
        Cras egestas purus </p>
       <div className=" flex w-[206px] h-[38px] gap-[28px] mt-5 ml-28 pt-5 text-[#636270]">
          <p className="h-[35px] w-[52px] border-[1px] rounded-full flex items-center px-1 border-[#007580] text-[#007580]">
          <IoLogoFacebook className="w-[24px] h-[24px] pb-1  pt-1 flex items-center text-[#007580] " /></p>
          <RiTwitterFill className="w-[40px] h-[40px]  " />
          <FaInstagram className="w-[40px] h-[40px] " />
          <ImPinterest className="w-[40px] h-[40px] " />
         < FaYoutube className="w-[40px] h-[40px] " />
        </div>
    </div>

    {/*2nd col  */}
    <div className="w-[105px] h-[203px] pt-[70px] pl-[17px] gap-[20px] ">
        <h2 className="w-[85px] h-[18px]  font-medium text-[14px] mb-4 text-[#9A9CAA]">
        Category
        </h2>
        <p className="font-normal text-[16px] w-[94px] h-[18px] mb-3 text-[#272343]">
        Sofa
        </p>
        <p className="w-[110px] h-[24px] font-poppins font-normal text-[16px] mb-3 text-[#272343]">
        Wing Chair
        </p>
        <p className="w-[110px] h-[24px]  text-[#007580] underline border-solid font-normal text-[16px] mb-3">
        Desk Chair
        </p>

        <p className="w-[110px] h-[24px] font-normal text-[16px] mb-3 text-[#272343]">
        wooden Chair
        </p>
        <p className="w-[110px] h-[24px]   font-normal text-[16px] mb-3 text-[#272343]">
        Park Bench
        </p>
      </div>
      {/* 3rd col */}
      <div className="w-[156] h-[143px]  pt-[70px]  gap-[20px]" >
        <h3 className="w-[81px] h-[28px] font-medium text-[14px] mb-4 text-[#9A9CAA] tracking-normal">
          Support
        </h3>
        <p className="w-[175px] h-[48px] font-normal text-[16px] mb-3 text-[#272343]">
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </p>
        <p className="w-[175px] h-[24px] font-normal text-[16px] mb-3 text-[#272343]">
          exclusive@gmail.com
        </p>
        <p className="w-[165px] h-[24px] font-normal text-[16px] mb-3 text-[#272343]">
          +88015-88888-9999
        </p>
      </div>
      {/*4 div */}
      <div className="w-[424px] h-[142px] pt-[70px] pl-[0px]">
        <h2 className="w-[118px] h-[24px] font-inter font-medium text-[14px] mb-4 text-[#9A9CAA]">
        NEWSLETTER
        </h2>

        <span className="flex mt-1  w-[225px] h-[50px] rounded-[8px] py-[12px] pl-[16px] gap-9 text-[#9A9CAA] bg-[#FFFFFF] border-[1px] ">
          <input
            type="text"
            placeholder= "Your email"
            className=" font-normal  text-[14px]"
          />
           <button className ="  flex items-center -mb-4 bg-[#029FAE] w-[125px] h-[45px] rounded-[8px] px-6  text-[#FFFFFF] ">Subscribe</button>
          </span>
          <p className="w-[415px] h-[46px] mt-[17px] ml-[9px] font-normal opacity-[60%] text-[14px] text-[#272343]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
         
      </div>
      
</div>
  )
}

export default Footer
