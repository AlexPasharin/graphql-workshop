// import GraphQL.js package
const graphql = require("graphql");

// import mock data
import books from "./mock_data/books";
import authors from "./mock_data/authors";

// get the scalar type
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList
} = graphql;

// here we define book graphql type
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    price: { type: GraphQLFloat }
    // TODO 3: author: type defined below
  }
});

/*
You can also use string queries like this:
`
type Book {
  title: String
  price: Float
}

`
*/

/**
 * TODO 1: define author graphql type
 * AuthorType should have id, name, books (the list)
 */
//const AuthorType

// get books and authors
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // we can also get data from db / other source
        return books.find(book => book.id === args.id);
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    }
    // TODO 2: add author type here
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
