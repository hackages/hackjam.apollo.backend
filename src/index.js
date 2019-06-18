const { ApolloServer, gql, PubSub } = require('apollo-server');
const movies = require('./mocks/movies');
const categories = require('./mocks/categories');
const { getMoviesForCategory } = require('./utils');

// const pubsub = new PubSub();

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
    hello: (parent, args, ctx, info) => 'Hello world!'
    // getCategories: () => {},
    // getMovies: (parents, args, ctx, info) => {}
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

const server = new ApolloServer({
  playground: {
    settings: {
      'editor.theme': 'light'
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
