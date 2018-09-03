const express = require("express");
const graphqlHTTP = require("express-graphql");
import schema from "./schema.js";

const app = express();
const port = 3003;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.get("/", (req, res) => res.send("hello"));

app.listen(port, () => {
  console.log(`Graphql server started on port ${port}`);
});
