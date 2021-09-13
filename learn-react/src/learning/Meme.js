import React, { Component } from "react";
import MemeHeader from "./MemeHeader";
import MemeGen from "./MemeGen";

export default class Meme extends Component {
  render() {
    return (
      <>
        <MemeHeader />
        <MemeGen />
      </>
    );
  }
}
