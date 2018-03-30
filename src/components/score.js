import React, { Component } from 'react';

export default class Score extends Component {
  render() {
    return (
      <div className="row">
        <center>Your score is: {this.props.score} points!</center>
      </div>
    )
  }
}
