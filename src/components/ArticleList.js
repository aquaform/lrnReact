import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';


class ArticleList extends Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired,
  };

  render() {
    const { toggleOpenItem, openItemId } = this.props;
    const articlesElements = this.props.articles.map((article) => {
      return (
        <li key = { article.id }>
          <Article
            article = { article }
            isOpen = { article.id === openItemId }
            toggleOpen = { toggleOpenItem(article.id) }
          />
        </li>
      );
    });

    return (
      <ul>
        { articlesElements }
      </ul>
    );
  }
}

export default accordion(ArticleList);
