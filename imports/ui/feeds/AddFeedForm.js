import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createFeed = gql`
  mutation createFeed($url: String!) {
    createFeed(url: $url) {
      _id
    }
  }
`;

class AddFeed extends Component {
  state = {
    error: null
  };

  submitForm = () => {
    console.log(this.url.value);
    this.props
      .createFeed({
        variables: {
          // name: this.name.value,
          url: this.url.value
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <>
        <h2>Add a Feed</h2>
        {this.state.error && <p>{this.state.error}</p>}
        {/* <form action="" method="post"> */}
        <div className="form-group">
          <label htmlFor="url">Feed Url:</label>
          <input
            type="url"
            name="url"
            id="url"
            ref={(input) => (this.url = input)}
          />
        </div>
        <button onClick={this.submitForm} className="button">
          Add Feed
        </button>
        {/* </form> */}
      </>
    );
  }
}

export default graphql(createFeed, {
  name: 'createFeed',
  options: {
    refetchQueries: ['Feeds']
  }
})(AddFeed);
