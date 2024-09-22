import React from "react";
import Contacts from "./Contacts";
import SiteLogo from "./SiteLogo";

function Footer() {
  return (
    <div className="w-full bg-color2 sm:py-5 py-3">
      <div className="w-full h-full flex flex-col items-center justify-around gap-6">
        <SiteLogo />
        <div className="sm:flex hidden">
          <Contacts size={25} />
        </div>
        <div className="sm:hidden flex">
          <Contacts size={20} />
        </div>

        <p className="sm:text-sm text-center text-xs text-white">
          &copy; <span>2024</span> All rights reserved - Engineering and
          Developing Services
        </p>
      </div>
    </div>
  );
}

export default Footer;
