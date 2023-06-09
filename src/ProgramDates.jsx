import React from "react";
import logo from "./assets/Logo.svg";
import backgroundPattern from "./assets/Pattern.svg";

export function ProgramDates() {
  return (
    <div className="relative">
      <div className="grid-cols-1">
        <div className="grid grid-cols-2 gap-0 md:my-12">
          <div className="w-[90px]">
            <img src={logo} alt="Zeptolab logo" />
          </div>

          <div className="ml-[-116px] flex items-center">
            <p>
              <span className="text-[18px] font-light">Powered by:</span>{" "}
              <br></br>{" "}
              <span className="text-[27px] font-light"> ZeptoLab</span>
            </p>
          </div>
        </div>
        <div className="border-[1px] border-[#DADADA] rounded-[4px] my-4 w-[480px] h-[116px] py-[24px] px-[40px]">
          <p className="text-[color:var(--primary-color)] text-[16px] font-medium">
            Application closes in
          </p>
          <div>
            <p className="text-[27px] font-light">
              6 Days : 22 Hrs : 56 Min : 13 Sec
            </p>
          </div>
        </div>
        <div className="text-[16px] border-[1px] border-color[#DADADA] rounded-[4px] grid grid-cols-2  w-[480px] h-[200px] bg-white py-[24px] px-[40px]">
          <div>
            <p className="text-[color:var(--primary-color)] font-medium">
              Location
            </p>
            <p className="font-light">Bangkok</p>
          </div>
          <div>
            <p className="text-[color:var(--primary-color)] font-medium">
              Duration
            </p>
            <p className="font-light">1 Year</p>
            <p className="font-light">Full-Time</p>
          </div>
          <div>
            <p className="text-[color:var(--primary-color)] font-medium">
              Start date
            </p>
            <p className="font-light">30 June 2020</p>
          </div>
          <div>
            <p className="text-[color:var(--primary-color)] font-medium">
              End date
            </p>
            <p className="font-light">3 Aug 2020</p>
          </div>
        </div>
      </div>
      <img
        src={backgroundPattern}
        alt="Background Pattern"
        className="md:hidden absolute top-[167px] right-[-160px] z-[-1] h-full"
      />
    </div>
  );
}
