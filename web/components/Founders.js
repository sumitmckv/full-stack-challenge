import React from "react";
import Link from "next/link";

const Founders = ({ founders, id }) => {
  return (
    <section className="bg-white container mx-auto px-2 shadow-md rounded-lg px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-800 font-medium capitalize text-xl md:text-2xl">
          Founders
        </h2>
        <Link href={`/founder/add/${id}`}>
          <button className="bg-blue-500 py-1 px-4 border-b-4 border-blue-800 rounded text-white hover:border-blue-lighter hover:bg-blue-400 my-10">
            <span className="flex items-center">Add founder</span>
          </button>
        </Link>
      </div>

      {Array.isArray(founders) && founders.length > 0 && (
        <div className="flex items-center pb-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3">
            {founders.map((data) => (
              <div
                key={data._id}
                className="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="w-1 bg-gray-800"></div>

                <div className="-mx-3 py-2 px-4">
                  <div className="mx-3">
                    <span className="text-gray-800 font-semibold">
                      {data.name}
                    </span>
                    <p className="text-gray-600 text-sm">{data.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Founders;
