import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

import UserForm from './users/UserForm';
import Greeting from './greeting/Greeting';
// import AddFeedForm from './feeds/AddFeedForm';
import ArticlesView from './articles/ArticlesView';

import CreateArticles from './feeds/CreateArticles';

const App = ({ loading, client, user }) => {
  if (loading) return null;
  return (
    <>
      <h1>RSS Reader</h1>
      <p>
        <Greeting />, {user.name || `world`}.
      </p>
      <UserForm user={user} client={client} />

      {user._id && <CreateArticles user={user} client={client} />}
      {user._id && <ArticlesView user={user} client={client} />}
    </>
  );
};

const articlesQuery = gql`
  query Articles {
    articles {
      _id
      title
    }
    user {
      _id
      email
      name
    }
  }
`;

export default graphql(articlesQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
