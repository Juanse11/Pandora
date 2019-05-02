import React, { Component } from "react";
import Register from "./Register";

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false, isEmailClicked: false };

  componentDidUpdate = () => {
    console.log("gog");
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleEmailClick = () => {
    this.setState(prevState => ({ isEmailClicked: !prevState.isEmailClicked }));
  };

  render() {
    return (
      <Register
        {...this.state}
        handleOpen={this.handleOpen}
        handleClose={this.handleClose}
        handleEmailClick={this.handleEmailClick}
      />
    );
  }
}
