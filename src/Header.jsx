import React from "react";
import { MenuIcon } from "./assets/MenuIcon";
import "./index.css";

export function Header() {
  return (
    <nav className="bg-[#685EC5] mx-auto flex items-center justify-between px-8 py-4">
      <div className="flex items-center">
        <p className="text-white uppercase mr-2">Harbour.Space</p>
        <p className="text-white text-[10px] uppercase mb-1">
          /interaction design
        </p>
      </div>
      <div className="md:block">
        <MenuIcon className="menu-icon" />
      </div>
    </nav>
  );
}
