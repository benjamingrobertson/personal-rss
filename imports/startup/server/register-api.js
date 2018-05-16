import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import FeedsSchema from '../../api/feeds/Feeds.graphql';
import FeedsResolvers from '../../api/feeds/resolvers';
import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';

// testtest
const typeDefs = [FeedsSchema, UsersSchema];

const resolvers = merge(FeedsResolvers, UsersResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
