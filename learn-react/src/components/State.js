import React, { Component } from "react";

export default class State extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return (
      <div>
        <h4>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h4>
      </div>
    );
  }
}
