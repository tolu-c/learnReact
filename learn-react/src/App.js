import Header from "./components/Header";
import Todo from "./components/Todo";
import Greeting from "./components/Greeting";
// import Meme from "./components/Meme";
// import ClassBased from "./components/ClassBased";
// import State from "./components/State";
// import Event from "./components/EventHandler";
// import Count from './components/Count'
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes",
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        {/* <h1>Is state important to know? {this.state.answer}</h1>
        <ClassBased /> */}
        <Todo />
        {/* <Meme />
        <State />
        <Event />
        <Count /> */}
      </div>
    );
  }
}
