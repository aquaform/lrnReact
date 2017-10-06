import React, { Component as ReactComponent} from 'react';

const toggleOpen = (OriginalComponent) => class WrappedComponent extends ReactComponent {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggleOpen = (ev) => {
      ev && ev.preventDefault && ev.preventDefault();
      this.setState({
        isOpen: !this.state.isOpen,
      });
    };

  }

  render() {
    return <OriginalComponent { ...this.props } { ...this.state } toggleOpen = { this.toggleOpen } />;
  }
};

export default toggleOpen;
