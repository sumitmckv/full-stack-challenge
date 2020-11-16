import React from "react";
import { company } from "../../api";
import CompanyInfo from "../../components/CompanyInfo";
import Founders from "../../components/Founders";
import UpdateCompany from "../../components/UpdateCompany";

const CompanyDetails = ({ data }) => {
  return (
    <div className="mx-2 md:mx-auto">
      <div className="container mx-auto px-6 pt-2">
        <div className="md:flex items-center">
          <div className="w-full md:w-1/2">
            <div className="max-w-lg">
              <h5 className="block text-gray-800 font-semibold text-3xl">
                {data.name}
              </h5>
              <CompanyInfo
                city={data.city}
                state={data.state}
                founded={data.founded}
              />
              <UpdateCompany id={data._id} name={data.name} />
              <p className="mt-2 text-gray-600">{data.description}</p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
            <img
              className="max-w-2xl w-full h-full"
              src="/company.png"
              alt="company"
            />
          </div>
        </div>
      </div>
      <Founders id={data._id} founders={data.founders} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const data = await company.getCompany(params.id);
  return {
    props: {
      data,
    },
  };
}

export default CompanyDetails;
