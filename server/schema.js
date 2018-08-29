// import....


// here we define books graphql type
const books = new GraphQlObjectType({
  name:
  fields: {
    id:
    title: new GraphQLString,
    genre: new GraphQLString,
    price: new GraphQLFloat,
    author: // type defined below
  }
})

/*
You can also use string queries like this:
`
type Book {
  title: String
  price: Float
}

`
*/

// do same for author type
const author = ?
// author should have id, name, books (the list)


const rootQuery =
// get books and authors
