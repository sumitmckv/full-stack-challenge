import React, { useState, useEffect } from "react";
import Link from "next/link";
import CompanySummaryCard from "../components/CompanySummaryCard";
import { company } from "../api";

import Head from "next/head";

const Home = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    company.getCompanies().then((res) => setCompanies(res));
  }, []);
  return (
    <div className="container mx-auto">
      <Head>
        <title>Techstars Engineering Full Stack code Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="py-5">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-5">
              <h3 className="mt-2 text-xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                Companies
              </h3>
              <Link href="/company/add">
                <button className="bg-blue-500 py-2 px-4 border-b-4 border-blue-800 rounded text-white hover:border-blue-lighter hover:bg-blue-400 my-10">
                  <span className="flex items-center">
                    Add company
                    <svg
                      className="h-4 w-4 ml-1 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14 15.5V12H1V8h13V4.5l5.25 5.5L14 15.5z" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
            {companies.map((data) => (
              <CompanySummaryCard key={data._id} data={data} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
