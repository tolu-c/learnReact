import React, { Component } from "react";

export default class Logged extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }
  render() {
    let displayText = this.state.isLoggedIn
      ? "You are logged in."
      : "You are logged out.";
    let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In";
    return (
      <div>
        <span>{displayText}</span>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}
