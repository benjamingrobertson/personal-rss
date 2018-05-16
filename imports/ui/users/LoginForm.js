import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class LoginForm extends Component {
  login = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(this.email.value, this.password.value, (error) => {
      console.log(error);
      if (!error) {
        this.props.client.resetStore();
      }
    });
  };
  render() {
    return (
      <form onSubmit={this.login}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            ref={(input) => (this.email = input)}
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            ref={(input) => (this.password = input)}
            id="password"
          />
        </div>
        <button className="button" type="submit">
          Login
        </button>
      </form>
    );
  }
}
