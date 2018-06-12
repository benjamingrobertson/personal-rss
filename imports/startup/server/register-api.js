import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import FeedsSchema from '../../api/feeds/Feeds.graphql';
import FeedsResolvers from '../../api/feeds/resolvers';
import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';
import ArticlesSchema from '../../api/articles/Articles.graphql';
import ArticlesResolvers from '../../api/articles/resolvers';

//testtttt
const typeDefs = [FeedsSchema, UsersSchema, ArticlesSchema];

const resolvers = merge(FeedsResolvers, UsersResolvers, ArticlesResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
