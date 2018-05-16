import React, { Component } from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

import Feed from './Feed';

const feedsQuery = gql`
  query Feeds {
    feeds {
      _id
      name
      url
    }
  }
`;

const FeedsView = ({ loading, feeds, client, user }) => {
  if (loading) return null;
  return <>{feeds.map((feed) => <Feed key={feed._id} feed={feed} />)}</>;
};

export default graphql(feedsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(FeedsView));
