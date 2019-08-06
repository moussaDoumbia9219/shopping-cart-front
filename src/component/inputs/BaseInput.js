import React, { Component } from "react";
import './BaseInput.css';

export default class BaseInput extends Component {
  render() {
    return (
      <div
        className={`BaseInput ${
          this.props.type === "checkbox" ? "BaseInputReverse" : ""
        }`}
      >
        <label htmlFor={this.props.name} data-testid="baseInputLabel">
          {this.props.label}
        </label>
        <input data-testid="baseInput" id={this.props.name} {...this.props} />
      </div>
    );
  }
}
