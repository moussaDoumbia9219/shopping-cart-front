import React, { Component } from "react";
import Form from "../component/Form";
import TextInput from "../component/inputs/TextInput";
import PasswordInput from "../component/inputs/PasswordInput";
import CheckboxInput from "../component/inputs/CheckboxInput";
import { PrimaryButton } from "../component/Button";

export default class FormDemo extends Component {
  state = { firstName: "", lastName: "", password: "", sendEmail: true };
  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBooleanChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
         <Form onSubmit={this.handleSubmit}>
          <TextInput
            label="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleTextChange}
          />

          <TextInput
            label="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleTextChange}
          />
          <PasswordInput
            label="Password"
            name="password"
            value={this.state.lastName}
            onChange={this.handleTextChange}
          />
          <CheckboxInput
            label="Can we send you promo Email"
            name="sendEmail"
            checked={this.state.sendEmail}
            onChange={this.handleBooleanChange}
          />
          <PrimaryButton>Submit</PrimaryButton>
        </Form> 
    )
  }
}
