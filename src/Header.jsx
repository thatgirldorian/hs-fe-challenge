import React from "react";
import { MenuIcon } from "./assets/MenuIcon";
import { CircleButton } from "./CircleButton";
import "./index.css";

export function Header() {
  return (
    <div className="relative">
      <nav className="bg-[#685EC5] mx-auto flex items-center justify-between px-8 py-2">
        <div className="flex items-center">
          <p className="text-white uppercase mr-2 font-medium">Harbour.Space</p>
          <p className="text-white text-[10px] uppercase mb-1">
            /interaction design
          </p>
        </div>
        <div className="md:block">
          <MenuIcon className="menu-icon" />
        </div>
        <CircleButton className="sm:hidden">
          Apply <br></br> now
        </CircleButton>
      </nav>
    </div>
  );
}
