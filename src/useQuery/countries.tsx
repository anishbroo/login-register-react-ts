import { useQuery } from "@apollo/client";
import React from "react";
import GET_COUNTRIES from "./queries";

// Defining the shape of a single country
interface Country {
  code: string;
  name: string;
}

// Defining the shape of the response from the query
interface CountriesData {
  getCountries: Country[];
}

const Countries: React.FC = () => {
  // Specify the type of data returned by the query
  const { loading, error, data } = useQuery<CountriesData>(GET_COUNTRIES);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Countries List</h2>
      <ul>
        {data?.getCountries.map((country) => (
          <li key={country.code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
