import React, { Component } from 'react';

export default class WordOption extends Component {
  render() {
    return (
      <div className={`image-container col-md-6 ${this.props.imageKey}`}>
        <img src={`../../images/${this.props.image}`} className="img-circle" alt={this.props.label}
             onClick={this.props.onClick} />
      </div>
    )
  }
}
