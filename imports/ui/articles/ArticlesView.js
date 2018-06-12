import React, { Component } from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

const GET_ARTICLES = gql`
  query articles {
    articles {
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

const ArticlesView = ({ user }) => {
  return (
    <Query query={GET_ARTICLES}>
      {({ loading, error, data, user }) => {
        console.log(user);
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        console.log(data.articles);
        return (
          data.articles && (
            <ul>
              {data.articles.map((article) => (
                <article key={article._id}>
                  <h1>
                    <a href={article.link}>{article.title}</a>
                  </h1>

                  <p>{article.author}</p>
                  <p>{article.date}</p>
                </article>
              ))}
            </ul>
          )
        );
      }}
    </Query>
  );

  return (
    <>
      {articles.map((article) => (
        <div key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
        </div>
      ))}
    </>
  );
};

// export default graphql(articlesQuery, {
//   props: ({ data }) => ({ ...data })
// })(withApollo(ArticlesView));

export default ArticlesView;
