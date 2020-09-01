const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const connectionDB = require("./database/connection-db");
const getAccessToken = require("./middleware/Auth");
const dotenv = require("dotenv");
dotenv.config();

// Construct a schema, using GraphQL schema language
const typeDefs = importSchema("./graphql/schema/schema.gql");

// Provide resolver functions for your schema fields
const resolvers = require("./graphql/resolvers");

// DB Connection
connectionDB();

// DB Models
const Director = require("./database/models/Director");
const Movie = require("./database/models/Movie");
const User = require("./database/models/User");
const Comment = require("./database/models/Comment");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    Director,
    Movie,
    User,
    Comment,
    activeUser: req ? req.activeUser : null,
  }),
  introspection: true,
  playground: true,
});

const app = express();

// Verify Middleware
app.use(getAccessToken);

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
