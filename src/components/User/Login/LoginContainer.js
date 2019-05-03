import React, { Component } from "react";
import Login from "./Login";
import { firebase } from "../../firebase/firebase";

export default class LoginContainer extends Component {
  handleGoogleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.handleSignInWithPopUp(provider);
  };

  handleFacebookAuth = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.handleSignInWithPopUp(provider);
  };

  handleSignInWithPopUp = provider => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const token = result.credential.accessToken;
        const user = result.user;
        console.log(user, token);
      })
      .catch(error => {
        const errorCode = error.errorCode;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(error);
      });
  };

  render() {
    return (
      <Login
        reference={this.props.reference}
        handleLoginModalToggle={this.props.handleLoginModalToggle}
        handleFacebookAuth={this.handleFacebookAuth}
        handleGoogleAuth={this.handleGoogleAuth}
      />
    );
  }
}
