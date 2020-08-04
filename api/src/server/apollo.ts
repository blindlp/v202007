import { Dependencies } from "@corecodeio/libraries/di";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { resolvers } from "./resolvers";
import { schema as typeDefs } from "./schema";

export const dependencies = new Dependencies();

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    dependencies,
  },
});

const app = express();

app.use(express.json());

server.applyMiddleware({ app });

export default app;
