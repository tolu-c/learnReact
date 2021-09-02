import React, { Component } from "react";

export default class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleClickRemove() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Add Count</button>
        <button onClick={this.handleClickRemove}>Remove Count</button>
      </div>
    );
  }
}
