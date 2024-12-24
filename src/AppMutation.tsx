import { ApolloProvider } from "@apollo/client";
import React from "react";
import LoginComponent from "./useMutuation/loginComp";
import client from "./config/graphql";
import RegisterComponent from "./useMutuation/registerComp";

const AppMutation: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <LoginComponent />
      {/* <RegisterComponent /> */}
    </ApolloProvider>
  );
};

export default AppMutation;
