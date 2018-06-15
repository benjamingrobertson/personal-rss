import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_ARTICLES = gql`
  mutation createArticles($url: String!) {
    createArticles(url: $url) {
      _id
      title
    }
  }
`;

const GET_ARTICLES = gql`
  query articles {
    articles {
      _id
      title
      author
    }
  }
`;

const CreateArticles = ({ user }) => {
  console.log(user);
  return (
    <Mutation
      mutation={CREATE_ARTICLES}
      update={(cache, { data: { createArticles } }) => {
        const { articles } = cache.readQuery({ query: GET_ARTICLES });
        cache.writeQuery({
          query: GET_ARTICLES,
          data: { articles: articles.concat([createArticles]) }
        });
      }}
    >
      {(createArticles) => (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createArticles({ variables: { url: feedUrl.value } });
              feedUrl.value = '';
            }}
          >
            <label htmlFor="feed">Add a new RSS feed:</label>
            <br />
            <input
              type="text"
              id="feed"
              placeholder="Feed URL"
              ref={(node) => {
                feedUrl = node;
              }}
            />
            <br />
            <button className="button" type="submit">
              Add Feed
            </button>
          </form>
        </>
      )}
    </Mutation>
  );
};

export default CreateArticles;
