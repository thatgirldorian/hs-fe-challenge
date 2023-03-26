import React from "react";
import { useState } from "react";

export function FaqContent({ tag, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-[146px] py-6 ">
      <div
        className="flex items-center justify-between cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-[22px] font-medium text-[color:var(--primary-color)]">
          {tag}
        </p>
        <p className="text-[22px] mr-52 font-medium text-[color:var(--primary-color)]">
          {title}
        </p>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M7 10l5 5 5-5z" />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 w-[80%]">
          <div className="ml-72">
            {content.split("\n").map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4 font-light">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
