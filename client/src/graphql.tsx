import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import React, { FunctionComponent } from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

export const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});

export const GraphQLClient: FunctionComponent = ({children}) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};
