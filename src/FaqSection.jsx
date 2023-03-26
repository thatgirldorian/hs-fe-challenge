import React from "react";

export function FaqSection() {
  return (
    <>
      <div className="mx-[146px] my-[65px] flex items-center justify-between">
        <div>
          <p className="text-[48px] text-[color:var(--primary-color)]">
            Frequently asked <br></br> questions
          </p>
        </div>
        <div className="">
          Filter by:
          <button>Program conditions</button>
        </div>
      </div>
      <hr></hr>
      <div className="mt-[65px]"></div>
    </>
  );
}
