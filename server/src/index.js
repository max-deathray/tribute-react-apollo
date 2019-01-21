const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Vibe = require('./resolvers/Vibe');
const Subscription = require('./resolvers/Subscription');
const Heart = require('./resolvers/Heart');

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Vibe,
  Heart,
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    };
  },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
