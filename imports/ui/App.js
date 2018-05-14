import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

import UserForm from './users/UserForm';

const App = ({ loading, client, user }) => {
  if (loading) return null;
  return (
    <>
      <UserForm user={user} client={client} />
      <h1>Hello {user.name || `world`}.</h1>
    </>
  );
};

const feedsQuery = gql`
  query Feeds {
    feeds {
      _id
      name
    }
    user {
      _id
      email
      name
    }
  }
`;

export default graphql(feedsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
