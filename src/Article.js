import React, { Component } from 'react';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);

  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { article } = this.props;

    console.log(this.state);

    return (
      <div>
        <h3>{ article.title }</h3>
        <button onClick = { this.toggleOpen }>open</button>
        <section>{ article.text }</section>
      </div>
    );
  }
}
