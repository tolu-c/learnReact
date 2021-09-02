import React, { Component } from "react";

export default class EventHandler extends Component {
  render() {
    const myFunct = () => {
      console.log("I was clicked !");
    };
    return (
      <div>
        <p
          onMouseOver={() => {
            console.log("I was hovered over!");
          }}
        >
          Hover over me
        </p>
        <button onClick={myFunct}>click me</button>
      </div>
    );
  }
}
