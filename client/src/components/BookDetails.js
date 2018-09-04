import React from "react";
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBookQuery = gql`
  query getBook($id: ID){
    book(id: $id) {
      id
      title
      genre
      price
      author {
        id
        name
        age
        books {
          title
          id
        }
      }
    }
  }
`;

class BookDetails extends React.Component {
  render () {
    const {book} = this.props.data;

    if (!book)
      return (<div id="book-details">No book selected...</div>);

    const {title, genre, price, author} = book;

    return (
      <div id="book-details">
        <h3>{title}</h3>
          <p>Genre: {genre}</p>
          <p>Price: €{price}</p>
          <p>Author: {author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {author.books.map(b => (
              <li key={b.id}>{b.title}</li>
            ))}
          </ul>
      </div>
    );
  }
};

export default graphql(getBookQuery, {
  options: props => ({
      variables: {
          id: props.bookId
      },
      skip: !props.bookId
  })
})(BookDetails);
