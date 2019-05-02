import React, { Component } from "react";
import Register from "./Register";

export default class ModalExampleControlled extends Component {
  state = { isEmailClicked: false };

  handleEmailClick = () => {
    this.setState(prevState => ({ isEmailClicked: !prevState.isEmailClicked }));
  };

  render() {
    return (
      <Register {...this.state} handleEmailClick={this.handleEmailClick} />
    );
  }
}
