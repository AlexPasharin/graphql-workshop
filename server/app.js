import express from 'express'
// import graphqlHTTP from 'express-graphql'

const app = express()
const port = 3003

// app.use('/graphql', graphqlHTTP({}))

app.get('/', (req, res) => res.send('hello'))

app.listen(port, () => {
  console.log(`Graphql server started on port ${port}`)
})
