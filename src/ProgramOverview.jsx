import React from "react";
import { InteractionDesignLogo } from "./assets/InteractionDesignLogo";

export function ProgramOverview() {
  return (
    <div className="relative font-apercu">
      <InteractionDesignLogo />
      <p className="text-[48px] text-[color:var(--primary-color)]">
        Interaction Design Apprenticeship
      </p>
      <p className="text-[22px] font-apercu my-8">
        A fully funded work-study program to launch your tech career{" "}
      </p>
      <p className="font-apercu text-[22px] thin-text my-8">
        Harbour.Space has partnered with SCG to empower driven talent and
        eliminate the barriers to accessing exceptional education and career
        opportunities through a Masters Fellowship.
      </p>
      <p className="my-8 text-[22px]">
        <span className="font-bold">Position:</span> Marketing Performance
      </p>
      <button className="text-sm rounded-full bg-[color:var(--primary-color)] text-white px-[24px] py-2 my-4">
        Apply Now
      </button>
    </div>
  );
}