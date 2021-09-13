import React, { Component } from "react";

export default class MemeGen extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://1.imgflip.com/ibij.jpg",
    };
  }
  render() {
    return (
      <div>
        <p>hello world</p>
      </div>
    );
  }
}
