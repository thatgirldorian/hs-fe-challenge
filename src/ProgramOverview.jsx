import React from "react";
import { InteractionDesignLogo } from "./assets/InteractionDesignLogo";

export function ProgramOverview() {
  return (
    <div className="relative">
      <InteractionDesignLogo />
      <p className="text-[48px] font-medium text-[color:var(--primary-color)]">
        Interaction Design Apprenticeship
      </p>
      <p className="text-[22px] font-medium my-8">
        A fully funded work-study program to launch your tech career{" "}
      </p>
      <p className=" text-[22px] font-light my-8">
        Harbour.Space has partnered with SCG to empower driven talent and
        eliminate the barriers to accessing exceptional education and career
        opportunities through a Masters Fellowship.
      </p>
      <p className="my-8 text-[22px] font-light">
        <span className="font-medium">Position:</span> Marketing Performance
      </p>
      <button className="text-[18px] rounded-full bg-[color:var(--primary-color)] text-white px-[40px] py-[16px] my-5 font-medium">
        Apply Now
      </button>
    </div>
  );
}
