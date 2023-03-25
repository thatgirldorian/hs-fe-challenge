import React from "react";
import { ProgramOverview } from "./ProgramOverview";
import { ProgramDates } from "./ProgramDates";
import circlePattern from "./assets/CirclePattern.svg";
import studentPhoto from "./assets/Student_Photo.svg";

export function ProgramInformation() {
  return (
    <div className="grid grid-cols-2 gap-24 mx-40 mt-24">
      <ProgramOverview />
      <ProgramDates />
      <div className="relative">
        <img className="w-[380px]" src={studentPhoto} alt="A smiling student" />
        <img
          src={circlePattern}
          alt="Circle pattern in the background"
          className="absolute top-[-14px] right-[90px] z-[-1] h-full w-[438px]"
        />
      </div>
      <div>
        <p className="text-[48px] text-[color:var(--primary-color)]">
          About the Apprenticeship
        </p>
        <p className="text-[22px] my-8">
          Our scholarships are designed to give talented and driven young people
          from any background access to top-class education, experience and
          network. We offer a fully-funded master’s degree alongside an
          apprenticeship and a guaranteed job upon graduation.
        </p>
      </div>
    </div>
  );
}
