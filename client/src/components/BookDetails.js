import React from "react";
import {books} from "./BookList";

class BookDetails extends React.Component {
  render () {
    const {bookId} = this.props;
    // we will substitute this with book details fetching on demand
    const book = books.find(b => b.id === bookId);

    if (!book)
      return (<div id="book-details">No book selected...</div>);

    const {title, genre, price, author} = book;

    return (
      <div id="book-details">
        <h3>{title}</h3>
          <p>Genre: {genre}</p>
          <p>Price: €{price}</p>
          <p>Author: {author}</p>
          <p>All books by this author:</p>
          <ul className="other-books">

          </ul>
      </div>
    );
  }
};

export default BookDetails;
