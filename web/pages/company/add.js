import React from "react";
import Router from "next/router";
import CompanyForm from "../../components/CompanyForm";
import { company } from "../../api";

const AddCompany = () => {
  const addCompany = async (data) => {
    try {
      const res = await company.addCompany(data);
      await Router.push(`/company/${res._id}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <CompanyForm title="Add company" company={{}} onSave={addCompany} />
    </div>
  );
};

export default AddCompany;
