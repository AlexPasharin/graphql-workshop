const express = require("express");
const graphqlHTTP = require("express-graphql");
import schema from "./schema.js";

const app = express();
const port = 3003;

// configure CORS access
const cors = require("cors");
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`Graphql server started on port ${port}`);
  console.log("CORS-enabled for all origins.");
});
