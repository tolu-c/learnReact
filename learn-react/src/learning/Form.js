import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "green",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name
            <input
              type="text"
              placeholder="First Name"
              onChange={this.handleChange}
              name="firstName"
              value={this.state.firstName}
            />
          </label>
          <br />
          <label>
            Last Name
            <input
              type="text"
              placeholder="Last Name"
              onChange={this.handleChange}
              name="lastName"
              value={this.state.lastName}
            />
          </label>
          <br />
          <textarea defaultValue={"some default value"} onChange={this.handleChange} />
          <br />
          <label>
            <input
              name="isFriendly"
              onChange={this.handleChange}
              type="checkbox"
              checked={this.state.isFriendly}
            />
            Is Friendly?
          </label>
          <br />
          <label>
            Male
            <input
              name="gender"
              value="male"
              type="radio"
              onChange={this.handleChange}
              checked={this.state.gender === "male"}
            />
          </label>
          <br />
          <label>
            Female
            <input
              name="gender"
              value="female"
              type="radio"
              onChange={this.handleChange}
              checked={this.state.gender === "female"}
            />
          </label>
          <br />
          <label>
            Favourite Colour:
            <select
              value={this.state.favColor}
              onChange={this.handleChange}
              name="favColor"
            >
              <option value="green">green</option>
              <option value="yellow">yellow</option>
              <option value="red">red</option>
            </select>
          </label>
          <br />
          <button>Submit</button>
        </form>
        <p>
          Your name is {this.state.firstName}
          {this.state.lastName}
        </p>
        <p>Your gender is {this.state.gender}</p>
      </>
    );
  }
}
