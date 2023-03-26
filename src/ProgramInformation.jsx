import React from "react";
import { ProgramOverview } from "./ProgramOverview";
import { ProgramDates } from "./ProgramDates";
import circlePattern from "./assets/CirclePattern.svg";
import studentPhoto from "./assets/Student_Photo.svg";

export function ProgramInformation() {
  return (
    <div className="md:flex md:flex-col md:mx-24 lg:grid lg:grid-cols-2 lg:gap-24 lg:mx-40 lg:my-40">
      <ProgramOverview />
      <ProgramDates className />
      <div className="relative md:my-16 lg:my-0">
        <img className="w-[280px]" src={studentPhoto} alt="A smiling student" />
        <img
          src={circlePattern}
          alt="Circle pattern in the background"
          className="absolute top-[-10px] right-[180px] z-[-1] h-full w-[458px]"
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
