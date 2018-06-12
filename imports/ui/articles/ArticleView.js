import React from 'react';
import { Query } from 'react-apollo';

const GET_ARTICLE = gql`
  query article {
    article {
      _id
      title
      author
      description
      date
      content
      link
    }
  }
`;

const Article = ({ ...props }) => (
  <Query query={GET_ARTICLE}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      console.log(data);
      return <h1>test</h1>;
    }}
  </Query>
);

export default Article;
