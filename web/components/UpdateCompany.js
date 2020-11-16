import React from "react";
import Link from "next/link";
import DeleteModal from "./DeleteModal";

const UpdateCompany = ({ id, name }) => {
  return (
    <div className="flex">
      <Link href={`/company/edit/${id}`}>
        <button className="mt-4 font-bold text-gray-600 text-sm">
          <div className="flex items-center">
            <svg
              className="h-3 w-3 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984 7.264 2.21 14.037 1.2 18.799l4.763-1.01 6.774-6.771 6.052-6.052c-.001 0 .216-1.083-1.228-2.527zM5.68 17.217l-1.624.35a3.71 3.71 0 0 0-.69-.932 3.742 3.742 0 0 0-.932-.691l.35-1.623.47-.469s.883.018 1.881 1.016c.997.996 1.016 1.881 1.016 1.881l-.471.468z" />
            </svg>
            Edit
          </div>
        </button>
      </Link>
      <DeleteModal id={id} name={name} />
    </div>
  );
};

export default UpdateCompany;
