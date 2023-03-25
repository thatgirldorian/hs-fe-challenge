import React from "react";

export function ProgramDates() {
  return (
    <div>
      <div className="grid-cols-1">
        <div className="grid grid-cols-2 gap-1">
          <div>LOGO</div>
          <div>Powered by ZeptoLab</div>
        </div>
        <div className="border-2 my-4">
          <p>Application closes in</p>
          <div>
            <p>6 Days : 22 Hrs : 56 Min : 13 Sec</p>
          </div>
        </div>
        <div className="border-2 grid grid-cols-2">
          <div>
            <p>Location</p>
            <p>Bangkok</p>
          </div>
          <div>
            <p>Duration</p>
            <p>1 Year</p>
            <p>Full-Time</p>
          </div>
          <div>
            <p>Start date</p>
            <p>30 June 2020</p>
          </div>
          <div>
            <p>End date</p>
            <p>3 Aug 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}
