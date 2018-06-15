import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

export default class UserForm extends Component {
  state = {
    login: true
  };

  render() {
    console.log(this.props);
    const { user, client } = this.props;
    const { login } = this.state;
    if (user && user._id) {
      return (
        <button
          className="logout button"
          onClick={() => {
            Meteor.logout();
            client.resetStore();
          }}
        >
          Logout
        </button>
      );
    }

    return (
      <div className="user-form">
        {login ? (
          <LoginForm client={client} />
        ) : (
          <RegisterForm client={client} />
        )}
        <button
          className="button--link"
          onClick={() => this.setState({ login: !login })}
        >
          {login ? 'Create new account' : 'Login'}
        </button>
      </div>
    );
  }
}
