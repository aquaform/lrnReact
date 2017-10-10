import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {

  static propTypes = {
    comment: PropTypes.shape({
      user: PropTypes.string,
      text: PropTypes.string,
    }).isRequired,  
  };

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
