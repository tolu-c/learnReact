import Header from "./components/Header";
import Todo from "./components/Todo";
import Greeting from "./components/Greeting";
// import Meme from "./components/Meme";
// import ClassBased from "./components/ClassBased";
// import State from "./components/State";
// import Event from "./components/EventHandler";
// import Count from './components/Count'
import LifeCycle from "./learning/LifeCycleMethods";
import Messages from "./learning/Messages";
import Logged from "./learning/Logged";
import Blah from "./learning/Blah";
// import Form from "./learning/Form";
import FormII from "./learning/FormII";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes",
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1500);
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
        <LifeCycle isLoading={this.state.isLoading} />
        <Messages />
        <Logged />
        <Blah />
        <FormII />
        {/* <Form /> */}
      </div>
    );
  }
}
