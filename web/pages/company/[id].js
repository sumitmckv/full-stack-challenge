import React from "react";
import { company } from "../../api";
import CompanySummaryCard from "../../components/CompanySummaryCard";

const CompanyDetails = ({ data }) => {
  return <CompanySummaryCard data={data} />;
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
