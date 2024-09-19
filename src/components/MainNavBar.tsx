import React from "react";
import Link from "next/link";

function MainNavBar({
  sectionOneref,
  sectionTworef,
  sectionThreeref,
  sectionFourref,
}: any) {
  const handleFirstSection = () => {
    sectionOneref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleSecondSection = () => {
    sectionTworef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleThirdSection = () => {
    sectionThreeref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleFourthSection = () => {
    sectionFourref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="text-color1 bg-transparent h-[80px] shadow-lg py-4 px-6">
      <div className="w-full h-full flex items-center justify-between">
        <div className="text-xl">ED-Services</div>
        <div className="md:flex items-center gap-9 text-color1 text-lg hidden">
          <span
            className="cursor-pointer hover:text-color3 hover:scale-105"
            onClick={handleFirstSection}
          >
            Home
          </span>
          <span
            className="cursor-pointer hover:text-color3 hover:scale-105"
            onClick={handleSecondSection}
          >
            Engineering
          </span>
          <span
            className="cursor-pointer hover:text-color3 hover:scale-105"
            onClick={handleThirdSection}
          >
            Developing
          </span>
          <span
            className="cursor-pointer hover:text-color3 hover:scale-105"
            onClick={handleFourthSection}
          >
            Contact
          </span>
        </div>
        <Link
          href="/"
          className="bg-color3 w-32 h-8 flex items-center justify-center rounded-2xl text-color2 hover:opacity-[0.7] hover:scale-105"
        >
          Join Now!
        </Link>
      </div>
    </div>
  );
}

export default MainNavBar;
