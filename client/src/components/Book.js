import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.id}</p>
      <p>{book.genre}</p>
      <p>{book.price}</p>
    </div>
  );
};

export default Book;
