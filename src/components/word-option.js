import React, { Component } from 'react';

export default class ImageOption extends Component {
  render() {
    return (
      <div className="centeralized-container">
        <center>{this.props.label}</center>
       </div>
    )
  }
}
