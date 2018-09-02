import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>ID: {book.id}</p>
      <p>Genre: {book.genre}</p>
      <p>Price: €{book.price}</p>
    </div>
  );
};

export default Book;
