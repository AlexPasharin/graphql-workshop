import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import BookList from "./components/BookList";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:3003/graphql"
});

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Graphql book store</h1>
        <BookList books={books} />
      </div>
    );
  }
}

export default App;

// hardcoded mock data
// will be substutued with data fetched with graphQL
const books = [
  {
    id: "1",
    title: "Name of the Wind",
    genre: "Fantasy",
    price: 12.95,
    authorId: "1"
  },
  {
    id: "2",
    title: "The Final Empire",
    genre: "Fantasy",
    price: 10.95,
    authorId: "2"
  },
  {
    id: "3",
    title: "The Long Earth",
    genre: "Sci-Fi",
    price: 15.45,
    authorId: "3"
  }
];
