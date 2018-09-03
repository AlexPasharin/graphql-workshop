import React from "react";

class BookDetails extends React.Component {
  render () {
    const {bookId} = this.props;
    // we make book null for the time being until we know how to fetch book details
    const book = null;

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
