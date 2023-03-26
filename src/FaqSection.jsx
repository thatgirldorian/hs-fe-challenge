import React from "react";
import filterArrow from "./assets/caret-down.svg";
import { FaqContent } from "./FaqContent";

export function FaqSection() {
  return (
    <>
      <div className="mx-[146px] my-[65px] flex items-center justify-between">
        <div>
          <p className="text-[48px] font-medium text-[color:var(--primary-color)]">
            Frequently asked <br></br> questions
          </p>
        </div>
        <p className="ml-auto font-light text-[16px]">Filter by:</p>
        <div className="relative ml-[24px]">
          <button className="flex text-[18px] font-medium border-[#dadada] border-[1px] rounded-full bg-white text-[color:var(--primary-color)] pl-[36px] pr-[56px] py-[17px]">
            Program conditions
            <img
              src={filterArrow}
              alt="caret icon"
              className="mr-6 w-[16px] absolute right-0 bottom-[22px]"
            />
          </button>
        </div>
      </div>
      <hr className="mx-[150px]"></hr>
      <div className="mb-[220px]">
        <FaqContent
          tag={"Program conditions"}
          title={"What are my obligations?"}
          content={
            "The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes. \n\nHarbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand. Together we insure students get the best knowledge about the current job market opportunities. \n\nWe offer our students paid internships options during studies jointly with our industrial partners. \n\nEmployers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process."
          }
        />
        <hr className="mx-[150px]"></hr>

        <FaqContent
          tag={"Program conditions"}
          title={"Do I get a job placement upon graduation?"}
          content={
            "The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes. \n\nHarbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand. Together we insure students get the best knowledge about the current job market opportunities. \n\nWe offer our students paid internships options during studies jointly with our industrial partners. \n\nEmployers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process."
          }
        />

        <hr className="mx-[150px]"></hr>

        <FaqContent
          tag={"Program conditions"}
          title={"What if I want to start my own company? "}
          content={
            "The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes. \n\nHarbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand. Together we insure students get the best knowledge about the current job market opportunities. \n\nWe offer our students paid internships options during studies jointly with our industrial partners. \n\nEmployers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process."
          }
        />

        <hr className="mx-[150px]"></hr>

        <FaqContent
          tag={"Program conditions"}
          title={"Do I need a visa? "}
          content={
            "The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes. \n\nHarbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand. Together we insure students get the best knowledge about the current job market opportunities. \n\nWe offer our students paid internships options during studies jointly with our industrial partners. \n\nEmployers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process."
          }
        />
        <hr className="mx-[150px]"></hr>
      </div>
    </>
  );
}
