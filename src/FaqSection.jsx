import React from "react";
import filterArrow from "./assets/caret-down.svg";

export function FaqSection() {
  return (
    <>
      <div className="mx-[146px] my-[65px] flex items-center justify-between">
        <div>
          <p className="text-[48px] text-[color:var(--primary-color)]">
            Frequently asked <br></br> questions
          </p>
        </div>
        <div className="mr-[24px]">Filter by:</div>
        <div className="relative ">
          <button className="flex text-[18px] border-[#dadada] border-[1px] rounded-full bg-white text-[color:var(--primary-color)] pl-[36px] pr-[56px] py-[17px]">
            Program conditions
            <img
              src={filterArrow}
              alt="caret icon"
              className="mr-6 w-[16px] absolute right-0 bottom-[22px]"
            />
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="mt-[65px]"></div>
    </>
  );
}
