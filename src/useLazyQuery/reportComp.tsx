import { useLazyQuery } from "@apollo/client";
import React from "react";
import { GET_REPORT, ReportDataResponse } from "./reportQueries";

const ReportComponent: React.FC = () => {
  const [getReport, { loading, error, data }] =
    useLazyQuery<ReportDataResponse>(GET_REPORT);

  const handleReport = () => {
    getReport({
      variables: { input: "BIF" },
    });
  };

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Report Data</h2>
      <button onClick={handleReport} disabled={loading}>
        {loading ? "loading" : "Report Fetch"}
      </button>

      <ul>
        <li>{data?.fillReport.message.amount}</li>
      </ul>
    </div>
  );
};

export default ReportComponent;
