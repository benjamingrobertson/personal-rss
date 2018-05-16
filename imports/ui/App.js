import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

import UserForm from './users/UserForm';
import Greeting from './greeting/Greeting';

const App = ({ loading, client, user }) => {
  if (loading) return null;
  return (
    <>
      <h1>RSS Reader</h1>
      <p>
        <Greeting />, {user.name || `world`}.
      </p>
      <UserForm user={user} client={client} />
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
