import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

import Index from './pages/Index';
import { Switch, Route, Link } from 'react-router-dom';

import UserForm from './users/UserForm';
import Greeting from './greeting/Greeting';
// import AddFeedForm from './feeds/AddFeedForm';
import ArticleView from './articles/ArticleView';

import CreateArticles from './feeds/CreateArticles';

const App = ({ loading, client, user }) => {
  if (loading) return null;
  return (
    <>
      <h1>RSS Reader</h1>
      <Greeting />, {(user && user.name) || `world`}.
      <nav>
        <ul>
          <li>
            <Link to="/">RSS Reader</Link>
          </li>
          {!user._id && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {user &&
            user._id && (
              <button
                className="logout button"
                onClick={() => {
                  Meteor.logout();
                  client.resetStore();
                }}
              >
                Logout
              </button>
            )}
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route
          exact
          path="/login"
          render={(client, user) => <UserForm client={client} user={user} />}
        />
        <Route path="/article/:id" component={ArticleView} />
      </Switch>
      {/* <UserForm user={user} client={client} /> */}
      {/* {user._id && <CreateArticles user={user} client={client} />} */}
      {/* {user._id && <ArticlesView user={user} client={client} />} */}
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
