import React from "react";
import { ProgramOverview } from "./ProgramOverview";
import { ProgramDates } from "./ProgramDates";

export function ProgramInformation() {
  return (
    <div className="grid grid-cols-2 gap-24 mx-40 mt-24">
      <ProgramOverview />
      <ProgramDates />
      <div>Smiling person</div>
      <div>About the Apprenticeship</div>
    </div>
  );
}
