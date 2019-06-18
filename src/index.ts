import { ApolloServer, gql } from 'apollo-server';
// import { movies } from './mocks/movies';
// import { categories } from './mocks/categories';
// import { getMoviesForCategory } from './utils';

const typeDefs = gql`
  # type Movie {
  # }

  # type Category {
  # }

  type Query {
    hello: String!
  }

  # type Subscription {
  #   voteAdded: Movie!
  # }

  # type Mutation {
  #   addVote(movie_id: ID!): Movie!
  # }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }

  // Movie: {
  //   categories: (parent, args, ctx, info) => {}
  // },
  // Category: {
  //   movies: (parent, args, ctx, info) => {}
  // },
  // Mutation: {
  //   addVote: (parent, args) => {
  //   }
  // },
  // Subscription: {
  //   voteAdded: {
  //     subscribe: () => pubsub.asyncIterator(["voteAdded"])
  //   }
  // }
};

const server: ApolloServer = new ApolloServer({});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
