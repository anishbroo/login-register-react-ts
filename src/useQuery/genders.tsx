import { useQuery } from "@apollo/client";
import React from "react";
import { GET_GENDERS } from "../query/query";

const Gender: React.FC = () => {
  const { loading, error, data } = useQuery(GET_GENDERS);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Gender List</h2>
      <ul>
        {data?.getGenders.map((gender: any) => (
          <li key={gender.id}>{gender.gender}</li>
        ))}
      </ul>
    </div>
  );
};

export default Gender;
