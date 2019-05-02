import React, { Component } from "react";
import Register from "./Register";

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Register
        {...this.state}
        handleOpen={this.handleOpen}
        handleClose={this.handleClose}
      />
    );
  }
}
