import React, { Component } from "react";

export default class Messages extends Component {
  constructor() {
    super();
    this.state = {
      unReadMessages: [
        "you have an email from tolu",
        "clear your cart",
        "reviewm the product you just brought",
      ],
    };
  }
  render() {
    return (
      <div>
        {/* {this.state.unReadMessages.length > 0 ? (
          <h2>You have {this.state.unReadMessages.length} new messages.</h2>
        ) : null} */}
        {this.state.unReadMessages.length > 0 && (
          <h2>You have {this.state.unReadMessages.length} new messages.</h2>
        )}
      </div>
    );
  }
}
