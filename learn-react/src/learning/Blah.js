import React, { Component } from "react";

export default class Blah extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      task: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    // fetch("https://swapi.co/api/people/1")
    fetch("http://127.0.0.1:8000/api/task-detail/3/")
      .then((response) => response.json())
      .then((data) => this.setState({ task: data, loading: false }));
  }
  render() {
    let text = this.state.loading ? "loading..." : this.state.task.title;
    return (
      <div>
        <p>{text}</p>
      </div>
    );
  }
}
