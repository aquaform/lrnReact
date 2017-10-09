import React, {Component} from 'react';
import Article from './Article';

export default class ArticleList extends Component {

  state = {
    openArticleId: null,
  }

  render() {
    const articlesElements = this.props.articles.map((article) => {
      return (
        <li key = { article.id }>
          <Article
            article = { article }
            isOpen = { article.id === this.state.openArticleId }
            toggleOpen = { this.toggleOpenArticle.bind(this, article.id) }
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

  toggleOpenArticle(openArticleId) {
    this.setState({ openArticleId: openArticleId ? openArticleId : null });
  }

}
