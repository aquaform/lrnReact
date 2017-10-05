import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  getCommentsElements() {
    if (!this.state.isOpen) {
      return null;
    }

    const { comments } = this.props;
    const commentsElements = comments ? comments.map((comment) => {
      return (
        <li key = { comment.id }>
          <Comment comment = { comment } />
        </li>
      );
    }) : null;

    return (
      <ul>
        { commentsElements }
      </ul>
    );
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <button onClick = { this.toggleOpen }>{ this.state.isOpen ? 'hidden commets' : 'view comments' }</button>
        { this.getCommentsElements() }
      </div>
    );
  }
}
