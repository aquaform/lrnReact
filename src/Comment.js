import React, { Component } from 'react';

export default class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comment } = this.props;

    return  (
      <div>
        <h4>{ comment.user }</h4>
        <p>{ comment.text }</p>
      </div>
    );
  }
}
