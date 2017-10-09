import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';
import CommentList from './CommentList';

class Article extends Component {
  propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    }).isRequired,
  };

  getBody() {
    const { article, isOpen } = this.props;
    return <section>{ isOpen ? article.text : null }</section>;
  }

  getComments() {
    const { article, isOpen } = this.props;
    return (
      <section>
        { isOpen ? <CommentList comments = { article.comments } /> : null }
      </section>
    );
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;

    return (
      <div>
        <h3>{ article.title }</h3>
        <button onClick = { toggleOpen }>{ isOpen ? 'close' : 'open' }</button>
        { this.getBody() }
        { this.getComments() }
      </div>
    );
  }
}



export default toggleOpen(Article);
