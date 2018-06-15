import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_ARTICLE = gql`
  query article($id: String!) {
    article(_id: $id) {
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
  // console.log(props.match.params.id);
  <Query query={GET_ARTICLE} variables={{ id: props.match.params.id }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      console.log(data);
      return (
        <article>
          <h1>{data.article.title}</h1>
          <p>{data.article.date}</p>
          <div dangerouslySetInnerHTML={{ __html: data.article.content }} />
        </article>
      );
    }}
  </Query>
);

export default Article;
