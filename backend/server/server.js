const { ApolloServer } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");
const prisma = new PrismaClient();

//* All of our resolvers
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const resolvers = {
  Query,
  Mutation,
};

//*
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"), //* pointer to our graphql schema file -- readFileSync reads and returns file content
  resolvers,
  context: {
    prisma,
  },
});

//* listening to either Heroku port or PORT:4000
server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
