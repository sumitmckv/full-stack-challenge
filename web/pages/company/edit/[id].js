import React from "react";
import { company } from "../../../api";
import Router from "next/router";
import CompanyForm from "../../../components/CompanyForm";

const UpdateCompany = ({ data }) => {
  const updateCompany = async (updatedCompany) => {
    try {
      const res = await company.updateCompany(data._id, updatedCompany);
      await Router.push(`/company/${data._id}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <CompanyForm
        title="Update company"
        company={data}
        onSave={updateCompany}
      />
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

export default UpdateCompany;
