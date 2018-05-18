import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_ARTICLES = gql`
  mutation createArticles($url: String!) {
    createArticles(url: $url) {
      id
    }
  }
`;

const CreateArticles = () => {
  return <Mutation mutation={CREATE_ARTICLES} />;
};
