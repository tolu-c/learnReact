import React, { Component } from "react";
import FormComponents from "./FormComponents";

export default class FormII extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "empty",
      dietaryRestrictions: {
        vegan: false,
        kosher: false,
        lactoseFree: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked,
            },
          };
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return <FormComponents handleChange={this.handleChange} data={this.state} />;
  }
}
