import React from "react";

export function CircleButton({ children }) {
  return (
    <button className="text-[10px] mt-10 mr-24 right-0 absolute uppercase text-sm bg-[#50A16C] font-medium focus:outline-none rounded-full text-white text-center p-4">
      {children}
    </button>
  );
}
