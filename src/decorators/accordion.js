import React, { Component as ReactComponent} from 'react';

export default (OriginalComponent) => class Accordion extends ReactComponent {

  state = {
    openItemId: null,
  }

  toggleOpenItem = openItemId => ev => {
    ev && ev.preventDefault && ev.preventDefault();
    if (this.state.openItemId === openItemId) {
      this.setState({ openItemId: null });
    } else {
      this.setState({ openItemId });
    }
  }

  render() {
    return <OriginalComponent { ...this.props } { ...this.state } toggleOpenItem = { this.toggleOpenItem } />;
  }
};
