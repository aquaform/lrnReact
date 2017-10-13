import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class App extends Component {
  state = {
    selection: null,
  }

  changeSelection = selection => this.setState({ selection })

  render() {
    const options = this.props.articles.map(article => ({
      value: article.id,
      label: article.title,
    }));
    return (
        <div>
          <Select options = { options } value = {this.state.selection} onChange={ this.changeSelection } multi />
          <ArticleList articles = { this.props.articles } />
        </div>
    );
  }
}

export default App;
