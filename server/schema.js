// import GraphQL.js package
const graphql = require("graphql");

// import mock data and utils
import books from "./mock_data/books";
import authors from "./mock_data/authors";
import generateID from "./utils/IDgenerator";

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
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    price: { type: GraphQLFloat },
    author: {
      type: AuthorType,
      resolve(parent) {
        return authors.find(author => author.id === parent.authorId);
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent) {
        return books.filter(book => book.authorId === parent.id);
      }
    }
  })
});

// get books and authors
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      // this is GraphQL equivalent of REST GET /books/:id
      resolve(parent, args) {
        // we can also get data from db / other source
        return books.find(book => book.id === args.id);
      }
    },
    books: {
      type: new GraphQLList(BookType),
      // this is GraphQL equivalent of REST GET /books
      resolve(parent, args) {
        return books;
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return authors.find(author => author.id === args.id);
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addBook: {
      type: BookType,
      args: {
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        price: { type: GraphQLFloat },
        authorId: { type: GraphQLID }
      },
      resolve(parent, args) {
        let newBook = {
          id: generateID(books, "id"),
          title: args.title,
          genre: args.genre,
          price: args.price,
          authorId: args.authorId
        };
        books.push(newBook);
        return books[books.length - 1];
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
