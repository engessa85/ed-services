import React from "react";
import Contacts from "./Contacts";
import SiteLogo from "./SiteLogo";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import Image from "next/image";

function Footer2() {
  return (
    <div className="w-full bg-color2 sm:py-5 py-3 flex flex-col gap-3">
      <div className="w-full h-full flex sm:flex-row flex-col items-center py-4 px-10 justify-between gap-3">
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <SiteLogo />
          <h1 className="text-white text-sm">
            Engineering and Developing Services
          </h1>
        </div>
        <div className="sm:flex hidden">
          <Contacts size={25} />
        </div>
        <div className="sm:hidden flex">
          <Contacts size={20} />
        </div>
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <div className="flex gap-1">
            <MdEmail size={20} className="text-white" />{" "}
            <span className="text-white text-sm">engineering.developing.services@gmail.com</span>
          </div>
          <div className="flex gap-1 items-center">
            <BiSolidPhoneCall size={20} className="text-white" />{" "}
            <span className="text-white text-sm">+965-94964095</span>
            <Image src="/kuwait.png" alt="flag" width={25} height={25} />
          </div>
          <div className="flex gap-1 items-center">
            <BiSolidPhoneCall size={20} className="text-white" />{" "}
            <span className="text-white text-sm">+20-1557080199</span>
            <Image src="/egypt.png" alt="flag" width={25} height={25} />
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto h-[0.5px] bg-slate-500"></div>
      <p className="sm:text-sm text-center text-xs text-white">
        &copy; <span>2024</span> All rights reserved - Engineering and
        Developing Services
      </p>
    </div>
  );
}

export default Footer2;
