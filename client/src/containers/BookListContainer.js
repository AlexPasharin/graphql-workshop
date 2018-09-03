import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import Book from "../components/Book";

class BookListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.data.books
          ? this.props.data.books.map(book => (
              <Book key={book.id} book={book} />
            ))
          : "Loading..."}
      </div>
    );
  }
}

export default graphql(gql`
  {
    books {
      id
      title
      genre
      price
    }
  }
`)(BookListContainer);
