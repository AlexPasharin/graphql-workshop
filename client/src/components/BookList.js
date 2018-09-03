import React from "react";
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import BookDetails from "./BookDetails";

const getBooksQuery = gql`
  {
    books {
      title
      id
    }
  }
`;

class BookList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedBookId: null,
    };
  }

  render() {
    const {data} = this.props;
    // for illustration purposes
    console.log(data);

    // data won't be loaded from the server first time the component is rendered
    if (data.loading) return null;

    return (
      <ul id="book-list">
        {data.books.map(book => (
          <li
            key={book.id}
            onClick={() => this.setState({selectedBookId: book.id})}
          >
            {book.title}
          </li>
        ))}
        <BookDetails bookId={this.state.selectedBookId} />
      </ul>
    );
  }

}

export default graphql(getBooksQuery)(BookList);
