import React, { Component } from 'react';

export default class Feed extends Component {
  render() {
    const feed = this.props.feed;
    console.log(this.props);
    return (
      <>
        <li>
          <span>{feed.name}</span>
          <br />
          <span>{feed.url}</span>
        </li>
      </>
    );
  }
}
