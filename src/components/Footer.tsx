import React from "react";
import Link from "next/link";
import Contacts from "./Contacts";

function Footer() {
  return (
    <div className="w-full bg-color3 sm:py-4 py-3">
      <div className="w-full h-full flex flex-col items-center justify-around gap-5">
        <Link href="/" className="flex items-center justify-end my-3">
          <div className="flex flex-col justify-center items-center text-sm">
            <p className="text-color2 text-xl">ED-Services</p>
          </div>
        </Link>
        <div className="sm:flex hidden">
        <Contacts size={25} />
        </div>
        <div className="sm:hidden flex">
        <Contacts size={20} />
        </div>
        
        <p className="sm:text-sm text-center text-xs text-color2">
          &copy; <span>2024</span> All rights reserved - Engineering and Developing Services
        </p>
      </div>
    </div>
  );
}

export default Footer;
