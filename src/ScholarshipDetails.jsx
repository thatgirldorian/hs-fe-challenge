import React from "react";

export function ScholarshipDetails() {
  return (
    <>
      <div className="my-[48px] grid grid-cols-3 mx-40 gap-4 pr-[40px]">
        <div class="px-[44px] py-[32px] row-span-2 border-[1px] border-color[#DADADA] rounded-[4px] w-[320px] h-[524px]">
          <div className="mb-[200px]">
            <p className="text-[16px] text-[color:var(--primary-color)] font-medium ">
              Scholarship value
            </p>
            <p className="text-[34px] pt-2 font-light">€31,300</p>
          </div>
          <hr></hr>
          <div className="grid grid-cols-2 mt-12">
            <div className=" pb-4">
              <p className="text-[color:var(--primary-color)] font-medium">
                Tuition covered
              </p>
              <p>€20,900</p>
            </div>
            <div className="pl-[44px]">
              <p className="text-[color:var(--primary-color)] font-medium ">
                Remaining
              </p>
              <p>€2,000</p>
            </div>
            <div className="">
              <p className="text-[color:var(--primary-color)] font-medium">
                Living Stipend
              </p>
              <p>€8,400(€700/month)</p>
            </div>
          </div>
        </div>
        <div class=" px-[24px] py-[32px] border-[1px] border-color[#DADADA] rounded-[4px] w-[320px] h-[274px]">
          <p className="text-[16px] text-[color:var(--primary-color)] font-medium ">
            Study commitment
          </p>
          <p className="text-[26px] font-light pb-3 pt-2">3 hours / day</p>
          <hr className="w-[28px]"></hr>
          <p className="pt-3">
            You will complete 15 modules to graduate. Daily classes are 3 hours,
            plus coursework to complete in your own time.{" "}
          </p>
        </div>
        <div class="px-[24px] py-[32px] border-[1px] border-color[#DADADA] rounded-[4px] w-[320px] h-[274px]">
          <p className="text-[16px] text-[color:var(--primary-color)] font-medium ">
            Work commitment
          </p>
          <p className="text-[26px] font-light pb-3 pt-2">4 hours / day</p>
          <hr className="w-[28px]"></hr>
          <p className="pt-3">
            Immerse yourself in the professional world during your
            apprenticeship. You’ll learn the ropes from the best and get to
            apply your newly acquired knowledge in the field from day one.{" "}
          </p>
        </div>

        <div class="px-[44px] py-[32px] col-start-2 border-[1px] border-color[#DADADA] rounded-[4px] mt-12 w-[680px] h-[178px]">
          <p className="text-[16px] text-[color:var(--primary-color)] font-medium ">
            A full-time contract
          </p>
          <p className="text-[26px] font-light pb-3 pt-2">1 Year / Full-Time</p>
          <hr className="w-[28px]"></hr>
          <p className="pt-3">
            You’ll be guaranteed a 1 year contract with SCG upon graduation.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
