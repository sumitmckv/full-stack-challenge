import CompanyInfo from "./CompanyInfo";
import React from "react";
import Link from "next/link";

const CompanySummaryCard = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <div className="mx-2 md:mx-auto my-5 bg-white overflow-hidden shadow-md rounded-md">
      <div className="p-6">
        <div>
          <Link href={`/company/${data._id}`}>
            <a className="block text-gray-800 font-semibold text-2xl mt-2 hover:text-gray-600 hover:underline">
              {data.name}
            </a>
          </Link>
          <CompanyInfo
            city={data.city}
            state={data.state}
            founded={data.founded}
          />
          <div className="text-sm text-gray-600 mt-2">{data.description}</div>
          <div className="flex justify-end items-center">
            <Link href={`/company/${data._id}`}>
              <a className="text-blue-600 hover:text-blue-500 text-sm tracking-wider font-medium">
                <div className="flex items-center">
                  More
                  <svg
                    className="h-4 w-4 ml-1 fill-current text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14 15.5V12H1V8h13V4.5l5.25 5.5L14 15.5z" />
                  </svg>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySummaryCard;
