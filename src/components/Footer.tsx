import React from "react";
import Link from "next/link";
import Contacts from "./Contacts";

function Footer() {
  return (
    <div className="h-48 w-full bg-color3 py-3">
      <div className="w-full h-full flex flex-col items-center justify-around">
        <Link href="/" className="flex items-center justify-end my-3">
          <div className="flex flex-col justify-center items-center text-sm">
            <p className="text-color2 md:text-2xl text-xl md:font-bold font-semibold">ED-Services</p>
          </div>
        </Link>
        <div className="sm:flex hidden">
        <Contacts size={25} />
        </div>
        <div className="sm:hidden flex">
        <Contacts size={20} />
        </div>
        
        <p className="sm:text-lg text-center text-sm text-color2">
          &copy; <span>2024</span> All rights reserved - Engineering and Developing Services
        </p>
      </div>
    </div>
  );
}

export default Footer;
