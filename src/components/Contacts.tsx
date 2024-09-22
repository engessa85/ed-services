import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

interface PRPOPE {
    size:number
}
function Contacts({size}:PRPOPE) {
  return (
    <div className="flex gap-3 text-white">
      <Link href="https://www.facebook.com/PythonDeveloperMohamedYehia/">
        <FaFacebook size={size}  />
      </Link>
      <Link href="https://x.com/Eng_MYehia">
        <FaTwitter size={size} />
      </Link>
      <Link href="https://www.instagram.com/python_programmer_teacher/">
        <FaInstagramSquare size={size} />
      </Link>
      <Link href="https://www.linkedin.com/in/mohamed-yehia-286937240/">
        <FaLinkedin size={size} />
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=201557080199">
        <IoLogoWhatsapp size={size} />
      </Link>
    </div>
  );
}

export default Contacts;
