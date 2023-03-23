import React from "react";
import { ProgramOverview } from "./ProgramOverview";

export function ProgramInformation() {
  return (
    <div className="body-font font-apercu grid grid-cols-2 gap-4 mx-40 mt-24">
      <ProgramOverview />
      <div>Powered by Zeptolab</div>
      <div>Smiling person</div>
      <div>About the Apprenticeship</div>
    </div>
  );
}
