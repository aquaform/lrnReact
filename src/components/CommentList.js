import React, { Component } from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {

  static defaultProps = {
    comments: [],
  }

  getCommentsElements() {

    const { comments, isOpen } = this.props;

    if (!isOpen) {
      return null;
    }

    if (!comments.length) {
      return (<p>'no comments'</p>);
    }
    const commentsElements = comments.map((comment) => {
      return (
        <li key = { comment.id }>
          <Comment comment = { comment } />
        </li>
      );
    });

    return (
      <ul>
        { commentsElements }
      </ul>
    );
  }

  render() {
    return (
      <div>
        <button onClick = { this.props.toggleOpen }>{ this.props.isOpen ? 'hide comments' : 'show comments' }</button>
        { this.getCommentsElements() }
      </div>
    );
  }
}

export default toggleOpen(CommentList);
