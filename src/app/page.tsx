"use client";
import Image from "next/image";
import MainNavBar from "@/components/MainNavBar";
import { useRef, useState } from "react";
import Link from "next/link";
import ElectricalServices from "@/components/ElectricalServices";
import ElectronicsServices from "@/components/ElectronicsServices";
import ComputerServices from "@/components/ComputerServices";
import DevServices from "@/components/DevServices";
import { FaCode } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { IoLogoElectron } from "react-icons/io5";
import ContactUs from "@/components/ContactUs";
import Movingtext from "@/components/Movingtext";
import Footer2 from "@/components/Footer2";
import Head from "next/head";

export default function Home() {
  const sectionOneref = useRef<HTMLDivElement | null>(null);
  const sectionTworef = useRef<HTMLDivElement | null>(null);
  const sectionThreeref = useRef<HTMLDivElement | null>(null);
  const sectionFourref = useRef<HTMLDivElement | null>(null);

  const [content, setContent] = useState("content1");

  return (
    <>
      <Head>
        {/* Title and description */}
        <meta property="og:title" content="Engineering and Developing Services" />
        <meta
          property="og:description"
          content="Website related to electrical, electronics engineering and also developing services such as building web applications, desktop applications, data science and machine learning projects."
        />

        {/* URL */}
        <meta property="og:url" content="https://ed-services-2.vercel.app/" />

        {/* Image */}
        <meta
          property="og:image"
          content="https://ed-services-2.vercel.app/me.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Type */}
        <meta property="og:type" content="website" />

        {/* Fallback for Twitter (optional) */}
        <meta name="twitter:card" content="Engineering and Developing" />
        <meta name="twitter:title" content="Engineering and Developing" />
        <meta
          name="twitter:Engineering and Developing"
          content="Website related to electrical, electronics engineering and also developing services such as building web applications, desktop applications, data science and machine learning projects."
        />
        <meta
          name="twitter:image"
          content="https://ed-services-2.vercel.app/me.png"
        />
      </Head>

      <div>
        {/* First section */}
        <div className="text-color1 bg-[url('/frame1.png')] bg-cover bg-center bg-color2">
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
            <div className="md:w-[80%] w-full mt-[150px] flex flex-col gap-[100px]">
              <Movingtext>
                <h1 className="text-3xl md:text-5xl text-center">
                  Explore <span className="text-color3">Engineering</span> and{" "}
                  <span className="text-color3">Developing</span> Services
                </h1>
              </Movingtext>
              <div className="flex lg:flex-row flex-col-reverse  justify-center gap-2">
                <div className="flex-1 flex flex-col items-center  text-lg md:text-left text-center justify-start">
                  <div className="w-[80%] text-white">
                    <Movingtext>
                      <p>
                        Welcome Engineering and Developing Services. We provide
                        expert solutions in Electrical, Elctronics Engineering
                        in addition of that we also provide Developing and
                        Programming services.{" "}
                      </p>
                    </Movingtext>
                  </div>

                  <div className="w-[80%]">
                    <Movingtext>
                      <div className="flex gap-4 mt-10 justify-center sm:justify-start">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <p className="text-gray-500">Electrical</p>
                          <MdElectricBolt size={50} className="text-blue-600" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                          <p className="text-gray-500">Electronics</p>
                          <IoLogoElectron size={50} className="text-blue-600" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                          <p className="text-gray-500">Developing</p>

                          <FaCode size={50} className="text-blue-600" />
                        </div>
                      </div>
                    </Movingtext>
                  </div>
                </div>
                <Movingtext>
                  <Image
                    className="flex-1 md:w-full md:h-full w-[300px] mx-auto"
                    src="/group3.png"
                    alt="image"
                    width={400}
                    height={400}
                  />
                </Movingtext>
              </div>
              <Movingtext>
                <div className="flex items-center justify-center gap-6 mb-16">
                  <Link
                    href="/"
                    className="bg-color3 w-36 h-12 flex items-center justify-center rounded-2xl text-color2 hover:opacity-[0.7] hover:scale-105"
                  >
                    Explore More!
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send?phone=201557080199"
                    className="bg-color1 w-36 h-12 flex items-center justify-center rounded-2xl text-color2 hover:opacity-[0.7] hover:scale-105"
                  >
                    Contact us
                  </Link>
                </div>
              </Movingtext>
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
                className={`text-color2 p-2 md:w-[200px] w-[100px] h-[50px] flex items-center justify-center rounded-xl hover:bg-slate-300 hover:scale-105 ${
                  content === "content1" && "bg-slate-300"
                } `}
              >
                Electrical Engineering
              </button>
              <button
                onClick={() => setContent("content2")}
                className={`text-color2 p-2 md:w-[200px] w-[100px] h-[50px] flex items-center justify-center rounded-xl hover:bg-slate-300 hover:scale-105 ${
                  content === "content2" && "bg-slate-300"
                } `}
              >
                Electronics Engineering
              </button>
              <button
                onClick={() => setContent("content3")}
                className={`text-color2 p-2 md:w-[200px] w-[100px] h-[50px] flex items-center justify-center rounded-xl hover:bg-slate-300 hover:scale-105 ${
                  content === "content3" && "bg-slate-300"
                } `}
              >
                Computer Engineering
              </button>
            </div>
            {content === "content1" && <ElectricalServices />}
            {content === "content2" && <ElectronicsServices />}
            {content === "content3" && <ComputerServices />}
          </div>
        </div>
        <div
          ref={sectionThreeref}
          className="text-color1 h-auto md:py-20 py-10 px-10 bg-[url('/frame1.png')] bg-cover bg-center bg-color2"
        >
          <div className="flex flex-col items-center gap-5">
            <h1 className="md:text-4xl text-3xl text-center mt-[80px]">
              Developing and Programming services
            </h1>

            <DevServices />
          </div>
        </div>
        <div
          ref={sectionFourref}
          className="text-color2 h-auto md:py-20 py-10 px-10 bg-[url('/frame1.png')] bg-cover bg-center bg-color1"
        >
          <ContactUs />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
