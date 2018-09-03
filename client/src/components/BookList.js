import React from "react";
import Book from "../components/Book";

class BookList extends React.Component {
  render() {
    return (
      <div>
        {this.props.books.map(
          book => <Book key={book.id} book={book} />
        )}
      </div>
    );
  }
}

export default BookList;
