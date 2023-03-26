import React from "react";

export function Footer() {
  return (
    <footer className="mt-[220px] fixed bottom-0 left-0 w-full h-86 flex items-center justify-between bg-white">
      <div className="flex items-center px-[64px] py-[22px]">
        <div className="pr-[64px]">
          <p className="text-[16px]"> Zeptolab</p>
          <p className="font-extralight text-[16px]">Marketing Performance</p>
        </div>
        <div className="pr-[64px]">
          <p className="text-[16px]"> Location</p>
          <p className="font-extralight text-[16px]">Bangkok</p>
        </div>
        <div className="pr-[64px]">
          <p className="text-[16px]"> Duration</p>
          <p className="font-extralight text-[16px]">1 Year Full-Time</p>
        </div>
        <div className="pr-[64px]">
          <p className="text-[16px]"> Start date</p>
          <p className="font-extralight text-[16px]">3 Aug 2020</p>
        </div>
        <div className="pr-[64px]">
          <p className="text-[16px]"> Application Deadline</p>
          <p className="font-extralight text-[16px]">30 June 2020</p>
        </div>
        <div className="pr-[64px]">
          <p className="text-[16px]">Application closes in</p>
          <p className="font-extralight text-[16px]">6 Day : 22 Hrs : 56 Min</p>
        </div>
      </div>
    </footer>
  );
}
