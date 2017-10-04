import React, { Component } from 'react';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };

    this.toggleOpen = this.toggleOpen.bind(this);

  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  getBody() {
    const { article } = this.props;
    return <section>{ this.state.isOpen ? article.text : null }</section>;
  }

  render() {
    const { article } = this.props;

    return (
      <div>
        <h3>{ article.title }</h3>
        <button onClick = { this.toggleOpen }>{ this.state.isOpen ? 'close' : 'open' }</button>
        <section>{ this.getBody() }</section>
      </div>
    );
  }
}
