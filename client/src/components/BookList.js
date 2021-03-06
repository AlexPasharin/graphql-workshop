import React from "react";
import BookDetails from "./BookDetails";

class BookList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedBookId: null,
    };
  }

  render() {
    return (
      <ul id="book-list">
        {books.map(book => (
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

export default BookList;

// hardcoded mock data
// will be substutued with data fetched with graphQL from backend
export const books = [
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
