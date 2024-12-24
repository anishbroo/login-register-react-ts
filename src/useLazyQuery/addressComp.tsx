import { useLazyQuery } from "@apollo/client";
import React from "react";
import { GET_ADDRESS, GetAddressResponse } from "./addressLazyQuery";

const AddressComponent: React.FC = () => {
  const [getAddress, { loading, error, data }] =
    useLazyQuery<GetAddressResponse>(GET_ADDRESS);

  const handleFetchData = () => {
    getAddress({
      variables: { id: 35 },
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Example of Use Lazy Query</h2>
      <button onClick={handleFetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch"}
      </button>

      <ol>
        <li>{data?.getAddressById.country}</li>
        <li>{data?.getAddressById.country_code}</li>

        {/* {data?.getAddressById.map((address) => (
          <li key={address.id}>
            <p>{address.country}</p>
            <p>{address.country_code}</p>
          </li>
        ))} */}
      </ol>
    </div>
  );
};

export default AddressComponent;
