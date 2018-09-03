import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import BookList from "../components/Book";

class BookListContainer extends React.Component {
  render() {
    return (
      <div>
        { // show here
          <BookList books={} />
          // where books are fetched by graphql from back-end
        }
      </div>
    );
  }
}

export default BookListContainer;
