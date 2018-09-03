import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import BookListContainer from "./containers/BookListContainer";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:3003/graphql"
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h1>Graphql book store</h1>
        <BookListContainer />
      </ApolloProvider>
    );
  }
}

export default App;
