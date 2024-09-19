"use client";
import Image from "next/image";
import MainNavBar from "@/components/MainNavBar";
import { useRef, useState } from "react";
import Link from "next/link";
import ElectricalServices from "@/components/ElectricalServices";
import ElectronicsServices from "@/components/ElectronicsServices";
import ComputerServices from "@/components/ComputerServices";

export default function Home() {
  const sectionOneref = useRef<HTMLDivElement | null>(null);
  const sectionTworef = useRef<HTMLDivElement | null>(null);
  const sectionThreeref = useRef<HTMLDivElement | null>(null);
  const sectionFourref = useRef<HTMLDivElement | null>(null);

  const [content, setContent] = useState("content1");

  return (
    <div>
      {/* First section */}
      <div className="text-color1 h-[1000px] bg-[url('/frame1.png')] bg-cover bg-center bg-color2">
        <MainNavBar
          sectionOneref={sectionOneref}
          sectionTworef={sectionTworef}
          sectionThreeref={sectionThreeref}
          sectionFourref={sectionFourref}
        />
        <div
          ref={sectionOneref}
          className="w-full h-auto flex flex-col items-center"
        >
          <div className="md:w-[50%] w-full mt-[150px] flex flex-col gap-[100px]">
            <h1 className="text-3xl md:text-5xl text-center">
              Explore <span className="text-color3">Engineering</span> and{" "}
              <span className="text-color3">Developing</span> Services
            </h1>
            <div className="flex lg:flex-row flex-col-reverse items-center justify-center gap-2">
              <div className="flex-1 text-slate-400 items-center px-5 text-lg">
                Welcome to our Engineering and Developing Services. We provide
                expert solutions in software development, electronics, and IT,
                transforming your ideas into reality with cutting-edge
                technology and tailored solutions.
              </div>
              <Image
                className="flex-1"
                src="/group3.png"
                alt="image"
                width={400}
                height={400}
              />
            </div>
            <div className="flex items-center justify-center gap-6">
              <Link
                href="/"
                className="bg-color3 w-36 h-12 flex items-center justify-center rounded-2xl text-color2 hover:opacity-[0.7] hover:scale-105"
              >
                Explore More!
              </Link>
              <Link
                href="/"
                className="bg-color1 w-36 h-12 flex items-center justify-center rounded-2xl text-color2 hover:opacity-[0.7] hover:scale-105"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={sectionTworef}
        className="text-color2 h-auto md:py-20 py-10 px-10 bg-[url('/frame1.png')] bg-cover bg-center bg-color1"
      >
        <div className="flex flex-col items-center gap-5">
          <h1 className="md:text-4xl text-3xl text-center mt-[80px]">
            Electrical and Electronics Engineering services
          </h1>
          <div className="flex md:gap-4 gap-6 md:text-[16px] text-[14px] container items-center justify-center">
            <button
              onClick={() => setContent("content1")}
              className={`text-color2 md:w-[200px] w-[100px] h-[50px] flex items-center justify-center rounded-xl hover:bg-slate-300 hover:scale-105 ${
                content === "content1" && "bg-slate-300"
              } `}
            >
            Electrical Engineering
            </button>
            <button
              onClick={() => setContent("content2")}
              className={`text-color2 md:w-[200px] w-[100px] h-[50px] flex items-center justify-center rounded-xl hover:bg-slate-300 hover:scale-105 ${
                content === "content2" && "bg-slate-300"
              } `}
            >
              Electronics Engineering
            </button>
            <button
              onClick={() => setContent("content3")}
              className={`text-color2 md:w-[200px] w-[100px] h-[50px] flex items-center justify-center rounded-xl hover:bg-slate-300 hover:scale-105 ${
                content === "content3" && "bg-slate-300"
              } `}
            >
              Computer  Engineering
            </button>
          </div>
          {content === "content1" && <ElectricalServices />}
          {content === "content2" && <ElectronicsServices/>}
          {content === "content3" && <ComputerServices/>}
        </div>
      </div>
      <div ref={sectionThreeref} className="text-color1 h-auto md:py-20 py-10 px-10 bg-[url('/frame1.png')] bg-cover bg-center bg-color2">


      <div className="flex flex-col items-center gap-5">
          <h1 className="md:text-4xl text-3xl text-center mt-[80px]">
            Developing and Programming services
          </h1>

          <ElectricalServices />
          
       
         
        </div>
      
      
      
      
      
      </div>
      <div ref={sectionFourref} className="bg-color1 h-auto"></div>
    </div>
  );
}
