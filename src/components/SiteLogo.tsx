import React from "react";
import { FcEngineering } from "react-icons/fc";
import Image from "next/image";

function SiteLogo() {
  return (
    <div className="">
      <Image src="/logo.png" alt="image" width={100} height={100}  />
    </div>
  );
}

export default SiteLogo;
