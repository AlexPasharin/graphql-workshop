import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook"

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:3003/graphql"
});

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <h1>Graphql book store</h1>
        <BookList />
        <AddBook />
      </div>
    );
  }
}

export default App;
