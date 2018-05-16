import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class RegisterForm extends Component {
  registerUser = (e) => {
    e.preventDefault();
    Accounts.createUser(
      {
        email: this.email.value,
        profile: {
          name: this.name.value
        },
        password: this.password.value
      },
      (error) => {
        if (!error) {
          this.props.client.resetStore();
        }
        console.log(error);
      }
    );
  };
  render() {
    return (
      <form onSubmit={this.registerUser}>
        <h2>Register a new account</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" ref={(input) => (this.name = input)} id="name" />
        </div>
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
          Register User
        </button>
      </form>
    );
  }
}
