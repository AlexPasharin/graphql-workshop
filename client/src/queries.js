import { gql } from "apollo-boost";

export const getBooksQuery = gql`
  {
    books {
      title
      id
    }
  }
`;

export const getBookQuery = gql`
  query getBook($id: ID) {
    book(id: $id) {
      id
      title
      genre
      price
      author {
        id
        name
        books {
          title
          id
        }
      }
    }
  }
`;

export const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const addBookMutation = gql`
  mutation AddBook(
    $id: ID!
    $title: String!
    $genre: String!
    $price: Float!
    $authorId: ID!
  ) {
    addBook(
      id: $id
      title: $title
      genre: $genre
      price: $price
      authorId: $authorId
    ) {
      id
      title
      genre
      price
      author {
        id
      }
    }
  }
`;
