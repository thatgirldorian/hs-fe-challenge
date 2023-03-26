import React from "react";

export function ScholarshipDetails() {
  return (
    <>
      <div className="my-[76px] grid grid-cols-3 mx-40 gap-4 pr-[40px]">
        <div class="px-[44px] py-[32px] row-span-2 border-[1px] border-color[#DADADA] rounded-[4px] w-[320px] h-[524px]">
          <p className="text-[16px] text-[color:var(--primary-color)]">
            Scholarship value
          </p>
          <p className="text-[34px] font-light">€31,300</p>
          <hr></hr>
          <div className="grid grid-cols-2">
            <div className="">
              <p className="text-[color:var(--primary-color)]">
                Tuition covered
              </p>
              <p>€20,900</p>
            </div>
            <div className="">
              <p className="text-[color:var(--primary-color)]">Remaining</p>
              <p>€2,000</p>
            </div>
            <div className="">
              <p className="text-[color:var(--primary-color)]">
                Living Stipend
              </p>
              <p>€8,400 (€700/month)</p>
            </div>
          </div>
        </div>
        <div class="border-[1px] border-color[#DADADA] rounded-[4px] w-[320px] h-[274px]">
          02
        </div>
        <div class="border-[1px] border-color[#DADADA] rounded-[4px] w-[320px] h-[274px]">
          03
        </div>
        {/* <div>HI</div> */}
        <div class="col-start-2 border-[1px] border-color[#DADADA] rounded-[4px] w-[680px] h-[178px]">
          04
        </div>
      </div>
    </>
  );
}
