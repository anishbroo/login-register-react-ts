import { ApolloProvider } from "@apollo/client";
import React from "react";
import AddressComponent from "./useLazyQuery/addressComp";
import ReportComponent from "./useLazyQuery/reportComp";
import MyComponent from "./useLazyQuery/myComp";
import Countries from "./useQuery/countries";
import Genders from "./useQuery/genders";
import client from "./config/graphql";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      {/* UseQuery */}
      <Countries />
      <Genders />

      {/* UseLazyQuery */}
      <MyComponent />
      <AddressComponent />
      <ReportComponent />
    </ApolloProvider>
  );
};

export default App;
