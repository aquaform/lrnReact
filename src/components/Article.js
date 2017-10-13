import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import { CSSTransitionGroup } from 'react-transition-group';
import './article.css';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    }).isRequired,
    toggleOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };

  getBody() {
    const { article, isOpen } = this.props;
    return (
      <section>
        { isOpen ? article.text : null }
        { isOpen ? this.getComments() : null }
      </section>
    );
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
        <CSSTransitionGroup
          transitionName = 'article'
          transitionEnterTimeout = { 30000 }
          transitionLeaveTimeout = { 30000 }
        >
          { this.getBody() }
        </CSSTransitionGroup>

      </div>
    );
  }
}



export default Article;
