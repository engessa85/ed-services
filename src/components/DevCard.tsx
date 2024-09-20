import React from "react";
import { MdVerified } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { django } from "@/app/data/ProgrammingLanguages";
import { Languages } from "@/app/data/ProgrammingLanguages";

interface PropeType {
  type: string;
  title: string;
  desc: string;
  imagePath: string;
  language: Languages[];
}

function Devcard({ type, title, desc, imagePath, language }: PropeType) {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl flex flex-col justify-between">
      <div className="flex flex-col gap-3 mb-5">
        <p className="w-36 h-6 bg-color3 text-color2 flex items-center justify-center rounded-2xl text-xs tracking-[3px]">
          {type}
        </p>
        <div className="w-full h-[250px] relative">
          <Image
            alt="image"
            src={imagePath}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <h1 className="text-color2 text-lg">{title}</h1>
        <p className="text-sm text-slate-500 tracking-tight">{desc}</p>
        <div className="flex gap-3 flex-wrap">
          {language.map((element: Languages, index: number) => (
            <Image
              src={element.imgurl}
              width={30}
              height={30}
              alt="image"
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <hr />
        <div className="flex items-center justify-between px-3 text-sm text-slate-600">
          <div className="flex gap-2">
            <MdVerified size={20} className="text-gray-900" />
            <FaChalkboardTeacher size={20} className="text-blue-500" />
          </div>
          <Link
            href="/"
            className="hover:text-slate-400 hover:scale-105 text-slate-600"
          >
            Get Started &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Devcard;
