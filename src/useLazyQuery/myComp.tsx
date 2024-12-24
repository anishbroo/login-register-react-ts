import { useLazyQuery } from "@apollo/client";
import React from "react";
import { GET_USERCAP, GetUserResponse } from "./lazyQueries";

const MyComponent: React.FC = () => {
  const [getUser, { loading, error, data }] =
    useLazyQuery<GetUserResponse>(GET_USERCAP);

  const handleFetchUsers = () => {
    getUser();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Using Lazy Queries</h2>
      <button onClick={handleFetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Fetch Users"}
      </button>

      <ul>
        {data?.getUserCap.map((user) => (
          <li key={user.id}>
            <p>{user.membership_charge}</p>
            <p>{user.transaction_date}</p>
            <p>{user.transaction_amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
